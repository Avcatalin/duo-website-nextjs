import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import HeaderComponent from "@/components/Header/Header";
import "./globals.css";
import Footer from "@/components/Footer/Footer";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ['400', '700']
});

export const metadata: Metadata = {
  title: "Duo Design Advertising",
  description: "Web design and marketing agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Duo Design Advertising</title>
      </head>
      <body
        className={`${sourceSans.variable} antialiased`}
      >
        <HeaderComponent />
        {children}
        <Footer />
      </body>
    </html>
  );
}
