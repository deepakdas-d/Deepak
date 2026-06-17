'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import SplitText from "../components/SplitText";
import TextType from "../components/TextType";
import CardNav from "../components/CardNav";
import SkillsTabbed from "../components/SkillsTabbed";
import DecryptedText from "../components/DecryptedText";
import ExperienceSection from "../components/ExperienceSection";
import EnquirySection from "../components/EnquirySection";
import SectionReveal from "../components/SectionReveal";
import ThemeToggle from "../components/ThemeToggle";
import ScrollProgress from "../components/ScrollProgress";
import BackToTop from "../components/BackToTop";
import SectionDivider from "../components/SectionDivider";

const DotGrid = dynamic(() => import("../components/DotGrid"), { ssr: false });
const LoaderAnimation = dynamic(() => import("../components/ThreeDLoader"), { ssr: false });
const CustomCursor = dynamic(() => import("../components/CustomCursor"), { ssr: false });

import { motion, useScroll, useTransform } from 'framer-motion';
import { FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import styles from './home.module.css';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -100]);

  useEffect(() => {
    // Simulate a brief loading sequence for the skeleton logic
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Scroll to section based on initial pathname if directly visited
    const path = window.location.pathname;
    let targetId = null;
    if (path === '/aboutme') targetId = 'about';
    else if (path === '/expertise') targetId = 'expertise';
    else if (path === '/experience') targetId = 'experience';
    else if (path === '/contact') targetId = 'contact';

    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 500); // Wait for rendering
      }
    }

    // Use IntersectionObserver to track visible sections
    const activeSections = new Map();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          activeSections.set(entry.target.id, entry.intersectionRatio);
        } else {
          activeSections.delete(entry.target.id);
        }
      });

      if (activeSections.size > 0) {
        let maxRatio = -1;
        let activeId = null;
        
        activeSections.forEach((ratio, id) => {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            activeId = id;
          }
        });

        if (activeId) {
          let newPath = '/';
          if (activeId === 'about') newPath = '/aboutme';
          else if (activeId === 'expertise') newPath = '/expertise';
          else if (activeId === 'experience') newPath = '/experience';
          else if (activeId === 'contact') newPath = '/contact';
          
          if (window.location.pathname !== newPath) {
            window.history.replaceState(null, '', newPath);
          }
        }
      }
    }, {
      root: null,
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0], // Track ratio smoothly
    });

    const sections = document.querySelectorAll('section[id], main[id]');
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
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
        <div className={styles.loaderLogoContainer}>
          <LoaderAnimation />
        </div>
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
              { label: "Skills", ariaLabel: "About Skills", href: "#expertise" }
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
      <main id="home" className={styles.hero}>
        <h1 style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', border: 0 }}>
          Deepak Das – Full Stack Developer Specializing in Flutter, Django & AWS
        </h1>
        <p className={styles.heroEyebrow}>
          <DecryptedText text="Hello, I'm" animateOn="view" revealDirection="start" />
        </p>

        <SplitText
          text="Deepak Das"
          tag="div"
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
                alt="Deepak Das Full Stack Developer"
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
                  I am a <strong>Full Stack developer</strong> from <strong>Kerala, India</strong>, specializing in <strong>Flutter, Django, and React</strong>. I am passionate about crafting seamless digital experiences, from building cross-platform mobile applications to designing scalable backend systems that solve real-world problems.
                </p>
                <p className={styles.aboutText}>
                  As a <strong>Remote Developer</strong> and tech enthusiast based near <strong>Kochi</strong>, I specialize in RESTful API design, cloud deployment (AWS), and real-time communication using WebSockets and WebRTC. I enjoy bridging the gap between elegant UI and robust infrastructure.
                </p>
                <p className={styles.aboutText}>
                  With a strong background in <strong>DevOps and CI/CD</strong>, I ensure production-grade quality from development to deployment. Whether it&apos;s integrating IoT devices or scaling server-side logic, I focus on performance, security, and user-centric design.
                </p>
              </div>
            </div>
          </div>
        </section>
      </SectionReveal>

      <SectionDivider />

      {/* Expertise */}
      <SectionReveal>
        <section id="expertise" className={styles.sectionAbout}>
          <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <DecryptedText text="My Expertise" animateOn="view" revealDirection="center" />
            <span className={styles.orangeDot}>.</span>
          </h2>

          <SkillsTabbed />
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            <span>
              <DecryptedText text="© 2026 Deepak Das | Remote Developer" animateOn="view" revealDirection="start" />
            </span>
            <span style={{ fontSize: '0.9rem', color: '#a3a3a3' }}>Kerala, India</span>
          </div>
          <div className={styles.footerLinks} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <a href="mailto:enquiry@deepakdas.online" aria-label="Email" style={{ fontSize: '1.25rem' }}><FiMail /></a>
            <a href="https://github.com/deepakdas-d" target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={{ fontSize: '1.25rem' }}><FiGithub /></a>
            <a href="https://www.linkedin.com/in/deepak-das-d-76768034a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ fontSize: '1.25rem' }}><FiLinkedin /></a>
          </div>
        </footer>
      </SectionReveal>

      <ThemeToggle />
    </div>
  );
}