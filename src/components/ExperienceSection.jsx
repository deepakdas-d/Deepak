'use client';

import React, { useState } from 'react';
import styles from './ExperienceSection.module.css';

const experiences = [
    {
        id: 1,
        title: "QLIQ – Home Nurse Care Platform",
        company: "Techfifo Innovations",
        role: "Full Stack Developer",
        duration: "April 2025 – Present",
        tech: "Flutter | Django | AWS EC2 | Nginx",
        points: [
            "Built a cross-platform Flutter application for real-time booking and tracking of home healthcare services.",
            "Designed and developed secure RESTful APIs with JWT-based authentication and multi-role access control (admin, staff, user).",
            "Deployed Django backend on AWS EC2 with Nginx reverse proxy, configured SSL/TLS via Let’s Encrypt, and managed DNS/domain routing.",
            "Managed Linux server environment including systemd service configuration, environment variables, and Gunicorn process management.",
            "Implemented structured API exception handling, retry logic, and GetX-based reactive state management on the Flutter client."
        ]
    },
    {
        id: 2,
        title: "Helpdesk Ticket Management System",
        company: "Techfifo Innovations",
        role: "Full Stack Developer",
        duration: "April 2025 – Present",
        tech: "React.js | Django | GitHub Actions | Nginx",
        points: [
            "Developed a modular React.js frontend with role-based workflows for issue tracking and resolution management.",
            "Built reusable component architecture with centralized state management and clean separation of concerns.",
            "Automated build and deployment using GitHub Actions CI/CD; served production build via Nginx static hosting on Linux."
        ]
    },
    {
        id: 3,
        title: "QliqCare – On-Demand Multi-Role Healthcare Platform",
        company: "QliqCare",
        role: "Backend Developer",
        duration: "Past Experience",
        link: "https://play.google.com/store/apps/details?id=com.qliqcare.app",
        tech: "Django | DRF | React.js | Flutter | AWS",
        points: [
            "Architected and delivered a complete multi-role platform (caretaker, user, admin) end-to-end within 3 months as sole architect and DevOps engineer.",
            "Built backend using Django and DRF with role-based secure API design, structured endpoint organization, and PostgreSQL database.",
            "Implemented WebSocket-based real-time communication for live chat, audio, and video call coordination.",
            "Integrated Razorpay payment gateway for advance and total payment processing workflows.",
            "Built Superadmin Dashboard using React.js covering booking management, complaint handling, and reporting modules.",
            "Handled full server deployment: AWS EC2 provisioning, Nginx reverse proxy, SSL/TLS, Gunicorn setup, and production hardening."
        ]
    },
    {
        id: 4,
        title: "DIVYA CRAFT – Multi-Role Business Application",
        company: "Techfifo Innovations",
        role: "Full Stack Developer",
        duration: "April 2025 – Present",
        tech: "Flutter | Firebase | Kotlin",
        points: [
            "Developed user, maker, and admin Flutter apps with Firebase Authentication, Firestore, and Cloud Storage.",
            "Integrated FCM push notifications and native Android background services using Kotlin.",
            "Managed lifecycle-aware components, runtime permissions, and memory optimization across all roles."
        ]
    },
    {
        id: 5,
        title: "BRAND BUILDERS – Poster Creation Application",
        company: "Techfifo Innovations",
        role: "Full Stack Developer",
        duration: "April 2025 – Present",
        link: "https://play.google.com/store/apps/details?id=com.techfifo.photomerge",
        tech: "Flutter | Firebase | Play Store",
        points: [
            "Built a cross-platform design and editing app using Flutter with Firebase Auth, Firestore, and Cloud Storage.",
            "Managed app signing, generated release builds (APK/AAB), and published to Google Play Store."
        ]
    },
    {
        id: 6,
        title: "AGRITA – IoT Motor Valve Controller",
        company: "Techfifo Innovations",
        role: "Full Stack Developer",
        duration: "April 2025 – Present",
        link: "https://play.google.com/store/apps/details?id=com.agrita.app",
        tech: "Flutter | Django REST Framework | IoT",
        points: [
            "Developed a Flutter-based control interface for IoT device operations integrated with a Django REST Framework backend.",
            "Implemented secure device communication protocols and real-time status monitoring with a responsive industrial UI."
        ]
    },
    {
        id: 7,
        title: "FineFoods – POS Billing System",
        company: "Freelance",
        role: "Flutter Developer",
        duration: "Freelance",
        tech: "Flutter | Firebase | SQLite | Bluetooth",
        points: [
            "Developed a custom POS billing application for Android and Windows as an independent freelance engagement.",
            "Implemented Bluetooth thermal printer integration for instant bill generation and printing.",
            "Built inventory and stock management, sales monitoring, and transaction history modules."
        ]
    },
    {
        id: 8,
        title: "Privtalk – Real-Time P2P Communication App",
        company: "Personal Project",
        role: "Flutter Developer",
        duration: "Personal",
        tech: "Flutter | WebRTC | Firebase | BLoC",
        points: [
            "Independently built a real-time P2P communication app featuring messaging, audio, and video calling using WebRTC and Firebase.",
            "Built WebRTC signaling architecture using Firestore; integrated FCM for incoming call push notifications.",
            "Implemented background call handling, lifecycle management, reconnect logic, and WebRTC session stability on Android.",
            "Used BLoC architecture for scalable state management and go router for navigation."
        ]
    }
];

export default function ExperienceSection() {
    const [isExpanded, setIsExpanded] = useState(false);

    // Take the first 3 for initial view (1 app, 1 react, 1 backend), or all if expanded
    const visibleExperiences = isExpanded ? experiences : experiences.slice(0, 3);

    return (
        <div className={styles.container}>
            <div className={styles.timeline}>
                {visibleExperiences.map((exp) => (
                    <div key={exp.id} className={styles.experienceCard}>
                        <div className={styles.header}>
                            <div className={styles.titleWrapper}>
                                <h3 className={styles.title}>
                                    {exp.link ? (
                                        <a href={exp.link} target="_blank" rel="noopener noreferrer" className={styles.titleLink}>
                                            {exp.title} <span className={styles.linkArrow}>↗</span>
                                        </a>
                                    ) : (
                                        exp.title
                                    )}
                                </h3>
                                <span className={styles.duration}>{exp.duration}</span>
                            </div>
                            <div className={styles.companyRole}>
                                <span className={styles.company}>{exp.company}</span>
                                <span className={styles.dot}>•</span>
                                <span className={styles.role}>{exp.role}</span>
                            </div>
                        </div>

                        <div className={styles.techWrapper}>
                            {exp.tech.split('|').map((t, idx) => (
                                <span key={idx} className={styles.techPill}>{t.trim()}</span>
                            ))}
                        </div>

                        <ul className={styles.pointsList}>
                            {exp.points.map((pt, idx) => (
                                <li key={idx}>{pt}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className={styles.toggleWrapper}>
                <button
                    className={styles.toggleBtn}
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    {isExpanded ? 'Show Less' : 'Show More +'}
                </button>
            </div>
        </div>
    );
}
