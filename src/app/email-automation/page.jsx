import React from "react";
import "./emailAutomation.css";
import Image from "next/image";

export const metadata = {
  title: "Email Automation Services | EvoXcel",
  description:
    "Boost engagement with EvoXcel’s email automation services. From personalized campaigns to automated workflows, we help you optimize conversions and improve your email marketing ROI.",
  alternates: {
    canonical: "https://www.evoxcel.com/email-automation/",
  },
  openGraph: {
    type: "website",
    url: "https://www.evoxcel.com/",
    title: "Streamline Your Email Campaigns with EvoXcel",
    description:
      "Boost engagement and conversion with EvoXcel’s personalized email automation services, delivering targeted content to your audience",
    site_name: "EvoXcel",
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
    title: "Streamline Your Email Campaigns with EvoXcel",
    description:
      "Boost engagement and conversion with EvoXcel’s personalized email automation services, delivering targeted content to your audience",
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
const EmailAutomation = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="w-[100%]  bgwebdev px-[8vw]  pt-[7vh] md:pt-[14vh] pb-[10vh] items-center justify-between md:flex">
        <div data-aos="fade-up" className="md:w-[50%] text-white my-14 lg:my-0">
          <h1 className="capitalize headingfont text-[2rem]  leading-tight lg:text-[3vw] font-bold pt-[7.5vh] text-[#03449a] bg-clip-text bg-gradient-to-r from-slate-400,text-[#03449a]">
            Revolutionize Your Communication with Our Email Automation Tool
          </h1>
          <p className="mt-4 mb-10 max-w-lg pfont leading-relaxed text-[4vw] md:text-[1.2vw] text-justify text-black">
            Transform your marketing strategy with EvoXcel&apos;s email
            automation tool, designed to streamline automated email campaigns,
            enhance personalized email marketing, and deliver targeted content
            that boosts engagement and growth.
          </p>
          {/* <a href="#" className="inline-block capitalize font-semibold bg-gradient-to-r from-purple-500 to-pink-800 rounded-full px-7 py-2 hover:from-purple-500 hover:to-gray-800">learn more</a> */}
        </div>
        <figure className="md:w-[50%] flex justify-center">
          <Image
            src="/images/email-automation/email-automation.webp"
            width="300"
            height="300"
            alt="Email Automation Tool"
            className="md:w-[70%]"
          />
        </figure>
      </section>
      <section className="bg-gray-50 pb-13">
        <h2 className="text-3xl text-center headingfont md:text-4xl font-semibold text-[#718BFF] mb-4">
          Comprehensive Features of Our Email Automation Service
        </h2>
        <p className="text-lg text-center headingfont text-gray-700">
          Our cutting-edge solution offers a range of feature-specific
          capabilities that elevate your email marketing efforts:
        </p>
        <article className="px-[7vw] pt-[10vh] w-[100%] md:flex gap-4">
          <div
            data-aos="fade-up"
            class="relative flex md:w-[24%] mt-[7vh] md:mt-0  hover:scale-105  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
          >
            <div class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
              <Image
                width={300}
                height={300}
                src="/images/email-automation/email-automation_Email-Campaigns.webp"
                alt="Personalized Email Campaigns"
              />
            </div>
            <div class="p-6">
              <h3 class="text-[#718BFF] headingfont mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Personalized Email Campaigns
              </h3>
              <p class="block font-sans text-base pfont font-normal leading-relaxed text-inherit antialiased">
                Create customized emails based on user behavior and preferences
                to drive increased email engagement and higher conversion rates.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            class="relative flex md:w-[24%] mt-[7vh] md:mt-0  hover:scale-105  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
          >
            <div class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
              <Image
                width={300}
                height={300}
                src="/images/email-automation/email-automation_Email-Workflows.webp"
                alt="Automated Email Workflows"
              />
            </div>
            <div class="p-6">
              <h3 class="text-[#718BFF] mb-2 headingfont block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Automated Email Workflows
              </h3>
              <p class="block font-sans text-base pfont font-normal leading-relaxed text-inherit antialiased">
                Simplify the process with email workflow automation triggered by
                specific actions to save time and enhance communication.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            class="relative flex md:w-[24%] mt-[7vh] md:mt-0  hover:scale-105  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
          >
            <div class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
              <Image
                width={300}
                height={300}
                src="/images/email-automation/email-automation_Analytics-Reporting.webp"
                alt="In-Depth Analytics and Reporting"
              />
            </div>
            <div class="p-6">
              <h3 class="text-[#718BFF] mb-2 block headingfont font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Email Analytics and Reporting
              </h3>
              <p class="block font-sans text-base pfont font-normal leading-relaxed text-inherit antialiased">
                Leverage in-depth email analytics to gain valuable insights and
                optimize your marketing strategies.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            class="relative flex md:w-[24%] mt-[7vh] md:mt-0 hover:scale-105 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
          >
            <div class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
              <Image
                width={300}
                height={300}
                src="/images/email-automation/email-automation_Seamless-Integration.webp"
                alt="Seamless Integration"
              />
            </div>
            <div class="p-6">
              <h3 class="text-[#718BFF] headingfont mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                CRM Integration for Email
              </h3>
              <p class="block font-sans pfont text-base font-normal leading-relaxed text-inherit antialiased">
                Enjoy seamless integration with your existing CRM systems for a
                unified, efficient workflow.
              </p>
            </div>
          </div>
        </article>
      </section>

      {/* Benefits Section */}
      <section className="bg-[#E3F1F4] my-3 md:my-5 py-[5vw] px-[7vw]">
        <div className="block md:flex  mx-auto px-4">
          <div data-aos="fade-right" className="mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold headingfont text-[#718BFF] mb-4">
              Advantages of Our Email Automation Service
            </h2>
            <p className="text-lg text-gray-700 pfont">
              By utilizing our email automation software, you can:
            </p>
          </div>
          <div
            data-aos="fade-right"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              "Revolutionize your email communication with streamlined email campaign management",
              "Increase conversions with personalized email campaigns that resonate with your audience",
              "Maintain consistent outreach with time-saving email automation",
              "Make data-driven decisions with detailed email performance tracking and reporting",

              // "Insightful Analytics: Make informed decisions with comprehensive data."
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
              >
                <p className="text-gray-700 pfont">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <article className="md:flex w-[100%] justify-between px-[8vw] bg-white md:h-fit">
        <div data-aos="fade-right" className="md:w-[55%]">
          <h2 className="text-[#718BFF] headingfont text-[10vw] md:text-[2.5vw] font-[600] mt-[6vh]">
            Our Values
          </h2>
          <p className="text-black mt-[3vh] pfont">
            <i className="fa-solid fa-check bg-[#718BFF] text-white p-[3px] rounded-full mr-2"></i>
            <span className="font-[600]">Innovation - </span>We continually
            evolve our email personalization technology to stay ahead of
            industry trends.
          </p>
          <p className="text-black mt-[3vh] pfont">
            <i className="fa-solid fa-check  bg-[#718BFF] text-white p-[3px] rounded-full mr-2"></i>
            <span className="font-[600]">Customer Success - </span> We
            prioritize customer-centric email automation to ensure your business
            thrives.
          </p>
          <p className="text-black my-[3vh] pfont">
            <i className="fa-solid fa-check  bg-[#718BFF] text-white p-[3px] rounded-full mr-2"></i>
            <span className="font-[600]">Integrity - </span>Guided by honest
            business practices, we provide cutting-edge email technology to help
            you succeed.
          </p>
        </div>
        <figure className="md:w-[35%]  flex justify-end">
          <Image
            className="w-[100%] object-contain"
            width={300}
            height={300}
            src="/images/email-automation/email-automation_Our-Values.webp"
            alt="email-automation_Our-Values"
          />
        </figure>
      </article>
      <article className="md:flex w-[100%] justify-between px-[8vw] bg-white md:h-fit">
        <figure className="md:w-[35%]  flex justify-end">
          <Image
            className="w-[100%] object-contain"
            src="/images/email-automation/email-automation_Email-Automation-Tool.webp"
            width={300}
            height={300}
            alt="Email Automation Tool"
          />
        </figure>
        <div data-aos="fade-right" className="md:w-[55%]">
          <h2 className="text-[#718BFF] headingfont text-[10vw] md:text-[2.5vw] font-[600] mt-[6vh]">
            Why Choose Our Email Automation Tool?
          </h2>
          <p className="text-black mt-[3vh] pfont">
            <i className="fa-solid fa-check bg-[#718BFF] text-white p-[3px] rounded-full mr-2"></i>
            <span className="font-[600]">Streamlined Automation - </span>{" "}
            Automate and manage your B2B email automation or e-commerce email
            marketing efficiently.
          </p>
          <p className="text-black mt-[3vh] pfont">
            <i className="fa-solid fa-check  bg-[#718BFF] text-white p-[3px] rounded-full mr-2"></i>
            <span className="font-[600]">Smart Segmentation - </span> Use email
            list segmentation to target specific audience groups for maximum
            effectiveness.
          </p>
          <p className="text-black my-[3vh] pfont">
            <i className="fa-solid fa-check  bg-[#718BFF] text-white p-[3px] rounded-full mr-2"></i>
            <span className="font-[600]">Seamless Integration - </span> :
            Integrate smoothly with your CRM for a cohesive, efficient workflow.
          </p>
          <p className="text-black my-[3vh] pfont">
            <i className="fa-solid fa-check  bg-[#718BFF] text-white p-[3px] rounded-full mr-2"></i>
            <span className="font-[600]">Advanced Analytics - </span> Access
            data-driven email insights that help you continuously improve your
            strategy and results.
          </p>
        </div>
      </article>
    </>
  );
};

export default EmailAutomation;
