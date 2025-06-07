import BookingSystem from "@/components/BookingSystem";


export const metadata = {
  title: "Book Appointment with Best Kids Dentist in Ajmer - Dr Nikita Sharma",
  description: "Schedule your child's dental visit online with Dr. Nikita Sharma (B.D.S., M.D.S., Pedodontist) at Nivik Smile Care. Easy online booking for pediatric dental checkups, treatments, and consultations in Ajmer.",
  keywords: [
    "book dentist appointment Ajmer",
    "pediatric dentist online booking",
    "child dental appointment",
    "Dr. Nikita Sharma appointment",
    "Nivik Smile Care booking",
    "kids dentist schedule",
    "emergency dental appointment",
    "online dentist booking Ajmer",
    "child tooth specialist appointment",
    "dental checkup booking",
    "braces consultation appointment",
    "teeth cleaning schedule",
    "dentist near me booking",
    "Pedodontist appointment Ajmer",
    "child dental care visit"
  ].join(", "),
  authors: [{ name: "Dr. Nikita Sharma" }],
  metadataBase: new URL('https://drnikitasharma.in'),
  alternates: {
    canonical: 'https://drnikitasharma.in/appointment',
  },
  openGraph: {
    title: "Book Appointment with Best Kids Dentist in Ajmer - Dr Nikita Sharma",
    description: "Easy online booking for pediatric dental care at Nivik Smile Care, Ajmer. Schedule checkups, treatments and consultations with Dr. Nikita Sharma.",
    url: 'https://drnikitasharma.in/appointment',
    siteName: 'Nivik Smile Care - Appointment Booking',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/appointment-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Book Dental Appointment - Dr. Nikita Sharma',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Book Pediatric Dentist Appointment in Ajmer - Dr Nikita Sharma",
    description: "Schedule your child's dental visit online with Ajmer's leading pediatric dentist at Nivik Smile Care.",
    images: ['/appointment-twitter-image.jpg'],
  },
};

// JSON-LD structured data for Appointment page
const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["WebPage", "MedicalBusiness"],
  "name": "Dental Appointment Booking",
  "description": "Online appointment scheduling with pediatric dentist Dr. Nikita Sharma",
  "url": "https://drnikitasharma.in/appointment",
  "potentialAction": {
    "@type": "ReserveAction",
    "name": "Book Dental Appointment",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://drnikitasharma.in/appointment",
      "actionPlatform": [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform"
      ]
    },
    "result": {
      "@type": "Reservation",
      "name": "Dental Appointment"
    }
  },
  "provider": {
    "@type": "Dentist",
    "name": "Dr. Nikita Sharma",
    "description": "Pediatric Dentist and Child Dental Specialist",
    "medicalSpecialty": "Pediatric Dentistry",
    "hasCredential": ["B.D.S.", "M.D.S.", "Pedodontist Certification"],
    "availableService": [
      {
        "@type": "MedicalProcedure",
        "name": "Pediatric Dental Checkup"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Child Teeth Cleaning"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Dental Fillings for Children"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Orthodontic Consultation"
      }
    ]
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
        "name": "Book Appointment"
      }
    ]
  }
};

export default function AppointmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div>
        <BookingSystem/>
      </div>
    </>
  );
}