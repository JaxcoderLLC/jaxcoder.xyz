import Services from "@/components/Services";
import { AIHero } from "@/components/AIHero";
import Link from "next/link";
import Projects from "@/components/Projects";
import { Button } from "@/components/ui/button";
import MatrixHero from "@/components/MatrixHero";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Google Tag Manager (noscript) */}
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TCQFDWGF"
        height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
      {/* End Google Tag Manager (noscript) */}
      <MatrixHero />
      <Services />
      <Projects />
      {/* Call to Action */}
      <div className="mt-12 text-center z-20">
        <Link href="/contact">
          <Button>Contact Us Today</Button>
        </Link>
      </div>
    </main>
  );
}
