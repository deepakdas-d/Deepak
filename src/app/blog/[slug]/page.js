import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import CardNav from '../../../components/CardNav';
import ThemeToggle from '../../../components/ThemeToggle';
import DecryptedText from '../../../components/DecryptedText';
import { blogPosts } from '../../../data/blog-posts';
import homeStyles from '../../home.module.css';
import blogStyles from '../blog.module.css';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: `${post.title} | Deepak Das Blog`,
    description: post.description,
    alternates: {
      canonical: `https://www.deepakdas.online/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://www.deepakdas.online/blog/${slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: ['Deepak Das'],
      tags: post.tags,
      images: [{ url: "https://www.deepakdas.online/og-image.png", width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: ["https://www.deepakdas.online/og-image.png"],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.description,
    "author": {
      "@type": "Person",
      "name": post.author,
      "url": "https://www.deepakdas.online"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Deepak Das Portfolio",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.deepakdas.online/icon.png"
      }
    },
    "datePublished": post.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.deepakdas.online/blog/${slug}`
    }
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.deepakdas.online"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://www.deepakdas.online/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://www.deepakdas.online/blog/${slug}`
      }
    ]
  };

  return (
    <div className={homeStyles.root}>
      {/* Article and Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(articleJsonLd)}}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(breadcrumbJsonLd)}}
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
              { label: "Blog", ariaLabel: "Blog List", href: "/blog" },
              { label: "About", ariaLabel: "About Page", href: "/about" },
              { label: "Projects", ariaLabel: "Projects Page", href: "/projects" }
            ]
          }
        ]}
        baseColor="var(--nav-bg)"
        menuColor="var(--fg)"
        buttonBgColor="var(--nav-btn-bg)"
        buttonTextColor="var(--nav-btn-text)"
        ease="power3.out"
      />

      <section style={{ paddingTop: '150px', paddingBottom: '100px' }}>
        <div className={blogStyles.articleContainer}>
          <Link href="/blog" className={blogStyles.backLink}>
             ← Back to Blog
          </Link>
          
          <div className={blogStyles.articleHeader}>
            <h1 className={homeStyles.sectionTitle} style={{ fontSize: '2.5rem', marginBottom: '1rem', lineHeight: '1.2' }}>
              <DecryptedText text={post.title} animateOn="view" revealDirection="center" />
              <span className={homeStyles.orangeDot}>.</span>
            </h1>
            
            <div className={blogStyles.articleMeta}>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.author}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>

            <div className={blogStyles.articleTags}>
              {post.tags.map(tag => (
                <span key={tag} className={blogStyles.tagPill}>{tag}</span>
              ))}
            </div>
          </div>

          <div className={blogStyles.articleContent}>
            {post.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
      <ThemeToggle />
    </div>
  );
}
