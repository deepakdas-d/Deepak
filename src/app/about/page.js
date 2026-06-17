import React from 'react';
import Image from 'next/image';
import DecryptedText from '../../components/DecryptedText';
import SkillsTabbed from '../../components/SkillsTabbed';
import SectionDivider from '../../components/SectionDivider';
import ThemeToggle from '../../components/ThemeToggle';
import CardNav from '../../components/CardNav';
import styles from '../home.module.css';

export const metadata = {
  title: "About | Deepak Das — Flutter & Full Stack Developer",
  description: "Learn more about Deepak Das, a Flutter & Full Stack Developer from Palakkad, Kerala, India. Specializing in Flutter, React, Node.js, Python & DevOps. Building cross-platform apps and scalable backend systems.",
  alternates: {
    canonical: 'https://www.deepakdas.online/about',
  },
  openGraph: {
    title: "About | Deepak Das — Flutter & Full Stack Developer, Palakkad, Kerala",
    description: "Flutter & Full Stack Developer from Palakkad, Kerala — Flutter, React, Node.js, Python & DevOps specialist. Cross-platform apps, REST APIs, cloud deployments.",
    url: "https://www.deepakdas.online/about",
    images: [{ url: "https://www.deepakdas.online/og-image.png", width: 1200, height: 630, alt: "Deepak Das - Flutter & Full Stack Developer Palakkad Kerala" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Deepak Das — Flutter & Full Stack Developer",
    description: "Flutter & Full Stack Developer from Palakkad, Kerala — Flutter, React, Node.js, Python & DevOps specialist.",
    images: ["https://www.deepakdas.online/og-image.png"],
  },
};

export default function AboutPage() {
  return (
    <div className={styles.root}>
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
              alt="Deepak Das, Full Stack Developer from Kerala specializing in Flutter, Django and React"
              width={400}
              height={400}
              className={styles.aboutImage}
            />
          </div>
          <div className={styles.aboutContent}>
            <h1 className={styles.sectionTitle} style={{ marginBottom: '1.5rem' }}>
              <DecryptedText text="About Me" animateOn="view" revealDirection="center" />
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