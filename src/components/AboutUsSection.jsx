"use client";

import React from "react";
import Image from "next/image";


import {
    Clock,
    Stethoscope,
    Wallet,
    Heart,
    Thermometer,
    MonitorSmartphone,
} from "lucide-react";
import PatientReviews from "./PatientReviews";
import PhoneCallCTA from "./PhoneCallCTA";
import ElfsightWidget from "./ElfsightWidget";
import Link from "next/link";

const AboutUsSection = () => {
    return (
        <>
           <div className="relative flex flex-col items-center justify-center text-center px-4 py-20 bg-gradient-to-br from-white via-[#f0fffe] to-[#e6f9f7] overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-[#caf4ef] rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#00BCD4] rounded-full opacity-15 translate-x-1/3 translate-y-1/3"></div>
                <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-[#00BCD4] rounded-full opacity-40 animate-pulse"></div>
                <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-[#007B8A] rounded-full opacity-30 animate-pulse delay-1000"></div>
                
                <div className="relative z-10 max-w-4xl mx-auto">
                  
                    
                    <h2 className="text-6xl md:text-7xl font-bold text-transparent bg-gradient-to-r from-gray-900 via-[#007B8A] to-[#00BCD4] bg-clip-text mb-6 animate-fade-in">
                        About Us
                    </h2>
                    
                    <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                   Providing gentle, personalized dental care to keep your smile healthy and bright.
                    </p>
                    
                    <div className="flex items-center justify-center space-x-3 text-lg">
                        <Link href="/" className="text-gray-700 hover:text-[#00BCD4] transition-colors duration-300 font-medium">
                            Home
                        </Link>
                        <span className="text-[#00BCD4] text-xl">•</span>
                        <span className="text-gray-500 font-medium">About Us</span>
                    </div>
                </div>
            </div>

            {/* Section 1: Image + Heading */}
            <div className="bg-[#caf4ef] mt-16 px-6 py-16 rounded-tl-[120px] rounded-tr-[30px] rounded-bl-[120px] rounded-br-[120px] max-w-7xl mx-auto mb-16">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Left Text Content */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-4xl md:text-5xl font-playfair text-gray-900 mb-6">
                            A trusted dental professional,<br />
                            committed to your care<br />
                        </h2>
                        <p className="text-gray-700 text-lg leading-relaxed font-poppins">
                            With global training and clinical experience, I focus on offering quality dental care in a calm, hygienic, and patient-friendly environment. Every step—from diagnosis to treatment—is approached with care and attention, aiming to make your visit as comfortable and effective as possible.
                        </p>
                    </div>

                    {/* Right Image */}
                    <div className="w-full lg:w-1/2">
                        <div className="rounded-3xl overflow-hidden">
                            <Image
                                src="/images/about-hero.jpg"
                                alt="Team of Dentists"
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover rounded-[20px]"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 2: Feature Cards */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-gray-700">
                    <div className="flex items-start gap-4">
                        <div className="mt-1 md:mt-0 shrink-0">
                            <Clock color="#2EC4B6" size={60} />
                        </div>
                        <div>
                            <h3 className="font-bold text-xl md:text-2xl text-black">24 Hours Ready</h3>
                            <p className="text-base md:text-lg leading-relaxed mt-2 text-gray-500">
                                Emergency dental care services are available around the clock, including weekends and holidays, to address urgent dental issues such as severe pain or infection.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="mt-1 md:mt-2 shrink-0">
                            <Stethoscope color="#2EC4B6" size={60} />
                        </div>
                        <div>
                            <h3 className="font-bold text-xl md:text-2xl text-black">Accurate Diagnostics</h3>
                            <p className="text-base md:text-lg leading-relaxed mt-2 text-gray-500">
                                The dental team's ability to correctly identify and diagnose dental problems using advanced diagnostic tools and techniques to develop an effective treatment plan for the patient's needs.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="mt-1 md:mt-2 shrink-0">
                            <Wallet color="#2EC4B6" size={60} />
                        </div>
                        <div>
                            <h3 className="font-bold text-xl md:text-2xl text-black">Pay In Installment</h3>
                            <p className="text-base md:text-lg leading-relaxed mt-2 text-gray-500">
                                Clinic allows patients to break down the cost of their treatment into smaller payments over time, making dental care more accessible and manageable.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="mt-1 md:mt-2 shrink-0">
                            <Heart color="#2EC4B6" size={60} />
                        </div>
                        <div>
                            <h3 className="font-bold text-xl md:text-2xl text-black">Work from Heart</h3>
                            <p className="text-base md:text-lg leading-relaxed mt-2 text-gray-500">
                                Approaching the profession with empathy and compassion, prioritizing the patient's comfort and satisfaction for a positive dental experience.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="mt-1 md:mt-2 shrink-0">
                            <Thermometer color="#2EC4B6" size={60} />
                        </div>
                        <div>
                            <h3 className="font-bold text-xl md:text-2xl text-black">Regular Checkup</h3>
                            <p className="text-base md:text-lg leading-relaxed mt-2 text-gray-500">
                                Comprehensive examination of teeth, gums, and mouth, crucial for maintaining oral health and preventing dental problems.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="mt-1 md:mt-2 shrink-0">
                            <MonitorSmartphone color="#2EC4B6" size={60} />
                        </div>
                        <div>
                            <h3 className="font-bold text-xl md:text-2xl text-black">Online Booking</h3>
                            <p className="text-base md:text-lg leading-relaxed mt-2 text-gray-500">
                                Allows patients to schedule appointments online with flexibility and convenience, streamlining the process for the clinic.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 3: Stats Section */}
            <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center justify-between gap-12">
                <div className="w-full lg:w-1/2 relative">
                    <Image
                        src="/images/similing-pateint.avif"
                        alt="Smiling Patient"
                        width={500}
                        height={350}
                        className="rounded-[40px] object-cover w-full max-w-[500px] h-auto"
                    />
                </div>
                <div className="w-full lg:w-1/2 grid grid-cols-2 gap-8 text-center">
                    <div><svg className="mx-auto mb-2 w-16 h-16 sm:w-20 sm:h-20" viewBox="0 0 24 24" fill="none" stroke="#7B506F" strokeWidth="1.5"><path d="M12 2C9.243 2 7 4.243 7 7c0 3.866 5 13 5 13s5-9.134 5-13c0-2.757-2.243-5-5-5z" /><circle cx="12" cy="7" r="2" /></svg><h3 className="text-3xl font-bold text-black">10+</h3><p className="text-gray-600 text-sm mt-1">Dedicated Team</p></div>
                    <div><svg className="mx-auto mb-2 w-16 h-16 sm:w-20 sm:h-20" viewBox="0 0 24 24" fill="none" stroke="#7B506F" strokeWidth="1.5"><path d="M3 7h18v13H3zM8 7V4h8v3" /></svg><h3 className="text-3xl font-bold text-black">1</h3><p className="text-gray-600 text-sm mt-1">Clinic</p></div>
                    <div><svg className="mx-auto mb-2 w-16 h-16 sm:w-20 sm:h-20" viewBox="0 0 24 24" fill="none" stroke="#7B506F" strokeWidth="1.5"><path d="M10 14l2-2 2 2M12 12v6" /><circle cx="12" cy="6" r="4" /></svg><h3 className="text-3xl font-bold text-black">1000+</h3><p className="text-gray-600 text-sm mt-1">Happy Clients</p></div>
                    <div><svg className="mx-auto mb-2 w-16 h-16 sm:w-20 sm:h-20" viewBox="0 0 24 24" fill="none" stroke="#7B506F" strokeWidth="1.5"><path d="M4 4h16v16H4zM8 2v4M16 2v4M4 10h16" /></svg><h3 className="text-3xl font-bold text-black">500+</h3><p className="text-gray-600 text-sm mt-1">Online Appointment</p></div>
                </div>
            </div>

            {/* Section 4: Contact Cards */}
               <PhoneCallCTA/>

            {/* Section 6: What They Say About Us */}
            <section className="py-20 bg-white px-4 sm:px-6 md:px-8 max-w-screen-xl mx-auto">
                <PatientReviews/>
            </section>


        
        </>
    );
};

export default AboutUsSection;