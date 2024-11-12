import Script from "next/script";
import HomePage from "./components/Home_page/HomePage";

export const metadata = {
  title: "EvoXcel – Tailored IT Staffing & Business Solutions",
  description:
    "Evoxcel offers customized IT staffing solutions, from flexible staffing to expert project management, helping businesses achieve scalable and cost-effective results.",
  alternates: {
    canonical: "https://www.evoxcel.com/",
  },
  siteName: "EvoXcel",
  openGraph: {
    type: "website",
    url: "https://www.evoxcel.com/",
    site_name: "EvoXcel",
    title: "EvoXcel | Your Partner in IT Excellence",
    description:
      "At EvoXcel, we offer dynamic IT solutions, including staffing, software development, and business-enhancing technologies to drive success.",
    locale: "en_US",
    images: [
      {
        url: "https://www.evoxcel.com/images/e_logo.webp",
        width: 1200,
        height: 630,
        alt: "EvoXcel",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "EvoXcel | Your Partner in IT Excellence",
    description:
      "At EvoXcel, we offer dynamic IT solutions, including staffing, software development, and business-enhancing technologies to drive success.",
    site: "@yourTwitterHandle",
    creator: "@yourTwitterHandle",
    images: [
      {
        url: "https://www.evoxcel.com/images/e_logo.webp",
        alt: "EvoXcel",
      },
    ],
  },

  facebookAppId: "your_facebook_app_id_here",

  metadata: {
    keywords: [
      "IT Staffing",
      "Business Solutions",
      "EvoXcel",
      "Project Management",
    ],
    author: "EvoXcel",
  },
};

const Home = () => {
  return (
    <>
      <HomePage />
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Evoxcel",
              url: "https://www.evoxcel.com",
              logo: "https://www.evoxcel.com/images/e_logo.webp",
              contactPoint: {
                "@type": "ContactPoint",
                email: "sales@evoxcel.com",
                contactType: "IT Service",
                areaServed: "IN",
                availableLanguage: "English",
              },
              sameAs: [
                "https://www.facebook.com/profile.php?id=61566321227448",
                "https://www.instagram.com/evoxcel/",
                "https://www.linkedin.com/company/evoxcel-tech/",
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Evoxcel",
              alternateName: "Evoxcel Technologies",
              url: "https://www.evoxcel.com",
            },
          ]),
        }}
      />
    </>
  );
};

export default Home;
