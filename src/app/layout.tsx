import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover", // Enable edge-to-edge on modern mobile browsers
  themeColor: "#FFFFFF", // Match background for transparent nav bar
};

export const metadata: Metadata = {
  title: "Eptesicus Laboratories",
  description: "Reliability Engineering for Local AI.",
};

import { LanguageProvider } from "@/components/providers/LanguageProvider";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <SmoothScrollProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
