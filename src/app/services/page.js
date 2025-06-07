import ServicesPage from "@/components/ServicesPage";


export const metadata = {
  title: "Expert Child & General Dentist in Ajmer - Dr Nikita Sharma | Nivik Smile Care",
  description: "Comprehensive dental services for children and adults in Ajmer. Dr. Nikita Sharma (B.D.S., M.D.S., Pedodontist) offers pediatric dentistry, general treatments, implants, and cosmetic procedures.",
  keywords: [
    "pediatric dentist Ajmer",
    "general dentist Ajmer",
    "child dental services",
    "teeth cleaning Ajmer", 
    "dental fillings for kids",
    "root canal treatment Ajmer",
    "dental crowns for children",
    "tooth extraction Ajmer",
    "braces for kids Ajmer",
    "teeth whitening Ajmer",
    "dental implants Ajmer",
    "gum treatment Ajmer",
    "child oral health",
    "family dentist near me",
    "emergency dental care Ajmer"
  ].join(", "),
  authors: [{ name: "Dr. Nikita Sharma" }],
  metadataBase: new URL('https://drnikitasharma.in'),
  alternates: {
    canonical: 'https://drnikitasharma.in/services',
  },
  openGraph: {
    title: "Expert Child & General Dentist in Ajmer - Dr Nikita Sharma | Nivik Smile Care",
    description: "Complete dental solutions for all ages - from pediatric care to advanced general dentistry services in Ajmer by Dr. Nikita Sharma (B.D.S., M.D.S., Pedodontist).",
    url: 'https://drnikitasharma.in/services',
    siteName: 'Nivik Smile Care - Complete Dental Solutions',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/dental-services-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Nikita Sharma - Child & General Dentistry Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Expert Child & General Dentist in Ajmer - Dr Nikita Sharma",
    description: "Your family's complete dental care solution - pediatric to general dentistry services in Ajmer.",
    images: ['/dental-services-twitter.jpg'],
  },
};

// JSON-LD structured data for Services page
const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "Dentist"],
  "name": "Nivik Smile Care - Dental Services",
  "description": "Comprehensive dental services for children and adults by Dr. Nikita Sharma",
  "url": "https://drnikitasharma.in/services",
  "medicalSpecialty": ["Pediatric Dentistry", "General Dentistry"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Dental Services",
    "itemListElement": [
      {
        "@type": "OfferCatalog",
        "name": "Pediatric Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Child Dental Checkups",
              "description": "Comprehensive oral examinations for children"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Dental Fillings for Kids",
              "description": "Tooth-colored fillings for primary and permanent teeth"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Child Root Canal Treatment",
              "description": "Pulpotomy and pulpectomy for infected primary teeth"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Space Maintainers",
              "description": "Appliances to preserve space for permanent teeth"
            }
          }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "General Dentistry",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Teeth Cleaning",
              "description": "Professional scaling and polishing"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Root Canal Treatment",
              "description": "Painless endodontic therapy for adults"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Dental Implants",
              "description": "Permanent tooth replacement solutions"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Cosmetic Dentistry",
              "description": "Veneers, crowns and smile makeovers"
            }
          }
        ]
      }
    ]
  },
  "provider": {
    "@type": "Person",
    "name": "Dr. Nikita Sharma",
    "honorificPrefix": "Dr.",
    "jobTitle": "Pedodontist & General Dentist",
    "hasCredential": ["B.D.S.", "M.D.S.", "Pedodontist Certification"],
    "knowsAbout": [
      "Pediatric Dentistry",
      "General Dentistry",
      "Preventive Dental Care",
      "Cosmetic Dentistry",
      "Restorative Dentistry"
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
  }
};

export default function Services() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div>
        <ServicesPage/>
      </div>
    </>
  );
}