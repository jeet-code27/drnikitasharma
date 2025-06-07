"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const DentalFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

const faqItems = [
    {
      question: "What pediatric dental services does Nivik Smile Care offer?",
      answer: "At Nivik Smile Care, Dr. Nikita Sharma provides specialized pediatric dental care including routine check-ups, preventive treatments, cavity management, fluoride applications, space maintainers, and child-friendly orthodontic evaluations. We also offer general dentistry services for the whole family."
    },
    {
      question: "At what age should my child first visit the dentist?",
      answer: "Dr. Nikita Sharma recommends that children have their first dental visit by their first birthday or within 6 months of their first tooth erupting. Early visits help establish good oral health habits and allow us to monitor proper dental development."
    },
    {
      question: "How does Nivik Smile Care make dental visits comfortable for children?",
      answer: "Our clinic is specially designed to create a child-friendly environment. Dr. Nikita uses gentle techniques, explains procedures in kid-friendly terms, and offers behavior management strategies to ensure positive dental experiences. We also have TV entertainment and reward systems to make visits enjoyable."
    },
    {
      question: "What makes pediatric dentistry different from general dentistry?",
      answer: "As a trained Pedodontist, Dr. Nikita Sharma specializes in children's dental development, behavior management techniques, and treatments specific to primary teeth. Pediatric dentistry focuses on preventive care and early intervention to ensure proper growth and lifelong oral health."
    },
    {
      question: "How can I schedule an appointment at Nivik Smile Care?",
      answer: "You can book an appointment with Dr. Nikita Sharma by calling our clinic directly, visiting our website, or through WhatsApp. We offer convenient scheduling options including early morning and evening slots for school-going children."
    },
    {
      question: "Does Nivik Smile Care offer emergency dental care for children?",
      answer: "Yes, we provide emergency dental services for children including treatment for dental trauma, severe toothaches, and other urgent pediatric dental needs. Dr. Nikita is specially trained to handle dental emergencies in young patients with care and compassion."
    }
  ];

  return (
    <div className="w-full bg-white py-12 px-4 md:px-8 lg:px-12 flex flex-col lg:flex-row items-center">
      <div className="w-full lg:w-3/5 pr-0 lg:pr-8">
        <h2 className="text-5xl font-bold text-gray-900 mb-2 font-playfair">Dental Care You Can Trust</h2>
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
              <Link href='/appointment'>
              <button className="bg-teal-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-teal-700 transition duration-300">
                BOOK APPOINTMENT
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DentalFAQ;