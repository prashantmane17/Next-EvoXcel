import React from "react";
import Blog from "./Blog";
export const metadata = {
  title: "About Us",
  description: "about us",
  alternates: {
    canonical: "https://www.evoxcel.com/blog/",
  },
  siteName: "EvoXcel",
};
export default function page() {
  return <Blog />;
}
