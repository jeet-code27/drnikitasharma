"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const clinicsData = [
    {
        name: "Orthodontic Services",
        slug: "orthodontic",
        imageSrc: "/images/orthodontic.webp",
        description: "Correcting misaligned teeth and jaws using braces, aligners, and other devices for a healthier, straighter smile.",
        highlight: "Popular Choice"
    },
    {
        name: "General Dentistry",
        slug: "general-dentistry",
        imageSrc: "/images/general-dentistry.jpeg",
        description: "Routine dental care including cleanings, exams, fillings, and preventive treatments to keep your smile healthy and strong.",
        highlight: "Most Requested"
    },
    {
        name: "Cosmetic Dentistry",
        slug: "cosmetic-dentistry",
        imageSrc: "/images/cosmetic-dentistry.jpeg",
        description: "Enhancing the appearance of your smile through teeth whitening, veneers, bonding, and other aesthetic treatments.",
        highlight: "Smile Makeover"
    },
    {
        name: "Restorative Dentistry",
        slug: "restorative-dentistry",
        imageSrc: "/images/restorative.jpeg",
        description: "Restoring damaged or missing teeth to improve function, appearance, and oral health using fillings, crowns, bridges, and implants.",
        highlight: "Advanced Care"
    },
    {
        name: "Preventive Care",
        slug: "preventive-care",
        imageSrc: "/images/preventive-care.jpeg",
        description: "Routine checkups, cleanings, and early treatments to maintain oral health and prevent dental issues.",
        highlight: "Essential Care"
    },
    {
        name: "Gum & Periodontal Treatment",
        slug: "gum-periodontal-treatment",
        imageSrc: "/images/gum-periodontal.jpeg",
        description: "Deep cleaning (scaling and root planing), Gum infection treatment, Periodontal maintenance",
        highlight: "Specialized Treatment"
    }
];

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 2,
        slidesToSlide: 1
    },
    mobile: {
        breakpoint: { max: 768, min: 0 },
        items: 1,
        slidesToSlide: 1
    }
};

