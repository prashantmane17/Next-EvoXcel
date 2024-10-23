import React from "react";
import "./leadgen.css";

import Image from "next/image";
export const metadata = {
  title: "Targeted Lead Generation Services | EvoXcel",
  description:
    "Drive business success with EvoXcel’s data-driven lead generation strategies. From B2B to multi-channel lead capture, we help you generate high-quality prospects and optimize conversion",
  alternates: {
    canonical: "https://www.evoxcel.com/lead-generation/",
  },
  openGraph: {
    type: "website",
    url: "https://www.evoxcel.com/",
    title: "Targeted Lead Generation Services | EvoXcel",
    description:
      "Evoxcel offers customized IT staffing solutions, from flexible staffing to expert project management, helping businesses achieve scalable and cost-effective results.",
    site_name: "EvoXcel",
    locale: "en_US",
    images: [
      {
        url: "https://www.evoxcel.com/images/e_logo.png",
        width: 1200,
        height: 630,
        alt: "EvoXcel",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Targeted Lead Generation Services | EvoXcel",
    description:
      "Evoxcel offers customized IT staffing solutions, from flexible staffing to expert project management, helping businesses achieve scalable and cost-effective results.",
    site: "@yourTwitterHandle",
    creator: "@yourTwitterHandle",
    images: [
      {
        url: "https://www.evoxcel.com/images/e_logo.png",
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
const LeadGeneration = () => {
  return (
    <>
      <section className="w-[100%]  bgwebdev px-[8vw]  pt-[7vh] md:pt-[14vh] pb-[10vh] items-center justify-between md:flex">
        <div data-aos="fade-up" className="md:w-[50%] text-white my-14 lg:my-0">
          <h1 className="capitalize headingfont text-[2rem]  leading-tight lg:text-[3vw] font-semibold pt-[6vh] text-[#03449a] bg-clip-text bg-gradient-to-r from-slate-400,text-[#03449a]">
            Unlock Your Business Potential with Advanced Lead Generation
            Solutions
          </h1>
          <p className="mt-4 mb-10 max-w-lg pfont leading-relaxed text-[4vw] md:text-[1.2vw] text-justify text-black">
            At EvoXcel, our lead generation services are meticulously designed
            to attract and engage the right prospects for your business. By
            employing a data-driven approach, we ensure that your sales team is
            equipped with high-quality leads that are primed for conversion into
            valuable customers.
          </p>
        </div>
        <figure className="md:w-[50%] flex justify-center">
          <Image
            src="/images/lead-generation/lead-generation.webp"
            width="300"
            height={300}
            alt="Advanced Lead Generation Solutions"
            className="md:w-[70%]"
          />
        </figure>
      </section>
      <section className="w-[100%] ">
        <div
          className="flex justify-center items-center bg-[#f9fafb]"
          // style={{ backgroundColor: "#f5f5f5a8" }}
        >
          <div className="text-black  px-[6vw] flex flex-col items-center justify-center md:mb-[1vh] ">
            <div className="w-[100%] p-0 grid grid-cols-1 lg:grid-cols-2">
              <div className="  text-black">
                <h2 className="text-[1.6rem] lg:text-[2.3rem] headingfont font-semibold">
                  Market Research and Audience Targeting
                </h2>
                <p className="text-black pfont text-[1rem] md:text-[1vw] py-2">
                  Understanding your target market is crucial for generating
                  quality leads. We conduct comprehensive market research to
                  identify key demographics, behaviors, and trends within your
                  industry. This enables us to create targeted lead generation
                  campaigns that resonate with the right audience.
                </p>
                <p className="text-black text-[1.1rem] py-2 px-4">
                  <ul className="list-disc headingfont">
                    <li>
                      <span className="font-bold headingfont">
                        Detailed Market Analysis:
                      </span>
                      Assessing market size, competition, and potential for
                      optimal strategy development
                    </li>
                    <li>
                      <span className="font-bold">
                        Precision Audience Segmentation:{" "}
                      </span>
                      : Identifying key segments based on demographics,
                      psychographics, and behaviors to maximize lead quality.{" "}
                    </li>
                  </ul>
                </p>
              </div>
              <div className=" relative">
                {/* <span className="absolute bg-[#E2E8F0] rounded-tl-[50px] rounded-br-[50px] lg:h-[10rem] lg:w-[25rem] h-[5rem] w-[15rem] bottom-0 right-0"></span> */}
                <div className="flex items-center justify-center w-[100%] h-[100%]">
                  <Image
                    src="/images/lead-generation/lead-generation_Market-Research.webp"
                    width={300}
                    height={300}
                    className="w-[60%]"
                    alt="Market Research and Audience Targeting"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex justify-center items-center  px-[3vw]"
          style={{ backgroundColor: "#f9fafb" }}
        >
          <div className="text-white p-0 flex flex-col bg-[#f9fafb] items-center justify-center">
            <div className="w-full grid grid-cols-1  lg:grid-cols-2 p-0">
              <div className="p-4 md:p-12 relative">
                {/* <span className="absolute bg-[#E2E8F0] rounded-tl-[50px] rounded-br-[50px] lg:h-[10rem] lg:w-[25rem] h-[5rem] w-[15rem] bottom-0 right-0"></span> */}
                <div className=" w-full h-full flex items-center justify-center">
                  <Image
                    src="/images/lead-generation/lead-generation_Multi-Channel-Lead-Capture.webp"
                    width={300}
                    height={300}
                    className="w-[70%]"
                    alt="Multi-Channel Lead Capture"
                  />
                </div>
              </div>
              <div data-aos="fade-right" className="md:p-12 text-white">
                <h2 className="text-[1.6rem] text-black lg:text-[2.3rem] headingfont py-4 font-semibold">
                  Multi-Channel Lead Capture
                </h2>
                <p className="text-black pfont text-[1rem] md:text-[1rem] py-2">
                  We implement a multi-channel approach to capture leads from
                  various sources, ensuring broad and effective outreach. Our
                  strategies include:
                </p>
                <p className="text-black text-[1.1rem] py-2 px-4 headingfont">
                  <ul className="list-disc">
                    <li>
                      <span className="font-semibold">
                        Social Media Marketing:{" "}
                      </span>
                      Leveraging platforms like Facebook, LinkedIn, and
                      Instagram to attract and engage potential leads.
                    </li>
                    <li>
                      <span className="font-semibold">
                        {" "}
                        Content Marketing:{" "}
                      </span>
                      Creating valuable content that draws in prospects and
                      establishes your brand as an industry leader.
                    </li>
                    <li>
                      <span className="font-semibold"> Email Marketing: </span>
                      Creating engaging email campaigns that increase
                      conversions and engagement.
                    </li>
                    <li>
                      <span className="font-semibold">
                        {" "}
                        SEO and PPC Strategies{" "}
                      </span>
                      : Optimizing your online presence through search engine
                      optimization (SEO) and utilizing pay-per-click (PPC)
                      advertising to capture high-intent leads.{" "}
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-right"
          className="flex justify-center items-center px-[3vw] bg-[#f9fafb]"
        >
          <div className="text-black flex flex-col items-center justify-center">
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 p-0">
              <div className="md:p-12 text-black">
                {/* <div className="text-center p-2 bg-[#94e3bd] text-white w-32 rounded-tl-[10px] rounded-br-[10px] overflow-hidden">
                  OUR VALUES
                </div> */}
                <h2 className="text-[1.6rem] lg:text-[2.3rem] py-4 font-semibold headingfont">
                  Lead Qualification and Scoring
                </h2>
                <p className="text-black text-[1rem] pfont md:text-[1.1rem] py-2">
                  Not all leads are ready to convert immediately. We employ
                  advanced lead scoring techniques to evaluate and prioritize
                  leads based on their readiness to purchase and fit for your
                  business.
                </p>
                <p className="text-black text-[1.1rem] py-2 px-4">
                  <ul className="list-disc">
                    <li>
                      <span className="font-bold">
                        Smart Lead Scoring Models:{" "}
                      </span>
                      Implementing criteria-based scoring to rank leads
                      according to their potential value.
                    </li>
                    <li>
                      <span className="font-bold">
                        Behavioral Insight Tracking:{" "}
                      </span>{" "}
                      Monitoring lead interactions to gauge interest and intent,
                      ensuring targeted follow-ups.
                    </li>
                  </ul>
                </p>
              </div>
              <div className=" hidden md:flex justify-center items-center">
                {/* <span className="absolute bg-[#E2E8F0] rounded-tl-[50px] rounded-br-[50px] lg:h-[10rem] lg:w-[25rem] h-[5rem] w-[15rem] bottom-0 right-0"></span> */}
                <Image
                  src="/images/lead-generation/lead-generation_Lead-Qualification.webp"
                  width={300}
                  height={300}
                  className="w-[60%]"
                  alt="Lead Qualification and Scoring"
                />
                {/* <div className="rounded-tr-[100px]  rounded-bl-[100px] overflow-hidden min-h-[20rem] w-full h-full bg-center bg-cover"></div> */}
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex justify-center items-center px-[3vw]"
          style={{ backgroundColor: "#f9fafb" }}
        >
          <div className="text-white flex flex-col items-center justify-center">
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 p-0">
              <div className="p-4 md:p-12 relative">
                {/* <span className="absolute bg-[#E2E8F0] rounded-tl-[50px] rounded-br-[50px] lg:h-[10rem] lg:w-[25rem] h-[5rem] w-[15rem] bottom-0 right-0"></span> */}
                <div className=" w-full h-full flex items-center justify-center">
                  <Image
                    src="/images/lead-generation/lead-generation_Lead-Nurturing-Engagement.webp"
                    width={300}
                    height={300}
                    className="w-[60%]"
                    alt="Lead Nurturing and Engagement"
                  />
                </div>
              </div>
              <div data-aos="fade-right" className="md:p-12 text-white">
                {/* <div className="text-center p-2 bg-white text-[#94e3bd] w-32 rounded-tl-[10px] rounded-br-[10px] overflow-hidden">
                  OUR VALUES
                </div> */}
                <h2 className="text-[1.6rem] headingfont text-black lg:text-[2.3rem] py-4 font-semibold">
                  Lead Nurturing and Engagement
                </h2>
                <p className="text-black pfont text-[1rem] md:text-[1.1rem] py-2">
                  Building strong relationships with prospects is key to
                  converting leads into loyal customers. Our lead nurturing
                  strategies ensure ongoing engagement through personalized
                  communication and relevant content
                </p>
                <p className="text-black text-[1.1rem] font py-2 px-4">
                  <ul className="list-disc">
                    <li>
                      <span className="font-bold">
                        Tailored Email Campaigns:
                      </span>
                      Sending personalized messages that address the specific
                      needs and interests of each lead.
                    </li>
                    <li>
                      <span className="font-bold">
                        Strategic Retargeting Campaigns:{" "}
                      </span>
                      Use strategic retargeting campaigns to ensure that
                      prospects who have expressed interest remember your brand.
                    </li>
                    <li>
                      <span className="font-bold">
                        Dynamic Content Delivery:
                      </span>
                      Offering timely and relevant content to guide leads
                      through the sales funnel.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#003C71] lg:h-auto pt-[10vh] pb-[12vh]">
        <h2
          data-aos="fade-down"
          className="text-[10vw] md:text-[3vw] headingfont text-white font-semibold text-center pb-7"
        >
          Our Process
        </h2>
        <ul className="process">
          <li data-aos="fade-right" className="process__item headingfont">
            <span className="process__number text-[15vw] md:text-[5vw]">1</span>
            <span className="process__title text-[1.7rem] h-[6rem] block font-bold tracking-wider text-white uppercase mt-3">
              High-Quality Leads
            </span>
            <span className="process__subtitle">
              : Our targeted approach ensures that you receive leads that are
              more likely to convert into paying customers.
            </span>
          </li>

          <li data-aos="fade-right" className="process__item">
            <span className=" process__number text-[15vw] md:text-[5vw]">
              2
            </span>
            <span className="process__title text-[1.7rem] h-[6rem] block font-bold tracking-wider text-white uppercase mt-3 ">
              Increased Sales Efficiency
            </span>
            <span className="process__subtitle">
              By focusing on qualified leads, your sales team can operate more
              efficiently and close deals faster.
            </span>
          </li>

          <li data-aos="fade-right" className="process__item">
            <span className="process__number text-[15vw] md:text-[5vw]">3</span>
            <span className="process__title text-[1.7rem] h-[6rem] block font-bold tracking-wider text-white uppercase mt-3">
              Cost-Effective Solutions
            </span>
            <span className="process__subtitle">
              Our lead generation strategies are designed to maximize ROI while
              minimizing cost per lead.
            </span>
          </li>

          <li data-aos="fade-right" className="process__item">
            <span className="process__number text-[15vw] md:text-[5vw]">4</span>
            <span className="process__title text-[1.7rem] h-[6rem] block font-bold tracking-wider text-white uppercase mt-3 ">
              Scalability
            </span>
            <span className="process__subtitle">
              Whether you&lsquo;re a startup or a large enterprise, our
              solutions are scalable to meet your evolving business needs.
            </span>
          </li>
        </ul>
      </section>
    </>
  );
};

export default LeadGeneration;
