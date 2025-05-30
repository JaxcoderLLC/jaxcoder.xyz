export default function HealthcareLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative bg-slate-900 text-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 py-20 sm:py-28">
          <div className="text-center">
            <div className="inline-flex items-center bg-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              ⚠️ HIPAA Violations Cost $1.5M+ Per Category
            </div>
            <h1 className="text-4xl font-bold sm:text-6xl mb-6">
              Your Healthcare Software
              <span className="text-red-400"> Will Get You Fined</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-4xl mx-auto">
              Most healthcare tech is a compliance nightmare waiting to happen. 
              We build HIPAA-compliant systems that actually protect your patients and your business.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <a href="#case-study" className="block sm:inline-block bg-blue-600 hover:bg-blue-700 px-10 py-4 text-lg font-semibold rounded-lg transition-colors">
                See Healthcare Case Study
              </a>
              <a href="/contact" className="block sm:inline-block border border-slate-400 hover:border-white px-10 py-4 text-lg font-semibold rounded-lg transition-colors">
                Get Compliance Assessment
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Problem/Stakes */}
      <div className="py-16 bg-red-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-red-900 mb-4">What Happens When Healthcare Tech Goes Wrong</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500">
              <h3 className="font-bold text-red-900 mb-2">$1.5M+ in Fines</h3>
              <p className="text-red-700 text-sm">Per violation category, per year. HHS doesn't care if it was an accident.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500">
              <h3 className="font-bold text-red-900 mb-2">License Suspension</h3>
              <p className="text-red-700 text-sm">State medical boards can shut down non-compliant practices immediately.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500">
              <h3 className="font-bold text-red-900 mb-2">Lawsuits & Reputation</h3>
              <p className="text-red-700 text-sm">Patient lawsuits and public breach notifications destroy trust permanently.</p>
            </div>
          </div>

          <div className="mt-12 bg-white p-8 rounded-lg border border-red-200">
            <div className="text-center">
              <h3 className="text-xl font-bold text-red-900 mb-4">Real Florida Healthcare Breaches (2024)</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div>
                  <p className="font-semibold">Jacksonville Practice</p>
                  <p className="text-red-700">5,000 patient records exposed</p>
                  <p className="text-red-700">$400K fine + lawsuits</p>
                </div>
                <div>
                  <p className="font-semibold">Miami Healthcare System</p>
                  <p className="text-red-700">15,000 records compromised</p>
                  <p className="text-red-700">$1.2M penalty</p>
                </div>
                <div>
                  <p className="font-semibold">Tampa Clinic Network</p>
                  <p className="text-red-700">Unsecured database</p>
                  <p className="text-red-700">$850K fine + remediation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Authority/Proof */}
      <div className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">We Build Healthcare Software That Actually Works</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="font-bold text-2xl text-blue-600">15+ Years</p>
              <p className="text-sm text-slate-600">Healthcare compliance experience</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="font-bold text-2xl text-green-600">Zero Breaches</p>
              <p className="text-sm text-slate-600">In systems we've built</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="font-bold text-2xl text-purple-600">$50M+</p>
              <p className="text-sm text-slate-600">In secure transactions processed</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="font-bold text-2xl text-orange-600">Florida-Based</p>
              <p className="text-sm text-slate-600">We understand local healthcare</p>
            </div>
          </div>
        </div>
      </div>

      {/* Case Study */}
      <div id="case-study" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Case Study: Santé Home Healthcare Portal</h2>
            <p className="text-xl text-slate-600">How we transformed 80+ field nurses' operations with enterprise-grade compliance</p>
            <p className="text-sm text-slate-500 mt-2">*Client results. Actual system details confidential.</p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div>
              <div className="inline-flex items-center bg-green-100 px-3 py-1 rounded-full text-green-800 text-sm font-semibold mb-4">
                ✅ Completed Project
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">The Challenge</h3>
              <p className="text-lg text-slate-700 mb-6">
                Santé Home Healthcare was operating with paper-based field operations, manual data entry, 
                and basic digital forms. Their 80-100 field nurses had no secure way to handle patient data, 
                creating massive HIPAA liability.
              </p>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Solution</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <p className="text-slate-700">End-to-end encrypted mobile portal for field operations</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <p className="text-slate-700">Role-based access controls (Admin vs. Field Nurse permissions)</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <p className="text-slate-700">Automated audit trails for all PHI access and modifications</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <p className="text-slate-700">Integration with existing Formstack and SharePoint workflows</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <p className="text-slate-700">24/7 compliance monitoring and reporting</p>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h4 className="font-bold text-green-900 mb-3">Business Impact</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-green-800">Time Savings</p>
                    <p className="text-green-700">25-30 hours/week operational savings</p>
                  </div>
                  <div>
                    <p className="font-semibold text-green-800">Cost Reduction</p>
                    <p className="text-green-700">$45-55K/year in admin costs</p>
                  </div>
                  <div>
                    <p className="font-semibold text-green-800">Risk Elimination</p>
                    <p className="text-green-700">Zero HIPAA compliance violations</p>
                  </div>
                  <div>
                    <p className="font-semibold text-green-800">Growth Ready</p>
                    <p className="text-green-700">Infrastructure supports 200%+ scaling</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl">
              <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-slate-600">SANTÉ HEALTHCARE PORTAL</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">HIPAA COMPLIANT</span>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Field Nurses:</span>
                    <span className="font-semibold">80+ Active Users</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">PHI Records:</span>
                    <span className="font-semibold text-green-600">Fully Encrypted</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Audit Trail:</span>
                    <span className="font-semibold text-blue-600">100% Coverage</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Uptime:</span>
                    <span className="font-semibold text-purple-600">99.9%+</span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900 mb-2">$35,000 Implementation</div>
                <div className="text-slate-600 mb-4">+ $5,500/month ongoing</div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-xs text-slate-500 mb-2">ROI Timeline</div>
                  <div className="text-lg font-bold text-green-600">12-16 months payback</div>
                  <div className="text-sm text-slate-600">Through operational savings alone</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What We Do */}
      <div className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Healthcare Compliance Services</h2>
            <p className="text-xl text-slate-600">End-to-end HIPAA-compliant software development</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">HIPAA-Compliant Development</h3>
              <p className="text-slate-600">Custom software built from the ground up with healthcare compliance requirements integrated, not added later.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Compliance Auditing</h3>
              <p className="text-slate-600">Third-party HIPAA compliance audits, risk assessments, and ongoing monitoring to keep you protected.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Legacy System Security</h3>
              <p className="text-slate-600">Secure integration with existing EMR, practice management, and billing systems without disrupting operations.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Qualification */}
      <div className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">This Isn't For Every Healthcare Organization</h2>
            <p className="text-xl text-slate-600">We work with practices that take compliance seriously</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="bg-red-50 p-8 rounded-xl border border-red-200">
              <h3 className="text-xl font-bold text-red-900 mb-6">❌ We're NOT Right If You:</h3>
              <ul className="space-y-3 text-red-800">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Think HIPAA compliance is optional or "too expensive"
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Want quick fixes or Band-Aid solutions for security
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Need projects under $25,000 budget
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Just want basic website or simple app development
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Expect corners to be cut on security measures
                </li>
              </ul>
            </div>

            <div className="bg-green-50 p-8 rounded-xl border border-green-200">
              <h3 className="text-xl font-bold text-green-900 mb-6">✅ Perfect If You're:</h3>
              <ul className="space-y-3 text-green-800">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  A healthcare organization serious about protecting patient data
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Ready to invest in enterprise-grade compliance infrastructure
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Looking for long-term technology partners, not vendors
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Growing and need systems that scale with proper security
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Understand that compliance protects your business investment
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-slate-900 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get Your Free HIPAA Risk Assessment</h2>
          <p className="text-xl text-slate-300 mb-8">
            Find out where your current systems leave you exposed to violations and what it will cost to fix them.
          </p>

          <div className="grid gap-8 md:grid-cols-3 mb-12">
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-white mb-3">Security Audit</h3>
              <p className="text-slate-300 text-sm">We'll identify every vulnerability in your current setup</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-white mb-3">Compliance Gap Analysis</h3>
              <p className="text-slate-300 text-sm">Detailed report of what you're missing for HIPAA compliance</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-white mb-3">Implementation Roadmap</h3>
              <p className="text-slate-300 text-sm">Prioritized plan to get you compliant without disrupting operations</p>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center">
            <a 
              href="/contact" 
              className="block sm:inline-block bg-blue-600 hover:bg-blue-700 px-10 py-4 text-lg font-semibold rounded-lg transition-colors text-white"
            >
              Schedule Assessment Call
            </a>
            <a 
              href="mailto:jromero@jaxcoder.xyz" 
              className="block sm:inline-block border border-slate-400 hover:border-white px-10 py-4 text-lg font-semibold rounded-lg transition-colors text-white"
            >
              Email Directly
            </a>
          </div>

          <div className="mt-8 text-slate-400 text-sm">
            <p>⚠️ Fair warning: If we find serious compliance gaps, we'll tell you the truth about your risk exposure.</p>
          </div>
        </div>
      </div>
    </div>
  );
}