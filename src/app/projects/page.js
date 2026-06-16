import React from 'react';
import ExperienceSection from '../../components/ExperienceSection';
import DecryptedText from '../../components/DecryptedText';
import CardNav from '../../components/CardNav';
import ThemeToggle from '../../components/ThemeToggle';
import styles from '../home.module.css';

export const metadata = {
  title: "Projects & Experience | Deepak Das",
  description: "View the professional experience and projects of Deepak Das, a Full Stack Developer.",
  alternates: {
    canonical: 'https://www.deepakdas.online/projects',
  }
};

export default function ProjectsPage() {
  return (
    <div className={styles.root}>
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
              { label: "About", ariaLabel: "About Page", href: "/about" },
              { label: "Resume", ariaLabel: "Resume Page", href: "/resume" }
            ]
          }
        ]}
        baseColor="var(--nav-bg)"
        menuColor="var(--fg)"
        buttonBgColor="var(--nav-btn-bg)"
        buttonTextColor="var(--nav-btn-text)"
        ease="power3.out"
      />

      <section className={styles.sectionWork} id="experience" style={{ paddingTop: '150px', paddingBottom: '100px' }}>
        <h1 className={styles.sectionTitle}>
          <DecryptedText text="Professional Experience & Projects" animateOn="view" revealDirection="center" />
          <span className={styles.orangeDot}>.</span>
        </h1>
        <ExperienceSection />
      </section>
      <ThemeToggle />
    </div>
  );
}
