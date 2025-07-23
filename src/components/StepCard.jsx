import React from 'react'

const StepCard = ({ number, title, description, isFirst }) => {
  return (
    <div className='text-center'>
        {/* Step Number */}
        <div className='relative mb-8'>
            <div
             className={`inline-flex items-center justify-center w-16 h-16 rounded-full text-2xl font-bold mb-4 ${
                isFirst
                  ? "bg-red-500 text-white"
                  : "bg-white text-gray-900 border-2 border-gray-300"
              }`}
            >
                {number}
            </div>
        </div>

        {/* Step Content */}
        <div className='space-y-4'>
            <h3 className='text-2xl md:text-3xl font-bold text-gray-900'>{title}</h3>
            <p className='text-lg text-gray-600 leading-relaxed'>{description}</p>
        </div>
    </div>
  );
};

export default StepCard;