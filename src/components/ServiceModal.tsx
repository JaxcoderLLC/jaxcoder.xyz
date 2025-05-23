import { IconType } from 'react-icons';
import { MagnetizeButton } from './MagnetButton';
import Link from 'next/link';
import { Button } from './ui/button';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  Icon: IconType;
  details: string[];
}

const ServiceModal = ({ isOpen, onClose, title, description, Icon, details }: ServiceModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xl">
      <div className="bg-gradient-to-b from-white to-gray-50 rounded-xl max-w-2xl w-full p-8 relative shadow-[0_0_15px_rgba(0,0,0,0.2)] border border-white/20">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex items-center space-x-4 mb-8">
          <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-violet-600 text-white shadow-lg shadow-violet-600/30">
            <Icon className="h-6 w-6" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        </div>

        <p className="text-gray-600 mb-8 text-lg">{description}</p>

        <div className="space-y-4 mb-8">
          {details.map((detail, index) => (
            <div key={index} className="flex items-start space-x-3 group">
              <div className="flex-shrink-0 w-8 h-8 mt-1 rounded-full bg-violet-600 text-white flex items-center justify-center text-sm font-medium shadow-lg shadow-violet-600/20 group-hover:shadow-violet-600/40 transition-shadow">
                {index + 1}
              </div>
              <p className="mt-2 text-gray-700 group-hover:text-gray-900 transition-colors">{detail}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center pt-4 border-t border-gray-100">
          <Link href="/contact">
            <Button>
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal; 