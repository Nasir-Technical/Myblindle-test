import React from 'react'
import Card from './Card';

const ServiceSection = () => {
    const services = [
        {
            icon: "🔥",
            title: "Seamless Connections",
            description: "Stay in touch with friends, family, and like-minded people with just a tap.",
        },
        {
            icon: "📸",
            title: "Share Your Story",
            description: "Upload photos, videos, and updates to let the world know what's happening in your life.",
        },
        {
            icon: "💬",
            title: "Real-Time Chat",
            description: "Whether it's a DM or a group conversation, connect instantly with smooth, lightning-fast messaging.",
        },
        {
            icon: "🔒",
            title: "Privacy First",
            description: "Your data, your control. We prioritize your privacy with world-class security.",
        },
        {
            icon: "🌍",
            title: "Discover & Explore",
            description: "Find trending content, join communities, and follow pages that match your interests.",
        },
        {
            icon: "📈",
            title: "Grow Your Business",
            description: "Use our platform to market your brand, connect with customers, and build meaningful relationships.",
        },
    ];
    return (
        <section className='py-20 bg-gray-100'>
            <div className='container mx-auto px-4 max-w-6xl'>
                {/* Header */}
                <div className='text-center mb-16'>
                    <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>Features That Keep You Hooked!</h2>
                    <p className='text-lg text-gray-600'>Meet, Chat, Share - Anytime, Anywhere!</p>
                </div>
            </div>

            {/* Cards Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {services.map((service, index) => (
                    <Card 
                     key={index}
                     icon={service.icon}
                     title={service.title}
                     description={service.description}
                    />
                ))}
            </div>
        </section>
    )
}

export default ServiceSection