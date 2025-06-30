"use client";

import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      company: formData.get('company'),
      projectType: formData.get('projectType'),
      budget: formData.get('budget'),
      timeline: formData.get('timeline'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        const errorData = await response.json();
        setSubmitStatus('error');
        setErrorMessage(errorData.error || 'Failed to submit form');
      }
    } catch {
      setSubmitStatus('error');
      setErrorMessage('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Let&apos;s Discuss Your
            <span className="text-primary-400"> Enterprise Project</span>
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            If your project requires the same precision that coordinated 400+ trucks at DreamHack Dallas and built Allo Protocol&apos;s $15M+ financial infrastructure, let&apos;s talk.
          </p>
        </div>
      </div>

      {/* Contact Form & Info */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Strategy Discussion</h2>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-accent-50/30 border border-accent-200 rounded-lg">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-accent-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-accent-800 font-medium">Thank you! We&apos;ll respond within 24 hours to schedule your strategy call.</p>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-warm-50/30 border border-warm-200 rounded-lg">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-warm-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-warm-800 font-medium">{errorMessage}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:bg-muted disabled:cursor-not-allowed bg-background text-foreground"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:bg-muted disabled:cursor-not-allowed bg-background text-foreground"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:bg-muted bg-background text-foreground disabled:cursor-not-allowed"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company/Organization *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:bg-muted bg-background text-foreground disabled:cursor-not-allowed"
                  />
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-foreground mb-2">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:bg-muted bg-background text-foreground disabled:cursor-not-allowed"
                  >
                    <option value="">Select project type</option>
                    <option value="real-time-coordination">Real-Time Coordination System</option>
                    <option value="event-logistics">Event & Logistics Management</option>
                    <option value="financial-infrastructure">Financial/Web3 Infrastructure</option>
                    <option value="healthcare-compliance">Healthcare/HIPAA-Compliant System</option>
                    <option value="enterprise-custom">Custom Enterprise Solution</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
                    Project Budget Range *
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:bg-muted bg-background text-foreground disabled:cursor-not-allowed"
                  >
                    <option value="">Select budget range</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k-250k">$100,000 - $250,000</option>
                    <option value="250k+">$250,000+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-foreground mb-2">
                    Project Timeline *
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:bg-muted bg-background text-foreground disabled:cursor-not-allowed"
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP (Urgent)</option>
                    <option value="1-3months">1-3 months</option>
                    <option value="3-6months">3-6 months</option>
                    <option value="6months+">6+ months</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    disabled={isSubmitting}
                    placeholder="Tell us about your project, the stakes involved, and what happens if it fails..."
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:bg-muted bg-background text-foreground disabled:cursor-not-allowed"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 disabled:cursor-not-allowed text-white px-8 py-4 text-lg font-semibold rounded-lg transition-colors shadow-lg shadow-primary-600/30 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    'Schedule Strategy Discussion'
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Contact Information</h2>

              <div className="space-y-8">
                <div className="bg-muted/30 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-foreground mb-4">Direct Contact</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-primary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <a href="mailto:jromero@jaxlabs.xyz" className="text-foreground hover:text-primary-600">
                        jromero@jaxlabs.xyz
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/30 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-foreground mb-4">What to Expect</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-4 mt-1">
                        <span className="text-primary-600 font-bold text-sm">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Initial Response</h4>
                        <p className="text-muted-foreground text-sm">Within 24 hours to schedule strategy call</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-4 mt-1">
                        <span className="text-primary-600 font-bold text-sm">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Discovery Call</h4>
                        <p className="text-muted-foreground text-sm">45-60 min deep dive into requirements</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-4 mt-1">
                        <span className="text-primary-600 font-bold text-sm">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Proposal</h4>
                        <p className="text-muted-foreground text-sm">Detailed technical architecture & timeline</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-warm-50/30 p-6 rounded-xl border border-warm-200">
                  <h3 className="text-xl font-bold text-warm-900 mb-4">⚠️ Important Qualification</h3>
                  <p className="text-warm-800 text-sm">
                    We only work on projects where enterprise-scale precision actually matters.
                    If failure would cost millions or cause global embarrassment, we&apos;re the right fit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Homepage CTA */}
      <div className="bg-muted/20 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Link
            href="/"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
