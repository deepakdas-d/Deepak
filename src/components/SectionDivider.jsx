'use client';

import { motion } from 'framer-motion';
import styles from './SectionDivider.module.css';

const SectionDivider = () => {
    return (
        <div className={styles.dividerContainer}>
            <motion.div
                className={styles.line}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            />
            <motion.div
                className={styles.diamond}
                initial={{ opacity: 0, scale: 0, rotate: 45 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 45 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
            />
            <motion.div
                className={styles.line}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            />
        </div>
    );
};

export default SectionDivider;
