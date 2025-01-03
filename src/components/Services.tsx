import { HiCode, HiCog, HiChartBar, HiLightningBolt } from "react-icons/hi";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Digital Transformation",
    description:
      "Transform your business with modern digital solutions and strategies.",
    Icon: HiCog,
  },
  {
    title: "Custom Development",
    description:
      "Build tailored software solutions to meet your specific needs.",
    Icon: HiCode,
  },
  {
    title: "Data Analytics",
    description:
      "Leverage data-driven insights to make informed business decisions.",
    Icon: HiChartBar,
  },
  {
    title: "Automations",
    description:
      "Automate your business processes to save time and increase efficiency.",
    Icon: HiLightningBolt,
  },
];

export default function Services() {
  return (
    <div className="bg-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Our Services
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Comprehensive technology solutions for your business needs.
          </p>
          <p className="mt-2 text-lg text-gray-500">
            From custom software development to digital transformation, we help businesses scale, automate, and innovate in today's digital landscape.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
