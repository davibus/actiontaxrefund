import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Action Tax Refund | Professional Tax Services in Yuba City, CA",
  description: "Mark D. Call provides expert tax preparation and professional services in Yuba City, CA. Get your maximum refund with personalized attention and years of experience.",
  keywords: "tax preparation, tax refund, Yuba City, CA, Mark D. Call, tax services, accounting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
