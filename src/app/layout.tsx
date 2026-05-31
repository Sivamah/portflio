import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Siva Subramanian M — CSE Student & Software Engineer",
  description:
    "Final-year Computer Science Engineering student passionate about Data Science, AI, Cloud Computing, and Software Engineering. Building intelligent solutions that combine technology and business.",
  keywords: [
    "Siva Subramanian M",
    "Computer Science",
    "Software Engineer",
    "Data Science",
    "AI",
    "AWS",
    "Cloud Engineering",
    "Dr NGP Institute",
    "Portfolio",
  ],
  authors: [{ name: "Siva Subramanian M", url: "mailto:sivamah25@gmail.com" }],
  openGraph: {
    title: "Siva Subramanian M — Portfolio",
    description:
      "Building intelligent solutions using Data Science, AI, Cloud Computing, and Software Engineering.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,300;0,14..32,400;0,14..32,500;0,14..32,600;0,14..32,700;0,14..32,800;0,14..32,900;1,14..32,400&family=Sora:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
