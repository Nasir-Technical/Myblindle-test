import React from 'react'

const Card = ({ icon, title, description }) => {
  return (
    <div className='bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300'>
        <div className='flex items-center gap-3 mb-4'>
            <span className='text-2xl'>{icon}</span>
            <h3 className='text-xl font-bold text-gray-900'>{title}</h3>
        </div>

        <p className='text-gray-600 leading-relaxed text-center'>{description}</p>
    </div>
  );
};

export default Card;