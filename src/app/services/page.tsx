import Header from "@/components/Header";
import Services from "@/components/Services";
import ServicesDetails from "@/components/ServicesDetails";

export default function ServicesPage() {
  return (
    <main className="min-h-[calc(100vh-theme(spacing.16)-theme(spacing.16))]">
      <Services />
      <ServicesDetails />
    </main>
  );
}
