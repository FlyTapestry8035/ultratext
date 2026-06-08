import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://ultratext.ai";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ultra Text — The Context Engine for AI",
    template: "%s — Ultra Text",
  },
  description:
    "Ultra Text connects your emails, documents, meetings, chats, financial systems, and business tools into a living context layer that every AI can understand.",
  keywords: [
    "AI context engine",
    "context layer",
    "AI memory",
    "business intelligence",
    "AI agents",
    "unified data",
    "LLM context",
    "Ultra Text",
  ],
  authors: [{ name: "Ultra Text" }],
  creator: "Ultra Text",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Ultra Text — The Context Engine for AI",
    description:
      "Connect your business once. Power every AI forever. The living context layer that every model can understand.",
    siteName: "Ultra Text",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ultra Text — The Context Engine for AI",
    description:
      "Connect your business once. Power every AI forever.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#050507",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
