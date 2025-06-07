import GumPeriodontalPage from "@/components/GumPeriodontalPage";


export const metadata = {
  title: "Best Gum Disease Treatment in Ajmer | Periodontal Care by Dr. Nikita Sharma",
  description: "Expert diagnosis and treatment of gum diseases including gingivitis and periodontitis in Ajmer. Advanced periodontal therapies by Dr. Nikita Sharma (B.D.S., M.D.S.).",
  keywords: [
    "gum disease treatment Ajmer",
    "periodontist in Ajmer",
    "gingivitis treatment",
    "periodontitis specialist",
    "gum recession treatment",
    "deep cleaning teeth Ajmer",
    "scaling and root planing",
    "laser gum treatment",
    "bleeding gums solution",
    "pocket reduction surgery",
    "gum infection treatment",
    "best gum specialist Ajmer",
    "halitosis treatment",
    "dental bone loss treatment",
    "gum flap surgery"
  ].join(", "),
  authors: [{ name: "Dr. Nikita Sharma" }],
  metadataBase: new URL('https://drnikitasharma.in'),
  alternates: {
    canonical: 'https://drnikitasharma.in/services/gum-periodontal-treatment',
  },
  openGraph: {
    title: "Gum Disease Treatment in Ajmer | Advanced Periodontal Care",
    description: "Comprehensive solutions for gum diseases including non-surgical and surgical treatments in Ajmer.",
    url: 'https://drnikitasharma.in/services/gum-periodontal-treatment',
    siteName: 'Nivik Smile Care - Periodontics',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/gum-treatment-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Gum Disease Treatment Services in Ajmer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Gum Disease Treatment in Ajmer | Save Your Smile",
    description: "Expert periodontal treatments to restore gum health from Dr. Nikita Sharma in Ajmer.",
    images: ['/gum-treatment-twitter.jpg'],
  },
};

// JSON-LD structured data for Gum/Periodontal page
const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "Dentist"],
  "name": "Gum Disease & Periodontal Treatment",
  "description": "Comprehensive periodontal treatments for gum disease management and oral health restoration",
  "url": "https://drnikitasharma.in/services/gum-periodontal-treatment",
  "medicalSpecialty": "Periodontics",
  "provider": {
    "@type": "Dentist",
    "name": "Dr. Nikita Sharma",
    "description": "Periodontal Specialist",
    "hasCredential": ["B.D.S.", "M.D.S."],
    "image": "https://drnikitasharma.in/dr-nikita-sharma.jpg"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Periodontal Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Gingivitis Treatment",
          "description": "Early intervention for gum inflammation to prevent progression"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Scaling and Root Planing",
          "description": "Deep cleaning procedure to remove tartar below gumline"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Periodontal Surgery",
          "description": "Advanced surgical treatments for severe gum disease"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Gum Grafting",
          "description": "Surgical procedure to treat gum recession"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Laser Gum Treatment",
          "description": "Minimally invasive laser therapy for gum disease"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Pocket Reduction",
          "description": "Treatment to reduce periodontal pockets and save teeth"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Periodontal Maintenance",
          "description": "Ongoing specialized cleanings for gum disease patients"
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
        "name": "Gum & Periodontal Treatment"
      }
    ]
  },
  "additionalProperty": {
    "@type": "PropertyValue",
    "name": "Treatment Importance",
    "value": "Critical for preventing tooth loss and systemic health complications"
  }
};

export default function GumPeriodontal() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div>
        <GumPeriodontalPage/>
      </div>
    </>
  );
}