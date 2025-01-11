import { IconType } from 'react-icons';

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: IconType;
}

export default function ServiceCard({ title, description, Icon }: ServiceCardProps) {
  return (
    <div className="flex flex-col items-center p-6 bg-green-100 rounded-lg">
      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-4 text-lg font-medium text-green-900">{title}</h3>
      <p className="mt-2 text-base text-green-500 text-center">{description}</p>
    </div>
  );
}