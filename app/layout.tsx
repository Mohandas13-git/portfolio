import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/lib/constants";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { CustomCursor } from "@/components/ui/CustomCursor";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Full Stack Developer | AI Builder`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Mohandas Rathod",
    "Full Stack Developer",
    "AI Builder",
    "Computer Science Engineering",
    "Distributed Systems",
    "Portfolio",
    "BMSCE",
    "React",
    "Next.js",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: `${siteConfig.name} — Full Stack Developer | AI Builder`,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Full Stack Developer | AI Builder`,
    description: siteConfig.description,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: "Full Stack Developer",
  description: siteConfig.description,
  url: siteConfig.url,
  sameAs: [siteConfig.github, siteConfig.linkedin],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="bg-[#050505] text-white antialiased"
        style={{
          fontFamily: "'Inter', system-ui, sans-serif",
        }}
      >
        <style
          dangerouslySetInnerHTML={{
            __html: `
          :root {
            --font-display: 'Space Grotesk', system-ui, sans-serif;
            --font-sans: 'Inter', system-ui, sans-serif;
            --font-mono: 'JetBrains Mono', ui-monospace, monospace;
          }
        `,
          }}
        />
        <SmoothScroll>
          <CustomCursor />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
