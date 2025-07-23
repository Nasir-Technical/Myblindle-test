import React from 'react'
import Card from './Card';

const AboutSection = () => {

    const abouts = [
        {
          icon: "📹",
          title: "Short Videos & Reels",
          description: "Share engaging, bite-sized content that keeps everyone entertained.",
        },
        {
          icon: "🔔",
          title: "Smart Notifications",
          description: "Stay updated on what matters without the noise.",
        },
        {
          icon: "👥",
          title: "Interest-Based Communities",
          description: "Join groups and discussions that match your passion.",
        },
      ];

  return (
     <section className='py-20 bg-white'>
        <div className='container mx-auto px-4 max-w-7xl'>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Left Side - Phone Mockups */}
                <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
                    
                    {/* Phone Images */}
                    <div className='relative z-10'>
                        <img 
                         src="/images/Group-3.png"
                         alt="MyBindle App Interface"
                         width={600}
                         height={400}
                         className="w-full max-w-lg drop-shadow-2xl"
                        />
                    </div>
                </div>

                {/* Right Side - Content */}
                <div className='space-y-8 order-1 lg:order-2'>
                    <div className='space-y-4'>
                        <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight'>
                        Where Every Click
                        <br />
                        <span className='block'>Sparks a Connection!</span>
                        </h2>

                        <p className='text-lg md:text-xl text-gray-600 leading-relaxed'>
                        A small act of kindness today can create a lifetime of impact for someone in need. Give from the heart
                and change a life!
                        </p>
                    </div>

                    {/* using Card component */}
                    <div className='space-y-6'>
                        {abouts.map((about, index) => (
                            <Card 
                             key={index}
                             icon={about.icon}
                             title={about.title}
                             description={about.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
     </section>
  )
}

export default AboutSection