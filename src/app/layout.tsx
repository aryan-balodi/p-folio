import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aryan Balodi",
  description: "Portfolio-website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} antialiased bg-ide-black text-ide-white`}
      >
        <div className="relative z-10 h-full w-full p-6 md:p-12 overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
