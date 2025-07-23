import React from 'react'
import StepCard from './StepCard';

const InstallationSection = () => {

    const steps = [
        {
            number: "01",
            title: "Download",
            description: "Open Play Store or App Store",
            isFirst: true,
        },
        {
            number: "02",
            title: "Install App",
            description: "The app will install automatically.",
            isFirst: false,
        },
        {
            number: "03",
            title: "Ready to Use",
            description: "Sign up or log in to start exploring!",
            isFirst: false,
        },
    ];

    return (
        <section className='py-20 bg-gray-100'>
            <div className='container mx-auto px-4 max-w-6xl'>
                {/* Header */}
                <div className='text-center mb-16'>
                    <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6'>
                        How to Install Our App
                    </h2>
                    <p className='text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed'>
                        Getting started is quick and easy! Follow these simple steps to install and start using MyBindle today.
                    </p>
                </div>

                {/* Steps */}
                <div className='relative'>
                    {/* Line for larger screens */}
                    <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-gray-300 z-0"></div>

                    {/* Steps Grid */}
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10'>
                        {steps.map((step, index) => (
                            <StepCard
                                key={index}
                                number={step.number}
                                title={step.title}
                                description={step.description}
                                isFirst={step.isFirst}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InstallationSection