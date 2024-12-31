"use client";

import { FormEvent, useState } from "react";
import { FormData } from "../app/types";

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

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
        message: "",
      });
      // Show success message
      setIsSubmitted(true);
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 10000);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      {isSubmitted && (
        <div className="mb-4 p-4 text-green-700 bg-green-100 rounded-md">
          Thank you for your message! We'll get back to you soon.
        </div>
      )}
      
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-6 border border-1 rounded-lg p-6 shadow-lg"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-300"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
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
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-300"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-300"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
