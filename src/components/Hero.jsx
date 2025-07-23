import React from 'react';

const Hero = () => {
    return (
      <section className="w-full min-h-screen bg-[#FF5349] text-white flex flex-col">
          {/* Logo Section */}
          <div className="w-full flex justify-center pt-6 pb-4">
                <span className="text-2xl md:text-3xl font-extrabold text-white flex items-center">
                    <img 
                        src="/public/images/Group 2.png" 
                        alt="MyBindle Logo"
                        className="h-8 mr-2" 
                    />
                    MyBindle
                </span>
            </div>
  
        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-12 py-8">
          <div className="w-full max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
              {/* Left Side - Text Content */}
              <div className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
                {/* Headings */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                  <span className="block">Stay Connected</span>
                  <span className="block">Stay Social</span>
                  <span className="block">Stay You!</span>
                </h1>
  
                {/* Description */}
                <p className="text-base sm:text-lg md:text-xl text-red-100 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  A place where friendships grow, communities thrive, and moments turn into unforgettable experiences.
                  Whether you're looking to reconnect with old friends, build new relationships, or share what matters
                  most to you – MyBindle is your home on the internet.
                </p>
  
                {/* CTA Button */}
                <div className="flex justify-center lg:justify-start">
                  <button className="bg-white text-red-500 hover:bg-red-50 text-lg px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    Get Started
                  </button>
                </div>
            </div>
  
              {/* Image Section */}
              <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2">
                <div className="relative">
  
                  <img
                    src="/public/images/Group 1.png"
                    alt="MyBindle App Interface"
                    className="relative z-10 w-64 h-auto sm:w-80 md:w-96 lg:w-[400px] drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;
  