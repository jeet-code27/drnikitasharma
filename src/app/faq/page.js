import FaqPage from "@/components/FaqPage";
import Head from 'next/head';

export const metadata = {
  title: "Best Pediatric Dental Care - Expert Answers by Dr. Nikita Sharma",
  description: "Get answers to common questions about child dental care, treatments, and oral health from Ajmer's top pediatric dentist Dr. Nikita Sharma (B.D.S., M.D.S.).",
  keywords: [
    "pediatric dentist FAQs",
    "child dental questions",
    "kids teeth FAQ",
    "dental treatment queries",
    "baby teeth concerns",
    "braces questions Ajmer",
    "tooth decay in children",
    "dental emergency advice",
    "teething problems solutions",
    "child oral care tips",
    "dental procedures explained",
    "frequently asked dental questions",
    "Ajmer dentist answers",
    "Nivik Smile Care FAQs",
    "Dr. Nikita Sharma advice"
  ].join(", "),
  authors: [{ name: "Dr. Nikita Sharma" }],
  metadataBase: new URL('https://drnikitasharma.in'),
  alternates: {
    canonical: 'https://drnikitasharma.in/faq',
  },
  openGraph: {
    title: "Best Pediatric Dental Care - FAQs - Expert Answers by Dr. Nikita Sharma",
    description: "Common questions about child dental care answered by Ajmer's leading pediatric dentist.",
    url: 'https://drnikitasharma.in/faq',
    siteName: 'Nivik Smile Care - Dental FAQs',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/faq-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pediatric Dental FAQs - Dr. Nikita Sharma',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Pediatric Dental FAQs - Expert Answers by Dr. Nikita Sharma",
    description: "Get expert answers to common child dental care questions from Ajmer's top pediatric dentist.",
    images: ['/faq-twitter-image.jpg'],
  },
};

// JSON-LD structured data for FAQ page
const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["FAQPage", "MedicalWebPage"],
  "name": "Pediatric Dental Frequently Asked Questions",
  "description": "Expert answers to common questions about child dental care and treatments",
  "url": "https://drnikitasharma.in/faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "At what age should my child first visit the dentist?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The American Academy of Pediatric Dentistry recommends that children should have their first dental visit by their first birthday or within 6 months after their first tooth appears."
      }
    },
    {
      "@type": "Question",
      "name": "How often should children get dental check-ups?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most children should visit the dentist every 6 months for routine check-ups and cleanings. Some children with higher risk of cavities may need more frequent visits."
      }
    },
    {
      "@type": "Question",
      "name": "Are dental X-rays safe for children?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, dental X-rays are very safe for children. We use minimal radiation and protective measures like lead aprons. They're essential for detecting problems not visible during clinical exams."
      }
    },
    {
      "@type": "Question",
      "name": "What's the best way to prevent cavities in children?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Regular brushing with fluoride toothpaste, flossing, healthy diet low in sugary snacks, and routine dental visits are the best ways to prevent cavities in children."
      }
    }
  ],
  "author": {
    "@type": "Person",
    "name": "Dr. Nikita Sharma",
    "honorificPrefix": "Dr.",
    "jobTitle": "Pedodontist & Child Dental Specialist",
    "hasCredential": ["B.D.S.", "M.D.S.", "Pedodontist Certification"]
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
        "name": "Dental FAQs"
      }
    ]
  },
  "about": {
    "@type": "Thing",
    "name": "Pediatric Dentistry"
  }
};

export default function Faq() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div>
        <FaqPage/>
      </div>
    </>
  );
}