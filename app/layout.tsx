import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.redtorii.com"),
  title: "Red Torii — The Anti-Impersonation Platform for Companies",
  description:
    "Protect your customers from fraud and impersonation. Register your official phone numbers, emails, and social handles — so people always know who they're really talking to.",
  openGraph: {
    title: "Red Torii — The Anti-Impersonation Platform for Companies",
    description:
      "Protect your customers from fraud and impersonation across every channel.",
    siteName: "Red Torii",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Red Torii — The Anti-Impersonation Platform for Companies",
    description:
      "Protect your customers from fraud and impersonation across every channel.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
