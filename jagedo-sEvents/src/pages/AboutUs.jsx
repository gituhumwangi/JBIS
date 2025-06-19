import React from "react";

const AboutUs = () => {
  return (
    <section className="px-4 md:px-20 lg:px-40 py-8">
      <h1 className="text-gray-900 leading-tight text-base md:text-4xl font-extrabold font-manrope mb-6 pb-4 text-center">
        What is JaGedo Builder Innovation Summit
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center order-2 lg:order-1">
          <img
            className="rounded-xl w-full h-auto object-cover"
            src="./image2.jpg"
                />
        
        </div>

        {/* Text Section */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-2">

          <p className="text-gray-500 mb-6">
            The <strong>JaGedo Builder Innovation Summit (JBIS)</strong> is an annual flagship event that brings together construction professionals, technology innovators, and industry leaders to collaborate, learn, and showcase groundbreaking ideas.
            It’s a space where innovation meets execution — empowering builders to lead the future of infrastructure and smart construction.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
