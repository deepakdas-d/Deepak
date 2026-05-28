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
import SectionReveal from "../components/SectionReveal";
import ThemeToggle from "../components/ThemeToggle";
import ScrollProgress from "../components/ScrollProgress";
import CustomCursor from "../components/CustomCursor";
import BackToTop from "../components/BackToTop";
import SectionDivider from "../components/SectionDivider";
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import styles from './home.module.css';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -100]);

  useEffect(() => {
    // Simulate a brief loading sequence for the skeleton logic
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.root}>
      <ScrollProgress />
      <CustomCursor />
      <BackToTop />

      {/* Background Grid */}
      <div className={styles.dotGridBg}>
        <DotGrid
          dotSize={6}
          gap={30}
          baseColor="var(--dot-base)"
          activeColor="var(--dot-active)"
          proximity={150}
          shockRadius={250}
          shockStrength={5}
        />
      </div>

      {/* Premium Loading Screen */}
      <div className={`${styles.loadingOverlay} ${!loading ? styles.hidden : ''}`}>
        <div className={styles.loaderInitials}>DD</div>
        <div className={styles.loaderLine}></div>
        <div className={styles.loaderTagline}>Full Stack Developer</div>
      </div>

      {/* Nav */}
      <CardNav
        logo=""
        logoAlt="Logo"
        items={[
          {
            label: "Details",
            bgColor: "var(--card-bg-solid)",
            textColor: "var(--fg)",
            links: [
              { label: "Experience", ariaLabel: "About Experience", href: "#experience" },
              { label: "Skills", ariaLabel: "About Skills", href: "#about" }
            ]
          },
          {
            label: "Connect",
            bgColor: "var(--card-bg-solid)",
            textColor: "var(--fg)",
            links: [
              { label: "Email Me", ariaLabel: "Email us", href: "mailto:enquiry@deepakdas.online" },
              { label: "GitHub", ariaLabel: "GitHub", href: "https://github.com/deepakdas-d" },
              { label: "LinkedIn", ariaLabel: "LinkedIn", href: "https://www.linkedin.com/in/deepak-das-d-76768034a/" }
            ]
          }
        ]}
        baseColor="var(--nav-bg)"
        menuColor="var(--fg)"
        buttonBgColor="var(--nav-btn-bg)"
        buttonTextColor="var(--nav-btn-text)"
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
              "Full Stack Developer",
              "Flutter & Django Expert",
              "Cloud Infrastructure"
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
          <a
            href="/Deepak_Das_FullStack.pdf"
            download
            className={styles.btnResume}
          >
            <FiDownload /> Resume
          </a>
        </div>
      </main>

      {/* About */}
      <SectionReveal>
        <section id="about" className={styles.sectionAbout}>
          <div className={`${styles.aboutWrapper} ${styles.glassCard}`}>
            <motion.div
              className={styles.aboutImageContainer}
              style={{ y: yParallax }}
            >
              <Image
                src="/images/deepak.jpeg"
                alt="Deepak Das"
                width={400}
                height={400}
                className={styles.aboutImage}
              />
            </motion.div>
            <div className={styles.aboutContent}>
              <h2 className={styles.sectionTitle} style={{ marginBottom: '1.5rem' }}>
                <DecryptedText text="About Me" animateOn="view" revealDirection="center" />
                <span className={styles.orangeDot}>.</span>
              </h2>
              <div className={styles.aboutBios}>
                <p className={styles.aboutText}>
                  I am a <strong>Full Stack Developer</strong> passionate about crafting seamless digital experiences. My expertise lies in building <strong>cross-platform mobile applications</strong> and <strong>scalable backend systems</strong> that solve real-world problems.
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
              <div key={cat.title} className={`${styles.expertiseCategory} ${styles.glassCard}`}>
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
      </SectionReveal>

      <SectionDivider />

      {/* Experience */}
      <SectionReveal delay={100}>
        <section className={styles.sectionWork} id="experience">
          <h2 className={styles.sectionTitle}>
            <DecryptedText text="Professional Experience" animateOn="view" revealDirection="center" />
            <span className={styles.orangeDot}>.</span>
          </h2>
          <ExperienceSection />
        </section>
      </SectionReveal>

      <SectionDivider />

      {/* Contact */}
      <SectionReveal delay={100}>
        <section className={styles.sectionContact} id="contact">
          <p className={styles.contactSub}>Let&apos;s talk</p>
          <h2 className={styles.contactHeading}>
            <DecryptedText text="build together" animateOn="view" revealDirection="center" />
            <span className={styles.orangeDot}>.</span>
          </h2>
          <a href="mailto:enquiry@deepakdas.online" className={styles.contactEmail}>enquiry@deepakdas.online</a>
          <EnquirySection />
        </section>
      </SectionReveal>

      {/* Footer */}
      <SectionReveal delay={200}>
        <footer className={styles.footer}>
          <span>
            <DecryptedText text="© 2026 Deepak Das" animateOn="view" revealDirection="start" />
          </span>
          <div className={styles.footerLinks}>
            <a href="https://github.com/deepakdas-d" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/deepak-das-d-76768034a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </footer>
      </SectionReveal>

      <ThemeToggle />
    </div>
  );
}