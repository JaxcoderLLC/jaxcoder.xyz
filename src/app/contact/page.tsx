import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <main className="min-h-[calc(100vh-theme(spacing.16)-theme(spacing.16))] p-4 mt-8 -mb-24">
      <ContactForm />
    </main>
  );
}