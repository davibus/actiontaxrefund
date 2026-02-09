import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Action Tax Refund | Professional Tax Services in Yuba City, CA",
  description: "Mark D. Call, CRTP provides expert tax preparation and professional services in Yuba City, CA. Get your maximum refund with personalized attention and years of experience.",
  keywords: "tax preparation, tax refund, Yuba City, CA, Mark D. Call, CRTP, tax services, accounting",
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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17940935436"
          strategy="afterInteractive"
        />
        <Script id="google-tags" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17940935436');
            gtag('config', 'G-FX1D385BEK');
          `}
        </Script>
      </head>
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
