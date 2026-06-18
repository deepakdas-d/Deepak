import React from 'react';
import Image from 'next/image';
import DecryptedText from '../../components/DecryptedText';
import SkillsTabbed from '../../components/SkillsTabbed';
import SectionDivider from '../../components/SectionDivider';
import ThemeToggle from '../../components/ThemeToggle';
import CardNav from '../../components/CardNav';
import styles from '../home.module.css';

export const metadata = {
  title: "About Deepak Das – Best Flutter, Python & Django Developer in Kerala",
  description: "Learn about Deepak Das (deepakdas), the best Flutter & Full Stack Developer from Palakkad, Kerala. Expert in Flutter, Python, Django, React, Node.js & DevOps. Building cross-platform apps and scalable backend systems.",
  alternates: {
    canonical: 'https://www.deepakdas.online/about',
  },
  openGraph: {
    title: "About Deepak Das – Best Flutter, Python & Django Developer in Kerala",
    description: "Deepak Das (deepakdas) — Best Flutter, Python, Django & Full Stack Developer from Palakkad, Kerala. Cross-platform apps, REST APIs, cloud deployments.",
    url: "https://www.deepakdas.online/about",
    images: [{ url: "https://www.deepakdas.online/og-image.jpg", width: 1200, height: 630, alt: "Deepak Das - Best Flutter & Full Stack Developer in Kerala" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Deepak Das – Best Flutter & Full Stack Developer in Kerala",
    description: "Deepak Das (deepakdas) — Best Flutter, Python, Django & Full Stack Developer from Palakkad, Kerala.",
    images: ["https://www.deepakdas.online/og-image.jpg"],
  },
};

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "mainEntity": {
    "@type": "Person",
    "@id": "https://www.deepakdas.online/#person",
    "name": "Deepak Das",
    "alternateName": "deepakdas",
    "jobTitle": "Flutter & Full Stack Developer",
    "description": "Best Flutter, Python, Django & Full Stack developer based in Palakkad, Kerala, India.",
    "url": "https://www.deepakdas.online",
    "image": "https://www.deepakdas.online/images/deepak.jpeg",
    "sameAs": [
      "https://github.com/deepakdas-d",
      "https://www.linkedin.com/in/deepak-das-d-76768034a/",
      "https://x.com/deepakdasd07"
    ]
  },
  "dateCreated": "2025-01-01T00:00:00+05:30",
  "dateModified": "2026-06-17T00:00:00+05:30"
};

export default function AboutPage() {
  return (
    <div className={styles.root}>
      {/* ProfilePage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />

      {/* Nav */}
      <CardNav
        logo=""
        logoAlt="Logo"
        items={[
          {
            label: "Navigation",
            bgColor: "var(--card-bg-solid)",
            textColor: "var(--fg)",
            links: [
              { label: "Home", ariaLabel: "Home Page", href: "/" },
              { label: "Experience", ariaLabel: "Experience", href: "/projects" },
              { label: "Blog", ariaLabel: "Blog", href: "/blog" },
              { label: "Resume", ariaLabel: "Resume", href: "/resume" }
            ]
          }
        ]}
        baseColor="var(--nav-bg)"
        menuColor="var(--fg)"
        buttonBgColor="var(--nav-btn-bg)"
        buttonTextColor="var(--nav-btn-text)"
        ease="power3.out"
      />

      <section id="about" className={styles.sectionAbout} style={{ paddingTop: '150px' }}>
        <div className={`${styles.aboutWrapper} ${styles.glassCard}`}>
          <div className={styles.aboutImageContainer}>
            <Image
              src="/images/deepak.jpeg"
              alt="Deepak Das — Best Flutter, Python and Full Stack Developer from Kerala, India"
              width={400}
              height={400}
              className={styles.aboutImage}
            />
          </div>
          <div className={styles.aboutContent}>
            <h1 className={styles.sectionTitle} style={{ marginBottom: '1.5rem' }}>
              <DecryptedText text="About Deepak Das" animateOn="view" revealDirection="center" />
              <span className={styles.orangeDot}>.</span>
            </h1>
            <div className={styles.aboutBios}>
              <p className={styles.aboutText}>
                I&apos;m a <strong>Full Stack Developer</strong> based in <strong>Kerala, India</strong>, specializing in <strong>Flutter, Django, and React</strong>. I am passionate about crafting seamless digital experiences, from building cross-platform mobile applications to designing scalable backend systems that solve real-world problems.
              </p>
              <p className={styles.aboutText}>
                Proficient in <strong>Flutter, Django, and React.js</strong>, I specialize in RESTful API design, cloud deployment (AWS), and real-time communication using WebSockets and WebRTC. I enjoy bridging the gap between elegant UI and robust infrastructure.
              </p>
              <p className={styles.aboutText}>
                With a strong background in <strong>DevOps and CI/CD</strong>, I ensure production-grade quality from development to deployment. Whether it&apos;s integrating IoT devices or scaling server-side logic, I focus on performance, security, and user-centric design.
              </p>
            </div>
          </div>
        </div>

        <SectionDivider />

        <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <DecryptedText text="My Expertise" animateOn="view" revealDirection="center" />
          <span className={styles.orangeDot}>.</span>
        </h2>

        <SkillsTabbed />
      </section>
      <ThemeToggle />
    </div>
  );
}