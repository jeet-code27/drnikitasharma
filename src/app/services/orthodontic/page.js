import OrthodonticServicesPage from "@/components/OrthodonticServicesPage";
import Head from 'next/head';

export const metadata = {
  title: "Best Orthodontic Treatment in Ajmer - Braces & Aligners by Dr. Nikita Sharma",
  description: "Expert orthodontic care including metal braces, ceramic braces, and invisible aligners for children and adults in Ajmer by Dr. Nikita Sharma (B.D.S., M.D.S.).",
  keywords: [
    "orthodontist in Ajmer",
    "braces treatment Ajmer",
    "invisible aligners Ajmer",
    "teeth straightening Ajmer",
    "metal braces cost",
    "ceramic braces Ajmer",
    "child orthodontics",
    "adult braces treatment",
    "best orthodontist Ajmer",
    "clear aligners near me",
    "bite correction Ajmer",
    "overbite treatment",
    "underbite correction",
    "crowded teeth solution",
    "orthodontic consultation"
  ].join(", "),
  authors: [{ name: "Dr. Nikita Sharma" }],
  metadataBase: new URL('https://drnikitasharma.in'),
  alternates: {
    canonical: 'https://drnikitasharma.in/services/orthodontic',
  },
  openGraph: {
    title: "Orthodontic Treatment in Ajmer - Braces & Aligners by Dr. Nikita Sharma",
    description: "Professional orthodontic solutions including traditional braces and modern aligner systems in Ajmer.",
    url: 'https://drnikitasharma.in/services/orthodontic',
    siteName: 'Nivik Smile Care - Orthodontics',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/orthodontic-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Orthodontic Treatment Services in Ajmer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Orthodontic Treatment in Ajmer - Braces & Aligners",
    description: "Transform your smile with expert orthodontic care from Dr. Nikita Sharma in Ajmer.",
    images: ['/orthodontic-twitter.jpg'],
  },
};

// JSON-LD structured data for Orthodontic page
const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "Dentist"],
  "name": "Orthodontic Services",
  "description": "Comprehensive orthodontic treatments for children and adults including braces and aligners",
  "url": "https://drnikitasharma.in/services/orthodontic",
  "medicalSpecialty": "Orthodontics",
  "provider": {
    "@type": "Dentist",
    "name": "Dr. Nikita Sharma",
    "description": "Orthodontic Specialist",
    "hasCredential": ["B.D.S.", "M.D.S."],
    "image": "https://drnikitasharma.in/dr-nikita-sharma.jpg"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Orthodontic Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Metal Braces",
          "description": "Traditional stainless steel braces for effective teeth alignment"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Ceramic Braces",
          "description": "Tooth-colored braces for less visible orthodontic treatment"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Invisible Aligners",
          "description": "Clear removable aligners for discreet teeth straightening"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Lingual Braces",
          "description": "Braces placed behind teeth for completely hidden treatment"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Orthodontic Consultation",
          "description": "Comprehensive evaluation and treatment planning"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Retainers",
          "description": "Custom appliances to maintain teeth position after treatment"
        }
      }
    ]
  },
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 26.4499,
      "longitude": 74.6399
    },
    "geoRadius": 50000,
    "description": "Serving Ajmer and nearby areas in Rajasthan"
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://drnikitasharma.in/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://drnikitasharma.in/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Orthodontic Treatment"
      }
    ]
  },
  "additionalProperty": {
    "@type": "PropertyValue",
    "name": "Treatment Duration",
    "value": "Typically 12-24 months depending on case complexity"
  }
};

export default function OrthodonticPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div>
        <OrthodonticServicesPage/>
      </div>
    </>
  );
}