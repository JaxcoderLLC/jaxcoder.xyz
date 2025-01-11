import Header from '@/components/Header';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  return (
    <div className="min-h-[calc(100vh-theme(spacing.16)-theme(spacing.16))]">
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
            Contact Us
          </h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;