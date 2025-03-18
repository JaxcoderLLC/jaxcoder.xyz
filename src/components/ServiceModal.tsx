import { IconType } from 'react-icons';
import { MagnetizeButton } from './MagnetButton';
import Link from 'next/link';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-white rounded-lg max-w-2xl w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex items-center space-x-4 mb-6">
          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-black text-white">
            <Icon className="h-6 w-6" />
          </div>
          <h2 className="text-2xl font-bold text-black">{title}</h2>
        </div>

        <p className="text-gray-600 mb-6">{description}</p>

        <div className="space-y-4 mb-8">
          {details.map((detail, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-5 h-5 mt-1 rounded-full bg-black text-white flex items-center justify-center text-xs">
                {index + 1}
              </div>
              <p className="text-gray-700">{detail}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link href="/contact">
            <MagnetizeButton particleCount={20} attractRadius={150}>
              Get Started
            </MagnetizeButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal; 