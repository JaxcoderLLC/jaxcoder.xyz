"use client";

import { FormEvent, useState } from "react";
import { FormData } from "../app/types";

const services = [
  "HIPAA Compliance",
  "Custom Software Development",
  "Digital Transformation",
  "Blockchain Development",
  "Automations",
  "AI Agents",
  "Mobile App Development",
  "Web Application Development",
];

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isFormValid = () => {
    return (
      formData.name.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.interest !== ""
    );
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);

    // send data to airtable
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const body = {
      records: [
        {
          fields: {
            Name: formData.name,
            Email: formData.email,
            Phone: formData.phone,
            Interest: formData.interest,
            Message: formData.message,
          },
        },
      ],
    };

    const options = {
      method: "POST",
      headers,
      mode: "cors" as RequestMode,
      body: JSON.stringify(body),
    };

    try {
      await fetch("https://eoyup90ouj6jede.m.pipedream.net", options);
      // Clear form
      setFormData({
        name: "",
        email: "",
        phone: "",
        interest: "",
        message: "",
      });
      // Show success message
      setIsSubmitted(true);

      // Hide success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 10000);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div>
      {isSubmitted && (
        <div className="mb-4 sm:mb-6 p-4 sm:p-6 rounded-lg bg-green-50 border border-green-200 shadow-sm animate-fade-in">
          <div className="flex items-start sm:items-center space-x-3">
            <div className="flex-shrink-0 mt-1 sm:mt-0">
              <svg className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-base sm:text-lg font-medium text-green-900 mb-0.5 sm:mb-1">
                Message Received!
              </h3>
              <p className="text-sm sm:text-base text-green-700">
                Thank you for reaching out. We'll get back to you within 24 hours.
              </p>
            </div>
          </div>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-6 border border-1 border-gray-200 text-black rounded-lg p-6 shadow-lg"
      >
        <div>
          <div className="flex flex-col">
            <span className="text-xl pb-4 font-medium text-center">
              Get a FREE consultation
            </span>
          </div>
          <label htmlFor="name" className="block text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            autoFocus
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="mt-1 p-2 block w-full bg-gray-50 rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-200"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="mt-1 p-2 block w-full bg-gray-50 rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-200"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium">
            Phone (optional)
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="mt-1 p-2 block w-full bg-gray-50 rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-200"
          />
        </div>
        <div>
          <label htmlFor="interest" className="block text-sm font-medium text-black">
            Interest
          </label>
          <select
            name="interest"
            id="interest"
            value={formData.interest}
            onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
            className="mt-1 p-2 block w-full rounded-md bg-gray-50 border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-200"
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium">
            Message
          </label>
          <span className="text-xs text-gray-600">
            *Any details we should know.
          </span>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="mt-1 p-2 block w-full bg-gray-50 rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-200"
          />
        </div>
        <div>
          <button
            type="submit"
            disabled={!isFormValid()}
            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${isFormValid()
                ? "bg-black hover:bg-gray-800"
                : "bg-gray-400 cursor-not-allowed"
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500`}
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
