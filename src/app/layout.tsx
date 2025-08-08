import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SuccessFriends.ai",
  description: "AI-powered platform to turn life goals into action",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100 h-screen flex text-sm`}>
        {children}
      </body>
    </html>
  );
}
