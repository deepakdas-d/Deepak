import React from 'react';
import CardNav from '../../../components/CardNav';
import ThemeToggle from '../../../components/ThemeToggle';
import DecryptedText from '../../../components/DecryptedText';
import styles from '../../home.module.css';

export const metadata = {
  title: "E-commerce Admin Panel Case Study | Deepak Das",
  description: "A case study exploring the creation of a comprehensive, secure e-commerce admin panel using React, Django, and AWS.",
  alternates: {
    canonical: 'https://www.deepakdas.online/projects/ecommerce-admin-panel',
  }
};

export default function EcommerceAdminPanel() {
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
              { label: "Projects", ariaLabel: "Projects Page", href: "/projects" },
              { label: "About", ariaLabel: "About Page", href: "/about" }
            ]
          }
        ]}
        baseColor="var(--nav-bg)"
        menuColor="var(--fg)"
        buttonBgColor="var(--nav-btn-bg)"
        buttonTextColor="var(--nav-btn-text)"
        ease="power3.out"
      />

      <section className={styles.sectionWork} style={{ paddingTop: '150px', paddingBottom: '100px' }}>
        <h1 className={styles.sectionTitle}>
          <DecryptedText text="E-commerce Admin Panel" animateOn="view" revealDirection="center" />
          <span className={styles.orangeDot}>.</span>
        </h1>
        <div style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--fg)', padding: '0 20px', lineHeight: '1.8' }}>
          <h2>Overview</h2>
          <p>
            An intricate back-office e-commerce management panel built to handle inventory, user management, analytics, and order tracking. Focus was placed heavily on a secure Django REST Framework backend and a scalable React frontend.
          </p>
          <br/>
          <h2>Technologies Used</h2>
          <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
            <li>React.js</li>
            <li>Django REST Framework</li>
            <li>AWS Cloud Infrastructure</li>
            <li>PostgreSQL</li>
          </ul>
        </div>
      </section>
      <ThemeToggle />
    </div>
  );
}
