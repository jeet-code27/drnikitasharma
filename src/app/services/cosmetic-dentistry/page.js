import CosmeticDentistryPage from "@/components/CosmeticDentistryPage";


export const metadata = {
  title: "Best Cosmetic Dentistry in Ajmer - Dr. Nikita Sharma",
  description: "Transform your smile with expert cosmetic dentistry services in Ajmer - teeth whitening, veneers, dental crowns, and smile makeovers by Dr. Nikita Sharma (B.D.S., M.D.S.).",
  keywords: [
    "cosmetic dentist Ajmer",
    "smile makeover Ajmer",
    "teeth whitening Ajmer",
    "dental veneers Ajmer",
    "Hollywood smile treatment",
    "dental crowns Ajmer",
    "tooth colored fillings",
    "gum contouring Ajmer",
    "dental bonding Ajmer",
    "celebrity smile makeover",
    "best cosmetic dentist Ajmer",
    "painless smile design",
    "instant teeth whitening",
    "porcelain veneers cost",
    "cosmetic dental clinic"
  ].join(", "),
  authors: [{ name: "Dr. Nikita Sharma" }],
  metadataBase: new URL('https://drnikitasharma.in'),
  alternates: {
    canonical: 'https://drnikitasharma.in/services/cosmetic-dentistry',
  },
  openGraph: {
    title: "Cosmetic Dentistry in Ajmer - Smile Makeovers by Dr. Nikita Sharma",
    description: "Professional cosmetic dental treatments including teeth whitening, veneers and smile design in Ajmer.",
    url: 'https://drnikitasharma.in/services/cosmetic-dentistry',
    siteName: 'Nivik Smile Care - Cosmetic Dentistry',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/cosmetic-dentistry-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Cosmetic Dentistry Services in Ajmer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Cosmetic Dentistry in Ajmer - Smile Makeovers",
    description: "Achieve your dream smile with professional cosmetic dental treatments by Dr. Nikita Sharma.",
    images: ['/cosmetic-dentistry-twitter.jpg'],
  },
};

// JSON-LD structured data for Cosmetic Dentistry page
const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["MedicalProcedure", "Service"],
  "name": "Cosmetic Dentistry",
  "description": "Professional smile enhancement treatments including teeth whitening, veneers and smile makeovers",
  "url": "https://drnikitasharma.in/services/cosmetic-dentistry",
  "provider": {
    "@type": "Dentist",
    "name": "Dr. Nikita Sharma",
    "description": "Cosmetic Dentist and Smile Design Specialist",
    "medicalSpecialty": "Cosmetic Dentistry",
    "hasCredential": ["B.D.S.", "M.D.S."],
    "image": "https://drnikitasharma.in/dr-nikita-sharma.jpg"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Cosmetic Dentistry Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Teeth Whitening",
          "description": "Professional in-office teeth whitening treatment for instant results"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Porcelain Veneers",
          "description": "Custom-made thin shells to transform tooth appearance"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Dental Crowns",
          "description": "Tooth-shaped caps to restore damaged or discolored teeth"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Smile Makeover",
          "description": "Comprehensive smile design combining multiple cosmetic treatments"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Composite Bonding",
          "description": "Tooth-colored resin material to repair chips and gaps"
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
        "name": "Cosmetic Dentistry"
      }
    ]
  }
};

export default function CosmeticDentistry() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div>
        <CosmeticDentistryPage/>
      </div>
    </>
  );
}