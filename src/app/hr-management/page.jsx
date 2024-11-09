import React from "react";
import HrHome from "./HrHome";

export const metadata = {
  title: "Targeted HR Management Services | EvoXcel",
  description:
    "Drive business success with EvoXcel’s data-driven lead generation strategies. From B2B to multi-channel lead capture, we help you generate high-quality prospects and optimize conversion",
  alternates: {
    canonical: "https://web.evoxcel.com/hr-management/",
  },
  siteName: "EvoXcel",
  openGraph: {
    type: "website",
    url: "https://web.evoxcel.com/hr-management/",
    title: "HR Management Solutions by EvoXcel",
    siteName: "EvoXcel",
    description:
      "Maximize your business reach with EvoXcel’s strategic lead generation services, driving targeted, high-quality prospects to your business.",
    locale: "en_US",
    images: [
      {
        url: "https://web.evoxcel.com/images/e_logo.webp",
        width: 1200,
        height: 630,
        alt: "EvoXcel",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Lead Generation Solutions by EvoXcel",
    description:
      "Maximize your business reach with EvoXcel’s strategic lead generation services, driving targeted, high-quality prospects to your business.",
    site: "@yourTwitterHandle",
    creator: "@yourTwitterHandle",
    images: [
      {
        url: "https://web.evoxcel.com/images/e_logo.webp",
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
      <HrHome />
    </>
  );
}
