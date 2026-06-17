import React from 'react';
import ExperienceSection from '../../components/ExperienceSection';
import DecryptedText from '../../components/DecryptedText';
import CardNav from '../../components/CardNav';
import ThemeToggle from '../../components/ThemeToggle';
import styles from '../home.module.css';

export const metadata = {
  title: "Projects by Deepak Das – Flutter, Django & Full Stack Apps | Kerala Developer",
  description: "Explore projects by Deepak Das (deepakdas) — Flutter chat apps, WebRTC audio streaming with Django, e-commerce admin panels with React & AWS. Best full stack developer in Kerala.",
  alternates: {
    canonical: 'https://www.deepakdas.online/projects',
  },
  openGraph: {
    title: "Projects by Deepak Das – Flutter, Django & Full Stack Developer Kerala",
    description: "Flutter apps, Django backends, React frontends, WebRTC systems — projects by Deepak Das, the best full stack developer in Kerala.",
    url: "https://www.deepakdas.online/projects",
    images: [{ url: "https://www.deepakdas.online/og-image.jpg", width: 1200, height: 630, alt: "Projects by Deepak Das - Full Stack Developer Kerala" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects by Deepak Das – Flutter & Full Stack Developer Kerala",
    description: "Flutter, Django & Full Stack projects by Deepak Das from Kerala.",
    images: ["https://www.deepakdas.online/og-image.jpg"],
  },
};

const projectsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Projects by Deepak Das",
  "description": "Professional projects and case studies by Deepak Das, Flutter & Full Stack Developer from Kerala",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Flutter Chat App",
      "url": "https://www.deepakdas.online/projects/flutter-chat-app",
      "description": "Real-time chat application built with Flutter, Firebase & WebSockets"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "WebRTC Audio Streaming",
      "url": "https://www.deepakdas.online/projects/webrtc-audio-streaming",
      "description": "Low-latency audio streaming platform with WebRTC & Django Channels"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "E-commerce Admin Panel",
      "url": "https://www.deepakdas.online/projects/ecommerce-admin-panel",
      "description": "Comprehensive admin panel with React, Django REST Framework, AWS & PostgreSQL"
    }
  ]
};

export default function ProjectsPage() {
  return (
    <div className={styles.root}>
      {/* ItemList JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsJsonLd) }}
      />

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
              { label: "Blog", ariaLabel: "Blog", href: "/blog" },
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