export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Aisha",
    jobTitle: "Career Coach",
    url: "https://thecareertherapist.com/about",
    image: "https://thecareertherapist.com/logo.png",
    description:
      "Career coach with a background in HR and recruiting. Helps professionals land jobs, earn promotions, recover from redundancy, and change careers.",
    knowsAbout: [
      "Career Coaching",
      "Job Search",
      "Promotion Strategy",
      "Redundancy Support",
      "Career Change",
      "HR and Recruiting",
      "Interview Coaching",
      "Salary Negotiation",
    ],
    sameAs: ["https://thecareertherapist.com"],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "1-on-1 Career Coaching",
    provider: {
      "@type": "Person",
      name: "Aisha",
    },
    description:
      "Personal 1-on-1 career coaching for job search, promotion, redundancy recovery, and career change — delivered online by Aisha, a coach with an HR background.",
    areaServed: "Worldwide",
    availableChannel: {
      "@type": "ServiceChannel",
      serviceType: "Online",
    },
    serviceType: "Career Coaching",
    url: "https://thecareertherapist.com/coaching",
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "The Career Therapist",
    description:
      "1-on-1 career coaching with Aisha — a coach with an HR background helping professionals find jobs, get promoted, and change careers.",
    url: "https://thecareertherapist.com",
    logo: "https://thecareertherapist.com/logo.png",
    email: "hello@thecareertherapist.com",
    areaServed: "Worldwide",
    founder: {
      "@type": "Person",
      name: "Aisha",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Career Coaching Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Job Search Coaching" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Promotion Coaching" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Redundancy & Layoff Coaching" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Career Change Coaching" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "The Career Alignment Club" } },
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
