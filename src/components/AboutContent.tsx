import Link from "next/link";
import { Button } from "./ui/button";

const AboutContent = () => {
  return (
    <div className="pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">
            We Build What Doesn't Exist Yet
          </h1>
          <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
            Jax Labs develops custom software products that create new revenue streams and solve complex business problems. We don't just code—we build solutions that matter.
          </p>
        </div>

        <div className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">What We Actually Do</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="font-semibold text-lg mb-2 text-indigo-900">Product Development</h3>
                <p className="text-slate-700">We build custom software products from concept to launch. Think medical workflow optimization, logistics tracking systems, and AI-powered business tools.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-indigo-900">Data-Driven Solutions</h3>
                <p className="text-slate-700">Our data analyst identifies patterns and opportunities others miss, turning complex business processes into streamlined digital workflows.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Our Lab Experiments</h2>
          <div className="bg-slate-50 p-6 rounded-lg">
            <div className="mb-6">
              <h3 className="font-semibold text-lg mb-2">TruckTrack.io</h3>
              <p className="text-slate-600">Real-time delivery tracking system that gives logistics companies visibility they never had before.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">AI Workflow Tools</h3>
              <p className="text-slate-600">Custom AI applications that automate complex business processes, starting with medical form processing.</p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">The Reality</h2>
          <div className="prose prose-lg text-slate-700 max-w-none">
            <p>
              We're a small, focused team that's been quietly building enterprise applications for major insurance companies for over 15 years. Now we're applying that expertise to create products that didn't exist before.
            </p>
            <p>
              Our approach is simple: understand your business problem, build a custom solution, and make sure it actually works in the real world. No generic templates, no one-size-fits-all platforms.
            </p>
          </div>
        </div>

        <div className="bg-slate-900 text-white p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Ready to Build Something New?</h2>
          <p className="text-slate-300 text-lg mb-6">
            If you need a custom software product that creates new opportunities for your business, let's talk.
            We only take on projects where we can build something that matters.
          </p>
          <div className="text-sm text-slate-400">
            <p>Fair warning: We're selective about the projects we take on. If you just need basic development work, we're probably not the right fit.</p>
          </div>
          <div className="flex justify-center mt-4 ">
            <Button asChild className="bg-white text-black hover:text-white hover:bg-black hover:border-white">
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>


      </div>

    </div>
  );
}

export default AboutContent;