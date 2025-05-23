'use client';

import StrategyCallForm from './StrategyCallForm';

export default function ClientLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero - Ad Traffic Optimized */}
      <div className="relative bg-slate-900 text-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 py-20 sm:py-28">
          <div className="text-center">
            <div className="inline-flex items-center bg-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🚀 Custom Software That Actually Works
            </div>
            <h1 className="text-4xl font-bold sm:text-6xl mb-6">
              Stop Competing With
              <span className="text-blue-400"> Template Users</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-4xl mx-auto">
              While your competitors use the same Shopify templates and WordPress themes,
              you could have custom software that gives you unfair business advantages.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <a href="#examples" className="block sm:inline-block bg-blue-600 hover:bg-blue-700 px-10 py-4 text-lg font-semibold rounded-lg transition-colors">
                See Live Examples
              </a>
              <a href="#call" className="block sm:inline-block border border-slate-400 hover:border-white px-10 py-4 text-lg font-semibold rounded-lg transition-colors">
                Book Strategy Call
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Problem/Agitation */}
      <div className="py-16 bg-red-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-red-900 mb-4">Your Business Deserves Better Than Templates</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500">
              <h3 className="font-bold text-red-900 mb-2">Your competitors can copy everything</h3>
              <p className="text-red-700 text-sm">Same Shopify themes, same WordPress plugins, same limitations. Zero competitive advantage.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500">
              <h3 className="font-bold text-red-900 mb-2">You're stuck with what exists</h3>
              <p className="text-red-700 text-sm">Can't get exactly what your business needs because you're limited to off-the-shelf solutions.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500">
              <h3 className="font-bold text-red-900 mb-2">Manual work that should be automated</h3>
              <p className="text-red-700 text-sm">Spending hours on tasks that custom software could handle in minutes.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Proof */}
      <div className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Trusted By Companies That Need More Than Templates</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="font-bold text-2xl text-blue-600">$50M+</p>
              <p className="text-sm text-slate-600">In transactions processed</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="font-bold text-2xl text-green-600">15+ Years</p>
              <p className="text-sm text-slate-600">Enterprise software experience</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="font-bold text-2xl text-purple-600">Major Insurance</p>
              <p className="text-sm text-slate-600">Companies trust our work</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="font-bold text-2xl text-orange-600">$250K+</p>
              <p className="text-sm text-slate-600">Annual revenue from products</p>
            </div>
          </div>
        </div>
      </div>

      {/* Examples */}
      <div id="examples" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Products We've Actually Built</h2>
            <p className="text-xl text-slate-600">Not concepts. Not demos. Live software generating real business value.</p>
          </div>

          <div className="space-y-12">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div>
                <div className="inline-flex items-center bg-blue-100 px-3 py-1 rounded-full text-blue-800 text-sm font-semibold mb-4">
                  ✅ Live Product
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">TruckTrack.io - Logistics Tracking</h3>
                <p className="text-lg text-slate-700 mb-6">
                  Logistics companies were blind to their delivery status. We built real-time tracking
                  that shows exactly where every shipment is, reducing customer service calls by 70%.
                </p>
                <div className="bg-slate-50 p-4 rounded-lg mb-4">
                  <p className="text-sm text-slate-600">
                    <span className="font-semibold">Business Impact:</span> Reduced support tickets, improved customer satisfaction,
                    enabled proactive delivery management.
                  </p>
                </div>
                <a href="#" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700">
                  View Live Product →
                </a>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-slate-600">SHIPMENT #TT-2024-001</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">IN TRANSIT</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Origin:</span>
                      <span className="font-semibold">Jacksonville, FL</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Destination:</span>
                      <span className="font-semibold">Miami, FL</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">ETA:</span>
                      <span className="font-semibold text-green-600">2 hours 15 min</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="lg:order-2">
                <div className="inline-flex items-center bg-green-100 px-3 py-1 rounded-full text-green-800 text-sm font-semibold mb-4">
                  ✅ In Production
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">AI Medical Form Processor</h3>
                <p className="text-lg text-slate-700 mb-6">
                  Healthcare provider was drowning in manual form processing. Our AI system eliminated
                  80% of manual work while improving accuracy and reducing processing time from hours to minutes.
                </p>
                <div className="bg-slate-50 p-4 rounded-lg mb-4">
                  <p className="text-sm text-slate-600">
                    <span className="font-semibold">Business Impact:</span> Reduced labor costs, faster patient processing,
                    improved data accuracy, enabled staff to focus on patient care.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl lg:order-1">
                <div className="text-center">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-red-100 p-4 rounded-lg">
                      <div className="text-red-700 font-semibold text-sm">Manual Processing</div>
                      <div className="text-2xl font-bold text-red-800">4 hours</div>
                      <div className="text-xs text-red-600">Per batch + errors</div>
                    </div>
                    <div className="bg-green-100 p-4 rounded-lg">
                      <div className="text-green-700 font-semibold text-sm">AI Processing</div>
                      <div className="text-2xl font-bold text-green-800">8 minutes</div>
                      <div className="text-xs text-green-600">99.5% accuracy</div>
                    </div>
                  </div>
                  <div className="text-slate-600 text-sm">30x faster processing time</div>
                </div>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div>
                <div className="inline-flex items-center bg-purple-100 px-3 py-1 rounded-full text-purple-800 text-sm font-semibold mb-4">
                  ✅ Enterprise Scale
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Financial Protocol Infrastructure</h3>
                <p className="text-lg text-slate-700 mb-6">
                  Lead engineer on Allo Protocol - financial infrastructure that has facilitated over $50M
                  in funding distribution. Built for scale, security, and transparency.
                </p>
                <div className="bg-slate-50 p-4 rounded-lg mb-4">
                  <p className="text-sm text-slate-600">
                    <span className="font-semibold">Technical Achievement:</span> Multi-million dollar transaction processing,
                    smart contract security, decentralized governance systems.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-xl">
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">$50M+</div>
                  <div className="text-slate-600 mb-4">Total Value Processed</div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="bg-white p-2 rounded">
                      <div className="font-semibold text-slate-900">Security</div>
                      <div className="text-slate-600">Battle-tested</div>
                    </div>
                    <div className="bg-white p-2 rounded">
                      <div className="font-semibold text-slate-900">Scale</div>
                      <div className="text-slate-600">Enterprise</div>
                    </div>
                    <div className="bg-white p-2 rounded">
                      <div className="font-semibold text-slate-900">Uptime</div>
                      <div className="text-slate-600">99.9%+</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What We Build */}
      <div className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What We Actually Build</h2>
            <p className="text-xl text-slate-600">Custom software products that create competitive advantages</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Process Automation</h3>
              <p className="text-slate-600">Turn manual workflows into automated systems. Reduce labor costs, eliminate errors, speed up operations.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Custom Business Applications</h3>
              <p className="text-slate-600">Software built specifically for your business processes. No compromises, no workarounds, exactly what you need.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">AI-Powered Solutions</h3>
              <p className="text-slate-600">Leverage AI to solve complex business problems. Document processing, data analysis, decision automation.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Qualification */}
      <div className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">This Isn't For Everyone</h2>
            <p className="text-xl text-slate-600">We're selective about the projects we take on</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="bg-red-50 p-8 rounded-xl border border-red-200">
              <h3 className="text-xl font-bold text-red-900 mb-6">❌ We're NOT Right If You Need:</h3>
              <ul className="space-y-3 text-red-800">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Basic website development or WordPress customizations
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Simple mobile apps using templates
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Quick projects under $25,000
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Someone to just execute your exact specifications
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Generic solutions that work for everyone
                </li>
              </ul>
            </div>

            <div className="bg-green-50 p-8 rounded-xl border border-green-200">
              <h3 className="text-xl font-bold text-green-900 mb-6">✅ We're Perfect If You Want:</h3>
              <ul className="space-y-3 text-green-800">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Custom software that creates competitive advantages
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Solutions that generate new revenue streams
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Partners who understand complex business problems
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Software that scales with your business growth
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Products that do exactly what your business needs
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div id="call" className="bg-slate-900 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Stop Competing on Templates?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Let's build custom software that makes your competitors irrelevant.
          </p>

          <StrategyCallForm />

          <div className="mt-8 text-slate-400 text-sm">
            <p>⚠️ Fair warning: We're selective about projects. If you're looking for basic development work, we're probably not the right fit.</p>
          </div>
        </div>
      </div>
    </div>
  );
}