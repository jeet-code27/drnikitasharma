"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-[#bcf7f1] py-12 px-8 md:px-16 lg:px-24 flex flex-col lg:flex-row items-center justify-between rounded-bl-[64px] rounded-br-[64px] min-h-[650px] md:min-h-[600px] relative overflow-hidden">
      {/* Left content area */}
      <div className="lg:max-w-[50%] z-10 mb-12 lg:mb-0">
        <h1 className="text-4xl font-playfair md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
          Keep your smile clean & shine
        </h1>
        <p className="text-gray-700 max-w-lg mb-10">
          Dentica provides comprehensive dental care services for the whole family. Our experienced team uses the latest technology to deliver high-quality.
        </p>
        <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold shadow-sm hover:shadow-md transition-all duration-300">
          BOOK AN APPOINTMENT
        </button>
      </div>

      {/* Right image area - placeholder for your image */}
      <motion.div
        className="w-full lg:w-[45%] h-64 md:h-96 lg:h-[500px] flex items-center justify-center absolute bottom-0 right-0"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="relative w-full h-full">
          <Image
            src="/images/hero.avif"
            alt="Dental care products and clear aligners"
            fill
            className="object-contain object-bottom"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
          />
        </div>
      </motion.div>
    </section>
  );
}