import GeneralDentistryPage from "@/components/GeneralDentistryServicePage";
import Head from 'next/head';

export const metadata = {
  title: "Best General Dentistry in Ajmer - Complete Dental Care by Dr. Nikita Sharma",
  description: "Comprehensive general dental services in Ajmer including checkups, cleanings, fillings, root canals and extractions by experienced dentist Dr. Nikita Sharma (B.D.S., M.D.S.).",
  keywords: [
    "general dentist Ajmer",
    "dental checkup Ajmer",
    "teeth cleaning Ajmer",
    "tooth filling Ajmer",
    "root canal treatment Ajmer",
    "tooth extraction Ajmer",
    "cavity treatment Ajmer",
    "dental crown Ajmer",
    "gum treatment Ajmer",
    "oral health examination",
    "best general dentist Ajmer",
    "complete dental care",
    "family dentist near me",
    "painless dental treatment",
    "emergency dentist Ajmer"
  ].join(", "),
  authors: [{ name: "Dr. Nikita Sharma" }],
  metadataBase: new URL('https://drnikitasharma.in'),
  alternates: {
    canonical: 'https://drnikitasharma.in/services/general-dentistry',
  },
  openGraph: {
    title: "General Dentistry in Ajmer - Complete Dental Care by Dr. Nikita Sharma",
    description: "Professional general dental services including preventive care and treatments for all ages in Ajmer.",
    url: 'https://drnikitasharma.in/services/general-dentistry',
    siteName: 'Nivik Smile Care - General Dentistry',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/general-dentistry-og.jpg',
        width: 1200,
        height: 630,
        alt: 'General Dentistry Services in Ajmer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "General Dentistry in Ajmer - Complete Dental Care",
    description: "Professional dental checkups, cleanings and treatments for the whole family in Ajmer.",
    images: ['/general-dentistry-twitter.jpg'],
  },
};

// JSON-LD structured data for General Dentistry page
const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "Dentist"],
  "name": "General Dentistry Services",
  "description": "Comprehensive general dental care including preventive and restorative treatments",
  "url": "https://drnikitasharma.in/services/general-dentistry",
  "medicalSpecialty": "General Dentistry",
  "provider": {
    "@type": "Dentist",
    "name": "Dr. Nikita Sharma",
    "description": "General Dentist and Oral Health Specialist",
    "hasCredential": ["B.D.S.", "M.D.S."],
    "image": "https://drnikitasharma.in/dr-nikita-sharma.jpg"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "General Dentistry Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Dental Checkups",
          "description": "Comprehensive oral examinations and cancer screenings"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Professional Teeth Cleaning",
          "description": "Scaling and polishing to remove plaque and tartar"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Tooth-Colored Fillings",
          "description": "Aesthetic composite fillings for cavities"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Root Canal Treatment",
          "description": "Painless endodontic therapy to save infected teeth"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Tooth Extractions",
          "description": "Gentle removal of damaged or problematic teeth"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Gum Disease Treatment",
          "description": "Management of gingivitis and periodontitis"
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
        "name": "General Dentistry"
      }
    ]
  },
  "additionalProperty": {
    "@type": "PropertyValue",
    "name": "Pain Management",
    "value": "Local anesthesia and comfortable treatment options available"
  }
};

export default function GeneralDentistry() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div>
        <GeneralDentistryPage/>
      </div>
    </>
  );
}