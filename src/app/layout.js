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
  keywords: ["Deepak Das", "Full Stack Developer", "Flutter Expert", "Django Developer", "React Developer", "Portfolio", "Software Engineer"],
  authors: [{ name: "Deepak Das" }],
  creator: "Deepak Das",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.deepakdas.online",
    title: "Deepak Das | Full Stack Developer",
    description: "Full Stack Developer specializing in Flutter, Django, and React.js. Crafting seamless digital experiences and scalable infrastructure.",
    siteName: "Deepak Das Portfolio",
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
  alternates: {
    canonical: "https://www.deepakdas.online",
  }
};

export const viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({ children }) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Deepak Das",
    "jobTitle": "Full Stack Developer",
    "url": "https://www.deepakdas.online",
    "sameAs": [
      "https://github.com/deepakdas-d",
      "https://www.linkedin.com/in/deepak-das-d-76768034a/"
    ],
    "email": "mailto:enquiry@deepakdas.online",
    "knowsAbout": ["Flutter", "Django", "React.js", "AWS", "WebRTC"]
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
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
