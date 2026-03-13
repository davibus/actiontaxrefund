import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GTMTracker from "@/components/GTMTracker";

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
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KTF9P59N');
          `}
        </Script>
      </head>
      <body className="antialiased min-h-screen flex flex-col touch-manipulation">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KTF9P59N"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <GTMTracker />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
