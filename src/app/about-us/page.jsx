import AboutUs from "./aboutUs";
export const metadata = {
  title: "About Us",
  description: "about us",
  alternates: {
    canonical: "https://www.evoxcel.com/about-us/",
  },
  siteName: "EvoXcel",
  openGraph: {
    type: "website",
    url: "https://www.evoxcel.com/about-us/",
    title: "EvoXcel - About Us",
    description: "Evoxcel-about us.",
    siteName: "EvoXcel",
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
    title: "EvoXcel-about us",
    description: "Evoxcel-about us ",
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

export default function page() {
  return (
    <>
      <AboutUs />
    </>
  );
}
