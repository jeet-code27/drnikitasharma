import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-50 w-full mx-auto rounded-lg overflow-hidden shadow-sm">
      <div className="flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="p-10 md:w-1/2 mt-20">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">DR. NIKITA SHARMA</h2>
          <p className="text-gray-600 mb-6">
            Experienced and internationally certified healthcare professional dedicated to providing the best care.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="text-gray-500 mt-1 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-600 mt-2 font-medium">Nivik Smile Care</p>
                <p className="text-gray-600">B-455 Panchsheel, B Block, Ajmer, Rajasthan</p>
                <p className="text-gray-600 font-medium">Paras Urology & Multispeciality Hospital</p>
                <p className="text-gray-600">Haribhau Upadhyay Nagar, C-Block, Pushkar Road, Ajmer</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="text-gray-500 mt-1 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-600">+91 82097 88869 <span className="text-gray-500">(Appointments)</span></p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="text-gray-500 mt-1 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-gray-600">niviksmilecare@gmail.com</p>
            </div>
          </div>
          
          <div className="border-t border-gray-200 my-8"></div>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Pages</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-600 hover:text-teal-500">About Us</Link></li>
                <li><Link href="/services" className="text-gray-600 hover:text-teal-500">Services</Link></li>
                <li><Link href="/contact" className="text-gray-600 hover:text-teal-500">Contact Us</Link></li>
                <li><Link href="/faq" className="text-gray-600 hover:text-teal-500">FAQ</Link></li>
                <li><Link href="/blog" className="text-gray-600 hover:text-teal-500">Blog</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-8 pt-6">
            <p className="text-gray-600 text-sm">2025 © Dr. Nikita Sharma. All rights reserved.</p>
          </div>
        </div>
        
        {/* Right Section - Schedule */}
        <div className="bg-[#E2E9EB] lg:p-14 p-10 m-8 md:w-[570px] rounded-[120px_30px_120px_120px]">
          <h2 className="text-3xl text-center font-bold text-black mb-6">Schedule</h2>
          
          <div className="space-y-4">
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <div className="text-gray-800 font-semibold text-lg mb-3">Monday - Saturday</div>
              <div className="space-y-3">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">Paras Urology Hospital</span>
                    <span className="text-teal-600 font-semibold">10:00 AM - 12:00 PM</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Morning Session</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">Nivik Smile Care</span>
                    <span className="text-teal-600 font-semibold">5:00 PM - 7:00 PM</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Evening Session</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <div className="flex justify-between items-center">
                <span className="text-gray-800 font-semibold text-lg">Sunday</span>
                <span className="text-red-500 font-semibold">Closed</span>
              </div>
              <div className="text-xs text-gray-500 mt-2">Weekly Off</div>
            </div>
          </div>
          
          <button className="w-full mt-6 bg-teal-500 hover:bg-teal-600 text-white font-medium py-4 px-4 rounded-lg uppercase tracking-wide transition duration-200">
            Make an Appointment
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;