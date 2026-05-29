'use client';
import { useRef, useEffect, useCallback, useMemo, useState } from 'react';
import { gsap } from 'gsap';

import './DotGrid.css';

const throttle = (func, limit) => {
    let lastCall = 0;
    return function (...args) {
        const now = performance.now();
        if (now - lastCall >= limit) {
            lastCall = now;
            func.apply(this, args);
        }
    };
};

function parseColor(color) {
    if (typeof window === 'undefined') return { r: 0, g: 0, b: 0, a: 1 };

    let finalColor = color.trim();

    // Resolve CSS variables
    if (finalColor.startsWith('var(')) {
        const varName = finalColor.match(/var\((--[^)]+)\)/)?.[1];
        if (varName) {
            const resolved = getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
            if (resolved) finalColor = resolved;
        }
    }

    // Handle hex
    if (finalColor.startsWith('#')) {
        const m = finalColor.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
        if (m) {
            return {
                r: parseInt(m[1], 16),
                g: parseInt(m[2], 16),
                b: parseInt(m[3], 16),
                a: 1
            };
        }
    }

    // Handle rgb/rgba
    const rgbaMatch = finalColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
    if (rgbaMatch) {
        return {
            r: parseInt(rgbaMatch[1], 10),
            g: parseInt(rgbaMatch[2], 10),
            b: parseInt(rgbaMatch[3], 10),
            a: rgbaMatch[4] !== undefined ? parseFloat(rgbaMatch[4]) : 1
        };
    }

    // If it's a known color name or fails, return a sensible default based on current theme
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    return isDark ? { r: 255, g: 255, b: 255, a: 0.1 } : { r: 0, g: 0, b: 0, a: 0.1 };
}

