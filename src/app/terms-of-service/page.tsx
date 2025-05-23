"use client";

const TermsOfService = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mt-4 text-primary-900">
      <div className="border-l border-r border-primary-700 px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Terms of Service
        </h1>
        <div className="prose">
          <p>Last updated: {new Date().toLocaleDateString()}</p>

          <h2 className="text-xl font-semibold mt-6 mb-4">1. Introduction</h2>
          <p>
            Welcome to Jax Labs. By accessing our website and services, you
            agree to these terms of service.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-4">2. Use of Site</h2>
          <p>
            Jaxcoder.xyz is intended to provide users with resources, content, and tools related to technology and software development. You agree to use this site only for lawful purposes and in a way that does not infringe the rights of others or restrict their use and enjoyment.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-4">3. Intellectual Property</h2>
          <p>
            All content, branding, logos, and code provided on Jaxcoder.xyz are the property of Jaxcoder.xyz or its respective content creators and are protected by applicable copyright, trademark, and intellectual property laws. You may not copy, reproduce, distribute, or create derivative works without express permission.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-4">4. User Accounts</h2>
          <p>
            Some features may require registration. You agree to provide accurate and complete information when creating an account and to keep your credentials secure. You are responsible for all activity under your account.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-4">5. Prohibited Activities</h2>
          <p>You agree not to:</p>
          <ul className="list-disc pl-6 mt-2 mb-4">
            <li>Interfere with the operation of the site</li>
            <li>Access data not intended for you</li>
            <li>Use bots, scrapers, or automated methods without permission</li>
            <li>Upload or transmit viruses or malicious code</li>
            <li>Use the site for any unlawful purpose</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-4">6. Third-Party Links</h2>
          <p>
            Jaxcoder.xyz may include links to third-party websites. We do not control or endorse those sites and are not responsible for their content or practices.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-4">7. Termination</h2>
          <p>
            We reserve the right to suspend or terminate access to Jaxcoder.xyz at any time, without notice, for conduct that we believe violates these Terms or is harmful to other users or the site.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-4">8. Disclaimer of Warranties</h2>
          <p>
            All services and content are provided "as is" without warranties of any kind. We make no guarantees regarding availability, security, or accuracy.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-4">9. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Jaxcoder.xyz shall not be liable for any indirect, incidental, or consequential damages arising from your use of the site or any content therein.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-4">10. Changes to Terms</h2>
          <p>
            We may update these Terms from time to time. Continued use of the site after changes constitutes your acceptance of the new Terms.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-4">11. Contact Us</h2>
          <p>
            If you have any questions about these Terms, you can reach us at:
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

export default TermsOfService;
