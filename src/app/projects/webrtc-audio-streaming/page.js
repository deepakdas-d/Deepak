import React from 'react';
import CardNav from '../../../components/CardNav';
import ThemeToggle from '../../../components/ThemeToggle';
import DecryptedText from '../../../components/DecryptedText';
import styles from '../../home.module.css';

export const metadata = {
  title: "WebRTC Audio Streaming Case Study | Deepak Das",
  description: "A detailed case study on implementing real-time WebRTC audio streaming for robust, low-latency communication.",
  alternates: {
    canonical: 'https://www.deepakdas.online/projects/webrtc-audio-streaming',
  }
};

export default function WebRTCAudioStreaming() {
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
          <DecryptedText text="WebRTC Audio Streaming" animateOn="view" revealDirection="center" />
          <span className={styles.orangeDot}>.</span>
        </h1>
        <div style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--fg)', padding: '0 20px', lineHeight: '1.8' }}>
          <h2>Overview</h2>
          <p>
            This project focuses on building a low-latency, real-time audio streaming platform utilizing WebRTC. The architecture is designed to handle peer-to-peer audio communication seamlessly, incorporating signaling servers built with Django Channels.
          </p>
          <br/>
          <h2>Technologies Used</h2>
          <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
            <li>WebRTC</li>
            <li>Django Channels</li>
            <li>React & WebSockets</li>
          </ul>
        </div>
      </section>
      <ThemeToggle />
    </div>
  );
}
