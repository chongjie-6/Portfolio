import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chongjie Chen Portfolio — Full-Stack Developer",
  description:
    "Portfolio of Chongjie Chen, full-stack developer, showcasing projects and skills in software development.",
  openGraph: {
    type: "website",
    url: "https://portfolio-chongjie-6s-projects.vercel.app/",
    title: "Chongjie Chen Portfolio",
    description:
      "Portfolio of Chongjie Chen, full-stack developer, showcasing projects and skills in software development.",
    siteName: "Chongjie Chen Portfolio",
    images: [
      {
        url: `https://portfolio-chongjie-6s-projects.vercel.app/portfolio_og.png`,
        width: 1200,
        height: 630,
        alt: "Chongjie Chen Portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="dY_6eOhoCuGAJXOnnBapyufDlxdRYvCZN2Art3_GHZY"
        />
      </head>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
