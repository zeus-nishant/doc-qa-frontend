import { GeminiProvider } from "../context/GeminiContext";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Document Q&A",
  description: "Ask questions about your documents.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GeminiProvider>{children}</GeminiProvider>
      </body>
    </html>
  );
}