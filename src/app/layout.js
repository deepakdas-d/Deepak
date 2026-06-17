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
    default: "Deepak Das | Full Stack Developer | Flutter, Django & AWS Developer Kerala India",
    template: "%s | Deepak Das | Full Stack Developer"
  },
  description: "Full Stack Developer from Kerala, India specializing in Flutter, Django, AWS, Firebase and scalable web and mobile applications.",
  authors: [{ name: "Deepak Das" }],
  creator: "Deepak Das",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.deepakdas.online",
    title: "Deepak Das | Full Stack Developer | Flutter, Django & AWS Developer Kerala India",
    description: "Full Stack Developer from Kerala, India specializing in Flutter, Django, AWS, Firebase and scalable web and mobile applications.",
    siteName: "Deepak Das Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepak Das | Full Stack Developer | Flutter, Django & AWS Developer Kerala India",
    description: "Full Stack Developer from Kerala, India specializing in Flutter, Django, AWS, Firebase and scalable web and mobile applications.",
    creator: "@deepakdasd07",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://www.deepakdas.online"),
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "insert-google-verification-id",
    yandex: "insert-yandex-verification-id", // Often used for Bing as well in some structures, but we can also use other
    yahoo: "insert-yahoo-verification-id",
    other: {
      "msvalidate.01": ["insert-bing-verification-id"],
    },
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Deepak Das",
              "url": "https://www.deepakdas.online",
              "image": "https://www.deepakdas.online/images/deepak.jpeg",
              "jobTitle": "Full Stack Developer",
              "description": "Full Stack Developer from Kerala, India specializing in Flutter, Django, AWS, Firebase and scalable web and mobile applications.",
              "email": "enquiry@deepakdas.online",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Kochi",
                "addressRegion": "Kerala",
                "addressCountry": "India"
              },
              "sameAs": [
                "https://github.com/deepakdas-d",
                "https://www.linkedin.com/in/deepak-das-d-76768034a/"
              ],
              "knowsAbout": ["Flutter", "Django", "React.js", "AWS", "Firebase", "WebRTC", "FastAPI"],
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance / Remote Developer"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Deepak Das Portfolio",
              "url": "https://www.deepakdas.online",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.deepakdas.online/?s={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "ProfilePage",
              "dateCreated": "2024-01-01T00:00:00+05:30",
              "dateModified": new Date().toISOString(),
              "mainEntity": {
                "@id": "https://www.deepakdas.online/#person"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.deepakdas.online/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Experience",
                  "item": "https://www.deepakdas.online/#experience"
                }
              ]
            }
          ])}}
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
