import React from "react";
import Image from "next/image";

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
      <div className="sm:flex items-center w-full h-screen p-10 pt-24 pl-[5vw] pr-[7vw]">
        <div className="sm:w-2/3 sm:mr-10">
          <div className="text">
            <h2 className="font-bold text-3xl my-7 md:text-[3vw] leading-[3.3vw]">
              Welcome to{" "}
              <span className="text-indigo-600 font-bold">EvoXcel</span>, your
              trusted partner in business growth and digital transformation
            </h2>
            <p className="text-gray-700 font-medium text-base sm:text-[1.5vw] leading-[2.5vw]">
              We specialize in providing cutting-edge LinkedIn and email
              automation services, as well as comprehensive web development,
              software development, application development, and lead generation
              solutions. Our mission is to empower businesses to achieve their
              full potential through innovative technology and strategic
              solutions.
            </p>
          </div>
        </div>
        <div className="sm:w-1/3 sm:mx-auto">
          <div className="image object-center text-center">
            <Image
              src="/images/about-us/about-us.webp"
              width={300}
              height={300}
              loading="lazy"
              className="pt-8 md:pt-0 md:w-[28vw] h-auto"
              alt="about-us"
            />
          </div>
        </div>
      </div>

      <div className="relative flex flex-col-reverse lg:flex-row items-center justify-between p-10 pt-5 pl-[5vw] pr-[7vw]">
        <Image
          src="/images/about-us/about-us_mission.webp"
          width={300}
          height={300}
          loading="lazy"
          className="pl-14 mt-8 lg:mt-0 lg:order-first w-full sm:w-[38%]"
          alt="about-us-mission"
          data-aos="fade-up" // Add AOS animation class
        />
        <div
          className="max-w-[50%] text-center lg:text-left"
          data-aos="fade-right"
        >
          <h2 className="text-4xl font-bold mb-4 md:text-[3vw] tracking-wide ">
            Our Mission
          </h2>
          <p className="text-lg md:text-[1.5vw] leading-[2.5vw] tracking-wider">
            Empower businesses by providing innovative, reliable, and efficient
            digital solutions. We strive to be the catalyst for our
            clients&apos; success, helping them navigate the digital landscape
            with confidence and agility. Through our commitment to excellence
            and customer satisfaction, we aim to build lasting partnerships that
            drive mutual growth and prosperity.
          </p>
        </div>
      </div>

      <div className="relative flex flex-col lg:flex-row items-center justify-between p-10 pt-5 pl-[5vw] pr-[7vw]">
        <div
          className="max-w-[50%] text-center lg:text-left"
          data-aos="fade-right"
        >
          <h2 className="text-4xl font-bold mb-4 md:text-[3vw] tracking-wide ">
            Our Vision
          </h2>
          <p className="text-lg md:text-[1.5vw] leading-[2.5vw] tracking-wider">
            Empower businesses by providing innovative, reliable, and efficient
            digital solutions. We strive to be the catalyst for our
            clients&apos; success, helping them navigate the digital landscape
            with confidence and agility. Through our commitment to excellence
            and customer satisfaction, we aim to build lasting partnerships that
            drive mutual growth and prosperity.
          </p>
        </div>
        <Image
          src="/images/about-us/about-us-vision.webp"
          width={300}
          height={300}
          loading="lazy"
          className="pl-14 mt-8 lg:mt-0 w-full sm:w-[38%]"
          alt="about-us-vision"
          data-aos="fade-up" // Add AOS animation class
        />
      </div>
    </>
  );
}
