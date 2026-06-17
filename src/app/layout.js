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
    default: "Deepak Das | Flutter & Full Stack Developer in Palakkad, Kerala",
    template: "%s | Deepak Das | Flutter & Full Stack Developer"
  },
  description: "Deepak Das — Flutter, Full Stack (React/Node), Mobile App, DevOps & Python developer based in Palakkad, Kerala. Available for freelance projects and full-time roles across Kerala and remote.",
  keywords: [
    "Flutter developer Palakkad",
    "Flutter developer Kerala",
    "full stack developer Palakkad",
    "software developer Kerala",
    "mobile app developer Palakkad",
    "React developer Kerala",
    "Node.js developer Kerala",
    "Python developer Palakkad",
    "DevOps engineer Kerala",
    "Android iOS developer Kerala",
    "freelance developer Palakkad",
    "hire Flutter developer Kerala",
    "Deepak Das developer",
    "web developer Palakkad Kerala"
  ],
  authors: [{ name: "Deepak Das" }],
  creator: "Deepak Das",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.deepakdas.online",
    title: "Deepak Das | Flutter & Full Stack Developer — Palakkad, Kerala",
    description: "Flutter, Full Stack, Mobile, DevOps & Python developer from Palakkad, Kerala. Open to freelance and full-time opportunities.",
    siteName: "Deepak Das — Developer Portfolio",
    images: [{ url: "https://www.deepakdas.online/og-image.png", width: 1200, height: 630, alt: "Deepak Das - Flutter & Full Stack Developer Palakkad Kerala" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepak Das | Flutter & Full Stack Developer — Palakkad, Kerala",
    description: "Flutter, Full Stack, Mobile, DevOps & Python developer from Palakkad, Kerala. Open to freelance and full-time opportunities.",
    creator: "@deepakdasd07",
    images: ["https://www.deepakdas.online/og-image.png"],
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
  // verification: {
  //   google: "insert-google-verification-id",
  //   yandex: "insert-yandex-verification-id",
  //   yahoo: "insert-yahoo-verification-id",
  //   other: {
  //     "msvalidate.01": ["insert-bing-verification-id"],
  //   },
  // },
};

export const viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Person Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Deepak Das",
            "jobTitle": "Flutter & Full Stack Developer",
            "description": "Flutter, Full Stack (React/Node.js), Mobile App (Android/iOS), DevOps and Python developer based in Palakkad, Kerala.",
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
              "https://www.linkedin.com/in/deepak-das-d-76768034a/"
            ],
            "knowsAbout": [
              "Flutter", "Dart", "React", "Node.js", "Next.js",
              "Android", "iOS", "Python", "DevOps", "Docker",
              "CI/CD", "Firebase", "REST APIs", "PostgreSQL", "MongoDB",
              "AWS", "WebSockets", "WebRTC"
            ],
            "worksFor": {
              "@type": "Organization",
              "name": "Techfifo Innovations"
            }
          })}}
        />

        {/* ProfessionalService Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Deepak Das — Flutter & Full Stack Developer",
            "description": "Flutter, Full Stack (React/Node.js), Mobile App (Android/iOS), DevOps and Python developer based in Palakkad, Kerala. Available for freelance and full-time work.",
            "url": "https://www.deepakdas.online",
            "telephone": "+919496407635",
            "email": "deepakdas.since2004@gmail.com",
            "image": "https://www.deepakdas.online/og-image.png",
            "founder": {
              "@type": "Person",
              "name": "Deepak Das",
              "jobTitle": "Flutter & Full Stack Developer",
              "url": "https://www.deepakdas.online",
              "sameAs": [
                "https://github.com/deepakdas-d",
                "https://www.linkedin.com/in/deepak-das-d-76768034a/"
              ]
            },
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
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile App Development (Android & iOS)" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "DevOps & Cloud Infrastructure" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Python Development & Automation" } }
              ]
            },
            "knowsAbout": [
              "Flutter", "Dart", "React", "Node.js", "Next.js",
              "Android", "iOS", "Python", "DevOps", "Docker",
              "CI/CD", "Firebase", "REST APIs", "PostgreSQL", "MongoDB"
            ]
          })}}
        />

        {/* WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Deepak Das — Developer Portfolio",
            "url": "https://www.deepakdas.online",
            "description": "Portfolio of Deepak Das, Flutter & Full Stack Developer from Palakkad, Kerala, India",
            "author": {
              "@type": "Person",
              "name": "Deepak Das"
            }
          })}}
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
