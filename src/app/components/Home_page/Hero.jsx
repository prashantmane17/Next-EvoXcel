"use client";
import React, { useState, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const slides = [
    {
      text: "LinkedIn Automation",
      text1:
        "Automated LinkedIn Outreach | AI-Powered Lead Generation Efficiently connect with decision-makers through LinkedIn outreach automation. Utilize AI-powered lead generation tools to identify and engage with high-potential leads.",
    },
    {
      text: "Email Automation",
      text1:
        "Email Campaign Automation | Personalized Email Marketing Automate your email campaigns with powerful email automation tools that ensure consistent engagement and higher conversion rates. Enhance your marketing efforts with personalized email campaigns.",
    },
    {
      text: "Lead Generation",
      text1:
        "Targeted Lead Generation | ROI Optimization Implement strategic lead generation techniques to attract the right audience and convert prospects into loyal customers. Optimize your ROI with data-driven strategies that cultivate high-quality leads.",
    },
    {
      text: "Software Development",
      text1:
        "Custom Software Solutions | Scalable Software Development Develop custom software solutions that streamline business processes and boost operational efficiency. Empower your organization with scalable, robust software designed to meet your specific requirements.",
    },
    {
      text: "Web Development",
      text1:
        "Responsive Web Design | Custom Website Development Build responsive, high-performance websites that enhance user experience and drive business growth. Our custom-built solutions are tailored to your unique needs, ensuring your online presence stands out.",
    },
    {
      text: "Application Development",
      text1:
        "Mobile App Development | Web App Development Create innovative mobile and web applications tailored to your business needs. Leverage advanced technology to build user-friendly applications that drive success and enhance customer engagement.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered, slides.length]);
  return (
    <>
      <section className="h-[100vh] w-[100%] md:flex img" id="particles-js">
        <article className="md:w-[45%] h-[100%] pl-[5vw] flex flex-col justify-center">
          <h1
            data-aos="fade-up"
            data-aos-duration="1500"
            className="text-white headingfont w-[100%] md:text-[3.4vw] relative text-[7vw] font-thin px-2 md:px-0 md:w-[100%]  mb-[2vh] md:mb-[0vh]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Supercharge Your <br />
            <div className="relative  h-16 overflow-hidden">
              <div className="absolute w-full h-full">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute w-full h-full flex items-center transition-transform duration-1000 ${
                      index === currentIndex
                        ? "translate-y-0"
                        : "translate-y-full"
                    } ${
                      index ===
                      (currentIndex - 1 + slides.length) % slides.length
                        ? "translate-y-0"
                        : "-translate-y-full"
                    }`}
                  >
                    <h2 className="md:text-[3vw] headingfont cursor-pointer text-green-400 font-semibold">
                      {slide.text}
                    </h2>
                  </div>
                ))}
              </div>
            </div>
            with <span className="text-white font-[300]">EvoXcel</span>
          </h1>
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            className="text-white pfont w-[100%] md:text-[1.5vw] relative text-[3vw] font-thin px-2 md:px-0 md:w-[100%] mt-[2vh]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative h-[15.9vh]  overflow-hidden">
              <div className="absolute w-full h-full">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute w-full h-full flex  justify-center transition-transform duration-1000 ${
                      index === currentIndex
                        ? "translate-y-0"
                        : "translate-y-full"
                    } ${
                      index ===
                      (currentIndex - 1 + slides.length) % slides.length
                        ? "translate-y-0"
                        : "-translate-y-full"
                    }`}
                  >
                    <p className="md:text-[1.2vw] text-[4vw] font-light cursor-pointer">
                      {slide.text1}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Link href="pricing">
            <button
              data-aos="fade-up"
              data-aos-duration="2500"
              className="md:py-4 md:px-16 md:text-[1vw] rounded-3xl mt-[2vh] getstarted pfont "
            >
              <span className="text">
                Get Started <i className="fa-solid fa-rocket ml-2"></i>
              </span>
              <span>Today!</span>
            </button>
          </Link>
        </article>
        <article className="md:w-[55%] hidden md:flex justify-start items-center h-[100vh]">
          <Image
            src="/images/Home/Hero-Image.webp"
            width="300"
            height="300"
            alt="Hero"
            className="w-[90%] imagePop"
          />
        </article>
      </section>
    </>
  );
}
