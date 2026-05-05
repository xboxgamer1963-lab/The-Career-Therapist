export default function StructuredData() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "ConsultingBusiness",
    "name": "The Career Therapist",
    "alternateName": "The Career Therapist Consulting",
    "description": "Expert HR Consulting for Modern Enterprises. Aligning talent strategy with organizational performance.",
    "url": "https://thecareertherapist.com",
    "logo": "https://thecareertherapist.com/logo.png",
    "telephone": "+1-212-555-0198",
    "email": "curator@strategic-consult.com",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "775 Park Avenue, Suite 1200",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "postalCode": "10021",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.7712,
      "longitude": -73.9634
    },
    "areaServed": "Global",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "HR Consulting Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Strategic Talent Planning"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Culture Design"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Leadership Development"
          }
        }
      ]
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do you approach a new HR transformation project?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We begin with a deep-dive immersion into your current culture and business objectives. We curate a strategy that aligns your people processes with your long-term vision."
        }
      },
      {
        "@type": "Question",
        "name": "Can you support our global offices with localized strategies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialize in scaling HR strategies while respecting local cultural nuances and labor laws across international markets."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
