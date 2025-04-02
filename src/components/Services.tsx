"use client";

import { IconType } from 'react-icons';
import Link from 'next/link';
import {
  FaCode,
  FaMobileAlt,
  FaDesktop,
  FaBrain,
  FaEthereum,
  FaRobot
} from 'react-icons/fa';
import { MagnetizeButton } from './MagnetButton';
import MetallicButton from './MetallicButton';
import ServiceModal from './ServiceModal';
import { useState } from 'react';

// Service card component
const ServiceCard = ({ title, description, Icon, onClick }: {
  title: string;
  description: string;
  Icon: IconType;
  onClick: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center p-6 bg-white rounded-lg border border-gray-200 transition-all duration-300 hover:shadow-lg hover:border-primary-500 group h-full cursor-pointer"
    >
      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-black text-white transition-colors duration-300 group-hover:bg-primary-600">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-4 text-lg font-medium text-center text-black group-hover:text-primary-600 transition-colors duration-300">{title}</h3>
      <p className="mt-2 text-base text-gray-600 text-center">{description}</p>
    </div>
  );
};

const Services = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const servicesData = [
    {
      title: "AI Agents",
      description: "AI agents that can help you with your business.",
      Icon: FaBrain,
      details: [
        "Custom AI solutions tailored to your business needs",
        "Natural language processing and understanding",
        "Automated task handling and decision making",
        "Integration with existing business systems",
        "24/7 availability and scalability"
      ]
    },
    {
      title: "Custom Software Development",
      description: "Tailored software solutions designed to address your specific business challenges and goals.",
      Icon: FaCode,
      details: [
        "End-to-end custom software development",
        "Scalable and maintainable solutions",
        "Modern tech stack and best practices",
        "Agile development methodology",
        "Comprehensive testing and quality assurance"
      ]
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      Icon: FaMobileAlt,
      details: [
        "iOS and Android app development",
        "Cross-platform solutions with React Native",
        "User-centric design and UX",
        "App store optimization",
        "Performance optimization and testing"
      ]
    },
    {
      title: "Blockchain Development",
      description: "Scalable, secure, and cost-effective blockchain development services.",
      Icon: FaEthereum,
      details: [
        "Smart contract development",
        "DApp creation and deployment",
        "Blockchain integration services",
        "Security auditing and testing",
        "Token development and management"
      ]
    },
    {
      title: "Web Application Development",
      description: "Responsive, modern web applications built with the latest technologies.",
      Icon: FaDesktop,
      details: [
        "Full-stack web development",
        "Progressive Web Apps (PWA)",
        "Cloud-native applications",
        "API development and integration",
        "Performance optimization"
      ]
    },
    {
      title: "Automations",
      description: "Automations that can help you with your business.",
      Icon: FaRobot,
      details: [
        "Workflow automation solutions",
        "Process optimization",
        "Integration with existing tools",
        "Custom automation scripts",
        "Monitoring and maintenance"
      ]
    }
  ];

  return (
    <div className="w-full py-8">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg hover:shadow-purple-500 transition-all duration-300 border border-gray-200 h-full">
              <div className="p-6 h-full">
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  Icon={service.Icon}
                  onClick={() => setSelectedService(index)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Modal */}
      {selectedService !== null && (
        <ServiceModal
          isOpen={selectedService !== null}
          onClose={() => setSelectedService(null)}
          title={servicesData[selectedService].title}
          description={servicesData[selectedService].description}
          Icon={servicesData[selectedService].Icon}
          details={servicesData[selectedService].details}
        />
      )}

      {/* HIPAA CTA Section */}
      <div className="mt-16 relative overflow-hidden bg-gradient-to-br from-gray-50 to-white p-8 rounded-lg border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-black opacity-5 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-black opacity-5 rounded-full translate-y-12 -translate-x-12"></div>

        <div className="relative flex flex-col lg:flex-row items-center">
          <div className="lg:w-2/3 lg:pr-8">
            <div className="inline-block px-3 py-1 bg-black text-white text-sm font-medium rounded-full mb-4">
              Healthcare Compliance
            </div>
            <h3 className="text-3xl font-bold text-black mb-4">
              HIPAA Compliance Solutions
            </h3>
            <p className="text-gray-700 mb-6 text-lg">
              Ensure your healthcare technology meets all regulatory requirements with our specialized HIPAA compliance services.
            </p>
          </div>
          <div className="lg:w-1/3 flex justify-center mt-6 lg:mt-0">
            <Link href="/services/hipaa">
              <MetallicButton>
                Learn More
              </MetallicButton>
            </Link>
          </div>
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="mt-16 bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">
              Our Approach
            </h2>
            <div className="w-24 h-1 bg-black mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">Discovery & Planning</h3>
                  <p className="text-gray-600">We begin by understanding your business needs and objectives through detailed consultation and analysis.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">Design & Development</h3>
                  <p className="text-gray-600">Our team works closely with you to design and develop the optimal solution using cutting-edge technologies.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">Agile Methodology</h3>
                  <p className="text-gray-600">We employ agile methodologies to ensure flexibility and transparency throughout the development process.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">Regular Updates</h3>
                  <p className="text-gray-600">Regular updates and feedback sessions keep you informed and involved throughout the process.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold">5</div>
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">Quality Assurance</h3>
                  <p className="text-gray-600">Comprehensive testing ensures high-quality, reliable deliverables that meet your expectations.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold">6</div>
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">Ongoing Support</h3>
                  <p className="text-gray-600">We provide continuous support and maintenance to ensure your solution remains optimal.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 italic">
              "Whether you need a complete digital transformation or assistance with a specific technology challenge, our team has the expertise to help you succeed."
            </p>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Services;
