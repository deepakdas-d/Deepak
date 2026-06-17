import React from 'react';
import Link from 'next/link';
import CardNav from '../../components/CardNav';
import ThemeToggle from '../../components/ThemeToggle';
import DecryptedText from '../../components/DecryptedText';
import { blogPosts } from '../../data/blog-posts';
import homeStyles from '../home.module.css';
import blogStyles from './blog.module.css';

export const metadata = {
  title: "Blog | Deepak Das – Flutter & Full Stack Developer Kerala",
  description: "Insights, tutorials, and experiences from Deepak Das (deepakdas), a Flutter & Full Stack developer in Palakkad, Kerala. Python, Django, React, and mobile development.",
  alternates: {
    canonical: 'https://www.deepakdas.online/blog',
  },
  openGraph: {
    title: "Blog | Deepak Das – Flutter & Full Stack Developer Kerala",
    description: "Insights, tutorials, and experiences from Deepak Das, a Flutter & Full Stack developer in Kerala.",
    url: "https://www.deepakdas.online/blog",
    images: [{ url: "https://www.deepakdas.online/og-image.png", width: 1200, height: 630, alt: "Deepak Das Blog" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Deepak Das",
    description: "Insights and experiences from a Flutter & Full Stack developer in Kerala.",
    images: ["https://www.deepakdas.online/og-image.png"],
  },
};

const blogListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Developer Blog by Deepak Das",
  "description": "Insights, tutorials, and experiences from a Flutter & Full Stack developer in Kerala",
  "itemListElement": blogPosts.map((post, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "url": `https://www.deepakdas.online/blog/${post.slug}`,
    "name": post.title
  }))
};

export default function BlogPage() {
  return (
    <div className={homeStyles.root}>
      {/* ItemList JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(blogListJsonLd)}}
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
              { label: "Projects", ariaLabel: "Projects Page", href: "/projects" },
              { label: "Resume", ariaLabel: "Resume", href: "/resume" }
            ]
          }
        ]}
        baseColor="var(--nav-bg)"
        menuColor="var(--fg)"
        buttonBgColor="var(--nav-btn-bg)"
        buttonTextColor="var(--nav-btn-text)"
        ease="power3.out"
      />

      <section className={homeStyles.sectionWork} style={{ paddingTop: '150px', paddingBottom: '100px' }}>
        <h1 className={homeStyles.sectionTitle}>
          <DecryptedText text="Developer Blog" animateOn="view" revealDirection="center" />
          <span className={homeStyles.orangeDot}>.</span>
        </h1>
        <p style={{ textAlign: 'center', color: 'var(--muted)', maxWidth: '600px', margin: '0 auto 2rem' }}>
          Insights, tutorials, and experiences from a Flutter & Full Stack developer in Kerala.
        </p>

        <div className={blogStyles.blogGrid} style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          {blogPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className={blogStyles.blogCard}>
              <div className={blogStyles.cardDate}>{post.date} • {post.readTime}</div>
              <h2 className={blogStyles.cardTitle}>{post.title}</h2>
              <p className={blogStyles.cardDescription}>{post.description}</p>
              <div className={blogStyles.tagContainer}>
                {post.tags.map(tag => (
                  <span key={tag} className={blogStyles.tagPill}>{tag}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
      <ThemeToggle />
    </div>
  );
}
