"use client";
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Star, Quote, ChevronRight, ChevronLeft } from 'lucide-react';

const PatientReviews = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1536 },
      items: 3,
      slidesToSlide: 1
    },
    desktop: {
      breakpoint: { max: 1536, min: 1024 },
      items: 3, // Show 3 reviews per slide in desktop mode
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 1,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  const reviews = [
    {
      id: 1,
      name: "Rajesh Kumar",
      rating: 5,
      date: "January 15, 2025",
      comment: "Dr. Nikita Sharma is an exceptional dentist. After my root canal treatment, I experienced no pain and the procedure was seamless. Her expertise and patient care are outstanding.",
      procedure: "Root Canal Treatment"
    },
    {
      id: 2,
      name: "Priya Sharma",
      rating: 5,
      date: "February 2, 2025",
      comment: "I had severe toothache for weeks. Dr. Nikita's accurate diagnosis and treatment plan helped me recover quickly. Her approach to patient care is commendable.",
      procedure: "Tooth Extraction"
    },
    {
      id: 3,
      name: "Amit Patel",
      rating: 5,
      date: "February 10, 2025",
      comment: "The dental implants performed by Dr. Nikita were life-changing. Her team's support throughout the recovery process was exceptional. Highly recommended!",
      procedure: "Dental Implants"
    },
    {
      id: 4,
      name: "Meera Singh",
      rating: 5,
      date: "January 28, 2025",
      comment: "Dr. Nikita Sharma took the time to explain my dental condition and treatment options thoroughly. Her expertise in cosmetic dentistry is remarkable. I'm thrilled with my new smile!",
      procedure: "Cosmetic Dentistry"
    }
  ];

  const CustomDot = ({ onClick, ...rest }) => {
    const { active } = rest;
    return (
      <button
        className={`mx-1 transition-all duration-300 ${
          active 
            ? 'w-8 h-2 bg-gradient-to-r from-teal-500 to-teal-300 rounded-full' 
            : 'w-2 h-2 bg-gray-300 rounded-full hover:bg-gray-400'
        }`}
        onClick={() => onClick()}
      />
    );
  };

  const CustomRightArrow = ({ onClick }) => {
    return (
      <button
        onClick={onClick}
        className="absolute right-0 z-10 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:bg-gray-100"
        style={{ top: "50%", transform: "translateY(-50%)" }}
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-teal-500" />
      </button>
    );
  };

  const CustomLeftArrow = ({ onClick }) => {
    return (
      <button
        onClick={onClick}
        className="absolute left-0 z-10 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:bg-gray-100"
        style={{ top: "50%", transform: "translateY(-50%)" }}
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-teal-500" />
      </button>
    );
  };

  return (
    <div className="w-full  px-4 py-8 md:py-12 lg:py-16 relative">
      {/* Header with higher z-index */}
      <div className="text-center mb-8 md:mb-12 lg:mb-16 relative z-30">
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 md:mb-4 lg:mb-6 text-black leading-tight font-playfair">
          Patient Reviews
        </h2>
        <div className="w-24 h-1 mx-auto bg-gradient-to-r from-teal-500 to-teal-300 rounded-full mb-3 md:mb-4"></div>
        <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-teal-500 to-teal-300 inline-block text-transparent bg-clip-text leading-relaxed">
          Dr. Nikita Sharma 
          <span className="block text-lg md:text-xl lg:text-2xl mt-1">B.D.S., M.D.S., PEDODONTIST, GENERAL DENTISTRY AND CHILD SPECIALIST</span>
        </h3>
      </div>

      {/* Carousel with controlled z-index */}
      <div className="relative z-20">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          customDot={<CustomDot />}
          customRightArrow={<CustomRightArrow />}
          customLeftArrow={<CustomLeftArrow />}
          removeArrowOnDeviceType={["mobile"]}
          deviceType="desktop"
          itemClass="px-2 md:px-4"
          containerClass="z-20"
          className="pb-12"
        >
          {reviews.map((review) => (
            <div 
              key={review.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-6 md:p-8 h-full transition-all duration-500 transform hover:-translate-y-1"
            >
              <div className="relative">
                <div className="absolute -top-2 -left-2 opacity-10">
                  <Quote size={60} className="text-teal-500" />
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 md:w-6 md:h-6 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-base md:text-lg text-gray-700 italic mb-6 relative z-10">
                    "{review.comment}"
                  </p>
                  
                  <div className="space-y-2">
                    <p className="font-semibold text-gray-800 text-lg md:text-xl">{review.name}</p>
                    <div className="h-1 w-16 md:w-20 mx-auto bg-gradient-to-r from-teal-500 to-teal-300 rounded-full mb-2"></div>
                    <p className="text-teal-500 font-medium text-sm md:text-base">{review.procedure}</p>
                    <p className="text-gray-500 text-xs md:text-sm">{review.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default PatientReviews;