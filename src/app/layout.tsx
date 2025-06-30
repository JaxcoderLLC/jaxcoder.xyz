import type { Metadata } from "next";
import { StackProvider, StackTheme } from "@stackframe/stack";
import { stackServerApp } from "../stack";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jax Labs",
  description: "Jax Labs is a cutting edge technology company",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <GoogleAnalytics />
        <StackProvider app={stackServerApp}>
          <StackTheme>
            <ThemeProvider
              defaultTheme="system"
              storageKey="jaxlabs-ui-theme"
            >
              <div className="min-h-screen flex flex-col bg-background text-foreground">
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
            </ThemeProvider>
          </StackTheme>
        </StackProvider>
        <Analytics />
      </body>
    </html>
  );
}
