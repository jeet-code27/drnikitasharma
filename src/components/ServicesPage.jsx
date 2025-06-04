"use client";

import React, { memo } from "react";
import Image from "next/image";
import Link from "next/link";

// Memoized service card component to prevent unnecessary re-renders
const ServiceCard = memo(({ clinic, index }) => (
  <div className="bg-white rounded-3xl shadow-xl p-5 flex flex-col space-y-4 transform hover:scale-105 transition-transform duration-300 ease-in-out">
    <div className="relative w-full h-56 rounded-2xl overflow-hidden">
      <Image
        src={clinic.imageSrc}
        alt={clinic.name}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover"
        priority={index < 3} // Prioritize first 3 images for better performance
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyepcknyLDVZS2IcCK2hgb/2Q=="
      />
    </div>
    <div className="flex flex-col space-y-3 flex-grow">
      <h3 className="text-2xl font-bold text-black">{clinic.name}</h3>
      <p className="text-sm text-gray-600 line-clamp-3">{clinic.description}</p>
      <Link 
        href={`/services/${clinic.slug}`}
        className="mt-auto"
      >
        <button className="w-full px-4 py-2 bg-[#007B8A] text-white rounded-xl hover:bg-[#005f69] transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#007B8A] focus:ring-opacity-50">
          Read More
        </button>
      </Link>
    </div>
  </div>
));

ServiceCard.displayName = 'ServiceCard';

// Move data outside component to prevent recreation on each render
const clinicsData = [
  {
    name: "Orthodontic Services",
    slug: "orthodontic",
    imageSrc: "/images/Orthodontic.webp",
    description: "Correcting misaligned teeth and jaws using braces, aligners, and other devices for a healthier, straighter smile."
  },
  {
    name: "General Dentistry",
    slug: "general-dentistry",
    imageSrc: "/images/general-dentistry.jpeg",
    description: "Routine dental care including cleanings, exams, fillings, and preventive treatments to keep your smile healthy and strong."
  },
  {
    name: "Cosmetic Dentistry",
    slug: "cosmetic-dentistry",
    imageSrc: "/images/cosmetic-dentistry.jpeg",
    description: "Enhancing the appearance of your smile through teeth whitening, veneers, bonding, and other aesthetic treatments."
  },
  {
    name: "Restorative Dentistry",
    slug: "restorative-dentistry",
    imageSrc: "/images/restorative.jpeg",
    description: "Restoring damaged or missing teeth to improve function, appearance, and oral health using fillings, crowns, bridges, and implants."
  },
  {
    name: "Preventive Care",
    slug: "preventive-care",
    imageSrc: "/images/preventive-care.jpeg",
    description: "Routine checkups, cleanings, and early treatments to maintain oral health and prevent dental issues."
  },
  {
    name: "Gum & Periodontal Treatment",
    slug: "gum-periodontal-treatment",
    imageSrc: "/images/gum-periodontal.jpeg",
    description: "Deep cleaning (scaling and root planing), Gum infection treatment, Periodontal maintenance"
  }
];

const ServicesPage = () => {
  return (
    <>
      <header className="flex flex-col items-center justify-center text-center px-4 py-12">
        <h1 className="text-5xl font-bold text-black mb-0">Our Services</h1>
        <nav className="flex items-center space-x-2 text-gray-600 text-base mb-6" aria-label="Breadcrumb">
          <Link href="/" className="text-black hover:text-[#007B8A] transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-gray-500">Our Services</span>
        </nav>
      </header>

      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {clinicsData.map((clinic, index) => (
              <ServiceCard key={clinic.slug} clinic={clinic} index={index} />
            ))}
          </section>
        </div>
      </main>
    </>
  );
};

export default ServicesPage;