import ContactUsSection from "@/components/ContactUsSection";


export const metadata = {
  title: "Contact Best Kids Dentist in Ajmer - Dr Nikita Sharma",
  description: "Book an appointment with Dr. Nikita Sharma (B.D.S., M.D.S., Pedodontist) at Nivik Smile Care, Ajmer. Clinic addresses, phone numbers, and contact form for pediatric and general dental care.",
  keywords: [
    "dentist contact Ajmer",
    "pediatric dentist appointment",
    "child dental clinic contact",
    "Dr. Nikita Sharma contact",
    "Nivik Smile Care address",
    "kids dentist phone number",
    "dental clinic hours Ajmer",
    "emergency dentist contact",
    "book dental appointment Ajmer",
    "child tooth specialist contact",
    "dental clinic near me",
    "dentist email contact",
    "Paras Hospital dental contact",
    "Panchsheel dental clinic",
    "best dentist contact in Ajmer"
  ].join(", "),
  authors: [{ name: "Dr. Nikita Sharma" }],
  metadataBase: new URL('https://drnikitasharma.in'),
  alternates: {
    canonical: 'https://drnikitasharma.in/contact',
  },
  openGraph: {
    title: "Contact Best Kids Dentist in Ajmer - Dr Nikita Sharma | Nivik Smile Care",
    description: "Get in touch with pediatric dental specialist Dr. Nikita Sharma at Nivik Smile Care, Ajmer. Clinic locations, contact details and appointment booking.",
    url: 'https://drnikitasharma.in/contact',
    siteName: 'Nivik Smile Care - Pediatric Dental Specialists',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/contact-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Dr. Nikita Sharma - Best Kids Dentist in Ajmer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Contact Best Kids Dentist in Ajmer - Dr Nikita Sharma",
    description: "Book appointments with Ajmer's leading pediatric dentist at Nivik Smile Care. Clinic addresses and contact information.",
    images: ['/contact-twitter-image.jpg'],
  },
};

// JSON-LD structured data for Contact page
const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["ContactPage", "Dentist"],
  "name": "Nivik Smile Care - Contact",
  "description": "Contact information for Dr. Nikita Sharma, pediatric dentist in Ajmer",
  "url": "https://drnikitasharma.in/contact",
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
        "name": "Contact Pediatric Dentist"
      }
    ]
  },
  "address": [
    {
      "@type": "PostalAddress",
      "name": "Paras Urology & Multispeciality Hospital",
      "streetAddress": "Haribhau Upadhyay Nagar, C-Block, Pushkar Road",
      "addressLocality": "Ajmer",
      "addressRegion": "Rajasthan",
      "postalCode": "305001",
      "addressCountry": "IN",
      "telephone": "+91-82097-88869"
    },
    {
      "@type": "PostalAddress",
      "name": "Nivik Smile Care",
      "streetAddress": "B-455 Panchsheel, B Block",
      "addressLocality": "Ajmer",
      "addressRegion": "Rajasthan",
      "postalCode": "305004",
      "addressCountry": "IN",
      "telephone": "+91-82097-88869"
    }
  ],
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 26.4499,
    "longitude": 74.6399
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+91-82097-88869",
      "contactType": "appointments",
      "areaServed": "Ajmer and nearby areas",
      "availableLanguage": ["English", "Hindi"]
    },
    {
      "@type": "ContactPoint",
      "email": "contact@drnikitasharma.in",
      "contactType": "customer service"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/yourpage",
    "https://www.instagram.com/yourprofile",
    "https://www.linkedin.com/in/yourprofile"
  ]
};

export default function Contact() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div>
        <ContactUsSection/>
      </div>
    </>
  );
}