const DotGrid = ({
    dotSize = 16,
    gap = 32,
    baseColor = 'var(--dot-base)',
    activeColor = 'var(--dot-active)',
    proximity = 150,
    speedTrigger = 100,
    shockRadius = 250,
    shockStrength = 5,
    maxSpeed = 5000,
    resistance = 750,
    returnDuration = 1.5,
    className = '',
    style
}) => {
    const wrapperRef = useRef(null);
    const canvasRef = useRef(null);
    const dotsRef = useRef([]);
    const pointerRef = useRef({
        x: 0,
        y: 0,
        vx: 0,
        vy: 0,
        speed: 0,
        lastTime: 0,
        lastX: 0,
        lastY: 0
    });

    const [resolvedBase, setResolvedBase] = useState({ r: 0, g: 0, b: 0, a: 1, raw: baseColor });
    const [resolvedActive, setResolvedActive] = useState({ r: 0, g: 0, b: 0, a: 1, raw: activeColor });

    useEffect(() => {
        const resolve = () => {
            setResolvedBase(prev => ({ ...parseColor(baseColor), raw: baseColor }));
            setResolvedActive(prev => ({ ...parseColor(activeColor), raw: activeColor }));
        };

        // Initial resolve with a delay to ensure CSS variables are ready
        const timer = setTimeout(resolve, 150);
        // Secondary resolve to catch late-loading CSS (e.g. Tailwind CDN, fonts)
        const timer2 = setTimeout(resolve, 500);

        // Listen for theme changes as well
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
                    // Small delay to let CSS transitions start/finish if needed
                    setTimeout(resolve, 50);
                }
            });
        });

        observer.observe(document.documentElement, { attributes: true });

        return () => {
            clearTimeout(timer);
            clearTimeout(timer2);
            observer.disconnect();
        };
    }, [baseColor, activeColor]);

    const baseRgb = resolvedBase;
    const activeRgb = resolvedActive;

    const circlePath = useMemo(() => {
        if (typeof window === 'undefined' || !window.Path2D) return null;

        const p = new window.Path2D();
        p.arc(0, 0, dotSize / 2, 0, Math.PI * 2);
        return p;
    }, [dotSize]);

    const buildGrid = useCallback(() => {
        const wrap = wrapperRef.current;
        const canvas = canvasRef.current;
        if (!wrap || !canvas) return;

        const { width, height } = wrap.getBoundingClientRect();
        const dpr = window.devicePixelRatio || 1;

        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        const ctx = canvas.getContext('2d');
        if (ctx) ctx.scale(dpr, dpr);

        const cols = Math.floor((width + gap) / (dotSize + gap));
        const rows = Math.floor((height + gap) / (dotSize + gap));
        const cell = dotSize + gap;

        const gridW = cell * cols - gap;
        const gridH = cell * rows - gap;

        const extraX = width - gridW;
        const extraY = height - gridH;

        const startX = extraX / 2 + dotSize / 2;
        const startY = extraY / 2 + dotSize / 2;

        const dots = [];
        for (let y = 0; y < rows; y++) {
            for (let x = 0; x < cols; x++) {
                const cx = startX + x * cell;
                const cy = startY + y * cell;
                dots.push({ cx, cy, xOffset: 0, yOffset: 0, _inertiaApplied: false });
            }
        }
        dotsRef.current = dots;
    }, [dotSize, gap]);

    useEffect(() => {
        if (!circlePath) return;

        let rafId;
        const proxSq = proximity * proximity;

        const draw = () => {
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const { x: px, y: py } = pointerRef.current;

            for (const dot of dotsRef.current) {
                const ox = dot.cx + dot.xOffset;
                const oy = dot.cy + dot.yOffset;
                const dx = dot.cx - px;
                const dy = dot.cy - py;
                const dsq = dx * dx + dy * dy;

                let style = baseRgb.raw;
                if (dsq <= proxSq) {
                    const dist = Math.sqrt(dsq);
                    const t = 1 - dist / proximity;
                    const r = Math.round(baseRgb.r + (activeRgb.r - baseRgb.r) * t);
                    const g = Math.round(baseRgb.g + (activeRgb.g - baseRgb.g) * t);
                    const b = Math.round(baseRgb.b + (activeRgb.b - baseRgb.b) * t);
                    const a = baseRgb.a + (activeRgb.a - baseRgb.a) * t;
                    style = `rgba(${r},${g},${b},${a})`;
                }

                ctx.save();
                ctx.translate(ox, oy);
                ctx.fillStyle = style.startsWith('var(') ? `rgba(${baseRgb.r},${baseRgb.g},${baseRgb.b},${baseRgb.a})` : style;
                ctx.fill(circlePath);
                ctx.restore();
            }

            rafId = requestAnimationFrame(draw);
        };

        draw();
        return () => cancelAnimationFrame(rafId);
    }, [proximity, baseColor, activeRgb, baseRgb, circlePath]);

    useEffect(() => {
        buildGrid();
        let ro = null;
        if ('ResizeObserver' in window) {
            ro = new ResizeObserver(buildGrid);
            wrapperRef.current && ro.observe(wrapperRef.current);
        } else {
            window.addEventListener('resize', buildGrid);
        }
        return () => {
            if (ro) ro.disconnect();
            else window.removeEventListener('resize', buildGrid);
        };
    }, [buildGrid]);

    useEffect(() => {
        const onMove = e => {
            const now = performance.now();
            const pr = pointerRef.current;
            const dt = pr.lastTime ? now - pr.lastTime : 16;
            const dx = e.clientX - pr.lastX;
            const dy = e.clientY - pr.lastY;
            let vx = (dx / dt) * 1000;
            let vy = (dy / dt) * 1000;
            let speed = Math.hypot(vx, vy);
            if (speed > maxSpeed) {
                const scale = maxSpeed / speed;
                vx *= scale;
                vy *= scale;
                speed = maxSpeed;
            }
            pr.lastTime = now;
            pr.lastX = e.clientX;
            pr.lastY = e.clientY;
            pr.vx = vx;
            pr.vy = vy;
            pr.speed = speed;

            const rect = canvasRef.current.getBoundingClientRect();
            pr.x = e.clientX - rect.left;
            pr.y = e.clientY - rect.top;

            for (const dot of dotsRef.current) {
                const dist = Math.hypot(dot.cx - pr.x, dot.cy - pr.y);
                if (speed > speedTrigger && dist < proximity && !dot._inertiaApplied) {
                    dot._inertiaApplied = true;
                    gsap.killTweensOf(dot);
                    const pushX = dot.cx - pr.x + vx * 0.005;
                    const pushY = dot.cy - pr.y + vy * 0.005;

                    gsap.to(dot, {
                        xOffset: pushX,
                        yOffset: pushY,
                        duration: 0.3,
                        ease: 'power2.out',
                        onComplete: () => {
                            gsap.to(dot, {
                                xOffset: 0,
                                yOffset: 0,
                                duration: returnDuration,
                                ease: 'elastic.out(1,0.75)'
                            });
                            dot._inertiaApplied = false;
                        }
                    });
                }
            }
        };

        const onClick = e => {
            const rect = canvasRef.current.getBoundingClientRect();
            const cx = e.clientX - rect.left;
            const cy = e.clientY - rect.top;
            for (const dot of dotsRef.current) {
                const dist = Math.hypot(dot.cx - cx, dot.cy - cy);
                if (dist < shockRadius && !dot._inertiaApplied) {
                    dot._inertiaApplied = true;
                    gsap.killTweensOf(dot);
                    const falloff = Math.max(0, 1 - dist / shockRadius);
                    const pushX = (dot.cx - cx) * shockStrength * falloff;
                    const pushY = (dot.cy - cy) * shockStrength * falloff;

                    gsap.to(dot, {
                        xOffset: pushX,
                        yOffset: pushY,
                        duration: 0.3,
                        ease: 'power2.out',
                        onComplete: () => {
                            gsap.to(dot, {
                                xOffset: 0,
                                yOffset: 0,
                                duration: returnDuration,
                                ease: 'elastic.out(1,0.75)'
                            });
                            dot._inertiaApplied = false;
                        }
                    });
                }
            }
        };

        const throttledMove = throttle(onMove, 50);
        window.addEventListener('mousemove', throttledMove, { passive: true });
        window.addEventListener('click', onClick);

        return () => {
            window.removeEventListener('mousemove', throttledMove);
            window.removeEventListener('click', onClick);
        };
    }, [maxSpeed, speedTrigger, proximity, resistance, returnDuration, shockRadius, shockStrength]);

    return (
        <section className={`dot-grid ${className}`} style={style}>
            <div ref={wrapperRef} className="dot-grid__wrap">
                <canvas ref={canvasRef} className="dot-grid__canvas" />
            </div>
        </section>
    );
};

export default DotGrid;
