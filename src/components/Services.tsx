import {
  HiCode,
  HiCog,
  HiChartBar,
  HiLightningBolt,
  HiLockClosed,
  HiCloud,
} from "react-icons/hi";
import ServiceCard from "./ServiceCard";
import Link from "next/link";
import ContactForm from "./ContactForm";
import ServicesDetails from "./ServicesDetails";

const services = [
  {
    title: "HIPAA Compliance",
    description:
      "We develop HIPAA compliant software to ensure the security and privacy of your patient data.",
    Icon: HiLockClosed,
  },
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
    title: "Cloud Solutions",
    description:
      "Leverage the power of cloud computing to scale your business.",
    Icon: HiCloud,
  },
  // {
  //   title: "Data Analytics",
  //   description:
  //     "Leverage data-driven insights to make informed business decisions.",
  //   Icon: HiChartBar,
  // },
  // {
  //   title: "Automations",
  //   description:
  //     "Automate your business processes to save time and increase efficiency.",
  //   Icon: HiLightningBolt,
  // },
];

export default function Services() {
  return (
    <div className="py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-primary-900">
            Our Services
          </h2>
          <p className="mt-4 text-xl text-primary-600">
            Comprehensive technology solutions for your business needs.
          </p>
          <p className="mt-2 text-lg text-primary-600">
            From custom software development to digital transformation, we help
            businesses scale, automate, and innovate in today's digital
            landscape.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="shadow-md hover:shadow-2xl bg-primary-100 rounded-lg overflow-hidden transition-all duration-300 border border-primary-200"
              >
                <div className="p-6">
                  <ServiceCard {...service} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
