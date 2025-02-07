"use client";
import Link from "next/link";
import Image from "next/image";
import Hero from "./Hero";
import AOS from "aos";
import "aos/dist/aos.css";
import Typewriter from "typewriter-effect";
import { useEffect, useState } from "react";
import { HeroParallaxDemo } from "@/components/homePage/HeroParallaxDemo";
import { TimelineDemo } from "@/components/homePage/TimelineDemo";
import TrueFocus from "@/components/ui/TrueFocus";
import { StickyScrollRevealDemo } from "@/components/homePage/StickyScrollRevealDemo";
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
        {/* <HeroScrollDemo /> */}
        <Hero />
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
        <section className=" px-[3vw] pb-5 bg-black">
          <article className="w-[100%] md:flex">
            <div className="md:w-[55%] mb-5 pl-[3vw]">

              <div
                className=" text-[5vw] md:text-[3.1vw] font-bold text-[#fff] headingfont"
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
              <article className="md:flex  justify-between text-white mt-[5vh] w-[100%]">
                <Link
                  href="/web-development"
                  className="md:w-[45%] cursor-pointer "
                  data-aos="fade-right"
                  data-aos-duration="700"
                >
                  <div>
                    <div className="flex md:block items-center gap-3">
                      <i className="fa-solid fa-laptop md:text-[1.5vw] px-[3vw] py-[3.5vw] md:px-[0.7vw] md:py-[0.9vw] bg-[#ffffff42] rounded-full"></i>
                      <p className="md:text-[1.2vw] font-[550] md:mt-4 headingfont">
                        Web Development
                      </p>
                    </div>
                    <p className="md:text-[1vw] pt-[1.4vh] text-slate-300 pfont">
                      Specializing in custom web development, we craft visually
                      stunning and high-performing websites that drive revenue
                      and elevate user experience.....
                    </p>
                    <button className="mt-3 mb-4 md:mb-2 md:text-[0.9vw] px-2 rounded-lg bg-white text-slate-900 pfont">
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
                    <div className="flex md:block items-center gap-3">
                      <i className="fa-solid fa-code md:text-[1.5vw] px-[3vw] py-[3.5vw] md:px-[0.7vw] md:py-[0.9vw] bg-[#ffffff42] rounded-full"></i>
                      <p className="md:text-[1.2vw] font-[550] md:mt-4 headingfont">
                        Software Development
                      </p>
                    </div>
                    <p className="md:text-[1vw] pt-[1.4vh] text-slate-300 pfont">
                      Our expert team utilizes state-of-the-art technology to
                      create scalable, secure, and innovative software solutions
                      tailored to your unique needs....
                    </p>
                    <button className="mt-3 mb-4 md:mb-2 md:text-[0.9vw] px-2 rounded-lg bg-white text-slate-900 pfont">
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
                    <div className="flex md:block items-center gap-3">
                      <i className="fa-solid fa-computer md:text-[1.5vw] px-[3vw] py-[3.5vw] md:px-[0.7vw] md:py-[0.9vw] bg-[#ffffff42] rounded-full"></i>
                      <p className="md:text-[1.2vw] font-[550] md:mt-4 headingfont">
                        Application Development
                      </p>
                    </div>

                    <p className="md:text-[1vw] pt-[1.4vh] text-slate-300 pfont">
                      Whether you need bespoke software, scalable web apps, or
                      robust mobile applications, our skilled team delivers
                      solutions that drive business success....
                    </p>
                    <button className="mt-3 mb-4 md:mb-2 md:text-[0.9vw] px-2 rounded-lg bg-white text-slate-900 pfont">
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
                    <div className="flex md:block items-center gap-3">

                      <i className="fa-solid fa-filter-circle-dollar md:text-[1.5vw] px-[3vw] py-[3.5vw] md:px-[0.7vw] md:py-[0.9vw] bg-[#ffffff42] rounded-full"></i>
                      <p className="md:text-[1.2vw] font-[550] md:mt-4 headingfont">
                        Lead Generation
                      </p>
                    </div>
                    <p className="md:text-[1vw] pt-[1.4vh] text-slate-300 pfont">
                      Leverage targeted lead generation to attract and engage
                      high-quality prospects. Our all-encompassing approach
                      ensures you reach the right audience effectively....
                    </p>
                    <button className="mt-3 mb-4 md:mb-2 md:text-[0.9vw] px-2 rounded-lg bg-white text-slate-900 pfont">
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
          </article >
        </section >

        <section className=" px-[3vw] bg-black">
          <article className="w-[100%] flex flex-col-reverse md:flex-row justify-between ">
            <figure className="md:w-[39%] ">
              <Image
                className=" w-[100%] h-[100%] rounded-md mb-5 object-cover"
                src="/images/Home/product-Image.webp"
                width={300}
                height={300}
                loading="lazy"
                alt="our-products-Image"
              />
            </figure>
            <div className="md:w-[50%] px-[4vw] md:px-0 pt-[5vh] ">

              <div
                className="text-[5vw] md:text-[3.1vw] font-bold text-white headingfont"
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
                    <div className="flex md:block items-center gap-3">
                      <i className="fa-brands fa-linkedin md:text-[1.5vw] p-2 bg-[#1d5476] rounded-full"></i>
                      <p className="md:text-[1.2vw] font-[550] md:mt-4 text-white headingfont">
                        LinkedIn Automation
                      </p>
                    </div>
                    <p className="md:text-[1vw] pfont pt-[1vh] text-white">
                      Automate your outreach with precision. Our LinkedIn
                      automation tools are designed to boost response rates,
                      bypass restrictions, and manage multiple accounts
                      effortlessly....
                    </p>
                    <button className="mt-3 mb-4 md:mb-2 md:text-[0.9vw] px-2 rounded-lg bg-white text-slate-900 pfont">
                      Know More <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                </Link>
                <Link href="/email-automation" data-aos="fade-right">
                  <div className="w-[100%] cursor-pointer">
                    <div className="flex md:block items-center gap-3">
                      <i className="fa-solid fa-envelope md:text-[1.5vw] p-2 bg-[#1d5476] rounded-full"></i>
                      <p className="md:text-[1.2vw] font-[550] md:mt-4 text-white headingfont">
                        Email Automation
                      </p>
                    </div>
                    <p className="md:text-[1vw] pfont pt-[1vh] text-white">
                      Maximize your email campaigns with our powerful automation
                      tools, ensuring personalized messaging that engages and
                      converts high-quality leads...
                    </p>
                    <button className="mt-3 mb-4 md:mb-2 md:text-[0.9vw] px-2 rounded-lg bg-white text-slate-900 pfont">
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

        <div className="text-white text-center mb-8 md:mt-7">
          <div className="md:text-[3em] text-[1.6em] font-semibold">
            Why Choose ExoXcel <span className="text-blue-400">Linkedin Automation</span> ?
          </div>
        </div>
        <div className="md:mb-20 md:px-10 2xl:px-3">
          <WobbleCardDemo />
        </div>

      </div >
    </>
  );
};

export default HomePage;
