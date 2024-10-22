import React from "react";
import "../email-automation/emailAutomation.css";
import Image from "next/image";
export const metadata = {
  title: "Innovative Software Development Solutions | EvoXcel",
  description:
    "Leverage EvoXcel’s expertise in software development. We offer scalable, customized software solutions to streamline operations and drive business growth.",
  alternates: {
    canonical: "https://www.evoxcel.com/software-development/",
  },
};
const SoftwareDevelopment = () => {
  return (
    <>
      <section className="w-[100%]  bgwebdev px-[8vw]  pt-[7vh] md:pt-[14vh] pb-[10vh] items-center justify-between md:flex">
        <div data-aos="fade-up" className="md:w-[50%] text-white my-14 lg:my-0">
          <h1 className="capitalize headingfont text-[2rem]  leading-tight lg:text-[3vw] font-extrabold pt-[7vh] text-[#03449a] bg-clip-text bg-gradient-to-r from-slate-400,text-[#03449a]">
            Software Excellence, Elevating Businesses to New Heights
          </h1>
          <p className="mt-4 mb-10 pfont max-w-lg leading-relaxed text-[4vw] md:text-[1.2vw] text-justify text-black">
            Seamlessly integrate software, systems, and applications to optimize
            performance and drive unparalleled success. Experience the
            transformative power of unified operations that ensure peak
            productivity and unlock new possibilities with our cutting-edge
            integration expertise.
          </p>
        </div>
        <figure className="md:w-[50%] flex justify-center">
          <Image
            src="/images/software-development/software-development.webp"
            alt="Santa Claus"
            width={300}
            height={300}
            className="md:w-[70%]"
            priority
          />
        </figure>
      </section>
      <section className="bg-gray-50">
        <div data-aos="zoom-in" className="h-[100%] py-4 xls:h-[80vh]">
          <p className="text-[1.8rem] headingfont text-center md:text-[2.5rem] font-bold text-[#718BFF]">
            Innovate. Build. Thrive.
          </p>
          <p className="text-center sd:text-[1.3vw] px-[5vw] pfont  mt-4 font-[400] mb-12">
            Chart a visionary course through your digital frontier with
            state-of-the-art software solutions. We pioneer innovation with
            precision, fostering excellence in every development, and unlocking
            limitless growth and success.
          </p>
          <div
            data-aos="fade-right"
            className="flex items-center justify-center gap-7 flex-wrap"
          >
            {[
              {
                title: "Enterprise Software",
                description:
                  "Build robust solutions that enhance operations and drive business growth.",
                icon: "fas fa-building",
              },
              {
                title: "Customized Software",
                description:
                  "Meticulously tailored to meet your unique business challenges",
                icon: "fas fa-cogs",
              },
              {
                title: "Enterprise Applications",
                description:
                  "Develop impactful applications for enhanced productivity and seamless collaboration.",
                icon: "fas fa-sitemap",
              },
              {
                title: "Support & Maintenance",
                description:
                  "Comprehensive support ensuring smooth software operations.",
                icon: "fas fa-tools",
              },
            ].map((service, index) => (
              <div key={index} className="box">
                <div className="box__head relative h-[75px] w-[75px] bg-white rounded-full">
                  <i
                    className={`${service.icon} fa-3x mb-4 text-[#718BFF] absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 `}
                  ></i>
                </div>
                <div className="box__content">
                  <h2 className="text-xl font-[550] headingfont text-black transition-colors duration-300">
                    {service.title}
                  </h2>
                  <p className="text-sm pfont text-gray-600 mt-2 p-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="py-12 h-[100%] xls:h-[70vh] flex flex-col justify-center bg-[#E3F1F4]">
          <p className="text-[#718BFF] headingfont text-center font-bold text-3xl mb-8">
            Our Software Development Solutions
          </p>
          <div className=" mx-auto px-4">
            <div className="flex flex-wrap -mx-4">
              {[
                {
                  icon: "fa-laptop-code",
                  title: "Web Application Development",
                  description:
                    "Enhance your online presence with our tailored web solutions.",
                },
                {
                  icon: "fa-mobile-alt",
                  title: "Mobile App Development",
                  description:
                    "Engage customers across iOS, Android, and cross-platform solutions.",
                },
                {
                  icon: "fa-cogs",
                  title: "Software Consulting",
                  description:
                    "Get expert advice at every stage of your project",
                },
                {
                  icon: "fa-tools",
                  title: "Custom Software Development",
                  description:
                    "From concept to deployment, we deliver scalable, secure software solutions.",
                },
              ].map((service, index) => (
                <div key={index} className="w-full lg:w-1/4 md:w-1/2 px-4 mb-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 flex flex-col h-full">
                    <a href="#">
                      <i
                        className={`fas fa-3x ${service.icon} text-[#718BFF] mb-4`}
                      ></i>
                    </a>
                    <h2 className="text-2xl headingfont font-semibold mb-2">
                      {service.title}
                    </h2>
                    <p className="text-gray-700 pfont flex-grow">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-gray-900 text-center py-10 px-8 xl:px-0 flex flex-col justify-center">
        <span className="text-gray-400 headingfont text-lg max-w-lg mx-auto mb-2 capitalize flex items-center">
          Our Approach{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="text-indigo-600 ml-3 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </span>
        <p className="text-white headingfont text-4xl md:text-4xl xl:text-5xl font-semibold px-4 mx-auto mb-1 leading-snug">
          We follow a structured approach to deliver high-quality software
          solutions that exceed client expectations.
        </p>
        <div className="grid-offer text-left grid sm:grid-cols-2 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          <div className="emailcard bg-gray-800 p-10 relative">
            <div className="circle"></div>
            <div className="relative lg:pr-52">
              <h2 className="capitalize headingfont text-white mb-4 text-2xl xl:text-3xl">
                Consultation
              </h2>
              <p className="text-gray-400 pfont">
                We understand your business needs to tailor the best solutions.
              </p>
            </div>
            <div className="icon"></div>
          </div>
          <div className="emailcard bg-gray-800 p-10 relative">
            <div className="circle"></div>
            <div className="relative lg:pl-48">
              <h2 className="capitalize text-white headingfont mb-4 text-2xl xl:text-3xl">
                Planning
              </h2>
              <p className="text-gray-400 pfont">
                Develop a comprehensive strategy for seamless execution.
              </p>
            </div>
          </div>
          <div className="emailcard bg-gray-800 p-10 relative">
            <div className="circle"></div>
            <div className="relative lg:pr-44">
              <h2 className="capitalize text-white headingfont mb-4 text-2xl xl:text-3xl">
                Development
              </h2>
              <p className="text-gray-400 pfont">
                Execute with precision using the latest technologies.
              </p>
            </div>
          </div>
          <div className="emailcard bg-gray-800 p-10 relative">
            <div className="circle"></div>
            <div className="relative lg:pl-48">
              <h2 className="capitalize text-white headingfont mb-4 text-2xl xl:text-3xl">
                Deployment
              </h2>
              <p className="text-gray-400 pfont">
                Ensure smooth implementation with ongoing support and
                maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SoftwareDevelopment;
