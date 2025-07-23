import React from 'react'

const CTASection = () => {
  return (
    <section className="bg-[#FF5349] py-16 md:py-20 relative overflow-visible">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side - Text Content */}
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Be the Reason
              <br />
              Someone Smiles Today!
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-xl">
              Your generosity can change lives — every donation brings hope, support, and a brighter future. Give today
              and make a difference!
            </p>
            <div className="pt-4">
              <button className="bg-white text-[#FF5349] hover:bg-red-100 text-lg px-8 py-6 rounded-md font-semibold transition-colors duration-300">
                Donate Now
              </button>
            </div>
          </div>

          {/* Right Side - Phone Mockups */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative flex flex-col sm:flex-row items-center sm:items-end gap-6 sm:gap-4 transform translate-y-6 sm:translate-y-10 lg:translate-y-20">
              {/* First Phone */}
              <div className="relative z-20">
                <img
                  src="/src/assets/iPhone 14 Pro (1).png"
                  alt="Payment Methods Interface"
                  className="w-40 sm:w-48 md:w-56 lg:w-64 h-auto drop-shadow-2xl"
                />
              </div>

              {/* Second Phone */}
              <div className="relative z-20">
                <img
                  src="/src/assets/iPhone 14 Pro.png"
                  alt="Thank You Interface"
                  className="w-40 sm:w-48 md:w-56 lg:w-64 h-auto drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
