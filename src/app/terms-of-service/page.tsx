"use client";

const TermsOfService = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mt-4 text-green-900">
      <div className="border-l border-r border-green-700 px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Terms of Service
        </h1>
        <div className="prose">
          <p>Last updated: {new Date().toLocaleDateString()}</p>

          <h2 className="text-xl font-semibold mt-6 mb-4">1. Introduction</h2>
          <p>
            Welcome to Jaxcoder LLC. By accessing our website and services, you
            agree to these terms of service.
          </p>

          {/* Add more sections as needed */}
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
