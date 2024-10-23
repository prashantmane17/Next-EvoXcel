import React from "react";
import Image from "next/image";
export const metadata = {
  title: "About Us",
  description: "about us",
  alternates: {
    canonical: "https://www.evoxcel.com/about-us/",
  },
};

export default function page() {
  return (
    <>
      <div className="sm:flex items-center max-w-screen-xl p-10 pt-24 sm:p-16 md:p-24">
        <div className="sm:w-2/3 sm:mr-10">
          <div className="text">
            {/* <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">
              about us
            </span> */}
            <h2 className="font-bold text-3xl my-4 sm:text-4xl">
              Welcome to{" "}
              <span className="text-indigo-600 font-bold">EvoXcel</span>, your
              trusted partner in business growth and digital transformation
            </h2>
            <p className="text-gray-700 font-medium">
              We specialize in providing cutting-edge LinkedIn and email
              automation services, as well as comprehensive web development,
              software development, application development, and lead generation
              solutions. Our mission is to empower businesses to achieve their
              full potential through innovative technology and strategic
              solutions.
            </p>
            {/* <p className="text-gray-700 font-medium pt-5">
              At EvoXcel, we believe in the power of automation and digital
              solutions to revolutionize the way businesses operate. Our expert
              team is dedicated to delivering top-notch services tailored to
              meet the unique needs of each client, ensuring measurable results
              and long-term success.
            </p> */}
          </div>
        </div>
        <div className=" sm:w-1/3 sm:mx-auto">
          <div className="image object-center text-center">
            <Image
              src="/images/about-us/about-us.png"
              width={300}
              height={300}
              loading="lazy"
              className=" pt-8 md:pt-0 md:w-[28vw] h-[58]"
              alt="about-us"
            />
          </div>
        </div>
      </div>

      <div className="relative flex flex-col-reverse lg:flex-row items-center justify-between p-10 pt-5">
        <Image
          src="/images/about-us/about-us_mission.png"
          width={300}
          height={300}
          loading="lazy"
          className="pl-14 mt-8 lg:mt-0 lg:order-first"
          alt="about-us-mission"
          data-aos="fade-up" // Add AOS animation class
        />
        <div
          className="max-w-xl text-center lg:text-left"
          data-aos="fade-right"
        >
          <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg">
            Empower businesses by providing innovative, reliable, and efficient
            digital solutions. We strive to be the catalyst for our
            clients&apos; success, helping them navigate the digital landscape
            with confidence and agility. Through our commitment to excellence
            and customer satisfaction, we aim to build lasting partnerships that
            drive mutual growth and prosperity.
          </p>
        </div>
      </div>
      <div className="relative flex flex-col lg:flex-row items-center justify-between p-10 pt-5">
        <div
          className="max-w-xl text-center lg:text-left"
          data-aos="fade-right"
        >
          <h2 className="text-4xl font-bold mb-4">Our Vission</h2>
          <p className="text-lg">
            Empower businesses by providing innovative, reliable, and efficient
            digital solutions. We strive to be the catalyst for our
            clients&apos; success, helping them navigate the digital landscape
            with confidence and agility. Through our commitment to excellence
            and customer satisfaction, we aim to build lasting partnerships that
            drive mutual growth and prosperity.
          </p>
        </div>
        <Image
          src="/images/about-us/about-us-vision.png"
          width={300}
          height={300}
          loading="lazy"
          className="pl-14 mt-8 lg:mt-0"
          alt="about-us-mission"
          data-aos="fade-up" // Add AOS animation class
        />
      </div>
    </>
  );
}
