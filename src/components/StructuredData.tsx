export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Aisha",
    jobTitle: "Career Therapist",
    url: "https://mycareertherapist.com/about",
    image: "https://mycareertherapist.com/logo.png",
    description:
      "Career Therapist with a background in HR and recruiting. Helps professionals decode workplace dynamics, build influence, and take control of their careers.",
    knowsAbout: [
      "Workplace Strategy",
      "Professional Development",
      "Executive Communication",
      "Workplace Politics",
      "Promotion Strategy",
      "Career Change",
      "Outplacement",
      "Influence and Perception Management",
    ],
    sameAs: ["https://mycareertherapist.com"],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Strategic Career Therapy",
    provider: {
      "@type": "Person",
      name: "Aisha",
    },
    description:
      "Private, high-touch workplace strategy and professional development for individuals navigating complex or high-stakes environments.",
    areaServed: "Worldwide",
    availableChannel: {
      "@type": "ServiceChannel",
      serviceType: "Online",
    },
    serviceType: "Career Therapy",
    url: "https://mycareertherapist.com/coaching",
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "My Career Therapist",
    description:
      "Workplace strategy and professional development practice helping individuals and organizations decode hidden workplace dynamics, build influence, and shape careers with intention.",
    url: "https://mycareertherapist.com",
    logo: "https://mycareertherapist.com/logo.png",
    email: "hello@mycareertherapist.com",
    areaServed: "Worldwide",
    founder: {
      "@type": "Person",
      name: "Aisha",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Workplace Strategy Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Strategic Career Therapy (Individuals)" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Workforce Transition & Outplacement (Organizations)" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Courses, Tools & Community" } },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
