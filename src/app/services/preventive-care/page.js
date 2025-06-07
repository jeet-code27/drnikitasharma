import PreventiveCarePage from "@/components/PreventiveCarePage";

export const metadata = {
  title: "Best Preventive Dental Care in Ajmer - Complete Oral Health Solutions | Dr. Nikita Sharma",
  description: "Professional preventive dental care including cleanings, fluoride treatments, sealants, and oral health education for all ages in Ajmer by Dr. Nikita Sharma (B.D.S., M.D.S.).",
  keywords: [
    "preventive dentistry Ajmer",
    "dental cleaning Ajmer",
    "fluoride treatment near me",
    "dental sealants for children",
    "oral health education",
    "scaling and polishing",
    "periodontal care Ajmer",
    "cavity prevention",
    "best dentist for kids Ajmer",
    "oral hygiene maintenance",
    "dental checkup cost",
    "teeth cleaning price",
    "gum disease prevention",
    "plaque removal treatment",
    "oral prophylaxis specialist"
  ].join(", "),
  authors: [{ name: "Dr. Nikita Sharma" }],
  metadataBase: new URL('https://drnikitasharma.in'),
  alternates: {
    canonical: 'https://drnikitasharma.in/services/preventive-care',
  },
  openGraph: {
    title: "Preventive Dental Care in Ajmer - Complete Oral Health Solutions",
    description: "Comprehensive preventive dental services to maintain optimal oral health for your entire family in Ajmer.",
    url: 'https://drnikitasharma.in/services/preventive-care',
    siteName: 'Nivik Smile Care - Preventive Dentistry',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/preventive-care-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Preventive Dental Care Services in Ajmer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Preventive Dental Care in Ajmer - Healthy Smiles for Life",
    description: "Protect your smile with expert preventive dental care from Dr. Nikita Sharma in Ajmer.",
    images: ['/preventive-care-twitter.jpg'],
  },
};

// JSON-LD structured data for Preventive Care page
const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "Dentist"],
  "name": "Preventive Dental Care Services",
  "description": "Comprehensive preventive dental treatments to maintain optimal oral health and prevent dental problems",
  "url": "https://drnikitasharma.in/services/preventive-care",
  "medicalSpecialty": "Preventive Dentistry",
  "provider": {
    "@type": "Dentist",
    "name": "Dr. Nikita Sharma",
    "description": "Preventive Dentistry Specialist",
    "hasCredential": ["B.D.S.", "M.D.S."],
    "image": "https://drnikitasharma.in/dr-nikita-sharma.jpg"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Preventive Care Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Dental Cleaning",
          "description": "Professional scaling and polishing to remove plaque and tartar"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Fluoride Treatment",
          "description": "Professional fluoride application to strengthen tooth enamel"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Dental Sealants",
          "description": "Protective coatings applied to chewing surfaces to prevent cavities"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Oral Health Screening",
          "description": "Comprehensive examination to detect early signs of dental problems"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Oral Hygiene Instruction",
          "description": "Personalized guidance on proper brushing and flossing techniques"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Periodontal Maintenance",
          "description": "Specialized cleaning for patients with gum disease history"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Diet Counseling",
          "description": "Nutritional guidance for optimal oral health"
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
        "name": "Preventive Dental Care"
      }
    ]
  },
  "additionalProperty": {
    "@type": "PropertyValue",
    "name": "Recommended Frequency",
    "value": "Every 6 months for optimal preventive care"
  }
};

export default function PreventiveCare() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div>
        <PreventiveCarePage/>
      </div>
    </>
  );
}