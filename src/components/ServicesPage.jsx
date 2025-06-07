"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

const clinicsData = [
    {
        name: "Orthodontic Services",
        slug: "orthodontic",
        imageSrc: "/images/orthodontic.webp",
        discription: "Correcting misaligned teeth and jaws using braces, aligners, and other devices for a healthier, straighter smile."
    },
    {
        name: "General Dentistry",
        slug: "general-dentistry",
        imageSrc: "/images/general-dentistry.jpeg",
        discription: "Routine dental care including cleanings, exams, fillings, and preventive treatments to keep your smile healthy and strong."
    },
    {
        name: "Cosmetic Dentistry",
        slug: "cosmetic-dentistry",
        imageSrc: "/images/cosmetic-dentistry.jpeg",
        discription: "Enhancing the appearance of your smile through teeth whitening, veneers, bonding, and other aesthetic treatments."
    },
    {
        name: "Restorative Dentistry",
        slug: "restorative-dentistry",
        imageSrc: "/images/restorative.jpeg",
        discription: "Restoring damaged or missing teeth to improve function, appearance, and oral health using fillings, crowns, bridges, and implants."
    },
    {
        name: "Preventive Care",
        slug: "preventive-care",
        imageSrc: "/images/preventive-care.jpeg",
        discription: "Routine checkups, cleanings, and early treatments to maintain oral health and prevent dental issues."
    },
    {
        name: "Gum & Periodontal Treatment",
        slug: "gum-periodontal-treatment",
        imageSrc: "/images/gum-periodontal.jpeg",
        discription: "Deep cleaning (scaling and root planing), Gum infection treatment, Periodontal maintenance"
    }
];

