'use client';

import { useState, useRef, useEffect, useLayoutEffect, useCallback } from 'react';
import { FiSmartphone, FiGlobe, FiServer, FiCloud, FiStar } from 'react-icons/fi';
import { gsap } from 'gsap';
import './SkillsTabbed.css';

/* ═══════ Skill data with star ratings ═══════ */
const CATEGORIES = [
    {
        key: 'mobile',
        label: 'Mobile',
        Icon: FiSmartphone,
        skills: [
            { name: 'Flutter', stars: 5 },
            { name: 'Dart', stars: 5 },
            { name: 'Android', stars: 4 },
            { name: 'Windows', stars: 3 },
            { name: 'Play Store', stars: 5 },
            { name: 'Kotlin', stars: 3 },
            { name: 'GetX', stars: 5 },
            { name: 'Provider', stars: 4 },
            { name: 'BLoC', stars: 4 },
            { name: 'Clean Architecture', stars: 4 },
            { name: 'Firebase Auth', stars: 5 },
            { name: 'Firestore', stars: 5 },
            { name: 'Cloud Storage', stars: 4 },
            { name: 'FCM', stars: 4 },
            { name: 'Razorpay', stars: 4 },
            { name: 'Maps API', stars: 4 },
        ],
    },
    {
        key: 'web',
        label: 'Web',
        Icon: FiGlobe,
        skills: [
            { name: 'React.js', stars: 4 },
            { name: 'Next.js', stars: 4 },
            { name: 'TypeScript', stars: 3 },
            { name: 'Admin Portals', stars: 4 },
            { name: 'UI/UX', stars: 4 },
        ],
    },
    {
        key: 'backend',
        label: 'Backend',
        Icon: FiServer,
        skills: [
            { name: 'Django', stars: 5 },
            { name: 'DRF', stars: 5 },
            { name: 'FastAPI', stars: 4 },
            { name: 'REST APIs', stars: 5 },
            { name: 'WebSockets', stars: 4 },
            { name: 'WebRTC', stars: 4 },
            { name: 'PostgreSQL', stars: 4 },
            { name: 'SQLite', stars: 4 },
        ],
    },
    {
        key: 'cloud',
        label: 'Cloud & DevOps',
        Icon: FiCloud,
        skills: [
            { name: 'AWS EC2', stars: 4 },
            { name: 'Nginx', stars: 4 },
            { name: 'Gunicorn', stars: 4 },
            { name: 'SSL/TLS', stars: 4 },
            { name: 'GitHub Actions', stars: 4 },
            { name: 'Git', stars: 5 },
        ],
    },
];

/* ═══════ Star Rating Component ═══════ */
const StarRating = ({ count }) => (
    <div className="skill-stars">
        {Array.from({ length: 5 }, (_, i) => (
            <FiStar
                key={i}
                className={`skill-star ${i < count ? 'filled' : ''}`}
                fill={i < count ? 'currentColor' : 'none'}
            />
        ))}
    </div>
);

/* ═══════ Main Component ═══════ */
const SkillsTabbed = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const tabBarRef = useRef(null);
    const tabRefs = useRef([]);
    const indicatorRef = useRef(null);
    const contentRef = useRef(null);
    const [inView, setInView] = useState(false);

    /* ── IntersectionObserver: trigger animation on scroll ── */
    useEffect(() => {
        const el = contentRef.current;
        if (!el) return;
        const io = new IntersectionObserver(
            ([entry]) => setInView(entry.isIntersecting),
            { rootMargin: '0px 0px -60px 0px' }
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    /* ── Slide the indicator pill ── */
    const updateIndicator = useCallback(() => {
        const tab = tabRefs.current[activeIndex];
        const bar = tabBarRef.current;
        if (!tab || !bar) return;

        const barRect = bar.getBoundingClientRect();
        const tabRect = tab.getBoundingClientRect();
        const indicator = indicatorRef.current;
        if (!indicator) return;

        indicator.style.width = `${tabRect.width}px`;
        indicator.style.transform = `translateX(${tabRect.left - barRect.left}px)`;
    }, [activeIndex]);

    useLayoutEffect(() => {
        updateIndicator();
    }, [activeIndex, updateIndicator]);

    /* Recalc indicator on resize */
    useEffect(() => {
        const handleResize = () => updateIndicator();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [updateIndicator]);

    /* ── GSAP entrance for skill cards ── */
    useLayoutEffect(() => {
        if (!inView || !contentRef.current) return;

        const cards = contentRef.current.querySelectorAll('.skill-card');
        gsap.fromTo(
            cards,
            {
                opacity: 0,
                y: 24,
                scale: 0.95,
                filter: 'blur(4px)',
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                filter: 'blur(0px)',
                duration: 0.5,
                ease: 'power3.out',
                stagger: 0.04,
                overwrite: 'auto',
            }
        );
    }, [activeIndex, inView]);

    const activeCategory = CATEGORIES[activeIndex];

    return (
        <div className="skills-tabbed">
            {/* Tab Bar */}
            <div ref={tabBarRef} className="skills-tab-bar">
                <div ref={indicatorRef} className="skills-tab-indicator" />
                {CATEGORIES.map((cat, i) => {
                    const IconComp = cat.Icon;
                    return (
                        <button
                            key={cat.key}
                            ref={(el) => (tabRefs.current[i] = el)}
                            className={`skills-tab-btn ${i === activeIndex ? 'active' : ''}`}
                            onClick={() => setActiveIndex(i)}
                            aria-label={cat.label}
                        >
                            <IconComp />
                            <span className="skills-tab-label">{cat.label}</span>
                            <span className="skills-tab-count">{cat.skills.length}</span>
                        </button>
                    );
                })}
            </div>

            {/* Skills Grid */}
            <div ref={contentRef} className="skills-tab-content">
                <div className="skills-grid" key={activeCategory.key}>
                    {activeCategory.skills.map((skill) => (
                        <div key={skill.name} className="skill-card">
                            <span className="skill-card-name">{skill.name}</span>
                            <StarRating count={skill.stars} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkillsTabbed;
