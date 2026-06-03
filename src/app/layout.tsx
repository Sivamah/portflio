import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Siva Subramanian M — Software Engineer Portfolio",
  description:
    "Final-year Computer Science Engineering student. Building scalable software solutions using Java, AWS, Cloud Technologies, and Backend Development.",
  keywords: [
    "Siva Subramanian M",
    "Computer Science",
    "Software Engineer",
    "Java",
    "AWS",
    "Cloud Engineering",
    "Backend Development",
    "Portfolio",
  ],
  authors: [{ name: "Siva Subramanian M", url: "mailto:sivamah25@gmail.com" }],
  openGraph: {
    title: "Siva Subramanian M — Software Engineer Portfolio",
    description:
      "Building scalable software solutions using Java, AWS, Cloud Technologies, and Backend Development.",
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
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Space+Grotesk:wght@300;400;500;600;700&family=Orbitron:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
