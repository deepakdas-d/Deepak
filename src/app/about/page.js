import React from 'react';
import Image from 'next/image';
import DecryptedText from '../../components/DecryptedText';
import SkillsTabbed from '../../components/SkillsTabbed';
import SectionDivider from '../../components/SectionDivider';
import ThemeToggle from '../../components/ThemeToggle';
import CardNav from '../../components/CardNav';
import styles from '../home.module.css';

export const metadata = {
  title: "About | Deepak Das",
  description: "Learn more about Deepak Das, a Full Stack Developer based in India, specializing in React and Django.",
  alternates: {
    canonical: 'https://www.deepakdas.online/about',
  }
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
              alt="Deepak Das, Full Stack Developer specializing in React and Django"
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
                I am a <strong>Full Stack developer</strong> based in India, specializing in <strong>React and Django</strong>. I am passionate about crafting seamless digital experiences, from building cross-platform mobile applications as a <strong>Flutter developer in Kerala</strong>, to designing scalable backend systems that solve real-world problems.
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