const ServicesPage = () => {
    return (
        <>
            {/* Enhanced Header Section */}
            <div className="relative flex flex-col items-center justify-center text-center px-4 py-20 bg-gradient-to-br from-white via-[#f0fffe] to-[#e6f9f7] overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-[#caf4ef] rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#00BCD4] rounded-full opacity-15 translate-x-1/3 translate-y-1/3"></div>
                <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-[#00BCD4] rounded-full opacity-40 animate-pulse"></div>
                <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-[#007B8A] rounded-full opacity-30 animate-pulse delay-1000"></div>
                
                <div className="relative z-10 max-w-4xl mx-auto">
                  
                    
                    <h2 className="text-6xl md:text-7xl font-bold text-transparent bg-gradient-to-r from-gray-900 via-[#007B8A] to-[#00BCD4] bg-clip-text mb-6 animate-fade-in">
                        Our Services
                    </h2>

                    <h1 className="hidden">Best Dentist in Ajmer - Dr Nikita Sharma</h1>
                    
                    <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Experience exceptional dental care with our comprehensive range of services designed to keep your smile healthy and beautiful
                    </p>
                    
                    <div className="flex items-center justify-center space-x-3 text-lg">
                        <Link href="/" className="text-gray-700 hover:text-[#00BCD4] transition-colors duration-300 font-medium">
                            Home
                        </Link>
                        <span className="text-[#00BCD4] text-xl">•</span>
                        <span className="text-gray-500 font-medium">Our Services</span>
                    </div>
                </div>
            </div>

            {/* Enhanced Services Grid */}
            <div className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f8fdfc] to-white">
                {/* Background decoration */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 left-10 w-2 h-2 bg-[#00BCD4] rounded-full opacity-30 animate-bounce"></div>
                    <div className="absolute top-40 right-20 w-3 h-3 bg-[#007B8A] rounded-full opacity-20 animate-bounce delay-500"></div>
                    <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-[#caf4ef] rounded-full opacity-40 animate-pulse"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Choose Your <span className="text-transparent bg-gradient-to-r from-[#007B8A] to-[#00BCD4] bg-clip-text">Perfect Treatment</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            From routine care to specialized treatments, we offer comprehensive dental solutions tailored to your needs
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {clinicsData.map((clinic, index) => (
                            <div key={index} className="group bg-white rounded-[2rem] shadow-xl hover:shadow-2xl p-6 flex flex-col space-y-6 transform hover:scale-[1.02] transition-all duration-500 ease-out border border-gray-100 relative overflow-hidden">
                                {/* Card background decoration */}
                                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#caf4ef]/20 to-[#00BCD4]/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-125 transition-transform duration-500"></div>
                                <div className="absolute bottom-0 left-0 w-16 h-16 bg-[#007B8A]/5 rounded-full translate-y-1/2 -translate-x-1/2 group-hover:scale-110 transition-transform duration-500"></div>
                                
                                <div className="relative z-10">
                                    {/* Image with enhanced styling */}
                                    <div className="relative overflow-hidden rounded-2xl mb-6 group-hover:scale-[1.02] transition-transform duration-500">
                                        <Image
                                            src={clinic.imageSrc}
                                            alt={clinic.name}
                                            width={400}
                                            height={300}
                                            className="w-full h-56 object-cover"
                                        />
                                        {/* Image overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        
                                        {/* Service number badge */}
                                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#007B8A] w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                                            {index + 1}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex flex-col space-y-4 flex-grow">
                                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#007B8A] transition-colors duration-300">
                                            {clinic.name}
                                        </h3>
                                        
                                        <p className="text-gray-600 leading-relaxed text-sm flex-grow">
                                            {clinic.discription}
                                        </p>
                                        
                                        {/* Enhanced CTA Button */}
                                        <Link href={`/services/${clinic.slug}`} className="mt-6">
                                            <button className="group/btn w-full bg-gradient-to-r from-[#00BCD4] to-[#007B8A] text-white px-6 py-4 rounded-2xl font-semibold hover:from-[#007B8A] hover:to-[#00BCD4] transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 relative overflow-hidden">
                                                {/* Button background animation */}
                                                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                                                
                                                <span className="relative z-10">Learn More</span>
                                                <ArrowRight className="w-5 h-5 relative z-10 group-hover/btn:translate-x-1 transition-transform duration-300" />
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Enhanced Call-to-Action Section */}
            <div className="relative py-20 px-4 bg-gradient-to-br from-[#caf4ef] via-[#b8f0e8] to-[#caf4ef] overflow-hidden">
                {/* Background decorations */}
                <div className="absolute top-0 left-0 w-40 h-40 bg-white/20 rounded-full -translate-y-1/2 -translate-x-1/2"></div>
                <div className="absolute bottom-0 right-0 w-60 h-60 bg-[#00BCD4]/20 rounded-full translate-y-1/3 translate-x-1/3"></div>
                <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Ready to Transform Your <span className="text-[#007B8A]">Smile?</span>
                    </h2>
                    <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Book your consultation today and take the first step towards achieving the perfect smile you've always wanted
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                       <Link
                            href="/appointment"
                            className="bg-gradient-to-r from-[#00BCD4] to-[#007B8A] text-white px-8 py-4 rounded-2xl font-semibold hover:from-[#007B8A] hover:to-[#00BCD4] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-3"
                        >
                            <span>Book Appointment</span>
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        
                        <Link href="tel:+918209788869">
                            <button className="bg-white/90 backdrop-blur-sm text-[#007B8A] px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:shadow-lg transition-all duration-300 border-2 border-white/50 hover:border-[#00BCD4]/30">
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Custom CSS for animations */}
            <style jsx>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 1s ease-out;
                }
                
                @keyframes bounce { 
                    0%, 20%, 53%, 80%, 100% { transform: translateY(0); }
                    40%, 43% { transform: translateY(-10px); }
                    70% { transform: translateY(-5px); }
                    90% { transform: translateY(-2px); }
                }
                
                @keyframes pulse {
                    0%, 100% { opacity: 0.4; }
                    50% { opacity: 0.8; }
                }
            `}</style>
        </>
    );
};

export default ServicesPage;