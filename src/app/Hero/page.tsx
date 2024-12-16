import React from "react";

const HeroSection = () => {
  return (
    <div
      id="hero"
      className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white"
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between py-16 px-6 lg:px-16 h-[calc(100vh-80px)]">
        {/* Text Section */}
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
            Empower Your Business <br />
            <span className="text-blue-400">With Digital Solutions</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0">
            We help you grow your brand online with tailored digital marketing
            strategies that maximize your reach and impact.
          </p>
          <button className="mt-6 px-10 py-4 bg-blue-400 text-gray-900 font-semibold rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-amber-500 focus:outline-none">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div id="services" className="bg-gray-100 py-16 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-6">
          Our Services
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 mb-12">
          Tailored solutions that help your business grow and thrive in the
          digital space.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Service 1 */}
          <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              SEO Optimization
            </h3>
            <p className="text-gray-600">
              Increase your website&apos;s visibility and rankings on search engines
              through effective SEO strategies.
            </p>
          </div>
          {/* Service 2 */}
          <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              PPC Advertising
            </h3>
            <p className="text-gray-600">
              Maximize your ROI with pay-per-click advertising campaigns across
              Google and social media platforms.
            </p>
          </div>
          {/* Service 3 */}
          <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Social Media Marketing
            </h3>
            <p className="text-gray-600">
              Build a strong social media presence and engage your target
              audience with expert strategies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  return (
    <div
      id="why-choose-us"
      className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white py-16 px-6"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
          Why Choose Us
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 mb-12">
          Our team of experts is committed to delivering the best digital
          marketing strategies for your business.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Proven Results</h3>
            <p className="text-gray-400">
              We deliver measurable results that help businesses grow and
              achieve their goals.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Customized Strategies</h3>
            <p className="text-gray-400">
              Every business is unique, and we create personalized strategies
              tailored to your needs.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Expert Team</h3>
            <p className="text-gray-400">
              Our team consists of experts in SEO, PPC, social media marketing,
              and more, ensuring the best outcomes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQs = () => {
  return (
    <div id="faqs" className="bg-gray-100 py-16 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-6">
          Frequently Asked Questions
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 mb-12">
          Here are answers to some common questions. Feel free to reach out if
          you need further assistance.
        </p>
        <div className="space-y-8">
          {/* FAQ 1 */}
          <div className="text-left max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              What is digital marketing?
            </h3>
            <p className="text-gray-600">
              Digital marketing involves marketing your products or services
              through online channels like search engines, social media, email,
              and more.
            </p>
          </div>
          {/* FAQ 2 */}
          <div className="text-left max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              How long will it take to see results?
            </h3>
            <p className="text-gray-600">
              The timeline for results depends on the service and your specific
              goals. Typically, SEO results can take a few months, while PPC
              campaigns can show immediate results.
            </p>
          </div>
          {/* FAQ 3 */}
          <div className="text-left max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              How do I get started?
            </h3>
            <p className="text-gray-600">
              You can get started by contacting us for a free consultation.
              We&apos;ll discuss your goals and create a customized plan for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const HeroPage = () => {
  return (
    <div>
      <HeroSection />
      <Services />
      <WhyChooseUs />
      <FAQs />
    </div>
  );
};

export default HeroPage;
