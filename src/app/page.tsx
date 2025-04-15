import Services from "@/components/Services";
import { AIHero } from "@/components/AIHero";
import { MagnetizeButton } from "@/components/MagnetButton";
import Link from "next/link";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen m-4">
      {/* Google Tag Manager (noscript) */}
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TCQFDWGF"
      height="0" width="0" style={{display:"none",visibility:"hidden"}}></iframe></noscript>
      {/* End Google Tag Manager (noscript) */}
      <AIHero />
      <Services />
      <Projects />
      {/* Call to Action */}
      <div className="mt-12 text-center z-20">
        <Link href="/contact">
          <MagnetizeButton particleCount={10} attractRadius={1000}>Contact Us Today</MagnetizeButton>
        </Link>
      </div>
    </main>
  );
}
