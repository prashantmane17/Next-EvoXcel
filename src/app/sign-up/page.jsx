import React from "react";
import Signup from "./SignUP";

export const metadata = {
  title: "EvoXcel – Tailored IT Staffing & Business Solutions",
  description:
    "Evoxcel offers customized IT staffing solutions, from flexible staffing to expert project management, helping businesses achieve scalable and cost-effective results.",

  alternates: {
    canonical: "https://www.evoxcel.com/sign-up",
  },
  siteName: "EvoXcel",
};
export default function page() {
  return (
    <div>
      <Signup />
    </div>
  );
}
