import React from 'react';
import DecryptedText from '../../components/DecryptedText';
import CardNav from '../../components/CardNav';
import ThemeToggle from '../../components/ThemeToggle';
import { FiDownload } from 'react-icons/fi';
import styles from '../home.module.css';

export const metadata = {
  title: "Resume | Deepak Das — Flutter & Full Stack Developer",
  description: "Download the resume of Deepak Das, Flutter & Full Stack Developer from Palakkad, Kerala. Skills in Flutter, React, Node.js, Python, DevOps & cloud infrastructure.",
  alternates: {
    canonical: 'https://www.deepakdas.online/resume',
  },
  openGraph: {
    title: "Resume | Deepak Das — Flutter & Full Stack Developer, Palakkad, Kerala",
    description: "Download the resume of Deepak Das — Flutter, React, Node.js, Python & DevOps developer from Palakkad, Kerala.",
    url: "https://www.deepakdas.online/resume",
    images: [{ url: "https://www.deepakdas.online/og-image.png", width: 1200, height: 630, alt: "Deepak Das - Resume" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume | Deepak Das — Flutter & Full Stack Developer",
    description: "Download the resume of Deepak Das — Flutter & Full Stack Developer from Palakkad, Kerala.",
    images: ["https://www.deepakdas.online/og-image.png"],
  },
};

export default function ResumePage() {
  return (
    <div className={styles.root} style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
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
              { label: "Projects", ariaLabel: "Projects Page", href: "/projects" }
            ]
          }
        ]}
        baseColor="var(--nav-bg)"
        menuColor="var(--fg)"
        buttonBgColor="var(--nav-btn-bg)"
        buttonTextColor="var(--nav-btn-text)"
        ease="power3.out"
      />

      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '150px 20px 50px' }}>
        <h1 className={styles.sectionTitle} style={{ marginBottom: '2rem' }}>
          <DecryptedText text="My Resume" animateOn="view" revealDirection="center" />
          <span className={styles.orangeDot}>.</span>
        </h1>
        
        <p style={{ color: 'var(--fg-muted)', marginBottom: '3rem', textAlign: 'center', maxWidth: '600px', fontSize: '1.2rem', lineHeight: '1.6' }}>
          Get a comprehensive overview of my technical skills, professional experience, and educational background.
        </p>

        <a
          href="/Deepak_Das_FullStack.pdf"
          download
          className={styles.btnPrimary}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', padding: '1rem 2.5rem', fontSize: '1.1rem' }}
        >
          <FiDownload size={22} /> Download Resume
        </a>
      </main>
      <ThemeToggle />
    </div>
  );
}
