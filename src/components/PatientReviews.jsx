"use client";
import React from 'react';

import 'react-multi-carousel/lib/styles.css';
import ElfsightWidget from './ElfsightWidget';


const PatientReviews = () => {

  return (
    <div className="w-full  px-4 py-8 md:py-12 lg:py-16 relative">
      {/* Header with higher z-index */}
      <div className="text-center mb-8 md:mb-12 lg:mb-16 relative z-30">
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 md:mb-4 lg:mb-6 text-black leading-tight font-playfair">
          Patient Reviews
        </h2>
        <div className="w-24 h-1 mx-auto bg-gradient-to-r from-teal-500 to-teal-300 rounded-full mb-3 md:mb-4"></div>
        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-teal-500 to-teal-300 inline-block text-transparent bg-clip-text leading-relaxed">
          Dr. Nikita Sharma 
          <span className="block text-lg md:text-xl lg:text-2xl mt-1">B.D.S., M.D.S., PEDODONTIST, GENERAL DENTISTRY AND CHILD SPECIALIST</span>
        </h1>
      </div>

      {/* Carousel with controlled z-index */}
      <div className="relative z-20">
       <ElfsightWidget/>
      
      </div>
    </div>
  );
};

export default PatientReviews;