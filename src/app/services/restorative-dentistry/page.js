import RestorativeDentistryPage from "@/components/RestorativeDentistryPage";
import Head from 'next/head';

export const metadata = {
  title: "Best Restorative Dentistry in Ajmer | Tooth Repair & Replacement | Dr. Nikita Sharma",
  description: "Comprehensive restorative dental treatments including fillings, crowns, bridges, and dentures in Ajmer. Expert care by Dr. Nikita Sharma (B.D.S., M.D.S.) to restore function and aesthetics.",
  keywords: [
    "restorative dentist Ajmer",
    "dental fillings Ajmer",
    "tooth crowns near me",
    "dental bridges cost",
    "tooth replacement options",
    "broken tooth repair",
    "dental inlays and onlays",
    "tooth colored fillings",
    "best crowns specialist Ajmer",
    "partial dentures Ajmer",
    "full mouth rehabilitation",
    "dental restoration cost",
    "ceramic crowns Ajmer",
    "tooth decay treatment",
    "dental implant crowns"
  ].join(", "),
  authors: [{ name: "Dr. Nikita Sharma" }],
  metadataBase: new URL('https://drnikitasharma.in'),
  alternates: {
    canonical: 'https://drnikitasharma.in/services/restorative-dentistry',
  },
  openGraph: {
    title: "Restorative Dentistry in Ajmer | Repair Damaged Teeth",
    description: "Advanced solutions for tooth repair and replacement to restore your smile's function and appearance.",
    url: 'https://drnikitasharma.in/services/restorative-dentistry',
    siteName: 'Nivik Smile Care - Restorative Dentistry',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/restorative-dentistry-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Restorative Dental Services in Ajmer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Restorative Dentistry in Ajmer | Smile Restoration",
    description: "Expert tooth repair and replacement solutions from Dr. Nikita Sharma in Ajmer.",
    images: ['/restorative-dentistry-twitter.jpg'],
  },
};

// JSON-LD structured data for Restorative Dentistry page
const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "Dentist"],
  "name": "Restorative Dentistry Services",
  "description": "Comprehensive dental restoration treatments to repair damaged teeth and replace missing teeth",
  "url": "https://drnikitasharma.in/services/restorative-dentistry",
  "medicalSpecialty": "Restorative Dentistry",
  "provider": {
    "@type": "Dentist",
    "name": "Dr. Nikita Sharma",
    "description": "Restorative Dentistry Specialist",
    "hasCredential": ["B.D.S.", "M.D.S."],
    "image": "https://drnikitasharma.in/dr-nikita-sharma.jpg"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Restorative Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Dental Fillings",
          "description": "Tooth-colored composite fillings to repair cavities"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Dental Crowns",
          "description": "Custom caps to restore damaged or weakened teeth"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Dental Bridges",
          "description": "Fixed prosthesis to replace one or more missing teeth"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Inlays & Onlays",
          "description": "Indirect restorations for moderate tooth damage"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Dentures",
          "description": "Removable replacements for missing teeth and tissues"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Tooth Repair",
          "description": "Restoration of chipped, cracked or broken teeth"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Full Mouth Rehabilitation",
          "description": "Comprehensive restoration of all teeth for optimal function"
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
        "name": "Restorative Dentistry"
      }
    ]
  },
  "additionalProperty": {
    "@type": "PropertyValue",
    "name": "Material Options",
    "value": "Porcelain, ceramic, composite resin, and metal alloys available"
  }
};

export default function RestorativeDentistry() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div>
        <RestorativeDentistryPage/>
      </div>
    </>
  );
}