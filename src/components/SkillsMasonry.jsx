'use client';

import { useEffect, useLayoutEffect, useMemo, useRef, useState, useCallback, useSyncExternalStore } from 'react';
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

const TILE_COLORS = [
    { bg: '#ffffff', text: '#000000' },
    { bg: '#f5f5f5', text: '#000000' },
    { bg: '#e5e5e5', text: '#000000' },
    { bg: '#000000', text: '#ffffff' },
    { bg: '#111111', text: '#ffffff' },
    { bg: '#222222', text: '#ffffff' },
];

const SkillsMasonry = ({
    skills = [],
    initialCount = 7,
    ease = 'power3.out',
    stagger = 0.04,
    animateFrom = 'bottom',
    blurToFocus = true,
}) => {
    const [containerRef, { width }] = useMeasure();

    const columns = useMemo(() => {
        if (!width) return 2;
        if (width >= 800) return 5;
        if (width >= 500) return 4;
        if (width >= 300) return 3;
        return 2;
    }, [width]);
    const [visibleCount, setVisibleCount] = useState(initialCount);
    const hasMounted = useRef(false);
    const prevCount = useRef(initialCount);

    /* ──── IntersectionObserver to reveal more rows on scroll ──── */
    const sentinelRef = useRef(null);

    useEffect(() => {
        const el = sentinelRef.current;
        if (!el) return;

        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisibleCount(prev => {
                        const next = Math.min(prev + columns * 2, skills.length);
                        return next;
                    });
                }
            },
            { rootMargin: '200px' }
        );
        io.observe(el);
        return () => io.disconnect();
    }, [columns, skills.length]);

    /* ──── layout computation (masonry grid for pill tiles) ──── */
    const GAP = 10;
    const ROW_HEIGHT = 52;

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
                color: TILE_COLORS[i % TILE_COLORS.length],
            };
        });
    }, [columns, skills, visibleCount, width]);

    /* total container height */
    const containerHeight = useMemo(() => {
        if (!grid.length) return 0;
        return Math.max(...grid.map(g => g.y + g.h)) + 8;
    }, [grid]);

    /* ──── GSAP entrance / layout animation ──── */
    const getInitialPosition = useCallback(
        (item) => {
            const rect = containerRef.current?.getBoundingClientRect();
            if (!rect) return { x: item.x, y: item.y };

            let dir = animateFrom;
            if (animateFrom === 'random') {
                const dirs = ['top', 'bottom', 'left', 'right'];
                dir = dirs[Math.floor(Math.random() * dirs.length)];
            }

            switch (dir) {
                case 'top': return { x: item.x, y: -120 };
                case 'bottom': return { x: item.x, y: rect.height + 120 };
                case 'left': return { x: -200, y: item.y };
                case 'right': return { x: rect.width + 200, y: item.y };
                case 'center': return { x: rect.width / 2 - item.w / 2, y: rect.height / 2 - item.h / 2 };
                default: return { x: item.x, y: item.y + 80 };
            }
        },
        [animateFrom, containerRef]
    );

    useLayoutEffect(() => {
        grid.forEach((item, index) => {
            const selector = `[data-skill="${item.id}"]`;
            const target = { x: item.x, y: item.y, width: item.w, height: item.h };

            const isNewItem = index >= prevCount.current;

            if (!hasMounted.current || isNewItem) {
                const init = getInitialPosition(item);
                gsap.fromTo(selector,
                    {
                        opacity: 0,
                        x: init.x,
                        y: init.y,
                        width: item.w,
                        height: item.h,
                        ...(blurToFocus && { filter: 'blur(8px)' }),
                    },
                    {
                        opacity: 1,
                        ...target,
                        ...(blurToFocus && { filter: 'blur(0px)' }),
                        duration: 0.7,
                        ease,
                        delay: (isNewItem ? index - prevCount.current : index) * stagger,
                    }
                );
            } else {
                gsap.to(selector, { ...target, duration: 0.5, ease, overwrite: 'auto' });
            }
        });

        hasMounted.current = true;
        prevCount.current = visibleCount;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [grid, blurToFocus, ease, stagger]);

    /* ──── hover handlers ──── */
    const onEnter = (e) => {
        gsap.to(e.currentTarget, { scale: 1.08, duration: 0.25, ease: 'power2.out' });
    };
    const onLeave = (e) => {
        gsap.to(e.currentTarget, { scale: 1, duration: 0.25, ease: 'power2.out' });
    };

    return (
        <div className="skills-masonry-wrapper">
            <div ref={containerRef} className="skills-masonry-grid" style={{ height: containerHeight }}>
                {grid.map(item => (
                    <div
                        key={item.id}
                        data-skill={item.id}
                        className="skill-tile"
                        onMouseEnter={onEnter}
                        onMouseLeave={onLeave}
                        style={{
                            backgroundColor: item.color.bg,
                            color: item.color.text,
                            border: item.color.bg === '#000000' || item.color.bg === '#111111' || item.color.bg === '#222222' ? 'none' : '1px solid #e5e5e5',
                        }}
                    >
                        <span className="skill-tile-label">{item.label}</span>
                    </div>
                ))}
            </div>

            {/* sentinel triggers more items on scroll */}
            {visibleCount < skills.length && (
                <div ref={sentinelRef} className="skills-masonry-sentinel" />
            )}
        </div>
    );
};

export default SkillsMasonry;
