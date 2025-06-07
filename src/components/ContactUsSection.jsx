"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const ContactUsSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const clinicsData = [
        {
            name: "Nivik Smile Care",
            imageSrc: "/images/clinics.jpeg",
            address: "B-455 PANCHSHEEL B BLOCK, AJMER",
            phone1: "+91 82097 88869",
            email: "niviksmilecare@gmail.com"
        },
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Reset form
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitting(false);
        
        // Here you would typically handle the actual form submission
        console.log('Form submitted:', formData);
    };

    return (
        <>
            {/* Header Section with enhanced gradient */}
            <div className="relative flex flex-col items-center justify-center text-center px-4 py-16 bg-gradient-to-br from-white via-[#f0fffe] to-[#e6f9f7] overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute top-0 left-0 w-72 h-72 bg-[#caf4ef] rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00BCD4] rounded-full opacity-10 translate-x-1/3 translate-y-1/3"></div>
                
                <div className="relative z-10">
                    <h2 className="text-6xl md:text-7xl font-bold text-transparent bg-gradient-to-r from-gray-900 via-[#007B8A] to-[#00BCD4] bg-clip-text mb-4 animate-fade-in">
                        Contact Us
                    </h2>
                    <div className="flex items-center justify-center space-x-3 text-lg mb-8">
                        <Link href="/" className="text-gray-700 hover:text-[#00BCD4] transition-colors duration-300 font-medium">
                            Home
                        </Link>
                        <span className="text-[#00BCD4] text-xl">•</span>
                        <span className="text-gray-500 font-medium">Contact</span>
                    </div>
                    
                    {/* Quick contact badges */}
                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                        <a href="tel:+918209788869" className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-[#caf4ef]/50">
                            <Phone className="w-4 h-4 text-[#00BCD4]" />
                            <span className="text-gray-700 font-medium">Call Now</span>
                        </a>
                        <a href="mailto:niviksmilecare@gmail.com" className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-[#caf4ef]/50">
                            <Mail className="w-4 h-4 text-[#00BCD4]" />
                            <span className="text-gray-700 font-medium">Email Us</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Enhanced Map + Contact Form Section */}
            <div className="relative px-4 py-16 bg-gradient-to-b from-white to-[#f8fdfc]">
                <div className="bg-gradient-to-br from-[#caf4ef] via-[#caf4ef] to-[#b8f0e8] rounded-[60px] max-w-7xl mx-auto px-8 md:px-12 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start shadow-2xl relative overflow-hidden">
                    
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/20 rounded-full -translate-y-1/2 translate-x-1/4"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#00BCD4]/20 rounded-full translate-y-1/2 -translate-x-1/4"></div>

                    {/* Map & Address */}
                    <div className="space-y-8 relative z-10">
                        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-2 shadow-xl">
                            <iframe
                                className="w-full rounded-2xl shadow-lg"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26332.85667293031!2d74.59976088455211!3d26.502210142395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396be7072c888ff5%3A0x545a9ee03d53cdd5!2sDR.%20NIKITA%20SHARMA!5e1!3m2!1sen!2sin!4v1748585136117!5m2!1sen!2sin"
                                height="350"
                                allowFullScreen
                                loading="lazy"
                                title="Clinic Location Map"
                            ></iframe>
                        </div>

                        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl space-y-6">
                            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                                <MapPin className="w-6 h-6 text-[#00BCD4] mr-3" />
                                <span>Visit Our Location</span>
                            </h2>
                            
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-[#007B8A]">DR. NIKITA SHARMA</h3>
                                <p className="text-gray-700 leading-relaxed">B-455, PANCHSHEEL, B Block, Panchsheel Nagar, Ajmer, Rajasthan</p>
                                
                                <div className="flex items-center space-x-3 group">
                                    <div className="bg-[#00BCD4]/10 p-2 rounded-full group-hover:bg-[#00BCD4]/20 transition-colors">
                                        <Phone className="w-5 h-5 text-[#00BCD4]" />
                                    </div>
                                    <a href="tel:+918209788869" className="text-gray-700 hover:text-[#00BCD4] transition-colors font-medium">
                                        +91 82097 88869
                                    </a>
                                </div>
                               
                                <div className="flex items-center space-x-3 group">
                                    <div className="bg-[#00BCD4]/10 p-2 rounded-full group-hover:bg-[#00BCD4]/20 transition-colors">
                                        <Mail className="w-5 h-5 text-[#00BCD4]" />
                                    </div>
                                    <a href="mailto:niviksmilecare@gmail.com" className="text-[#007B8A] hover:text-[#00BCD4] transition-colors font-medium underline decoration-2 underline-offset-4">
                                        niviksmilecare@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Enhanced Contact Form */}
                    <div className="relative z-10">
                        <form onSubmit={handleSubmit} className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-10 space-y-6 shadow-2xl border border-white/50">
                            <div className="text-center mb-8">
                                <h3 className="text-3xl font-bold text-gray-900 mb-2">Send us a message</h3>
                                <p className="text-gray-600">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
                            </div>

                            <div className="space-y-5">
                                <div className="group">
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Your Name"
                                        required
                                        className="w-full bg-gray-50 px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#00BCD4]/20 focus:border-[#00BCD4] transition-all duration-300 text-gray-800 placeholder-gray-500 group-hover:border-gray-300"
                                    />
                                </div>
                                
                                <div className="group">
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Your Email"
                                        required
                                        className="w-full bg-gray-50 px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#00BCD4]/20 focus:border-[#00BCD4] transition-all duration-300 text-gray-800 placeholder-gray-500 group-hover:border-gray-300"
                                    />
                                </div>
                                
                                <div className="group">
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        placeholder="Your Message"
                                        rows="6"
                                        required
                                        className="w-full bg-gray-50 px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#00BCD4]/20 focus:border-[#00BCD4] transition-all duration-300 text-gray-800 placeholder-gray-500 resize-none group-hover:border-gray-300"
                                    ></textarea>
                                </div>
                            </div>
                            
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-[#00BCD4] to-[#007B8A] text-white px-8 py-4 rounded-2xl font-semibold hover:from-[#007B8A] hover:to-[#00BCD4] transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                                        <span>Sending...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Send Message</span>
                                        <Send className="w-5 h-5" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Enhanced Visit Our Clinic Section */}
            <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f8fdfc] to-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-gray-900 via-[#007B8A] to-[#00BCD4] bg-clip-text mb-4">
                            Visit Our Clinic
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Experience exceptional dental care in our state-of-the-art facility
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 max-w-4xl mx-auto">
                        {clinicsData.map((clinic, index) => (
                            <div key={index} className="group bg-white rounded-[40px] shadow-2xl p-10 md:p-12 transform hover:scale-[1.02] transition-all duration-500 ease-out hover:shadow-3xl border border-gray-100 relative overflow-hidden">
                                {/* Background decoration */}
                                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#caf4ef]/30 to-[#00BCD4]/20 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-500"></div>
                                
                                <div className="relative z-10">
                                    <div className="mb-8">
                                        <Image
                                            src={clinic.imageSrc}
                                            alt={clinic.name}
                                            width={800}
                                            height={400}
                                            className="w-full h-64 md:h-80 object-cover rounded-3xl shadow-xl group-hover:shadow-2xl transition-shadow duration-500"
                                            priority
                                        />
                                    </div>
                                    
                                    <div className="space-y-6">
                                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 group-hover:text-[#007B8A] transition-colors duration-300">
                                            {clinic.name}
                                        </h3>

                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                            <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-2xl hover:bg-[#caf4ef]/30 transition-colors duration-300 group/item">
                                                <div className="bg-[#00BCD4]/10 p-3 rounded-full group-hover/item:bg-[#00BCD4]/20 transition-colors">
                                                    <MapPin className="text-[#00BCD4] w-6 h-6" />
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                                                    <p className="text-gray-600 text-sm leading-relaxed">{clinic.address}</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-2xl hover:bg-[#caf4ef]/30 transition-colors duration-300 group/item">
                                                <div className="bg-[#00BCD4]/10 p-3 rounded-full group-hover/item:bg-[#00BCD4]/20 transition-colors">
                                                    <Phone className="text-[#00BCD4] w-6 h-6" />
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                                                    <a href={`tel:${clinic.phone1}`} className="text-gray-600 text-sm hover:text-[#00BCD4] transition-colors">
                                                        {clinic.phone1}
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-2xl hover:bg-[#caf4ef]/30 transition-colors duration-300 group/item">
                                                <div className="bg-[#00BCD4]/10 p-3 rounded-full group-hover/item:bg-[#00BCD4]/20 transition-colors">
                                                    <Mail className="text-[#00BCD4] w-6 h-6" />
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                                                    <a href={`mailto:${clinic.email}`} className="text-[#007B8A] text-sm hover:text-[#00BCD4] transition-colors underline decoration-2 underline-offset-2">
                                                        {clinic.email}
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        {/* CTA Button */}
                                        <div className="pt-6">
                                            <a
                                                href={`tel:${clinic.phone1}`}
                                                className="inline-flex items-center space-x-3 bg-gradient-to-r from-[#00BCD4] to-[#007B8A] text-white px-8 py-4 rounded-2xl font-semibold hover:from-[#007B8A] hover:to-[#00BCD4] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                                            >
                                                <Phone className="w-5 h-5" />
                                                <span>Book Appointment</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
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
            `}</style>
        </>
    );
};

export default ContactUsSection;