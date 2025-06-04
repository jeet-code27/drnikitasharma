"use client";

import React from "react";

const ContactUsSection = () => {
    const clinicsData = [
        {
            name: "Nivik Smile Care",
            // Replace with your actual image path
            imageSrc: "/images/clinics.jpeg",
            address: "B-455 PANCHSHEELB BLOCK, AJMER",
            phone1: "+91 82097 88869",
       
            email: "niviksmilecare@gmail.com"
        },
       
    ];

    return (
        <>
            {/* Header Section */}
            <div className="flex flex-col items-center justify-center text-center px-4 py-12">
                <h1 className="text-5xl font-bold text-black mb-0">Contact Us</h1>
                <div className="flex items-center space-x-2 text-gray-600 text-base mb-6">
                    <span className="text-black">Home</span>
                    <span>/</span>
                    <span className="text-gray-500">Contact</span>
                </div>
            </div>

            {/* Map + Contact Form Section */}
            <div className="bg-[#caf4ef] rounded-tl-[120px] rounded-tr-[30px] rounded-bl-[120px] rounded-br-[120px] max-w-6xl mx-auto my-12 px-12 py-14 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

                {/* Map & Address */}
                <div className="space-y-6">
                    <iframe
                        className="w-full rounded-xl"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26332.85667293031!2d74.59976088455211!3d26.502210142395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396be7072c888ff5%3A0x545a9ee03d53cdd5!2sDR.%20NIKITA%20SHARMA!5e1!3m2!1sen!2sin!4v1748585136117!5m2!1sen!2sin"
                        height="300"
                        allowFullScreen
                        loading="lazy"
                        title="Clinic Location Map"
                    ></iframe>

                    <div className="text-gray-800 space-y-1">
                        <h2 className="text-lg font-semibold">DR. NIKITA SHARMA</h2>
                        <p>B-455, PANCHSHEEL, B Block, Panchsheel Nagar, Ajmer, Rajasthan</p>
                        <div className="flex items-center space-x-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="text-[#000000] w-6 h-6 flex-shrink-0 mt-0.5" // Using #2EC4B6 color and w-6 h-6 size
                            >
                                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                            </svg>
                            <p>+91 82097 88869</p>
                        </div>
                       
                        <div className="flex items-center space-x-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="text-[#000000] w-6 h-6 flex-shrink-0 mt-0.5" // Using #2EC4B6 color and w-6 h-6 size
                            >
                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                            </svg>
                            <a href="mailto:niviksmilecare@gmail.com" className="text-blue-700 underline hover:text-blue-800">niviksmilecare@gmail.com</a>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <form className="bg-white rounded-2xl p-6 space-y-4 shadow-lg">
                    <h3 className="text-xl font-bold text-black">Send us a message</h3>

                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full bg-gray-200 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#00BCD4] focus:border-transparent"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full bg-gray-200 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#00BCD4] focus:border-transparent"
                    />
                    <textarea
                        placeholder="Message"
                        rows="5"
                        className="w-full bg-gray-200 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#00BCD4] focus:border-transparent"
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-[#00BCD4] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#00acc1] transition-colors"
                    >
                        Send Message
                    </button>
                </form>
            </div>

            {/* Visit Our Clinics Section - NEW */}
            <div className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* If you have a specific serif font like in the image, apply its class here */}
                    <h2 className="text-4xl md:text-5xl font-regular text-black text-center mb-16 font-playfair">
                        Visit Our Clinic
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
                        {clinicsData.map((clinic, index) => (
                            <div key={index} className="bg-white rounded-3xl shadow-xl p-10 flex flex-col space-y-4 transform hover:scale-105 transition-transform duration-300 ease-in-out">
                                <img
                                    src={clinic.imageSrc}
                                    alt={clinic.name}
                                    className="w-full h-56 object-cover rounded-2xl"
                                />
                                <div className="flex flex-col space-y-3 flex-grow">
                                    <h3 className="text-2xl font-bold text-black">{clinic.name}</h3>

                                    <div className="flex items-start space-x-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="text-[#2EC4B6] w-7 h-7 flex-shrink-0 mt-0.5" // MODIFIED: Color and Size
                                        >
                                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />

                                        </svg>
                                        <p className="text-sm text-gray-600">{clinic.address}</p>
                                    </div>

                                 
                                    <div className="flex items-start space-x-3">
                                        {/* Replaced emoji with SVG icon */}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="text-[#2EC4B6] w-6 h-6 flex-shrink-0 mt-0.5" // Using #2EC4B6 color and w-6 h-6 size
                                        >
                                            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                                        </svg>
                                        <div className="text-sm text-gray-600">
                                            <p>{clinic.phone1}</p>
                                            <p>{clinic.phone2}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        {/* Replaced emoji with SVG icon */}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="text-[#2EC4B6] w-6 h-6 flex-shrink-0 mt-0.5" // Using #2EC4B6 color and w-6 h-6 size
                                        >
                                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                        </svg>
                                        <a href={`mailto:${clinic.email}`} className="text-sm text-[#007B8A] hover:text-[#005f69] hover:underline">
                                            {clinic.email}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUsSection;
