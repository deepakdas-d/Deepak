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
        description: "Built a cross-platform Flutter application for real-time booking and tracking of home healthcare services. I designed and developed secure RESTful APIs with JWT-based authentication and multi-role access control (admin, staff, user). To ensure high availability, I deployed the Django backend on AWS EC2 with an Nginx reverse proxy, configured SSL/TLS via Let’s Encrypt, and managed DNS/domain routing. I also implemented structured API exception handling, retry logic, and GetX-based reactive state management on the Flutter client, ensuring a seamless user experience even under poor network conditions."
    },
    {
        id: 2,
        title: "Helpdesk Ticket Management System",
        company: "Techfifo Innovations",
        role: "Full Stack Developer",
        duration: "April 2025 – Present",
        tech: "React.js | Django | GitHub Actions | Nginx",
        description: "Developed a modular React.js frontend with role-based workflows for comprehensive issue tracking and resolution management. By building a reusable component architecture with centralized state management, I achieved a clean separation of concerns and accelerated feature delivery. Furthermore, I automated the entire build and deployment process using GitHub Actions CI/CD pipelines, serving the production build efficiently via Nginx static hosting on a Linux environment."
    },
    {
        id: 3,
        title: "QliqCare – On-Demand Multi-Role Healthcare Platform",
        company: "QliqCare",
        role: "Backend Developer",
        duration: "Past Experience",
        link: "https://play.google.com/store/apps/details?id=com.qliqcare.app",
        tech: "Django | DRF | React.js | Flutter | AWS",
        description: "Architected and delivered a complete multi-role healthcare platform (caretaker, user, admin) end-to-end within just 3 months, acting as the sole architect and DevOps engineer. I built the backend using Django and DRF with role-based secure API design and a PostgreSQL database. To facilitate seamless remote consultations, I implemented WebSocket-based real-time communication for live chat, audio, and video call coordination. I also integrated the Razorpay payment gateway for secure advance and total payment processing, and deployed the entire infrastructure on AWS EC2 with Nginx, SSL/TLS, and Gunicorn."
    },
    {
        id: 4,
        title: "DIVYA CRAFT – Multi-Role Business Application",
        company: "Techfifo Innovations",
        role: "Full Stack Developer",
        duration: "April 2025 – Present",
        tech: "Flutter | Firebase | Kotlin",
        description: "Engineered comprehensive user, maker, and admin Flutter applications leveraging Firebase Authentication, Firestore, and Cloud Storage for real-time data synchronization. To drive user engagement, I integrated FCM push notifications and engineered native Android background services using Kotlin. Throughout the development lifecycle, I meticulously managed lifecycle-aware components, runtime permissions, and memory optimization to deliver a smooth experience across all operational roles."
    },
    {
        id: 5,
        title: "BRAND BUILDERS – Poster Creation Application",
        company: "Techfifo Innovations",
        role: "Full Stack Developer",
        duration: "April 2025 – Present",
        link: "https://play.google.com/store/apps/details?id=com.techfifo.photomerge",
        tech: "Flutter | Firebase | Play Store",
        description: "Built a robust cross-platform design and editing application utilizing Flutter, integrated with Firebase Auth, Firestore, and Cloud Storage for seamless cloud synchronization of user projects. I spearheaded the entire release cycle, managing app signing, generating optimized release builds (APK/AAB), and successfully publishing the application to the Google Play Store, resulting in a significantly expanded user base."
    },
    {
        id: 6,
        title: "AGRITA – IoT Motor Valve Controller",
        company: "Techfifo Innovations",
        role: "Full Stack Developer",
        duration: "April 2025 – Present",
        link: "https://play.google.com/store/apps/details?id=com.agrita.app",
        tech: "Flutter | Django REST Framework | IoT",
        description: "Developed an intuitive Flutter-based control interface designed for complex IoT device operations, fully integrated with a robust Django REST Framework backend. I successfully implemented highly secure device communication protocols and established real-time status monitoring mechanisms, providing users with a highly responsive, industrial-grade user interface for managing critical motor valve hardware."
    },
    {
        id: 7,
        title: "FineFoods – POS Billing System",
        company: "Freelance",
        role: "Flutter Developer",
        duration: "Freelance",
        tech: "Flutter | Firebase | SQLite | Bluetooth",
        description: "Created a comprehensive, custom POS billing application targeting both Android and Windows environments as an independent freelance developer. A key technical achievement was the successful implementation of Bluetooth thermal printer integration, enabling instant, reliable bill generation. Additionally, I architected robust modules for local inventory and stock management using SQLite, alongside real-time sales monitoring and transaction history analytics."
    },
    {
        id: 8,
        title: "Privtalk – Real-Time P2P Communication App",
        company: "Personal Project",
        role: "Flutter Developer",
        duration: "Personal",
        tech: "Flutter | WebRTC | Firebase | BLoC",
        description: "Conceptualized and independently built a real-time peer-to-peer communication application featuring secure messaging, high-quality audio, and video calling. I engineered a robust WebRTC signaling architecture backed by Firestore and integrated FCM to ensure reliable incoming call push notifications. To guarantee session stability, I implemented sophisticated background call handling, comprehensive lifecycle management, and automatic reconnect logic on Android, utilizing the BLoC architecture for scalable and predictable state management."
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

                        <p className={styles.descriptionText}>
                            {exp.description}
                        </p>
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
