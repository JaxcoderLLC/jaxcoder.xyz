export default function Homepage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-slate-900 sm:text-6xl lg:text-7xl">
              We Build What 
              <span className="text-blue-600"> Doesn't Exist</span> Yet
            </h1>
            <p className="mt-8 text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Jax Labs develops custom software products that create new revenue streams for businesses. 
              No templates. No generic solutions. Just products built specifically for your needs.
            </p>
            <div className="mt-10">
              <a href="#work" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-colors">
                See What We've Built
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* What We Actually Do */}
      <div id="work" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What We Actually Build</h2>
            <p className="text-xl text-slate-600">Real products. Real results. Real revenue impact.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-8 rounded-xl shadow-sm border">
              <div className="mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">TruckTrack.io</h3>
                <p className="text-slate-600">Real-time delivery tracking system that gives logistics companies visibility they never had before. Live product, real users.</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border">
              <div className="mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Medical Workflow System</h3>
                <p className="text-slate-600">AI-powered form processing that eliminated hours of manual work for healthcare providers. Currently in production.</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border">
              <div className="mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 1.75L5.75 12.25L12 16L18.25 12.25L12 1.75zM12 16L5.75 12.25L12 22.25L18.25 12.25L12 16z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">ETHDenver.com</h3>
                <p className="text-slate-600">The official website for the Ethereum Denver conference.</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border">
              <div className="mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Enterprise Applications</h3>
                <p className="text-slate-600">15+ years building mission-critical applications for major insurance companies. Proven at scale.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Reality */}
      <div className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">The Reality</h2>
          </div>
          
          <div className="prose prose-xl text-slate-700 max-w-none">
            <p className="text-center text-xl leading-relaxed mb-8">
              We're not a big agency. We're a focused team that builds custom software products that create new opportunities for businesses.
            </p>
            <p className="text-center text-xl leading-relaxed">
              If you need basic website development or templated solutions, we're not the right fit. 
              If you need something built that doesn't exist yet, let's talk.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-slate-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Something New?</h2>
          <p className="text-xl text-slate-300 mb-8">
            We only take on projects where we can build something that matters.
          </p>
          <a href="mailto:contact@jaxlabs.com" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-colors inline-block">
            Start the Conversation
          </a>
          <p className="text-sm text-slate-400 mt-4">
            Fair warning: We're selective about the projects we take on.
          </p>
        </div>
      </div>
    </div>
  );
}