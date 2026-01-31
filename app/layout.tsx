import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PulseTrack Fitness",
  description:
    "Personalized fitness coaching, workout plans, and nutrition tracking for a healthier lifestyle."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-slate-950 text-slate-100">
      <body className={`${inter.className} flex min-h-screen flex-col`}>
        {children}
      </body>
    </html>
  );
}
