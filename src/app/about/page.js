import AboutUsSection from "@/components/AboutUsSection";


export const metadata = {
  title: "Best Kids Dentist in Ajmer - Dr Nikita Sharma | Nivik Smile Care",
  description: "Meet Dr. Nikita Sharma (B.D.S., M.D.S., Pedodontist) - Ajmer's top child dental specialist at Nivik Smile Care. Expert in pediatric dentistry, general dentistry, and child dental care.",
  keywords: [
    "best kids dentist in Ajmer",
    "pediatric dentist Ajmer",
    "child dental specialist",
    "Dr. Nikita Sharma BDS MDS",
    "pedodontist Ajmer",
    "children's dentist near me",
    "kids dental care Ajmer",
    "child tooth specialist",
    "baby teeth doctor Ajmer",
    "pediatric dental clinic",
    "dental care for children",
    "child friendly dentist",
    "teeth doctor for kids",
    "Nivik Smile Care pedodontist",
    "Rajasthan children dentist"
  ].join(", "),
  authors: [{ name: "Dr. Nikita Sharma" }],
  metadataBase: new URL('https://drnikitasharma.in'),
  alternates: {
    canonical: 'https://drnikitasharma.in/about',
  },
  openGraph: {
    title: "Best Kids Dentist in Ajmer - Dr Nikita Sharma | Nivik Smile Care",
    description: "Dr. Nikita Sharma (B.D.S., M.D.S., Pedodontist) specializes in child dental care at Nivik Smile Care, offering gentle treatment for young patients in Ajmer.",
    url: 'https://drnikitasharma.in/about',
    siteName: 'Nivik Smile Care - Pediatric Dental Specialists',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/pediatric-dentist-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Nikita Sharma - Best Kids Dentist in Ajmer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Best Kids Dentist in Ajmer - Dr Nikita Sharma (BDS, MDS, Pedodontist)",
    description: "Pediatric dental specialist providing gentle, expert care for children at Nivik Smile Care, Ajmer.",
    images: ['/pediatric-dentist-twitter.jpg'],
  },
};

// JSON-LD structured data for About page
const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["AboutPage", "MedicalOrganization"],
  "name": "Nivik Smile Care - Pediatric Dentistry",
  "description": "Pediatric dental practice of Dr. Nikita Sharma, the best kids dentist in Ajmer",
  "url": "https://drnikitasharma.in/about",
  "medicalSpecialty": "Pediatric Dentistry",
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
        "name": "About Pediatric Dentist"
      }
    ]
  },
  "mainEntity": {
    "@type": "Person",
    "name": "Dr. Nikita Sharma",
    "honorificPrefix": "Dr.",
    "jobTitle": "Pedodontist & Child Dental Specialist",
    "image": "https://drnikitasharma.in/dr-nikita-sharma-pediatric.jpg",
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Bachelor of Dental Surgery (B.D.S.)"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Master of Dental Surgery (M.D.S.)"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Pedodontist Certification"
      }
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Rajasthan University of Health Sciences"
    },
    "knowsAbout": [
      "Pediatric Dentistry",
      "Child Dental Care",
      "Primary Teeth Treatment",
      "Behavior Management for Children",
      "Preventive Dentistry for Kids",
      "General Dentistry"
    ],
    "memberOf": {
      "@type": "Organization",
      "name": "Indian Society of Pedodontics and Preventive Dentistry"
    },
    "description": "Dr. Nikita Sharma is a highly qualified pediatric dentist (B.D.S., M.D.S.) specializing in comprehensive dental care for children and adolescents at Nivik Smile Care, Ajmer.",
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Pediatric Dentist",
      "description": "Specializing in dental care for infants, children, adolescents and special needs patients"
    }
  }
};

export default function About() {  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div>
        <AboutUsSection/>
      </div>
    </>
  );
}