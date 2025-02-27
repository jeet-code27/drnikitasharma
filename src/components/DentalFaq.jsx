"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

const DentalFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "What dental services does your clinic offer?",
      answer: "We offer a comprehensive range of dental services including general dentistry, cosmetic procedures, orthodontics, periodontics, and emergency dental care."
    },
    {
      question: "How often should I visit the dentist?",
      answer: "We recommend visiting the dentist every 6 months for regular check-ups and cleanings. However, some patients may need more frequent visits based on their oral health needs."
    },
    {
      question: "Do you accept dental insurance?",
      answer: "Yes, we accept most major dental insurance plans. Our staff will help verify your benefits and maximize your coverage."
    },
    {
      question: "Are dental procedures painful?",
      answer: "With modern techniques and anesthesia options, most dental procedures involve minimal discomfort. We prioritize patient comfort and offer sedation options for anxious patients."
    },
    {
      question: "How can I schedule an appointment at your clinic?",
      answer: "You can schedule an appointment through our website, by calling our office during business hours, or by visiting our clinic in person."
    }
  ];

  return (
    <div className="w-full bg-white py-12 px-4 md:px-8 lg:px-12 flex flex-col lg:flex-row items-center">
      <div className="w-full lg:w-3/5 pr-0 lg:pr-8">
        <h1 className="text-5xl font-bold text-gray-900 mb-2 font-playfair">Dental Care You Can Trust</h1>
        <p className="text-xl text-gray-600 mb-12">Have a dental concern? Our expert team is ready to provide the quality care you deserve at our state-of-the-art clinic.</p>
        
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="border-t border-gray-200 py-4">
              <button
                className="w-full flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-xl text-gray-700 font-medium text-left">{item.question}</h3>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="text-gray-600" />
                </motion.div>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pt-4 text-gray-600">{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
      
      <div className="w-full lg:w-2/5 mt-12 lg:mt-0 relative">
        <div className="bg-gray-400 rounded-bl-full rounded-br-full overflow-hidden">
          <Image 
            src="/images/clinic.png" 
            alt="Dental clinic interior" 
            width={800} 
            height={600} 
            className="w-full h-[600px] object-cover"
          />
          
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white p-4 md:p-6 rounded-lg shadow-xl max-w-xs w-11/12">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden mr-3 md:mr-4 shadow-md">
                <Image 
                  src="/images/dentist.png" 
                  alt="Dr. Nikita Sharma" 
                  width={64} 
                  height={64} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Dr. Nikita Sharma</h4>
                <p className="text-xs md:text-sm text-gray-600">B.D.S., M.D.S., PEDODONTIST, GENERAL DENTISTRY AND CHILD SPECIALIST</p>
              </div>
            </div>
            
            <div className="mt-2 text-center">
              <button className="bg-teal-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-teal-700 transition duration-300">
                BOOK APPOINTMENT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DentalFAQ;