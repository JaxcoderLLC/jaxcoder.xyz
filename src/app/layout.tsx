import type { Metadata } from "next";
import { StackProvider, StackTheme } from "@stackframe/stack";
import { stackServerApp } from "../stack";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jaxcoder LLC",
  description: "Jaxcoder LLC is a cutting edge technology company",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleAnalytics />
        <StackProvider app={stackServerApp}>
          <StackTheme>
            <div className="min-h-screen flex flex-col bg-white">
              <AnimatedBackground />
              <div className="relative z-10">
                <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
                  <Header />
                  <main className="flex-grow">
                    {children}
                  </main>
                  <Footer />
                </div>
              </div>
            </div>
          </StackTheme>
        </StackProvider>
      </body>
    </html>
  );
}
