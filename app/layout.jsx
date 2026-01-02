import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://abhaymaurya-me.vercel.app"), // 🔴 change to your real domain

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
        url: "/about.jpg", // 🔴 add this image in /public
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
    creator: "@theabhaywebdev", // 🔴 optional
    images: ["/about.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  verification: {
    google: "bb8dcfd303bf62ea", // 🔴 optional
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

