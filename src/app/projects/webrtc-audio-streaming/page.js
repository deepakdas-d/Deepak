import React from 'react';
import CardNav from '../../../components/CardNav';
import ThemeToggle from '../../../components/ThemeToggle';
import DecryptedText from '../../../components/DecryptedText';
import styles from '../../home.module.css';

export const metadata = {
  title: "WebRTC Audio Streaming Case Study – Built with Django by Deepak Das",
  description: "Case study: How Deepak Das built a low-latency WebRTC audio streaming platform using Django Channels, React & WebSockets. Full stack development from Kerala.",
  alternates: {
    canonical: 'https://www.deepakdas.online/projects/webrtc-audio-streaming',
  },
  openGraph: {
    title: "WebRTC Audio Streaming | Deepak Das – Django & Full Stack Developer Kerala",
    description: "Low-latency WebRTC audio streaming with Django Channels & React — built by Deepak Das, full stack developer from Kerala.",
    url: "https://www.deepakdas.online/projects/webrtc-audio-streaming",
    images: [{ url: "https://www.deepakdas.online/og-image.jpg", width: 1200, height: 630, alt: "WebRTC Audio Streaming by Deepak Das" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "WebRTC Audio Streaming Case Study | Deepak Das",
    description: "Real-time audio streaming with WebRTC & Django Channels — by Deepak Das, full stack developer from Kerala.",
    images: ["https://www.deepakdas.online/og-image.jpg"],
  },
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
          <br />
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
