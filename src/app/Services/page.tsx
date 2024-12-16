import React from 'react';

const Services = () => {
    return (
      <div id="services" className="bg-gray-100 py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-6">Our Services</h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-12">
            Tailored solutions that help your business grow and thrive in the digital space.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">SEO Optimization</h3>
              <p className="text-gray-600">
                Increase your website&apos;s visibility and rankings on search engines through effective SEO strategies.
              </p>
            </div>
            {/* Service 2 */}
            <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">PPC Advertising</h3>
              <p className="text-gray-600">
                Maximize your ROI with pay-per-click advertising campaigns across Google and social media platforms.
              </p>
            </div>
            {/* Service 3 */}
            <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Social Media Marketing</h3>
              <p className="text-gray-600">
                Build a strong social media presence and engage your target audience with expert strategies.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Services;