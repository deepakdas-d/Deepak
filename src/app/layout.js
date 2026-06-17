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
  description: "Deepak Das is a Full Stack Developer from Kerala, India, specializing in Flutter, Django, and React.js. Building scalable cross-platform apps and robust backend systems.",
  keywords: [
    "Deepak Das",
    "Full Stack Developer",
    "Flutter Developer Kerala",
    "Django Developer India",
    "React Developer",
    "Cross-Platform App Developer",
    "Mobile App Developer Kerala",
    "Backend Developer India",
    "Flutter Expert",
    "REST API Developer",
    "AWS Developer India",
    "Software Engineer Kerala",
    "Hire Flutter Developer"
  ],
  authors: [{ name: "Deepak Das" }],
  creator: "Deepak Das",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.deepakdas.online",
    title: "Deepak Das | Full Stack Developer",
    description: "Flutter, Android, Backend & Web Developer",
    siteName: "Deepak Das Portfolio",
    images: [{ url: "https://www.deepakdas.online/og-image.png", width: 1200, height: 630, alt: "Deepak Das - Full Stack Developer Kerala" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepak Das | Full Stack Developer",
    description: "Flutter, Android, Backend & Web Developer",
    creator: "@deepakdasd07",
    images: ["https://www.deepakdas.online/og-image.png"],
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
        {/* Person Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Deepak Das",
            "jobTitle": "Full Stack Developer",
            "description": "Full Stack Developer from Kerala, India specializing in Flutter, Django, and React.js",
            "url": "https://www.deepakdas.online",
            "email": "enquiry@deepakdas.online",
            "image": "https://www.deepakdas.online/images/deepak.jpeg",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Kerala",
              "addressCountry": "IN"
            },
            "sameAs": [
              "https://github.com/deepakdas-d",
              "https://www.linkedin.com/in/deepak-das-d-76768034a/"
            ],
            "knowsAbout": [
              "Flutter", "Dart", "Django", "React.js",
              "AWS", "WebSockets", "WebRTC", "REST API",
              "Full Stack Development", "DevOps"
            ],
            "worksFor": {
              "@type": "Organization",
              "name": "Techfifo Innovations"
            }
          })}}
        />

        {/* WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Deepak Das Portfolio",
            "url": "https://www.deepakdas.online",
            "description": "Portfolio of Deepak Das, Full Stack Developer from Kerala, India",
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
