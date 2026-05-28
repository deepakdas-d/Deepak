'use client';

import { useEffect, useState } from 'react';
import styles from './ScrollProgress.module.css';

const ScrollProgress = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const updateScroll = () => {
            const currentScroll = window.scrollY;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

            if (scrollHeight > 0) {
                setProgress((currentScroll / scrollHeight) * 100);
            }
        };

        window.addEventListener('scroll', updateScroll);
        return () => window.removeEventListener('scroll', updateScroll);
    }, []);

    return (
        <div className={styles.progressContainer}>
            <div
                className={styles.progressBar}
                style={{ width: `${progress}%` }}
            />
        </div>
    );
};

export default ScrollProgress;
