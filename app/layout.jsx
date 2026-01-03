import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://abhaymaurya-me.vercel.app"),

  title: {
    default: "Abhay Maurya | Full Stack Developer",
    template: "%s | Abhay Maurya",
  },

  description:
    "Abhay Maurya is a Full Stack Developer skilled in MERN, Next.js, UI/UX design, and modern web technologies. Building scalable and high-performance web applications.",

  keywords: [
    "Abhay Maurya",
    "Full Stack Developer",
    "MERN Developer",
    "Next.js Developer",
    "React Developer",
    "UI UX Designer",
    "Web Developer India",
  ],

  authors: [{ name: "Abhay Maurya" }],
  creator: "Abhay Maurya",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },

  openGraph: {
    title: "Abhay Maurya | Full Stack Developer",
    description:
      "Portfolio of Abhay Maurya – Full Stack Developer specializing in MERN stack, Next.js, modern UI/UX design and DevOps Engineer.",
    url: "https://abhaymaurya-me.vercel.app",
    siteName: "Abhay Maurya Portfolio",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "Abhay Maurya - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Abhay Maurya | Full Stack Developer",
    description:
      "Self-taught Full Stack Developer working with MERN, Next.js, modern UI/UX design and DevOps Engineer.",
    creator: "@theabhaywebdev",
    images: ["/hero.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-96x96.png",
    apple: "/apple-touch-icon.png",
  },

  verification: {
    google: "h6MzCoJdtdwQYfqGkqnK5K0Uvoqz-QGLcuLppfHgLfk", // Google Search Console Verification
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZSE6JSTQZ8"
          strategy="afterInteractive"
        />

        {/* Google Analytics inline config */}
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZSE6JSTQZ8');
          `}
        </Script>


        {children}
      </body>
    </html>
  );
}
