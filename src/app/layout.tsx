import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AppProviders from "@/providers/AppProviders";
import Footer from "@/components/Footer";
import Script from "next/script";
import { Toaster } from "react-hot-toast";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hardware Dynamic",
  description: "At Hardware Dynamic, we envision a world where brands are remembered not only by what they say but also by how they present themselves.Our vision is to become the most trusted printing and packaging partner for businesses that value innovation, quality, and emotional impact.We want every product we create to inspire trust, strengthen identity, and fuel brand growth.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="beforeInteractive" />
        <AppProviders>
          <Navbar />
          {children}
          <Toaster position="top-right" />
          <Footer />
          <FloatingWhatsApp />
        </AppProviders>
      </body>
    </html>
  );
}
