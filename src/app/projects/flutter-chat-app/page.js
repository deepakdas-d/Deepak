import React from 'react';
import CardNav from '../../../components/CardNav';
import ThemeToggle from '../../../components/ThemeToggle';
import DecryptedText from '../../../components/DecryptedText';
import styles from '../../home.module.css';

export const metadata = {
  title: "Flutter Chat App Case Study | Deepak Das",
  description: "A comprehensive case study on building a scalable, real-time Flutter chat application with seamless messaging and intuitive UI.",
  alternates: {
    canonical: 'https://www.deepakdas.online/projects/flutter-chat-app',
  }
};

export default function FlutterChatApp() {
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
          <DecryptedText text="Flutter Chat App" animateOn="view" revealDirection="center" />
          <span className={styles.orangeDot}>.</span>
        </h1>
        <div style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--fg)', padding: '0 20px', lineHeight: '1.8' }}>
          <h2>Overview</h2>
          <p>
            This case study details the development of a real-time chat application using Flutter. The application ensures seamless cross-platform performance across iOS and Android, leveraging WebSockets and Firebase for real-time messaging, push notifications, and user authentication.
          </p>
          <br/>
          <h2>Technologies Used</h2>
          <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
            <li>Flutter & Dart</li>
            <li>Firebase Authentication</li>
            <li>Cloud Firestore & WebSockets</li>
          </ul>
        </div>
      </section>
      <ThemeToggle />
    </div>
  );
}
