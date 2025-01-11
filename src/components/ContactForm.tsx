"use client";

import { FormEvent, useState } from "react";
import { FormData } from "../app/types";

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
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
            Phone: formData.phone,
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
    <div className="">
      {isSubmitted && (
        <div className="mb-4 p-4  bg-green-100 rounded-md">
          Thank you for your message! We'll get back to you soon.
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-6 border border-1 border-green-500 text-green-700 rounded-lg p-6 shadow-lg bg-green-400"
      >
        <div>
          <div className="flex flex-col">
            <span className="text-xl pb-4 font-medium">Get a FREE consultation | HIPAA compliance</span>
          </div>
          <label htmlFor="name" className="block text-sm font-medium ">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            autoFocus
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="mt-1 p-2 block w-full  bg-green-200 rounded-md border-green-500 shadow-sm focus:border-green-600 focus:ring-green-300"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium ">
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
            className="mt-1 p-2 block w-full bg-green-200 rounded-md border-green-300 shadow-sm focus:border-green-500 focus:ring-green-300"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium ">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="mt-1 p-2 block w-full bg-green-200 rounded-md border-green-300 shadow-sm focus:border-green-500 focus:ring-green-300"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium ">
            Message
          </label>
          <span className="text-xs text-green-600">
            *Helper text
          </span>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="mt-1 p-2 block w-full bg-green-200 rounded-md border-green-300 shadow-sm focus:border-green-500 focus:ring-green-300"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
