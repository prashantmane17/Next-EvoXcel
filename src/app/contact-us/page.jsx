import React from "react";
import Contactus from "./components/contact";

export const metadata = {
  title: "EvoXcel – Tailored IT Staffing & Business Soluti",
  description:
    "Evoxcel offers customized IT staffing solutions, from flexible staffing to expert project management, helping businesses achieve scalable and cost-effective results.",

  alternates: {
    canonical: "https://web.evoxcel.com/contact-us",
  },
  siteName: "EvoXcel",
};
export default function page() {
  return <Contactus />;
}
