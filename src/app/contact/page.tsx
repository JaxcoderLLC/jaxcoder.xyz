import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <main className="min-h-[calc(100vh-theme(spacing.16)-theme(spacing.16))] p-4 sm:p-6 lg:p-8">
      <ContactForm />
    </main>
  );
}