import Services from "@/components/Services";
import MatrixHero from "@/components/MatrixHero";

export default function ServicesPage() {
  return (
    <main className="min-h-[calc(100vh-theme(spacing.16)-theme(spacing.16))]">
      <MatrixHero />
      <Services />
    </main>
  );
}
