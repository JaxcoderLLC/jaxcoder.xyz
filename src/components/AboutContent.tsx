export default function AboutContent() {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About Our Company
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Delivering innovative technology solutions since 2010
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              We empower businesses through innovative technology solutions, helping them 
              navigate the digital landscape and achieve sustainable growth. Our commitment 
              to excellence and cutting-edge expertise ensures we deliver transformative 
              results for our clients.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Expertise</h2>
            <p className="text-gray-600">
              With over a decade of experience in technology consulting, our team brings 
              deep expertise in digital transformation, software development, data analytics, 
              and cybersecurity. We pride ourselves on staying ahead of industry trends 
              and delivering solutions that drive real business value.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Expert Team</h3>
              <p className="text-gray-600">Seasoned professionals with diverse technical expertise</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Proven Track Record</h3>
              <p className="text-gray-600">Successful projects across various industries</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Client-Focused</h3>
              <p className="text-gray-600">Tailored solutions to meet your specific needs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}