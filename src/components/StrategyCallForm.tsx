'use client';

import { useState } from 'react';

export default function StrategyCallForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    description: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
    details?: string;
  }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.company) {
      setSubmitStatus({
        success: false,
        message: 'Please fill in all required fields',
      });
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus({}); // Clear previous status
    
    try {
      console.log('Submitting form data:', formData);
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      console.log('API response:', data);
      
      if (response.ok && data.success) {
        setSubmitStatus({
          success: true,
          message: 'Thanks! We will contact you within 24 hours to schedule your call.',
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          budget: '',
          description: '',
        });
      } else {
        // Server returned an error response
        setSubmitStatus({
          success: false,
          message: data.error || 'Failed to save your information',
          details: data.details || 'Please try again or contact us directly.',
        });
      }
    } catch (error) {
      // Network or other client-side error
      console.error('Form submission error:', error);
      setSubmitStatus({
        success: false,
        message: 'There was a problem connecting to our server.',
        details: 'Please check your network connection and try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-800 p-8 rounded-xl max-w-2xl mx-auto">
      <h3 className="text-xl font-bold text-white mb-6">Book Your Strategy Call</h3>
      
      {submitStatus.success ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
          <p className="font-medium">{submitStatus.message}</p>
          {submitStatus.details && <p className="text-sm mt-1">{submitStatus.details}</p>}
        </div>
      ) : submitStatus.message ? (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          <p className="font-medium">{submitStatus.message}</p>
          {submitStatus.details && <p className="text-sm mt-1">{submitStatus.details}</p>}
        </div>
      ) : null}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          className="w-full px-4 py-3 rounded-lg text-slate-900"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Business email"
          className="w-full px-4 py-3 rounded-lg text-slate-900"
          required
        />
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Company name"
          className="w-full px-4 py-3 rounded-lg text-slate-900"
          required
        />
        <select
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg text-slate-900"
        >
          <option value="">Project budget range</option>
          <option value="$25K - $50K">$25K - $50K</option>
          <option value="$50K - $100K">$50K - $100K</option>
          <option value="$100K - $250K">$100K - $250K</option>
          <option value="$250K+">$250K+</option>
        </select>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Briefly describe what you want to build or automate"
          className="w-full px-4 py-3 rounded-lg text-slate-900 h-24"
        ></textarea>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-colors ${
            isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? 'Processing...' : 'Schedule Strategy Call'}
        </button>
      </form>
      
      <p className="text-sm text-slate-400 mt-4">
        We'll contact you within 24 hours to schedule your call.
      </p>
    </div>
  );
} 