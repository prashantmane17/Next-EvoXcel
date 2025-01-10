"use client";
import Link from "next/link";
import Image from "next/image";
import Hero from "./Hero";
import AOS from "aos";
import "aos/dist/aos.css";
import Typewriter from "typewriter-effect";
import WhyChooseUs from "./WhyChooseUs";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Evoxcel from "./Evoxcel";
import { LayoutGridDemo } from "@/components/homePage/LayoutGridDemo";
import { HeroParallaxDemo } from "@/components/homePage/HeroParallaxDemo";
import { SparklesPreview } from "@/components/homePage/SparklesPreview";
import { SparklesPreviewBG } from "@/components/homePage/SparklesPreviewBG";
import { TimelineDemo } from "@/components/homePage/TimelineDemo";
import TrueFocus from "@/components/ui/TrueFocus";
import { StickyScrollRevealDemo } from "@/components/homePage/StickyScrollRevealDemo";
import { FollowingPointerDemo } from "@/components/homePage/FollowingPointerDemo";
import { BentoGridDemo } from "@/components/homePage/BentoGridDemo";
import { HeroScrollDemo } from "@/components/homePage/HeroScrollDemo";
import { WobbleCardDemo } from "@/components/homePage/WobbleCardDemo";

const HomePage = () => {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    setScrolled(window.scrollY > 0);
  };
  useEffect(() => {
    AOS.init({
      offset: 1,
      delay: 1,
      duration: 400,
      easing: "ease-in-out",
    });
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="w-[100%] scroll-smooth">
        {/* <Hero /> */}
        <HeroScrollDemo />
        <section className="md:h-fit w-[100%]  mb-[5vh] md:mb-0 bg-black">
          <article className="md:m-auto md:w-[90%] md:h-fit  md:flex justify-between mb-5">
            <figure className="md:w-[50%] flex items-start justify-center  overflow-hidden">
              <Image
                className="w-[100%] h-[100%] object-contain hi"
                src="/images/Home/welcomeImage.webp"
                width={300}
                height={300}
                loading="lazy"
                alt="welcomeImage"
              />
            </figure>
            <div
              className="md:w-[50%] justify-center md:px-[5vw] 2xl:px-[0vw]"
              data-aos="fade-in"
            >
              <div className="text-center pt-[7vh] headingfont text-white md:text-[2.6vw] text-[6vw] font-[700]">
                Welcome to{" "}
                <span
                  style={{ display: "inline-block" }}
                  className="text-sky-600"
                >
                  <Typewriter
                    options={{
                      strings: ["EvoXcel"],
                      autoStart: true,
                      loop: true,
                      delay: 75,
                      deleteSpeed: 50,
                    }}
                  />
                </span>
              </div>

              <p className=" text-white  md:text-[1.1vw] md:leading-8 mb-[5vh] md:mb-0 text-[4vw] text-justify 2xl:pl-4 pt-[2vh] md:px-0 px-5 pfont">
                &ldquo;We empower your business success with a comprehensive
                range of cutting-edge services and products. From custom web,
                software, and application development to expert lead generation
                strategies, we are here to drive your growth. Explore our
                advanced LinkedIn automation and email automation tools designed
                to streamline outreach and maximize results. Let us partner with
                you to achieve your business objectives. &ldquo;
              </p>
            </div>
          </article>
        </section>
        {/* bghome3 */}
        <section className=" px-[3vw]  bg-black">
          <article className="w-[100%] md:flex">
            <div className="md:w-[55%] pl-[3vw]">
              {/* <p className='text-white text-[2vw]'>~</p> */}
              {/* <p
                className="text-[7vw] md:text-[1.3vw] pt-[5vh] text-[#fff] headingfont"
                data-aos="fade-right"
                data-aos-duration="700"
              >
                WHAT WE PROVIDE
              </p> */}
              <div
                className=" text-[10vw] md:text-[3.1vw] font-bold text-[#fff] headingfont"
                data-aos="fade-right"
                data-aos-duration="1000"
              >

                <TrueFocus sentence="Our Services"
                  manualMode={false}
                  blurAmount={5}
                  borderColor="skyblue"
                  animationDuration={2}
                  pauseBetweenAnimations={1}
                />
              </div>
              <article className="md:flex justify-between text-white mt-[5vh] w-[100%]">
                <Link
                  href="/web-development"
                  className="md:w-[45%] cursor-pointer"
                  data-aos="fade-right"
                  data-aos-duration="700"
                >
                  <div>
                    <i className="fa-solid fa-laptop md:text-[1.5vw] px-[3vw] py-[3.5vw] md:px-[0.7vw] md:py-[0.9vw] bg-[#ffffff42] rounded-full"></i>
                    <p className="md:text-[1.2vw] font-[550] mt-4 headingfont">
                      Web Development
                    </p>
                    <p className="md:text-[1vw] pt-[1.4vh] text-slate-300 pfont">
                      Specializing in custom web development, we craft visually
                      stunning and high-performing websites that drive revenue
                      and elevate user experience.....
                    </p>
                    <button className="mt-3 md:text-[0.9vw] text-slate-300 pfont">
                      Know More <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                </Link>
                <Link
                  href="/software-development"
                  className="md:w-[45%] cursor-pointer"
                  data-aos="fade-right"
                  data-aos-duration="700"
                >
                  <div>
                    <i className="fa-solid fa-code md:text-[1.5vw] px-[3vw] py-[3.5vw] md:px-[0.7vw] md:py-[0.9vw] bg-[#ffffff42] rounded-full"></i>
                    <p className="md:text-[1.2vw] font-[550] mt-4 headingfont">
                      Software Development
                    </p>
                    <p className="md:text-[1vw] pt-[1.4vh] text-slate-300 pfont">
                      Our expert team utilizes state-of-the-art technology to
                      create scalable, secure, and innovative software solutions
                      tailored to your unique needs....
                    </p>
                    <button className=" md:text-[0.9vw] mt-3 text-slate-300 pfont">
                      Know More <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                </Link>
              </article>
              <article className="md:flex justify-between text-white md:py-[4vh]  w-[100%]">
                <Link
                  href="/application-development"
                  className="md:w-[45%] cursor-pointer"
                  data-aos="fade-right"
                  data-aos-duration="700"
                >
                  <div>
                    <i className="fa-solid fa-computer md:text-[1.5vw] px-[3vw] py-[3.5vw] md:px-[0.7vw] md:py-[0.9vw] bg-[#ffffff42] rounded-full"></i>
                    <p className="md:text-[1.2vw] font-[550] mt-4 headingfont">
                      Application Development
                    </p>
                    <p className="md:text-[1vw] pt-[1.4vh] text-slate-300 pfont">
                      Whether you need bespoke software, scalable web apps, or
                      robust mobile applications, our skilled team delivers
                      solutions that drive business success....
                    </p>
                    <button className="mt-3 md:text-[0.9vw] text-slate-300 pfont">
                      Know More <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                </Link>
                <Link
                  href="/lead-generation"
                  className="md:w-[45%] cursor-pointer"
                  data-aos="fade-right"
                  data-aos-duration="700"
                >
                  <div>
                    <i className="fa-solid fa-filter-circle-dollar md:text-[1.5vw] px-[3vw] py-[3.5vw] md:px-[0.7vw] md:py-[0.9vw] bg-[#ffffff42] rounded-full"></i>
                    <p className="md:text-[1.2vw] font-[550] mt-4 headingfont">
                      Lead Generation
                    </p>
                    <p className="md:text-[1vw] pt-[1.4vh] text-slate-300 pfont">
                      Leverage targeted lead generation to attract and engage
                      high-quality prospects. Our all-encompassing approach
                      ensures you reach the right audience effectively....
                    </p>
                    <button className="mt-3 md:text-[0.9vw] text-slate-300 pfont">
                      Know More <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                </Link>
              </article>
            </div>
            <figure className="md:w-[39%] w-[100%] md:flex justify-end" data-aos="fade-in">
              <Image
                className="md:w-[90%] h-[90%] w-[100%] mb-5 object-cover"
                width={300}
                height={300}
                loading="lazy"
                src="/images/Home/Our_Services.webp"
                alt="Our-services-image"
              />
            </figure>
          </article>
        </section>

        <section className=" px-[6vw] bg-black">
          <article className="w-[100%] md:flex justify-between ">
            <figure className="md:w-[39%] hidden md:block">
              <Image
                className=" w-[100%] h-[100%] mb-5 object-cover"
                src="/images/Home/product-Image.webp"
                width={300}
                height={300}
                loading="lazy"
                alt="our-products-Image"
              />
            </figure>
            <div className="md:w-[50%] px-[4vw] md:px-0 pt-[5vh] ">
              {/* <p
                className="text-[7vw] md:text-[1.3vw] font-[500] text-white  headingfont"
                data-aos="fade-right"
                data-aos-duration="700"
              >
                WHAT WE PROVIDE
              </p> */}
              <div
                className="text-[10vw] md:text-[3.1vw] font-bold text-white headingfont"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <TrueFocus sentence="Our Products"
                  manualMode={false}
                  blurAmount={5}
                  borderColor="skyblue"
                  animationDuration={2}
                  pauseBetweenAnimations={1}
                />

              </div>
              <article className="md:flex justify-between gap-[2vw] text-white mt-[5vh] w-[100%]">
                <Link href="/linkedin-automation" data-aos="fade-right">
                  <div className="w-[100%] cursor-pointer">
                    <i className="fa-brands fa-linkedin md:text-[1.5vw] p-2 bg-[#1d5476] rounded-full"></i>
                    <p className="md:text-[1.2vw] font-[550] mt-4 text-white headingfont">
                      LinkedIn Automation
                    </p>
                    <p className="md:text-[1vw] pfont pt-[1vh] text-white">
                      Automate your outreach with precision. Our LinkedIn
                      automation tools are designed to boost response rates,
                      bypass restrictions, and manage multiple accounts
                      effortlessly....
                    </p>
                    <button className="mt-3 pfont md:text-[0.9vw] text-white relative z-50">
                      Know More <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                </Link>
                <Link href="/email-automation" data-aos="fade-right">
                  <div className="w-[100%] cursor-pointer">
                    <i className="fa-solid fa-envelope md:text-[1.5vw] p-2 bg-[#1d5476] rounded-full"></i>
                    <p className="md:text-[1.2vw] font-[550] mt-4 text-white headingfont">
                      Email Automation
                    </p>
                    <p className="md:text-[1vw] pfont pt-[1vh] text-white">
                      Maximize your email campaigns with our powerful automation
                      tools, ensuring personalized messaging that engages and
                      converts high-quality leads...
                    </p>
                    <button className="mt-3 pfont md:text-[0.9vw] text-white">
                      Know More <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                </Link>
              </article>
            </div>
          </article>
        </section>
        <HeroParallaxDemo />
        <TimelineDemo />
        {/* <StickyScrollRevealDemo /> */}
        {/* <FollowingPointerDemo /> */}
        <div className="text-white text-center mb-8">
          <div className="text-[3em] font-semibold">
            Why Choose ExoXcel <span className="text-blue-400">Linkedin Automation</span> ?
          </div>
        </div>
        {/* <BentoGridDemo /> */}
        <div className="md:mb-20">
          <WobbleCardDemo />
        </div>
        {/* <SparklesPreview />
        <SparklesPreviewBG /> */}
        {/* bghomecolor */}
        {/* <article className="px-[5vw] py-[10vh] ">
          <p
            className="text-center md:text-[2.5vw] font-[600] headingfont text-white"
            data-aos="fade-right"
          >
            Why Choose ExoXcel?
          </p>
          <section className="md:flex homepagelast justify-between w-[100%] mt-[5vh]">
            <aside
              className="md:w-[50%] flex flex-col items-start justify-center pl-7"
              data-aos="fade-right"
            >
              <p className="md:text-[2.5vw] font-[600] headingfont text-slate-800">
                Confident Campaign Launches.
              </p>
              <ul className="md:text-[1.2vw] pfont flex flex-col gap-[2vh] mt-[5vh]">
                <li>
                  <i className="fa-solid fa-check mr-2 bg-[#003C71] p-1 rounded-full text-white"></i>{" "}
                  Boost response rates with precise targeting.
                </li>
                <li>
                  <i className="fa-solid fa-check mr-2 bg-[#003C71] p-1 rounded-full text-white"></i>{" "}
                  Boost response rates with precise targeting.
                </li>
                <li>
                  <i className="fa-solid fa-check mr-2 bg-[#003C71] p-1 rounded-full text-white"></i>{" "}
                  Manage multiple LinkedIn accounts from a single dashboard.
                </li>
              </ul>
            </aside>
            <figure
              className="md:w-[50%] flex justify-center items-center"
              data-aos="fade-in"
            >
              <Image
                src="/images/Home/Campaign-Image.webp"
                width={300}
                height={300}
                loading="lazy"
                className="w-[65%]"
                alt="Campaign-Image"
              />
            </figure>
          </section>
          <section className="flex flex-col-reverse md:flex-row homepagelast justify-between w-[100%] mt-[5vh]">
            <figure
              className="md:w-[50%] flex justify-center items-center "
              data-aos="fade-in"
            >
              <Image
                src="/images/Home/MC.webp"
                width={300}
                height={300}
                loading="lazy"
                className="w-[80%]"
                alt="Boost Conversions with Smart Sequences."
              />
            </figure>
            <aside
              className="md:w-[50%] flex flex-col items-start justify-center pl-7"
              data-aos="fade-right"
            >
              <p className="md:text-[2.5vw] font-[600] headingfont  text-white">
                Boost Conversions with Smart Sequences.
              </p>
              <ul className="md:text-[1.2vw] pfont flex flex-col gap-[2vh] mt-[5vh] text-white">
                <li>
                  <i className="fa-solid fa-check mr-2 bg-[#003C71] p-1 rounded-full text-white"></i>{" "}
                  Automated invites and follow-ups.
                </li>
                <li>
                  <i className="fa-solid fa-check mr-2 bg-[#003C71] p-1 rounded-full text-white"></i>{" "}
                  Structured messaging for better engagement.
                </li>
                <li>
                  <i className="fa-solid fa-check mr-2 bg-[#003C71] p-1 rounded-full text-white"></i>{" "}
                  Targeted communication with group prospects.
                </li>
              </ul>
            </aside>
          </section>
          <section className="md:flex homepagelast justify-between w-[100%] mt-[5vh]">
            <aside
              className="md:w-[50%] flex flex-col items-start justify-center pl-7"
              data-aos="fade-right"
            >
              <p className="md:text-[2.5vw] font-[600] headingfont text-slate-800">
                Enhance Connections with Intelligent Communication.
              </p>
              <ul className="md:text-[1.2vw] pfont flex flex-col gap-[2vh] mt-[5vh]">
                <li>
                  <i className="fa-solid fa-check mr-2 bg-[#003C71] p-1 rounded-full text-white"></i>{" "}
                  AI-driven sentiment analysis for smarter interactions.
                </li>
                <li>
                  <i className="fa-solid fa-check mr-2 bg-[#003C71] p-1 rounded-full text-white"></i>{" "}
                  Centralized message management for efficiency.
                </li>
                <li>
                  <i className="fa-solid fa-check mr-2 bg-[#003C71] p-1 rounded-full text-white"></i>{" "}
                  Tag and track warm leads with ease.
                </li>
              </ul>
            </aside>
            <figure
              className="md:w-[50%] flex justify-center items-center"
              data-aos="fade-in"
            >
              <Image
                src="/images/Home/SCIC.webp"
                width={300}
                height={300}
                loading="lazy"
                className="w-[70%]"
                alt="Enhance Connections with Intelligent Communication."
              />
            </figure>
          </section>
          <div className="flex flex-col-reverse md:flex-row homepagelast justify-between w-[100%] mt-[5vh]">
            <motion.figure
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:w-[50%] flex justify-center items-center"
            >
              <Image
                src="/images/Home/OWDDI.webp"
                width={300}
                height={300}
                loading="lazy"
                className="w-[60%]"
                alt="Optimize with Data-Driven Insights"
              />
            </motion.figure>
            <motion.aside
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:w-[50%] flex flex-col items-start justify-center pl-7"
            >
              <p className="md:text-[2.5vw] font-[600] headingfont  text-white">
                Optimize with Data-Driven Insights
              </p>
              <ul className="md:text-[1.2vw] pfont flex flex-col gap-[2vh] mt-[5vh] text-white">
                <li>
                  <i className="fa-solid fa-check mr-2 bg-[#003C71] p-1 rounded-full text-white"></i>{" "}
                  Evaluate campaign performance via a powerful dashboard.
                </li>
                <li>
                  <i className="fa-solid fa-check mr-2 bg-[#003C71] p-1 rounded-full text-white"></i>{" "}
                  Access detailed demographic data for targeted insights.
                </li>
                <li>
                  <i className="fa-solid fa-check mr-2 bg-[#003C71] p-1 rounded-full text-white"></i>{" "}
                  Identify trends across LinkedIn accounts.
                </li>
              </ul>
            </motion.aside>
          </div>
          <section className="md:flex homepagelast justify-between w-[100%] mt-[5vh]">
            <motion.aside
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:w-[50%] flex flex-col items-start justify-center pl-7"
            >
              <p className="md:text-[2.5vw] font-[600] headingfont text-slate-800">
                Seamless Tool Integration.
              </p>
              <ul className="md:text-[1.2vw] pfont flex flex-col gap-[2vh] mt-[5vh]">
                <li>
                  <i className="fa-solid fa-check mr-2 bg-[#003C71] p-1 rounded-full text-white"></i>{" "}
                  Integrations with CRM sales tools.
                </li>
                <li>
                  <i className="fa-solid fa-check mr-2 bg-[#003C71] p-1 rounded-full text-white"></i>{" "}
                  Applicant management system compatibility.
                </li>
                <li>
                  <i className="fa-solid fa-check mr-2 bg-[#003C71] p-1 rounded-full text-white"></i>{" "}
                  Data enrichment tool integrations for enriched outreach.
                </li>
              </ul>
            </motion.aside>
            <motion.figure
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:w-[50%] flex justify-center items-center"
            >
              <Image
                src="/images/Home/SI.webp"
                width="300"
                height={300}
                loading="lazy"
                className="w-[65%]"
                alt="Seamless Tool Integration"
              />
            </motion.figure>
          </section> */}
        {/* <section className="flex flex-col-reverse md:flex-row homepagelast justify-between w-[100%] mt-[5vh]">
            <figure
              className="md:w-[50%] flex justify-center items-center"
              data-aos="fade-in"
            >
              <Image
                src="/images/Home/Hr_management.svg"
                width={300}
                height={300}
                loading="lazy"
                className="w-[60%]"
                alt="Enhance Productivity"
              />
            </figure>
            <aside
              className="md:w-[50%] flex flex-col items-start justify-center pl-7"
              data-aos="fade-right"
            >
              <p className="md:text-[2.5vw] font-[600] headingfont  text-white">
                Geo-Spatial Tracking
              </p>
              <ul className="md:text-[1.2vw] pfont flex flex-col gap-[2vh] mt-[5vh]">
                <li>
                  <i className="fa-solid fa-check mr-2 bg-[#003C71] p-1 rounded-full text-white"></i>{" "}
                  Track remote employees locations and statuses with high
                  accuracy.
                </li>
                <li>
                  <i className="fa-solid fa-check mr-2 bg-[#003C71] p-1 rounded-full text-white"></i>{" "}
                  Ensure precise time tracking, reducing errors and preventing
                  fraud.
                </li>
                <li>
                  <i className="fa-solid fa-check mr-2 bg-[#003C71] p-1 rounded-full text-white"></i>{" "}
                  Maintain a detailed record of staff movements and locations.
                </li>
              </ul>
            </aside>
          </section>
          <section className="md:flex homepagelast justify-between w-[100%] mt-[5vh]">
            <aside
              className="md:w-[50%] flex flex-col items-start justify-center pl-7"
              data-aos="fade-right"
            >
              <p className="md:text-[2.5vw] font-[600] headingfont text-slate-800">
                Task and Time Management
              </p>
              <ul className="md:text-[1.2vw] pfont flex flex-col gap-[2vh] mt-[5vh]">
                <li>
                  <i className="fa-solid fa-check mr-2 bg-[#003C71] p-1 rounded-full text-white"></i>{" "}
                  Gain real-time insights into task progress and employee
                  performance.
                </li>
                <li>
                  <i className="fa-solid fa-check mr-2 bg-[#003C71] p-1 rounded-full text-white"></i>{" "}
                  Use AI algorithms to create optimal schedules tailored to your
                  workforce’s needs
                </li>
                <li>
                  <i className="fa-solid fa-check mr-2 bg-[#003C71] p-1 rounded-full text-white"></i>{" "}
                  Automatically generate rosters based on set rules and employee
                  preferences, improving operational efficiency.
                </li>
              </ul>
            </aside>
            <figure
              className="md:w-[50%] flex justify-center items-center"
              data-aos="fade-in"
            >
              <Image
                src="/images/Home/SI.webp"
                width="300"
                height={300}
                loading="lazy"
                className="w-[65%]"
                alt="Seamless Tool Integration"
              />
            </figure>
          </section>
          <section className="flex flex-col-reverse md:flex-row homepagelast justify-between w-[100%] mt-[5vh]">
            <figure
              className="md:w-[50%] flex justify-center items-center"
              data-aos="fade-in"
            >
              <Image
                src="/images/Home/Hr_management.svg"
                width={300}
                height={300}
                loading="lazy"
                className="w-[60%]"
                alt="Enhance Productivity"
              />
            </figure>
            <aside
              className="md:w-[50%] flex flex-col items-start justify-center pl-7"
              data-aos="fade-right"
            >
              <p className="md:text-[2.5vw] font-[600] headingfont  text-white">
                Data-Driven Insights
              </p>
              <ul className="md:text-[1.2vw] pfont flex flex-col gap-[2vh] mt-[5vh]">
                <li>
                  <i className="fa-solid fa-check mr-2 bg-[#003C71] p-1 rounded-full text-white"></i>{" "}
                  Access real-time metrics for individuals and teams, driving
                  data-informed decisions.
                </li>
                <li>
                  <i className="fa-solid fa-check mr-2 bg-[#003C71] p-1 rounded-full text-white"></i>{" "}
                  Analyze data on resource utilization to optimize personnel use
                  and improve productivity.
                </li>
                <li>
                  <i className="fa-solid fa-check mr-2 bg-[#003C71] p-1 rounded-full text-white"></i>{" "}
                  Predict future resource needs with advanced forecasting tools
                  to ensure optimal staffing levels.
                </li>
              </ul>
            </aside>
          </section>
          <section className="flex flex-col-reverse md:flex-row homepagelast justify-between w-[100%] mt-[5vh]">
            <figure
              className="md:w-[50%] flex justify-center items-center"
              data-aos="fade-in"
            >
              <Image
                src="/images/Home/Hr_management.svg"
                width={300}
                height={300}
                loading="lazy"
                className="w-[60%]"
                alt="Enhance Productivity"
              />
            </figure>
            <aside
              className="md:w-[50%] flex flex-col items-start justify-center pl-7"
              data-aos="fade-right"
            >
              <p className="md:text-[2.5vw] font-[600] headingfont  text-white">
              Upskill Your Workforce
              </p>
              <ul className="md:text-[1.2vw] pfont flex flex-col gap-[2vh] mt-[5vh]">
                <li>
                  <i className="fa-solid fa-check mr-2 bg-[#003C71] p-1 rounded-full text-white"></i>{" "}
                  Identify strengths and areas for improvement in employee skills, supporting targeted development.
                </li>
                <li>
                  <i className="fa-solid fa-check mr-2 bg-[#003C71] p-1 rounded-full text-white"></i>{" "}
                  Provide interactive training accessible via mobile devices, facilitating learning on-the-go.
                </li>
                <li>
                  <i className="fa-solid fa-check mr-2 bg-[#003C71] p-1 rounded-full text-white"></i>{" "}
                  Evaluate employee progress and skill acquisition with automated assessments for continuous improvement.
                </li>
              </ul>
            </aside>
          </section> */}
        {/* </article> */}
        {/* <div className="px-10 flex justify-center">
          <LayoutGridDemo />
        </div> */}
        {/* <WhyChooseUs /> */}
        {/* <Evoxcel/> */}
      </div>
    </>
  );
};

export default HomePage;
