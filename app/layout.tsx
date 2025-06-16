import "./globals.css";
import type { Metadata } from "next";
import { Inter, VT323, Share_Tech_Mono } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const vt323 = VT323({ 
  weight: "400",
  subsets: ["latin"],
  variable: "--font-terminal"
});
const shareTechMono = Share_Tech_Mono({ 
  weight: "400",
  subsets: ["latin"],
  variable: "--font-mono"
});

export const metadata: Metadata = {
  title: "VOID DARK WEB MARKET | RASTE KA MAAL SASTE ME",
  description: "Educational cyberpunk dark web marketplace simulation by AAYUSH SIR - CHOR BAZAR",
  keywords: "cyberpunk, dark web, simulation, demo",
  robots: "noindex, nofollow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`
          ${inter.className}
          ${vt323.variable}
          ${shareTechMono.variable}
          bg-gradient-to-r
          from-black
          via-purple-900
          to-black
          bg-[length:300%_300%]
          animate-slide-neon
          text-white
          overflow-x-hidden
        `}
      >
        {children}
      </body>
    </html>
  );
}
