import AboutContent from "@/components/AboutContent";

const About = () => {
  return (
    <div className="min-h-[calc(100vh-theme(spacing.16)-theme(spacing.16))]">
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-primary-900 text-center mb-8">
            About Us
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="mt-4 text-xl text-primary-600 text-center">
              Jaxcoder LLC is a technology consulting firm specializing in custom software solutions.
            </p>
            <p className="mt-4 text-lg text-primary-500 text-center">
              With years of experience in software development and digital transformation, 
              we help businesses leverage technology to achieve their goals and stay ahead in the digital age.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;