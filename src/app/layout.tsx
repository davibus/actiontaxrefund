import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Action Tax Refund | Professional Tax Services in Yuba City, CA",
  description: "Mark D. Call, EA provides expert tax preparation and professional services in Yuba City, CA. Get your maximum refund with personalized attention and years of experience.",
  keywords: "tax preparation, tax refund, Yuba City, CA, Mark D. Call, EA, tax services, accounting",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1e3a5f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col touch-manipulation">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
