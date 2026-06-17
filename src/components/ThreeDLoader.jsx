'use client';

import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';

// Particle class for the background
function createParticles(canvas, ctx, count = 40) {
  const particles = [];
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 0.5,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.5 + 0.1,
    });
  }
  return particles;
}

function animateParticles(canvas, ctx, particles, frameRef) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((p) => {
    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0) p.x = canvas.width;
    if (p.x > canvas.width) p.x = 0;
    if (p.y < 0) p.y = canvas.height;
    if (p.y > canvas.height) p.y = 0;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(249, 115, 22, ${p.opacity})`;
    ctx.fill();
  });

  // Draw lines between nearby particles
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(249, 115, 22, ${0.08 * (1 - dist / 120)})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  }

  frameRef.current = requestAnimationFrame(() =>
    animateParticles(canvas, ctx, particles, frameRef)
  );
}

export default function LoaderAnimation() {
  const containerRef = useRef(null);
  const lettersRef = useRef([]);
  const lineRef = useRef(null);
  const glowRef = useRef(null);
  const canvasRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    // Setup particle canvas
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const particles = createParticles(canvas, ctx);
    animateParticles(canvas, ctx, particles, frameRef);

    // GSAP Timeline
    const tl = gsap.timeline({ delay: 0.3 });

    // 1. Glow pulse in
    tl.fromTo(
      glowRef.current,
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 1.2, ease: 'power2.out' }
    );

    // 2. Letters reveal one by one with stagger
    tl.fromTo(
      lettersRef.current,
      {
        opacity: 0,
        y: 60,
        rotateX: -90,
        scale: 0.3,
        filter: 'blur(20px)',
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        scale: 1,
        filter: 'blur(0px)',
        duration: 1,
        stagger: 0.15,
        ease: 'expo.out',
      },
      '-=0.6'
    );

    // 3. Accent line draws in
    tl.fromTo(
      lineRef.current,
      { scaleX: 0 },
      { scaleX: 1, duration: 0.8, ease: 'power3.inOut' },
      '-=0.3'
    );

    // 4. Subtle breathe animation on letters
    tl.to(lettersRef.current, {
      scale: 1.05,
      duration: 0.6,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: 1,
    });

    const currentFrame = frameRef.current;
    return () => {
      if (currentFrame) cancelAnimationFrame(currentFrame);
      tl.kill();
    };
  }, []);

  const letters = ['D', 'D'];

  return (
    <div ref={containerRef} style={styles.container}>
      {/* Particle canvas */}
      <canvas ref={canvasRef} style={styles.canvas} />

      {/* Radial glow behind letters */}
      <div ref={glowRef} style={styles.glow} />

      {/* Letters */}
      <div style={styles.lettersRow}>
        {letters.map((letter, i) => (
          <span
            key={i}
            ref={(el) => (lettersRef.current[i] = el)}
            style={styles.letter}
          >
            {letter}
          </span>
        ))}
      </div>

      {/* Accent line */}
      <div ref={lineRef} style={styles.accentLine} />
    </div>
  );
}

const styles = {
  container: {
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  canvas: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    zIndex: 0,
    pointerEvents: 'none',
  },
  glow: {
    position: 'absolute',
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    background:
      'radial-gradient(circle, rgba(249,115,22,0.15) 0%, rgba(249,115,22,0.05) 40%, transparent 70%)',
    zIndex: 1,
    pointerEvents: 'none',
    filter: 'blur(30px)',
  },
  lettersRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.1em',
    zIndex: 2,
    perspective: '800px',
  },
  letter: {
    fontFamily: 'var(--font-heading, Georgia, serif)',
    fontSize: 'clamp(5rem, 15vw, 10rem)',
    fontWeight: '600',
    color: 'var(--loader-text, #f0f0f0)',
    letterSpacing: '-0.04em',
    lineHeight: 1,
    display: 'inline-block',
    willChange: 'transform, opacity, filter',
    textShadow:
      '0 0 40px rgba(249,115,22,0.3), 0 0 80px rgba(249,115,22,0.1)',
  },
  accentLine: {
    width: '80px',
    height: '3px',
    background: 'linear-gradient(90deg, transparent, #f97316, transparent)',
    borderRadius: '4px',
    marginTop: '1.5rem',
    zIndex: 2,
    transformOrigin: 'center',
  },
};
