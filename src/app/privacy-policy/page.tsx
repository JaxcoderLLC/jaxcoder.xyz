"use client";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mt-4 text-primary-900">
      <div className="border-l border-r border-primary-700 px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Privacy Policy
        </h1>
        <div className="prose">
          <p>Last updated: {new Date().toLocaleDateString()}</p>

          <p className="mt-4">
            At Jaxcoder.xyz, your privacy is important to us. This Privacy Policy explains what information we collect, how we use it, and what choices you have.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-4">1. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul className="list-disc pl-6 mt-2 mb-4">
            <li><strong>Personal Information:</strong> If you contact us or register an account, we may collect your name, email address, or other details you voluntarily provide.</li>
            <li><strong>Usage Data:</strong> We collect information about how you interact with the site (e.g., pages visited, time spent, browser type) through tools like Google Analytics or similar.</li>
            <li><strong>Cookies:</strong> We use cookies to improve your experience. You can disable cookies in your browser settings.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-4">2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 mt-2 mb-4">
            <li>Provide, operate, and improve Jaxcoder.xyz</li>
            <li>Communicate with you if you reach out or sign up</li>
            <li>Monitor usage and improve site performance</li>
            <li>Prevent fraud, abuse, or security issues</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-4">3. Sharing of Information</h2>
          <p>We do not sell, rent, or share your personal information with third parties except:</p>
          <ul className="list-disc pl-6 mt-2 mb-4">
            <li>With service providers who help us operate the site (e.g., hosting, analytics)</li>
            <li>If required by law or legal process</li>
            <li>To protect the rights or safety of our users or the site</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-4">4. Third-Party Services</h2>
          <p>
            We may use third-party tools like Google Analytics, which may collect certain information automatically. These services operate under their own privacy policies.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-4">5. Your Choices</h2>
          <ul className="list-disc pl-6 mt-2 mb-4">
            <li><strong>Opt-Out of Emails:</strong> If we send you updates or newsletters, you can opt out at any time.</li>
            <li><strong>Disable Cookies:</strong> You can control cookies through your browser settings.</li>
            <li><strong>Request or Delete Data:</strong> You may request a copy of your data or ask us to delete it by emailing us.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-4">6. Data Security</h2>
          <p>
            We take reasonable steps to protect your information from unauthorized access or disclosure. However, no method of transmission over the internet is 100% secure.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-4">7. Children's Privacy</h2>
          <p>
            Jaxcoder.xyz is not directed at children under 13. We do not knowingly collect personal information from children.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-4">8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted here with an updated effective date.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-4">9. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy, you can contact us at:
            <br />
            <a href="mailto:support@jaxcoder.xyz" className="text-purple-600 hover:text-purple-800">
              📧 support@jaxcoder.xyz
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
