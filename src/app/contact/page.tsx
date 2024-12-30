import Header from '@/components/Header';
import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Contact Us</h2>
          <ContactForm />
        </div>
      </div>
    </main>
  );
}