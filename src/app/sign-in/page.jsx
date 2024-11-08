import React from "react";
import Signin from "./Sign-in";

export const metadata = {
  title: "EvoXcel – Tailored IT Staffing & Business Solutions",
  description:
    "Evoxcel offers customized IT staffing solutions, from flexible staffing to expert project management, helping businesses achieve scalable and cost-effective results.",

  alternates: {
    canonical: "https://web.evoxcel.com/sign-in",
  },
  siteName: "EvoXcel",
};
export default function page() {
  return <Signin />;
}
