"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const slides = [
    {
      text: "LinkedIn Automation",
      text1:
        "Automated LinkedIn Outreach | AI-Powered Lead Generation Efficiently connect with decision-makers through LinkedIn outreach automation. Utilize AI-powered lead generation tools to identify and engage with high-potential leads, expanding your network and boosting conversions. Our LinkedIn marketing solutions include B2B social media automation, LinkedIn prospecting tools, and automated LinkedIn networking for seamless business growth.",
    },
    {
      text: "Email Automation",
      text1:
        "Email Campaign Automation | Personalized Email Marketing Automate your email campaigns with powerful email automation tools that ensure consistent engagement and higher conversion rates. Enhance your marketing efforts with personalized email campaigns that drive email conversion optimization. Our services include automated email workflows and drip email campaigns focused on improving your email marketing ROI.",
    },
    {
      text: "Lead Generation",
      text1:
        "Targeted Lead Generation | ROI Optimization Implement strategic lead generation techniques to attract the right audience and convert prospects into loyal customers. Optimize your ROI with data-driven strategies that cultivate high-quality leads",
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
    AOS.init({ duration: 500 });

    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered, slides.length]);

  return (
    <div className="w-[100%]">
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
            <div className="relative h-[13vh]  overflow-hidden">
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
                    <p className="md:text-xl text-[4vw] font-light cursor-pointer">
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
              className="md:py-4 md:px-16 md:text-[1vw] rounded-3xl mt-[2vh] getstarted pfont"
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
            src="/images/Mommyyy.webp"
            width="300"
            height="300"
            alt="Hero"
            className="w-[90%]"
          />
        </article>
      </section>

      {/* <div className="carddoll hidden absolute md:top-[50vh] top-[55vh] right-[0vw] md:w-[16em] w-[12em]">
        <img
          src="https://uiverse.io/build/_assets/astronaut-WTFWARES.png"
          alt=""
          className="image w-[10vw]"
        />
      </div> */}
      <section className="md:h-[75vh] w-[100%] pt-[5vh] mb-[5vh] md:mb-0 bg-slate-50">
        <article className="m-auto w-[90%] md:h-[75vh]  md:flex   justify-between">
          <figure className="md:w-[50%] flex items-start justify-center  overflow-hidden">
            {/* <img className='w-[100%] object-cover' src="https://images.unsplash.com/photo-1600275669283-4bf2bb8a990c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
            <Image
              className="w-[100%] h-[100%] object-contain"
              src="/images/AU.png"
              width={300}
              height={300}
              alt=""
            />
          </figure>
          <div
            className="md:w-[50%] justify-center px-[5vw]"
            data-aos="fade-in"
          >
            <h2 className="text-center pt-[7vh] headingfont text-[#112029] md:text-[2.3vw] font-[700]">
              Welcome to EvoXcel
            </h2>
            <p className="md:text-[1.1vw] md:leading-8 mb-[5vh] md:mb-0 text-[4vw] text-justify pt-[2vh] pfont">
              "We empower your business success with a comprehensive range of
              cutting-edge services and products. From custom web, software, and
              application development to expert lead generation strategies, we
              are here to drive your growth. Explore our advanced LinkedIn
              automation and email automation tools designed to streamline
              outreach and maximize results. Let us partner with you to achieve
              your business objectives. "
            </p>
          </div>
        </article>
      </section>
      <section className="bghome3 pl-[3vw]">
        <article className="w-[100%] md:flex">
          <div className="md:w-[55%] pr-[3vw]">
            {/* <h2 className='text-white text-[2vw]'>~</h2> */}
            <h2
              className="text-[7vw] md:text-[1.3vw] pt-[5vh] text-[#fff] headingfont"
              data-aos="fade-right"
              data-aos-duration="700"
            >
              WHAT WE PROVIDE
            </h2>
            <h2
              className=" text-[10vw] md:text-[3.1vw] font-bold text-[#fff] headingfont"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              Our Services
            </h2>
            <article className="md:flex justify-between text-white mt-[5vh] w-[100%]">
              <Link
                href="/web-development"
                className="md:w-[45%] cursor-pointer"
                data-aos="fade-right"
                data-aos-duration="700"
              >
                <div>
                  <i className="fa-solid fa-laptop md:text-[1.5vw] px-[3vw] py-[3.5vw] md:px-[0.7vw] md:py-[0.9vw] bg-[#ffffff42] rounded-full"></i>
                  <h2 className="md:text-[1.2vw] font-[550] mt-4 headingfont">
                    Web Development
                  </h2>
                  <p className="md:text-[1vw] pt-[1.4vh] text-slate-300 pfont">
                    Specializing in custom web development, we craft visually
                    stunning and high-performing websites that drive revenue and
                    elevate user experience.....
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
                  <h2 className="md:text-[1.2vw] font-[550] mt-4 headingfont">
                    Software Development
                  </h2>
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
            <article className="md:flex justify-between text-white md:py-[9vh]  w-[100%]">
              <Link
                href="/application-development"
                className="md:w-[45%] cursor-pointer"
                data-aos="fade-right"
                data-aos-duration="700"
              >
                <div>
                  <i className="fa-solid fa-computer md:text-[1.5vw] px-[3vw] py-[3.5vw] md:px-[0.7vw] md:py-[0.9vw] bg-[#ffffff42] rounded-full"></i>
                  <h2 className="md:text-[1.2vw] font-[550] mt-4 headingfont">
                    Application Development
                  </h2>
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
                  <h2 className="md:text-[1.2vw] font-[550] mt-4 headingfont">
                    Lead Generation
                  </h2>
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
          <figure className="md:w-[45%] flex justify-end" data-aos="fade-in">
            <img
              className="w-[100%] h-[100%] mb-5 object-cover"
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </figure>
        </article>
      </section>

      <section className=" pr-[6vw] bg-slate-50">
        <article className="w-[100%] md:flex justify-between ">
          <figure className="md:w-[45%] hidden md:block">
            <Image
              className=" w-[100%] h-[100%] mb-5 object-cover"
              src="/images/homebgimg2.png"
              width={300}
              height={300}
              alt=""
            />
          </figure>
          <div className="md:w-[50%] px-[4vw] md:px-0 pt-[5vh] ">
            <h2
              className="text-[7vw] md:text-[1.3vw] font-[500] text-[#112029] headingfont"
              data-aos="fade-right"
              data-aos-duration="700"
            >
              WHAT WE PROVIDE
            </h2>
            <h2
              className="text-[10vw] md:text-[3.1vw] font-bold text-[#112029] headingfont"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              Our Products
            </h2>
            <article className="md:flex justify-between gap-[2vw] text-white mt-[5vh] w-[100%]">
              <Link href="/linkedin-automation" data-aos="fade-right">
                <div className="w-[100%] cursor-pointer">
                  <i className="fa-brands fa-linkedin md:text-[1.5vw] p-2 bg-[#112029] rounded-full"></i>
                  <h2 className="md:text-[1.2vw] font-[550] mt-4 text-[#112029] headingfont">
                    LinkedIn Automation
                  </h2>
                  <p className="md:text-[1vw] pfont pt-[1vh] text-[#112029]">
                    Automate your outreach with precision. Our LinkedIn
                    automation tools are designed to boost response rates,
                    bypass restrictions, and manage multiple accounts
                    effortlessly....
                  </p>
                  <button className="mt-3 pfont md:text-[0.9vw] text-[#112029] relative z-50">
                    Know More <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </Link>
              <Link href="/email-automation" data-aos="fade-right">
                <div className="w-[100%] cursor-pointer">
                  <i className="fa-solid fa-envelope md:text-[1.5vw] p-2 bg-[#112029] rounded-full"></i>
                  <h2 className="md:text-[1.2vw] font-[550] mt-4 text-[#112029] headingfont">
                    Email Automation
                  </h2>
                  <p className="md:text-[1vw] pfont pt-[1vh] text-[#112029]">
                    Maximize your email campaigns with our powerful automation
                    tools, ensuring personalized messaging that engages and
                    converts high-quality leads...
                  </p>
                  <button className="mt-3 pfont md:text-[0.9vw] text-[#112029]">
                    Know More <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </Link>
            </article>
          </div>
        </article>
      </section>
      <article className="px-[5vw] py-[10vh] bghomecolor">
        <h2
          className="text-center md:text-[2.5vw] font-[600] headingfont text-white"
          data-aos="fade-right"
        >
          Why Choose ExoXcel?
        </h2>
        <section className="md:flex homepagelast justify-between w-[100%] mt-[5vh]">
          <aside
            className="md:w-[50%] flex flex-col items-start justify-center pl-7"
            data-aos="fade-right"
          >
            <h2 className="md:text-[2.5vw] font-[600] headingfont text-slate-800">
              Confident Campaign Launches.
            </h2>
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
              src="/images/LCWC.png"
              width={300}
              height={300}
              className="w-[65%]"
              alt=""
            />
          </figure>
        </section>
        <section className="md:flex homepagelast justify-between w-[100%] mt-[5vh]">
          <figure
            className="md:w-[50%] flex justify-center items-center"
            data-aos="fade-in"
          >
            <Image
              src="/images/MC.png"
              width={300}
              height={300}
              className="w-[80%]"
              alt=""
            />
          </figure>
          <aside
            className="md:w-[50%] flex flex-col items-start justify-center pl-7"
            data-aos="fade-right"
          >
            <h2 className="md:text-[2.5vw] font-[600] headingfont  text-white">
              Boost Conversions with Smart Sequences.
            </h2>
            <ul className="md:text-[1.2vw] pfont flex flex-col gap-[2vh] mt-[5vh]">
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
            <h2 className="md:text-[2.5vw] font-[600] headingfont text-slate-800">
              Enhance Connections with Intelligent Communication.
            </h2>
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
              src="/images/SCIC.png"
              width={300}
              height={300}
              className="w-[70%]"
              alt=""
            />
          </figure>
        </section>
        <section className="md:flex homepagelast justify-between w-[100%] mt-[5vh]">
          <figure
            className="md:w-[50%] flex justify-center items-center"
            data-aos="fade-in"
          >
            <Image
              src="/images/OWDDI.png"
              width={300}
              height={300}
              className="w-[60%]"
              alt=""
            />
          </figure>
          <aside
            className="md:w-[50%] flex flex-col items-start justify-center pl-7"
            data-aos="fade-right"
          >
            <h2 className="md:text-[2.5vw] font-[600] headingfont  text-white">
              Optimize with Data-Driven Insights
            </h2>
            <ul className="md:text-[1.2vw] pfont flex flex-col gap-[2vh] mt-[5vh]">
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
          </aside>
        </section>
        <section className="md:flex homepagelast justify-between w-[100%] mt-[5vh]">
          <aside
            className="md:w-[50%] flex flex-col items-start justify-center pl-7"
            data-aos="fade-right"
          >
            <h2 className="md:text-[2.5vw] font-[600] headingfont text-slate-800">
              Seamless Tool Integration.
            </h2>
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
          </aside>
          <figure
            className="md:w-[50%] flex justify-center items-center"
            data-aos="fade-in"
          >
            <Image
              src="/images/SI.png"
              width="300"
              height={300}
              className="w-[65%]"
              alt=""
            />
          </figure>
        </section>
      </article>
    </div>
  );
};

export default Home;
