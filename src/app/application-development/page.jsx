"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import "./appDevelopement.css";
const metadata = {
  title: "Custom Application Development Services | EvoXcel",
  description:
    "Create innovative, user-focused applications with Evoxcel. Our application development services cover mobile, web, and cross-platform solutions to boost engagement and growth.",
  alternates: {
    canonical: "https://www.evoxcel.com/application-development/",
  },
  siteName: "EvoXcel",
  openGraph: {
    type: "website",
    url: "https://www.evoxcel.com/application-development/",
    title: "Application Development Services Tailored to Your Business",
    description:
      "Innovate with EvoXcel’s application development services. We create engaging, scalable mobile and web apps that fuel business success.",
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
    title: "Application Development Services Tailored to Your Business",
    description:
      "Innovate with EvoXcel’s application development services. We create engaging, scalable mobile and web apps that fuel business success.",
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

const ApplicationDevelopment = () => {
  return (
    <>
      <section className="w-[100%] px-[8vw]  pt-[7vh] md:pt-[14vh] pb-[10vh] items-center justify-between md:flex">
        <div className="md:w-[50%] my-14 lg:my-0">
          <motion.h1
            initial={{ opacity: 0, x: -100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="capitalize headingfont text-[2rem]  leading-tight lg:text-[3vw] font-semibold text-blue-500">
            Driving Innovation with Custom Application Development
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay:0.3 }}
            className=" text-white mt-4 mb-10 max-w-lg pfont leading-relaxed text-[4vw] md:text-[1.2vw] text-justify">
            At EvoXcel, we excel in creating custom applications designed to
            enhance user experiences and fuel business expansion. Our skilled
            developers utilize cutting-edge technologies to deliver solutions
            that are both scalable and tailored to meet your specific needs.
          </motion.p>
          {/* <a href="#" className="inline-block capitalize font-semibold bg-gradient-to-r from-purple-500 to-pink-800 rounded-full px-7 py-2 hover:from-purple-500 hover:to-gray-800">learn more</a> */}
        </div>
        <motion.figure 
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:w-[50%] flex justify-center">
          <Image
            src="/images/application-development/application-development.webp"
            width={300}
            height={300}
            loading="lazy"
            alt="application-development-image"
            className="md:w-[70%]"
          />
        </motion.figure>
      </section>
      <section className="w-[100%] md:flex justify-between px-[6vw] md:py-[2vh] py-[-10vh]">
        <div className="md:w-[50%] flex flex-col justify-center text-justify">
          {/* <h2 className="font-[550]  md:text-[1vw]"></h2> */}
          <motion.h3 
            initial={{ opacity: 0, x: -100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-[600] md:text-[2vw] mt-5 mb-3 headingfont text-blue-500">
            1. Understanding Your Vision
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, x: -100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay:0.2 }}
            className=" text-white md:text-[1.1vw] pfont">
            <span className="font-[600] text-purple-500">
              Initial Consultation:{" "}
            </span>{" "}
            We begin by gaining a deep understanding of your business goals,
            challenges, and specific needs to ensure that the final product
            perfectly aligns with your vision.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, x: -100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay:0.4 }}
            className=" text-white mt-3 md:text-[1.1vw] pfont">
            <span className="font-[600] text-purple-500">
              Comprehensive Requirements Analysis:{" "}
            </span>{" "}
            We perform a detailed analysis to clearly define the scope,
            features, and objectives of your custom application. This thorough
            process ensures that every requirement is captured, setting the
            stage for a successful outcome.
          </motion.p>
        </div>
        <motion.figure 
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:w-[50%] flex items-center justify-center">
          <Image
            src="/images/application-development/application-development_understanding-vision.webp"
            width={300}
            height={300}
            loading="lazy"
            className="md:w-[60%]"
            alt="Understanding-Your-Vision-images"
          />
        </motion.figure>
      </section>
      <section className=" w-[100%] flex flex-col-reverse md:flex-row items-center px-[6vw] py-[2vh]">
        <motion.figure 
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:w-[50%] flex items-center justify-center">
          <Image
            src="/images/application-development/application-development_designing.webp"
            width={300}
            height={300}
            loading="lazy"
            className="md:w-[60%]"
            alt="Designing-Excellence-image"
          />
        </motion.figure>
        <div className="md:w-[50%] text-justify">
          <motion.h3 
            initial={{ opacity: 0, x: 100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-[600] headingfont md:text-[2vw] mt-5 mb-3 text-blue-500">
            2. Designing for Excellence
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, x: 100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay:0.2 }}
            className="text-white md:text-[1.1vw] pfont">
            <span className="font-[600] text-purple-500">
              User-Centered Design:{" "}
            </span>
            We focus on creating intuitive and engaging user interfaces to
            deliver a seamless and enjoyable user experience in every
            application.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, x: 100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay:0.4 }}
            className="text-white mt-3 md:text-[1.1vw] pfont">
            <span className="font-[600] text-purple-500">
              Prototyping and Refinement:{" "}
            </span>{" "}
            We develop prototypes that allow you to visualize the design and
            functionality early on, facilitating feedback and continuous
            improvement throughout the process.
          </motion.p>
        </div>
      </section>
      <section className=" w-[100%] h-[50%] md:flex px-[6vw] items-center ">
        <div className="md:w-[50%] text-justify">
          <motion.h3 
            initial={{ opacity: 0, x: -100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-[600] md:text-[2vw] mt-5 mb-3 headingfont text-blue-500">
            3. Flexible Development
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, x: -100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay:0.2 }}
            className="text-white md:text-[1.1vw]">
            <span className="font-[600] text-purple-500">
              Iterative Approach:{" "}
            </span>{" "}
            Using agile methodologies, we develop the application in phases,
            allowing for flexibility and ongoing enhancements as the project
            progresses.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, x: -100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay:0.4 }}
            className="text-white mt-10 md:text-[1.1vw]">
            <span className="font-[600] text-purple-500">
              Collaborative Process:{" "}
            </span>{" "}
            We keep you involved at every stage of development, providing
            regular updates and seeking your feedback to ensure the project
            meets your expectations.
          </motion.p>
        </div>
        <motion.figure 
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:w-[50%] flex items-center justify-center">
          <Image
            src="/images/application-development/application-development_fexible-development.webp"
            width={300}
            height={300}
            loading="lazy"
            className="md:w-[50%]"
            alt="Flexible-Development-image"
          />
        </motion.figure>
      </section>
      <section className=" w-[100%] flex flex-col-reverse md:flex-row items-center px-[6vw] py-[1vh] ">
        <motion.figure 
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:w-[50%] flex items-center justify-center">
          <Image
            src="/images/application-development/application-development_rigorous-testing.webp"
            width={300}
            height={300}
            className="md:w-[50%]"
            loading="lazy"
            alt=" Rigorous Testing"
          />
        </motion.figure>
        <div className="md:w-[50%] text-justify px-[2vw]">
          <motion.h3 
            initial={{ opacity: 0, x: 100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-[600] md:text-[2vw] mt-5 mb-3 headingfont text-blue-500">
            4. Rigorous Testing
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, x: 100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay:0.2 }}
            className="text-white md:text-[1.1vw]">
            <span className="font-[600] text-purple-500">
              Quality Assurance:{" "}
            </span>{" "}
            We conduct thorough testing to identify and resolve any issues,
            ensuring that the application performs flawlessly.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, x: 100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay:0.4 }}
            className="text-white mt-3 md:text-[1.1vw]">
            <span className="font-[600] text-purple-500">
              End-User Validation:{" "}
            </span>{" "}
            We involve actual users in the testing process to confirm that the
            application meets their needs and delivers an optimal experience.
          </motion.p>
        </div>
      </section>
      <section className="w-[100%] md:flex items-center px-[6vw] justify-between">
        <div className="md:w-[50%] text-justify">
          <motion.h3 
            initial={{ opacity: 0, x: -100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-[600] md:text-[2vw] headingfont mt-5 mb-3 text-blue-500">
            5. Seamless Deployment
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, x: -100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay:0.2 }}
            className="text-white pfont  md:text-[1.1vw]">
            <span className="font-[600] text-purple-500">
              Smooth Implementation:{" "}
            </span>{" "}
            We ensure a smooth deployment process with minimal disruption to
            your operations, integrating the application seamlessly into your
            chosen environment.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, x: -100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay:0.4 }}
            className="text-white pfont mt-10 md:text-[1.1vw]">
            <span className="font-[600] text-purple-500">
              Ongoing Maintenance:{" "}
            </span>{" "}
            After launch, we provide continuous support and maintenance to
            address any challenges and keep the application running at its best.
          </motion.p>
        </div>
        <motion.figure 
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:w-[50%] flex justify-center">
          <Image
            src="/images/application-development/application-development_seamless-deployment.webp"
            width={300}
            height={300}
            loading="lazy"
            className="md:w-[50%] md:ml-10"
            alt="Seamless Deployment"
          />
        </motion.figure>
      </section>
    </>
  );
};

export default ApplicationDevelopment;