const CustomDot = ({ onClick, active }) => {
    return (
        <button
            className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
                active 
                    ? 'bg-[#00BCD4] scale-125 shadow-lg' 
                    : 'bg-gray-300 hover:bg-[#007B8A]/50'
            }`}
            onClick={() => onClick()}
        />
    );
};

const CustomButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return (
        <div className="flex justify-center items-center space-x-4 mt-8">
            <button
                className="bg-white/90 backdrop-blur-sm text-[#007B8A] p-3 rounded-full shadow-lg hover:shadow-xl hover:bg-white hover:text-[#00BCD4] hover:scale-110 transition-all duration-300 border border-[#00BCD4]/20 hover:border-[#00BCD4]/50 group"
                onClick={() => previous()}
            >
                <ArrowRight className="w-5 h-5 rotate-180 group-hover:scale-110 transition-transform duration-300" />
            </button>
            <button
                className="bg-gradient-to-r from-[#00BCD4] to-[#007B8A] text-white p-3 rounded-full shadow-lg hover:shadow-xl hover:from-[#007B8A] hover:to-[#00BCD4] hover:scale-110 transition-all duration-300 group"
                onClick={() => next()}
            >
                <ArrowRight className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            </button>
        </div>
    );
};

const ServicesSlider = () => {
    return (
        <div className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-[#f0fffe] to-[#e6f9f7] overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#caf4ef] rounded-full opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#00BCD4] rounded-full opacity-10 translate-x-1/3 translate-y-1/3"></div>
            <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-[#00BCD4] rounded-full opacity-30 animate-pulse"></div>
            <div className="absolute bottom-1/4 left-1/4 w-6 h-6 bg-[#007B8A] rounded-full opacity-20 animate-pulse delay-1000"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center space-x-2 mb-4">
                        <Sparkles className="w-6 h-6 text-[#00BCD4] animate-pulse" />
                        <span className="text-[#007B8A] font-semibold text-lg">Our Expertise</span>
                        <Sparkles className="w-6 h-6 text-[#00BCD4] animate-pulse" />
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Comprehensive 
                        <span className="text-transparent bg-gradient-to-r from-[#007B8A] to-[#00BCD4] bg-clip-text"> Dental Care</span>
                    </h2>
                    
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Discover our full range of dental services designed to keep your smile healthy, beautiful, and confident
                    </p>
                </div>

                {/* Services Carousel */}
                <div className="relative">
                    <Carousel
                        responsive={responsive}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={4000}
                        keyBoardControl={true}
                        customTransition="all .5s"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                        renderButtonGroupOutside={true}
                        customButtonGroup={<CustomButtonGroup />}
                        showDots={false}
                        swipeable={true}
                        draggable={true}
                        focusOnSelect={false}
                        centerMode={false}
                        additionalTransfrom={0}
                        arrows={false}
                        partialVisible={false}
                    >
                        {clinicsData.map((service, index) => (
                            <div key={index} className="px-3 h-full">
                                <div className="group bg-white rounded-[2rem] shadow-xl hover:shadow-2xl p-6 flex flex-col h-[580px] transform hover:scale-[1.02] transition-all duration-500 ease-out border border-gray-100 relative overflow-hidden">
                                    {/* Card background decoration */}
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#caf4ef]/20 to-[#00BCD4]/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-125 transition-transform duration-500"></div>
                                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-[#007B8A]/5 rounded-full translate-y-1/2 -translate-x-1/2 group-hover:scale-110 transition-transform duration-500"></div>
                                    
                                    {/* Highlight Badge */}
                                    <div className="absolute top-4 left-4 z-20">
                                        {/* <div className="bg-gradient-to-r from-[#00BCD4] to-[#007B8A] text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg flex items-center space-x-1">
                                            <Star className="w-3 h-3 fill-current" />
                                            <span>{service.highlight}</span>
                                        </div> */}
                                    </div>

                                    <div className="relative z-10 flex flex-col h-full">
                                        {/* Image with enhanced styling */}
                                        <div className="relative overflow-hidden rounded-2xl mb-6 group-hover:scale-[1.02] transition-transform duration-500">
                                            <Image
                                                src={service.imageSrc}
                                                alt={service.name}
                                                width={400}
                                                height={280}
                                                className="w-full h-48 object-cover"
                                            />
                                            {/* Image overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            
                                            {/* Service number badge */}
                                            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-[#007B8A] w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                                                {String(index + 1).padStart(2, '0')}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex flex-col space-y-4 flex-grow">
                                            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#007B8A] transition-colors duration-300 leading-tight">
                                                {service.name}
                                            </h3>
                                            
                                            <p className="text-gray-600 leading-relaxed text-sm flex-grow min-h-[60px]">
                                                {service.description}
                                            </p>
                                            
                                            {/* Enhanced CTA Button */}
                                            <Link href={`/services/${service.slug}`} className="mt-auto">
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
                            </div>
                        ))}
                    </Carousel>
                </div>

                {/* View All Services Button */}
                <div className="text-center mt-12">
                    <Link href="/services">
                        <button className="group bg-white/90 backdrop-blur-sm text-[#007B8A] px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:shadow-xl transition-all duration-300 border-2 border-[#00BCD4]/20 hover:border-[#00BCD4]/40 flex items-center space-x-3 mx-auto">
                            <span>View All Services</span>
                            <div className="w-8 h-8 bg-gradient-to-r from-[#00BCD4] to-[#007B8A] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <ArrowRight className="w-4 h-4 text-white" />
                            </div>
                        </button>
                    </Link>
                </div>
            </div>

            {/* Custom CSS for carousel */}
            <style jsx global>{`
                .carousel-container {
                    padding-bottom: 2rem;
                }
                
                .carousel-item-padding-40-px {
                    padding: 0 8px;
                }
                
                .react-multi-carousel-list {
                    overflow: visible;
                }
                
                .react-multi-carousel-track {
                    transition: transform 0.5s ease-in-out;
                }
                
                .custom-dot-list-style {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: absolute;
                    bottom: -3rem;
                    left: 50%;
                    transform: translateX(-50%);
                }
                
                @keyframes pulse {
                    0%, 100% { opacity: 0.4; }
                    50% { opacity: 0.8; }
                }
                
                @media (max-width: 768px) {
                    .carousel-item-padding-40-px {
                        padding: 0 4px;
                    }
                }
            `}</style>
        </div>
    );
};

export default ServicesSlider;