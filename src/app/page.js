import DentalCareSection from "@/components/DentalCareSection";
import Hero from "../components/Hero";
import DentalServices from "@/components/DentalServices";
import DentalFAQ from "@/components/DentalFaq";
import PatientReviews from "@/components/PatientReviews";
import ServicesSlider from "@/components/ServiceSlider";
import Head from 'next/head';

export const metadata = {
  title: "Best Dentist in Ajmer - Dr Nikita Sharma | Nivik Smile Care",
  description: "Dr. Nikita Sharma is the best dentist in Ajmer at Nivik Smile Care providing comprehensive dental care including root canal treatment, dental implants, teeth whitening, and orthodontic services. Book your appointment today.",
  keywords: [
    "best dentist in Ajmer",
    "Dr. Nikita Sharma",
    "dental clinic Ajmer",
    "root canal treatment Ajmer",
    "dental implants Ajmer",
    "teeth whitening Ajmer",
    "orthodontist Ajmer",
    "dental care Ajmer",
    "tooth extraction Ajmer",
    "dental surgery Ajmer",
    "pediatric dentist Ajmer",
    "cosmetic dentistry Ajmer",
    "dental checkup Ajmer",
    "oral health Ajmer",
    "dentist near me Ajmer"
  ].join(", "),
  authors: [{ name: "Dr. Nikita Sharma" }],
  creator: "Dr. Nikita Sharma",
  publisher: "Dr. Nikita Sharma Dental Clinic",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://drnikitasharma.in'),
  alternates: {
    canonical: 'https://drnikitasharma.in/',
  },
  openGraph: {
    title: "Best Dentist in Ajmer - Dr Nikita Sharma | Nivik Smile Care",
    description: "Dr. Nikita Sharma is the best dentist in Ajmer at Nivik Smile Care providing comprehensive dental care including root canal treatment, dental implants, teeth whitening, and orthodontic services.",
    url: 'https://drnikitasharma.in/',
    siteName: 'Nivik Smile Care - Dr. Nikita Sharma',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Nikita Sharma - Best Dentist in Ajmer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Best Dentist in Ajmer - Dr Nikita Sharma | Nivik Smile Care",
    description: "Expert dental care in Ajmer at Nivik Smile Care - Root canal, implants, whitening & more. Book your appointment with the best dentist in Ajmer.",
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'Healthcare',
  classification: 'Dental Services',
  other: {
    'geo.region': 'IN-RJ',
    'geo.placename': 'Ajmer',
    'geo.position': '26.4499;74.6399',
    'ICBM': '26.4499, 74.6399',
  },
};

// JSON-LD structured data for better SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'Dr. Nikita Sharma',
  alternateName: 'Best Dentist in Ajmer',
  description: 'Dr. Nikita Sharma is the best dentist in Ajmer at Nivik Smile Care providing comprehensive dental care including root canal treatment, dental implants, teeth whitening, and orthodontic services.',
  url: 'https://drnikitasharma.in/',
  image: 'https://drnikitasharma.in/dr-nikita-sharma.jpg',
  priceRange: '₹₹',
  address: [
    {
      '@type': 'PostalAddress',
      name: 'Paras Urology & Multispeciality Hospital',
      streetAddress: 'Haribhau Upadhyay Nagar, C-Block, Pushkar Road',
      addressLocality: 'Ajmer',
      addressRegion: 'Rajasthan',
      postalCode: '305001',
      addressCountry: 'IN',
    },
    {
      '@type': 'PostalAddress',
      name: 'Nivik Smile Care',
      streetAddress: 'B-455 Panchsheel, B Block',
      addressLocality: 'Ajmer',
      addressRegion: 'Rajasthan',
      postalCode: '305004',
      addressCountry: 'IN',
    }
  ],
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 26.4499,
    longitude: 74.6399,
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-82097-88869',
    contactType: 'Appointments',
    availableLanguage: ['English', 'Hindi'],
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  medicalSpecialty: [
    'General Dentistry',
    'Cosmetic Dentistry',
    'Orthodontics',
    'Oral Surgery',
    'Pediatric Dentistry',
    'Endodontics',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Dental Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Root Canal Treatment',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Dental Implants',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Teeth Whitening',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Orthodontic Treatment',
        },
      },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '150',
  },
  review: [
    {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
      },
      author: {
        '@type': 'Person',
        name: 'Patient Review',
      },
      reviewBody: 'Excellent dental care by Dr. Nikita Sharma. Highly recommended dentist in Ajmer.',
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div>
        <Hero />
        <DentalCareSection/>
        <DentalServices/>
        <DentalFAQ/>
        <ServicesSlider/>
        <PatientReviews/>
      </div>
    </>
  );
}