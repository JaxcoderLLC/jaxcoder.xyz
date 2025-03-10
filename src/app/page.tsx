import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import { AIHero } from "@/components/AIHero";

export default function Home() {
  return (
    <main className="min-h-screen m-4">
      <AIHero />
      <Services />
    </main>
  );
}
