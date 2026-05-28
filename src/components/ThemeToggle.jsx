'use client';

import { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import './ThemeToggle.css';

const ThemeToggle = () => {
    const [mounted, setMounted] = useState(false);
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        // Use a microtask to avoid synchronous setState in effect
        Promise.resolve().then(() => {
            const storedTheme = localStorage.getItem('theme') ||
                (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
            setTheme(storedTheme);
            document.documentElement.setAttribute('data-theme', storedTheme);
            setMounted(true);
        });
    }, []);

    if (!mounted) return null;

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
            <div className="theme-toggle-track">
                <div className={`theme-toggle-thumb ${theme}`}>
                    {theme === 'light' ? <FiSun /> : <FiMoon />}
                </div>
            </div>
        </button>
    );
};

export default ThemeToggle;
