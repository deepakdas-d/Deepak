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
    default: "Deepak Das | Full Stack Developer",
    template: "%s | Deepak Das"
  },
  description: "Deepak Das is a Full Stack Developer specializing in Flutter, Django, and React.js. Building scalable cross-platform applications and robust backend systems.",
  keywords: ["Deepak Das", "Full Stack Developer", "Flutter Expert", "Django Developer", "React Developer", "Portfolio", "Software Engineer", "hire Flutter developer Kerala", "Django REST API developer", "cross-platform app developer India"],
  authors: [{ name: "Deepak Das" }],
  creator: "Deepak Das",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.deepakdas.online",
    title: "Deepak Das | Full Stack Developer",
    description: "Full Stack Developer specializing in Flutter, Django, and React.js. Crafting seamless digital experiences and scalable infrastructure.",
    siteName: "Deepak Das Portfolio",
    images: [
      {
        url: 'https://www.deepakdas.online/images/deepak.jpeg',
        width: 1200,
        height: 630,
        alt: 'Deepak Das - Full Stack Developer'
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepak Das | Full Stack Developer",
    description: "Full Stack Developer specializing in Flutter, Django, and React.js.",
    creator: "@deepakdasd07",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://www.deepakdas.online"),
  alternates: {
    canonical: "/",
  }
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Deepak Das",
            "url": "https://www.deepakdas.online",
            "jobTitle": "Full Stack Developer",
            "email": "enquiry@deepakdas.online",
            "sameAs": [
              "https://github.com/deepakdas-d",
              "https://www.linkedin.com/in/deepak-das-d-76768034a/"
            ],
            "knowsAbout": ["Flutter", "Django", "React.js", "AWS", "FastAPI"]
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
