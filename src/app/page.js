'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import SplitText from "../components/SplitText";
import TextType from "../components/TextType";
import CardNav from "../components/CardNav";
import DotGrid from "../components/DotGrid";
import SkillsMasonry from "../components/SkillsMasonry";
import DecryptedText from "../components/DecryptedText";
import ExperienceSection from "../components/ExperienceSection";
import EnquirySection from "../components/EnquirySection";
import styles from './home.module.css';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a brief loading sequence for the skeleton logic
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.root}>
      {/* Background Grid */}
      <div className={styles.dotGridBg}>
        <DotGrid
          dotSize={6}
          gap={30}
          baseColor="#e5e5e5"
          activeColor="#000000"
          proximity={150}
          shockRadius={250}
          shockStrength={5}
        />
      </div>

      {/* Onboarding Skeleton Overlay */}
      <div className={`${styles.loadingOverlay} ${!loading ? styles.hidden : ''}`}>
        <div className={styles.skeletonBar}></div>
      </div>

      {/* Nav */}
      <CardNav
        logo=""
        logoAlt="Logo"
        items={[
          {
            label: "Details",
            bgColor: "#f5f5f5",
            textColor: "#000",
            links: [
              { label: "Experience", ariaLabel: "About Experience", href: "#experience" },
              { label: "Skills", ariaLabel: "About Skills", href: "#about" }
            ]
          },
          {
            label: "Connect",
            bgColor: "#f5f5f5",
            textColor: "#000",
            links: [
              { label: "Email Me", ariaLabel: "Email us", href: "mailto:deepakdas.since2004@gmail.com" },
              { label: "GitHub", ariaLabel: "GitHub", href: "https://github.com/deepakdas-d" },
              { label: "LinkedIn", ariaLabel: "LinkedIn", href: "https://www.linkedin.com/in/deepak-das-d-76768034a/" }
            ]
          }
        ]}
        baseColor="rgba(255, 255, 255, 0.8)"
        menuColor="#000000"
        buttonBgColor="#000000"
        buttonTextColor="#ffffff"
        ease="power3.out"
      />

      {/* Hero */}
      <main className={styles.hero}>
        <p className={styles.heroEyebrow}>
          <DecryptedText text="Hello, I'm" animateOn="view" revealDirection="start" />
        </p>

        <SplitText
          text="Deepak Das"
          tag="h1"
          className={styles.heroName}
          delay={60}
          duration={0.9}
          ease="expo.out"
          splitType="chars"
          from={{ opacity: 0, y: 20 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="0px"
          textAlign="left"
        />

        <div className={styles.heroRole}>
          <TextType
            text={[
              "Elegant Web Experiences",
              "Full Stack Developer",
              "Minimalist Mindset"
            ]}
            typingSpeed={60}
            pauseDuration={2500}
            deletingSpeed={30}
            showCursor={true}
            cursorCharacter="|"
            cursorClassName={styles.heroCursor}
          />
        </div>

        <div className={styles.heroCta}>
          <a href="#contact" className={styles.btnPrimary}>Get in touch</a>
          <a href="#experience" className={styles.btnGhost}>View experience</a>
        </div>
      </main>

      {/* About */}
      <section id="about" className={styles.sectionAbout}>
        <div className={styles.aboutWrapper}>
          <div className={styles.aboutImageContainer}>
            <Image
              src="/images/deepak.jpeg"
              alt="Deepak Das"
              width={400}
              height={400}
              className={styles.aboutImage}
            />
          </div>
          <div className={styles.aboutContent}>
            <h2 className={styles.sectionTitle}>
              <DecryptedText text="About Me" animateOn="view" revealDirection="center" />
              <span className={styles.orangeDot}>.</span>
            </h2>
            <p className={styles.aboutText}>
              Full Stack Developer with hands-on experience building cross-platform mobile applications, scalable backend systems, and production-grade web interfaces. Proficient in Flutter, Dart, Django, Django REST Framework, and React.js with strong expertise in RESTful API design, Firebase services, and state management (GetX, Provider, BLoC). Experienced in cloud deployment on AWS EC2, Nginx reverse proxy, SSL/TLS, Linux server administration, and CI/CD pipelines using GitHub Actions. Skilled in WebSocket-based real-time communication, WebRTC, payment gateway integration (Razorpay), IoT device integration, push notifications (FCM), and Google Play Store publishing.
            </p>
          </div>
        </div>

        <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <DecryptedText text="My Expertise" animateOn="view" revealDirection="center" />
          <span className={styles.orangeDot}>.</span>
        </h2>

        <div className={styles.expertiseWrapper}>
          {[
            {
              title: "Mobile",
              skills: ["Flutter", "Dart", "Android", "Windows", "Play Store", "Kotlin"]
            },
            {
              title: "Web",
              skills: ["React.js", "Next.js", "TypeScript", "Admin Portals", "UI/UX"]
            },
            {
              title: "Backend & Server",
              skills: ["Django", "DRF", "FastAPI", "REST APIs", "WebSockets", "WebRTC", "PostgreSQL", "SQLite", "AWS EC2", "Nginx", "Gunicorn", "SSL/TLS", "GitHub Actions"]
            },
            {
              title: "Third-Party APIs & Cloud",
              skills: ["Firebase Auth", "Firestore", "Cloud Storage", "FCM", "Razorpay", "Maps API"]
            },
            {
              title: "Architecture & Tools",
              skills: ["GetX", "Provider", "BLoC", "Clean Architecture", "Git"]
            }
          ].map((cat) => (
            <div key={cat.title} className={styles.expertiseCategory}>
              <h3 className={styles.categoryTitle}>{cat.title}</h3>
              <SkillsMasonry
                skills={cat.skills}
                initialCount={cat.skills.length}
                animateFrom="bottom"
                stagger={0.05}
                blurToFocus={true}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className={styles.sectionWork} id="experience">
        <h2 className={styles.sectionTitle}>
          <DecryptedText text="Professional Experience" animateOn="view" revealDirection="center" />
          <span className={styles.orangeDot}>.</span>
        </h2>
        <ExperienceSection />
      </section>

      {/* Contact */}
      <section className={styles.sectionContact} id="contact">
        <p className={styles.contactSub}>Let&apos;s talk</p>
        <h2 className={styles.contactHeading}>
          <DecryptedText text="build together" animateOn="view" revealDirection="center" />
          <span className={styles.orangeDot}>.</span>
        </h2>
        <a href="mailto:deepakdas.since2004@gmail.com" className={styles.contactEmail}>deepakdas.since2004@gmail.com</a>
        <EnquirySection />
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <span>
          <DecryptedText text="© 2026 Deepak Das" animateOn="view" revealDirection="start" />
        </span>
        <div className={styles.footerLinks}>
          <a href="https://github.com/deepakdas-d" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/deepak-das-d-76768034a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}