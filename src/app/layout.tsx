import Providers from "@/context/Providers";
import "@rainbow-me/rainbowkit/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jaxcoder LLC",
  description:
    "Jaxcoder LLC is a software development company based in Jax, FL",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-black">
      <Providers>
        <main className="dark flex min-h-screen flex-col items-center justify-between pt-80">
          {children}
        </main>
      </Providers>
    </html>
  );
}
