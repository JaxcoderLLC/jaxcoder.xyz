import AboutContent from "@/components/AboutContent";

const About = () => {
  return (
    <div className="min-h-[calc(100vh-theme(spacing.16)-theme(spacing.16))]">
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-primary-900 text-center mb-8">
            About Us
          </h2>
          <div className="max-w-5xl mx-auto">
            <p className="mt-4 text-xl text-primary-600 text-center">
              Jax Labs is a technology consulting firm specializing in custom software solutions.
            </p>
            <p className="mt-4 text-lg text-primary-500 text-center">
              With years of experience in software development and digital transformation, 
              we help businesses leverage technology to achieve their goals and stay ahead in the digital age.
            </p>
          </div>

          {/* Experience Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-primary-900 text-center mb-8">
              Our Experience
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-primary-800 mb-4">Enterprise Solutions</h4>
                <p className="text-primary-600">
                  Successfully delivered large-scale enterprise applications for Fortune 500 companies, handling complex business logic and high transaction volumes. Our solutions have processed over 1M+ transactions daily and reduced operational costs by up to 40%.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-primary-800 mb-4">Startup Innovation</h4>
                <p className="text-primary-600">
                  Partnered with numerous startups to build scalable MVPs and bring innovative ideas to market quickly. Our rapid development approach has helped startups secure funding and achieve market validation in record time.
                </p>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-primary-800 mb-4">Cloud Migration</h4>
                <p className="text-primary-600">
                  Successfully migrated over 50 legacy applications to modern cloud infrastructure, resulting in improved scalability and reduced maintenance costs.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-primary-800 mb-4">Digital Transformation</h4>
                <p className="text-primary-600">
                  Led digital transformation initiatives for multiple organizations, modernizing their tech stack and improving operational efficiency by an average of 60%.
                </p>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-primary-900 text-center mb-8">
              Our Values
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-primary-800 mb-4">Innovation</h4>
                <p className="text-primary-600">
                  We constantly explore new technologies and methodologies to deliver cutting-edge solutions. Our team regularly contributes to open-source projects and stays at the forefront of technological advancements.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-primary-800 mb-4">Quality</h4>
                <p className="text-primary-600">
                  We maintain the highest standards in our code quality, testing, and delivery processes. Our projects consistently achieve 95%+ test coverage and zero critical bugs in production.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-primary-800 mb-4">Partnership</h4>
                <p className="text-primary-600">
                  We believe in building long-term relationships with our clients, working as an extension of their team. Our client retention rate of 90%+ speaks to our commitment to partnership.
                </p>
              </div>
            </div>
          </div>

          {/* Testimonials Section */}
          {/* <div className="mt-16">
            <h3 className="text-2xl font-bold text-primary-900 text-center mb-8">
              Client Testimonials
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-primary-600 italic mb-4">
                  "Jaxcoder transformed our legacy system into a modern, scalable solution. Their expertise and dedication were invaluable to our digital transformation journey."
                </p>
                <p className="text-primary-800 font-semibold">- Sarah Johnson, CTO at TechCorp</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-primary-600 italic mb-4">
                  "Working with Jaxcoder was a game-changer for our startup. They helped us build a robust MVP that attracted our Series A funding."
                </p>
                <p className="text-primary-800 font-semibold">- Michael Chen, Founder at InnovateStart</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;