"use client";

import React from 'react';
import Image from 'next/image';
import { Phone } from 'lucide-react';

const DentalCareSection = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 max-w-xl">
          <h3 className="text-teal-500 text-xl font-medium mb-4">Why Choose Us</h3>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-playfair ">
            Leading the Way in<br />
            Advanced Dental Care
          </h1>
          
          <p className="text-gray-600 mb-8">
            At our dental practice, we are committed to providing exceptional dental care using the latest technology and techniques. Our team of experienced professionals ensures that every patient receives personalized treatment in a comfortable and welcoming environment.
          </p>
          
          {/* Feature Items */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-teal-500 rounded-lg flex-shrink-0 flex items-center justify-center">
                {/* Teeth Icon */}
                <Image 
                  src="/images/teeth.png" 
                  alt="Teeth Icon" 
                  width={40} 
                  height={40} 
                  className="w-10 h-10"
                />
              </div>
              <div>
                <h3 className="text-xl text-black font-bold mb-2">Comprehensive Dental Services</h3>
                <p className="text-gray-600">
                  From routine check-ups to advanced cosmetic and restorative treatments, we offer a wide range of dental services to meet all your oral health needs.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-2 bg-teal-500 rounded-lg flex-shrink-0 flex items-center justify-center">
                {/* Stethoscope Icon */}
                <Image 
                  src="/images/stethoscope-icon.png" 
                  alt="Stethoscope Icon" 
                  width={50} 
                  height={50} 
                  className="w-10 h-10"
                />
              </div>
              <div>
                <h3 className="text-xl text-black font-bold mb-2">State-of-the-Art Technology</h3>
                <p className="text-gray-600">
                  We utilize cutting-edge dental technology to ensure precise diagnoses and effective treatments, providing you with the best possible care.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className=" bg-teal-500 rounded-lg flex-shrink-0 flex items-center justify-center">
                {/* Doctor Icon */}
                <Image 
                  src="/images/doctor.png"  
                  alt="Doctor Icon" 
                  width={100} 
                  height={100} 
                  className="w-14 h-14"
                />
              </div>
              <div>
                <h3 className="text-xl text-black font-bold mb-2">Expert Dental Professionals</h3>
                <p className="text-gray-600">
                  Our team of highly skilled and compassionate dentists is dedicated to helping you achieve a healthy, beautiful smile with personalized care.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Content - Image and Contact */}
        <div className="w-full lg:w-1/2 max-w-xl relative">
          <div className="relative h-96 lg:h-[500px] mx-auto">
            <Image 
              src="/images/whychooseus.jpg"
              alt="Dental professional with child patient" 
              fill
              className="object-cover rounded-lg"
              priority
            />
            
            {/* Contact Card - Positioned differently for mobile vs desktop */}
            <div className="absolute lg:-bottom-16 lg:left-[-40px] hidden lg:block bg-teal-500 text-white p-8 rounded-lg w-64">
              <div className="flex justify-center mb-4">
                <div className="bg-white p-4 rounded-full">
                  <Phone className="w-8 h-8 text-teal-500" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-center mb-3">
                Have Any Questions?
              </h3>
              
              <p className="text-xl font-bold text-center">
                +91 82097 88869
              </p>
            </div>
          </div>
          
          {/* Mobile Contact Card - Below image on mobile only */}
          <div className="lg:hidden bg-teal-500 text-white p-8 rounded-lg w-full mt-8 mx-auto max-w-xs">
            <div className="flex justify-center mb-4">
              <div className="bg-white p-4 rounded-full">
                <Phone className="w-8 h-8 text-teal-500" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-center mb-3">
              Have Any Questions?
            </h3>
            
            <p className="text-xl font-bold text-center">
              +91 82097 88869
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DentalCareSection;