import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// import { Spotlight } from "@/components/Spotlight";

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
        <div className="min-h-screen flex flex-col bg-gray-50">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
            {/* <Spotlight
              className="-top-40 left-0 md:left-60 md:-top-20"
            /> */}
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
