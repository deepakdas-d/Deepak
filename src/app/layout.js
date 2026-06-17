import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Deepak Das – Best Flutter & Full Stack Developer in Kerala | Python, Django",
    template: "%s | Deepak Das – Flutter & Full Stack Developer Kerala"
  },
  description: "Deepak Das (deepakdas) — Best Flutter, Python, Django & Full Stack developer in Kerala, India. Hire the top-rated developer in Palakkad for mobile apps, web development, React, Node.js, DevOps & cloud solutions. Available for freelance and remote.",
  keywords: [
    "Deepak Das",
    "deepakdas",
    "best developer in Kerala",
    "best Flutter developer Kerala",
    "Flutter developer Palakkad",
    "Flutter developer Kerala",
    "Python developer Kerala",
    "Python developer Palakkad",
    "Django developer Kerala",
    "Django developer Palakkad",
    "full stack developer Palakkad",
    "full stack developer Kerala",
    "software developer Kerala",
    "mobile app developer Palakkad",
    "React developer Kerala",
    "Node.js developer Kerala",
    "DevOps engineer Kerala",
    "Android iOS developer Kerala",
    "freelance developer Palakkad",
    "hire Flutter developer Kerala",
    "hire developer Kerala",
    "web developer Palakkad Kerala"
  ],
  authors: [{ name: "Deepak Das" }],
  creator: "Deepak Das",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.deepakdas.online",
    title: "Deepak Das – Best Flutter & Full Stack Developer in Kerala | Python, Django, React",
    description: "Deepak Das (deepakdas) — Best Flutter, Python, Django & Full Stack developer from Palakkad, Kerala. Hire for mobile apps, web development & cloud solutions.",
    siteName: "Deepak Das — Developer Portfolio",
    images: [{ url: "https://www.deepakdas.online/og-image.jpg", width: 1200, height: 630, alt: "Deepak Das - Best Flutter & Full Stack Developer in Kerala" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepak Das – Best Flutter & Full Stack Developer in Kerala",
    description: "Deepak Das (deepakdas) — Best Flutter, Python, Django & Full Stack developer from Palakkad, Kerala. Available for freelance & remote.",
    creator: "@deepakdasd07",
    images: ["https://www.deepakdas.online/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "language": "English",
    "revisit-after": "7 days",
    "geo.region": "IN-KL",
    "geo.placename": "Palakkad, Kerala, India",
    "geo.position": "10.7867;76.6548",
    "ICBM": "10.7867, 76.6548",
  },
  metadataBase: new URL("https://www.deepakdas.online"),
  alternates: {
    canonical: "/",
  },
};

export const viewport = {
  themeColor: "#0a0a0a",
};

// Consolidated JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://www.deepakdas.online/#person",
      "name": "Deepak Das",
      "alternateName": "deepakdas",
      "jobTitle": "Flutter & Full Stack Developer",
      "description": "Deepak Das (deepakdas) — Best Flutter, Python, Django & Full Stack developer based in Palakkad, Kerala, India. Expert in mobile app development, web development, and cloud infrastructure.",
      "url": "https://www.deepakdas.online",
      "email": "deepakdas.since2004@gmail.com",
      "image": "https://www.deepakdas.online/images/deepak.jpeg",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Palakkad",
        "addressRegion": "Kerala",
        "postalCode": "678001",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://github.com/deepakdas-d",
        "https://www.linkedin.com/in/deepak-das-d-76768034a/",
        "https://x.com/deepakdasd07"
      ],
      "knowsAbout": [
        "Flutter", "Dart", "React", "Node.js", "Next.js",
        "Android", "iOS", "Python", "Django", "DevOps", "Docker",
        "CI/CD", "Firebase", "REST APIs", "PostgreSQL", "MongoDB",
        "AWS", "WebSockets", "WebRTC"
      ],
      "worksFor": {
        "@type": "Organization",
        "name": "Techfifo Innovations"
      }
    },
    {
      "@type": "ProfilePage",
      "@id": "https://www.deepakdas.online/#profilepage",
      "mainEntity": { "@id": "https://www.deepakdas.online/#person" },
      "dateCreated": "2025-01-01",
      "dateModified": "2026-06-17"
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://www.deepakdas.online/#service",
      "name": "Deepak Das — Flutter & Full Stack Developer",
      "description": "Best Flutter, Python, Django & Full Stack developer in Kerala. Expert mobile app development, web development, DevOps and cloud infrastructure services from Palakkad, Kerala, India.",
      "url": "https://www.deepakdas.online",
      "telephone": "+919496407635",
      "email": "deepakdas.since2004@gmail.com",
      "image": "https://www.deepakdas.online/og-image.jpg",
      "founder": { "@id": "https://www.deepakdas.online/#person" },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Palakkad",
        "addressRegion": "Kerala",
        "postalCode": "678001",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 10.7867,
        "longitude": 76.6548
      },
      "areaServed": [
        "Palakkad", "Kochi", "Trivandrum", "Calicut", "Kerala", "India", "Remote"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Development Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Flutter App Development" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Full Stack Web Development (React + Node.js)" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Python & Django Backend Development" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile App Development (Android & iOS)" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "DevOps & Cloud Infrastructure (AWS)" } }
        ]
      },
      "knowsAbout": [
        "Flutter", "Dart", "React", "Node.js", "Next.js",
        "Android", "iOS", "Python", "Django", "DevOps", "Docker",
        "CI/CD", "Firebase", "REST APIs", "PostgreSQL", "MongoDB"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.deepakdas.online/#website",
      "name": "Deepak Das — Developer Portfolio",
      "url": "https://www.deepakdas.online",
      "description": "Portfolio of Deepak Das (deepakdas), the best Flutter & Full Stack Developer from Palakkad, Kerala, India",
      "author": { "@id": "https://www.deepakdas.online/#person" }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.deepakdas.online/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.deepakdas.online" },
        { "@type": "ListItem", "position": 2, "name": "About", "item": "https://www.deepakdas.online/about" },
        { "@type": "ListItem", "position": 3, "name": "Projects", "item": "https://www.deepakdas.online/projects" },
        { "@type": "ListItem", "position": 4, "name": "Blog", "item": "https://www.deepakdas.online/blog" },
        { "@type": "ListItem", "position": 5, "name": "Resume", "item": "https://www.deepakdas.online/resume" }
      ]
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Consolidated Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
