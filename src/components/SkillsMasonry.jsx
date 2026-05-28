'use client';

import { useEffect, useLayoutEffect, useMemo, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import './SkillsMasonry.css';

/* ──────── container size hook ──────── */
const useMeasure = () => {
    const ref = useRef(null);
    const [size, setSize] = useState({ width: 0, height: 0 });

    useLayoutEffect(() => {
        if (!ref.current) return;
        const ro = new ResizeObserver(([entry]) => {
            const { width, height } = entry.contentRect;
            setSize({ width, height });
        });
        ro.observe(ref.current);
        return () => ro.disconnect();
    }, []);

    return [ref, size];
};

/* ──────── Sophisticated monochrome palette ──────── */
const TILE_PALETTE = [
    { bg: '#0a0a0a', text: '#fafafa' },   // near-black
    { bg: '#f7f7f7', text: '#1a1a1a' },   // off-white
    { bg: '#1c1c1c', text: '#e5e5e5' },   // charcoal
    { bg: '#ededed', text: '#222222' },    // silver
    { bg: '#2a2a2a', text: '#d4d4d4' },   // dark slate
    { bg: '#fafafa', text: '#0a0a0a' },   // pure white
    { bg: '#3a3a3a', text: '#c8c8c8' },   // warm dark
    { bg: '#e0e0e0', text: '#1a1a1a' },   // light gray
];

const isLightBg = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return (r * 299 + g * 587 + b * 114) / 1000 > 128;
};

const SkillsMasonry = ({
    skills = [],
    initialCount = 50,
    ease = 'power4.out',
    stagger = 0.06,
    animateFrom = 'bottom',
    blurToFocus = true,
}) => {
    const [containerRef, { width }] = useMeasure();

    const columns = useMemo(() => {
        if (!width) return 2;
        if (width >= 800) return 4;
        if (width >= 500) return 3;
        return 2;
    }, [width]);

    const [visibleCount, setVisibleCount] = useState(initialCount);
    const hasMounted = useRef(false);
    const prevCount = useRef(initialCount);
    const [inView, setInView] = useState(false);

    /* ──── IntersectionObserver: trigger animation when scrolled into view ──── */
    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    io.disconnect();
                }
            },
            { rootMargin: '0px 0px -80px 0px' }
        );
        io.observe(el);
        return () => io.disconnect();
    }, [containerRef]);

    /* ──── Sentinel: reveal more rows on scroll ──── */
    const sentinelRef = useRef(null);

    useEffect(() => {
        const el = sentinelRef.current;
        if (!el) return;

        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisibleCount(prev => Math.min(prev + columns * 2, skills.length));
                }
            },
            { rootMargin: '200px' }
        );
        io.observe(el);
        return () => io.disconnect();
    }, [columns, skills.length]);

    /* ──── Layout computation ──── */
    const GAP = 8;
    const ROW_HEIGHT = 46;

    const grid = useMemo(() => {
        if (!width) return [];

        const colWidth = (width - GAP * (columns - 1)) / columns;
        const colHeights = new Array(columns).fill(0);

        return skills.slice(0, visibleCount).map((skill, i) => {
            const col = colHeights.indexOf(Math.min(...colHeights));
            const x = col * (colWidth + GAP);
            const y = colHeights[col];
            colHeights[col] += ROW_HEIGHT + GAP;

            return {
                id: `skill-${i}`,
                label: skill,
                x,
                y,
                w: colWidth,
                h: ROW_HEIGHT,
                color: TILE_PALETTE[i % TILE_PALETTE.length],
            };
        });
    }, [columns, skills, visibleCount, width]);

    /* total container height */
    const containerHeight = useMemo(() => {
        if (!grid.length) return 0;
        return Math.max(...grid.map(g => g.y + g.h)) + 4;
    }, [grid]);

    /* ──── GSAP entrance animation ──── */
    const getInitialOffset = useCallback(
        (item) => {
            let dir = animateFrom;
            if (animateFrom === 'random') {
                const dirs = ['top', 'bottom', 'left', 'right'];
                dir = dirs[Math.floor(Math.random() * dirs.length)];
            }

            switch (dir) {
                case 'top': return { x: item.x, y: item.y - 40 };
                case 'left': return { x: item.x - 60, y: item.y };
                case 'right': return { x: item.x + 60, y: item.y };
                case 'center': return { x: item.x, y: item.y };
                case 'bottom':
                default:
                    return { x: item.x, y: item.y + 40 };
            }
        },
        [animateFrom]
    );

    useLayoutEffect(() => {
        if (!inView) return;

        grid.forEach((item, index) => {
            const selector = `[data-skill="${item.id}"]`;
            const target = { x: item.x, y: item.y, width: item.w, height: item.h };

            const isNewItem = index >= prevCount.current;

            if (!hasMounted.current || isNewItem) {
                const init = getInitialOffset(item);
                gsap.fromTo(selector,
                    {
                        opacity: 0,
                        x: init.x,
                        y: init.y,
                        width: item.w,
                        height: item.h,
                        scale: 0.92,
                        ...(blurToFocus && { filter: 'blur(6px)' }),
                    },
                    {
                        opacity: 1,
                        scale: 1,
                        ...target,
                        ...(blurToFocus && { filter: 'blur(0px)' }),
                        duration: 0.8,
                        ease,
                        delay: (isNewItem ? index - prevCount.current : index) * stagger,
                    }
                );
            } else {
                gsap.to(selector, { ...target, duration: 0.5, ease: 'power2.out', overwrite: 'auto' });
            }
        });

        hasMounted.current = true;
        prevCount.current = visibleCount;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [grid, blurToFocus, ease, stagger, inView]);

    return (
        <div className="skills-masonry-wrapper">
            <div ref={containerRef} className="skills-masonry-grid" style={{ height: containerHeight }}>
                {grid.map(item => {
                    const light = isLightBg(item.color.bg);
                    return (
                        <div
                            key={item.id}
                            data-skill={item.id}
                            className="skill-tile"
                            style={{
                                opacity: hasMounted.current ? undefined : 0,
                            }}
                        >
                            <div
                                className="skill-tile-inner"
                                style={{
                                    backgroundColor: item.color.bg,
                                    color: item.color.text,
                                    border: light
                                        ? '1px solid rgba(0, 0, 0, 0.08)'
                                        : '1px solid rgba(255, 255, 255, 0.06)',
                                }}
                            >
                                <span className="skill-tile-label">{item.label}</span>
                            </div>
                        </div>
                    );
                })}
            </div>

            {visibleCount < skills.length && (
                <div ref={sentinelRef} className="skills-masonry-sentinel" />
            )}
        </div>
    );
};

export default SkillsMasonry;
