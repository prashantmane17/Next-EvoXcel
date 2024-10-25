import React from "react";
import "./pricing.css";
import Link from "next/link";
export const metadata = {
  title:
    "Flexible Pricing for Lead Generation, Web, Software Development | EvoXcel",
  description:
    "Explore EvoXcel’s transparent pricing for lead generation, LinkedIn automation, web, app, and software development. Tailored packages designed to fit your budget and goals.",
  alternates: {
    canonical: "https://www.evoxcel.com/pricing",
  },
  openGraph: {
    type: "website",
    url: "https://www.evoxcel.com/",
    title:
      "Flexible Pricing for Lead Generation, Web, Software Development | EvoXcel",
    description:
      "Evoxcel offers customized IT staffing solutions, from flexible staffing to expert project management, helping businesses achieve scalable and cost-effective results.",
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
    title:
      "Flexible Pricing for Lead Generation, Web, Software Development | EvoXcel",
    description:
      "Evoxcel offers customized IT staffing solutions, from flexible staffing to expert project management, helping businesses achieve scalable and cost-effective results.",
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
const Pricing = () => {
  return (
    <section className="bg-slate-100 pb-[10vh]">
      <section className="pt-[10vh] pb-[5vh]">
        <h1 className="text-3xl font-bold text-[#180B5B] headingfont text-center py-[5vh]">
          Web Service Pricing Plans
        </h1>
        <div className=" md:flex justify-center w-[100%] relative top-[10vh]  ">
          <div className="bg-white rounded-[30px] relative  p-6 md:w-[24%] border mb-[12vh] shadow-2xl">
            <h3 className="text-2xl font-semibold mb-1 px-[3vw] headingfont">
              Basic Plan
            </h3>
            <p className="text-gray-600 mb-4 px-[3vw] headingfont">
              Starter Website
            </p>
            <hr className="py-[1vh] w-[70%] m-auto" />
            <ul className=" px-[3vw] ">
              <li className="flex items-start py-2 pfont">
                <i className="fa-solid mr-3 text-white bg-[#180B5B] rounded-full p-1 text-[0.5vw] fa-check"></i>
                <div className="flex items-start">
                  3-Page Website (Home, About, Contact)
                </div>{" "}
              </li>
              <li className="flex items-start py-2 pfont">
                <i className="fa-solid mr-3 text-white bg-[#180B5B] rounded-full p-1 text-[0.5vw] fa-check"></i>
                <div className="flex items-start">Responsive Design</div>{" "}
              </li>
              <li className="flex items-start py-2 pfont">
                <i className="fa-solid mr-3 text-white bg-[#180B5B] rounded-full p-1 text-[0.5vw] fa-check"></i>
                <div className="flex items-start">Basic SEO Setup</div>{" "}
              </li>
              <li className="flex items-start py-2 pfont">
                <i className="fa-solid mr-3 text-white bg-[#180B5B] rounded-full p-1 text-[0.5vw] fa-check"></i>
                <div className="flex items-start">Contact Form Integration</div>{" "}
              </li>
              <li className="flex items-start py-2 pfont">
                <i className="fa-solid mr-3 text-white bg-[#180B5B] rounded-full p-1 text-[0.5vw] fa-check"></i>
                <div className="flex items-start">1 Round of Revisions</div>{" "}
              </li>
              <li className="flex items-start py-2 pfont">
                <i className="fa-solid mr-3 text-white bg-[#180B5B] rounded-full p-1 text-[0.5vw] fa-check"></i>
                <div className="flex items-start">7 Days Turnaround Time</div>{" "}
              </li>
            </ul>
            <div className="mt-6 text-center ">
              <p className="text-3xl font-bold headingfont">
                $199
                <sub className="font-normal text-[0.9vw]">(one time fee)</sub>
              </p>
              <button className="bg-gray-200 hover:bg-purple-600 hover:text-white text-purple-600 font-bold py-[2vh] px-[4vw] mb-4 rounded mt-4">
                <Link href="/sign-in">Choose Plan</Link>
              </button>
            </div>
          </div>
          <div className="bg-[#180B5B] relative bottom-[10vh]  rounded-[30px] border-2 text-white  p-6 md:w-[24%]">
            <h3 className="text-2xl font-semibold mb-1 px-[3vw] headingfont">
              Standard Plan
            </h3>
            <p className="text-gray-200 mb-4 px-[3vw] headingfont">
              Business Website
            </p>
            <hr className="py-[1vh] w-[70%] m-auto" />
            <ul className=" px-[3vw]">
              <li className="flex items-start py-2 pfont">
                <i className="fa-solid mr-3 bg-white text-[#180B5B] rounded-full p-1 text-[0.5vw] fa-check"></i>
                <div className="flex items-start">
                  5-Page Website (Home, About, Services, Portfolio/Gallery,
                  Contact)
                </div>
              </li>
              <li className="flex items-start py-2 pfont">
                <i className="fa-solid mr-3 bg-white text-[#180B5B] rounded-full p-1 text-[0.5vw] fa-check"></i>
                <div className="flex items-start">Responsive Design</div>
              </li>
              <li className="flex items-start py-2 pfont">
                <i className="fa-solid mr-3 bg-white text-[#180B5B] rounded-full p-1 text-[0.5vw] fa-check"></i>
                <div className="flex items-start">On-Page SEO Optimization</div>
              </li>
              <li className="flex items-start py-2 pfont">
                <i className="fa-solid mr-3 bg-white text-[#180B5B] rounded-full p-1 text-[0.5vw] fa-check"></i>
                <div className="flex items-start">
                  Contact Form & Newsletter Integration
                </div>{" "}
              </li>
              <li className="flex items-start py-2 pfont">
                <i className="fa-solid mr-3 bg-white text-[#180B5B] rounded-full p-1 text-[0.5vw] fa-check"></i>
                <div className="">Social Media Links Integration</div>
              </li>
              <li className="flex items-start py-2 pfont">
                <i className="fa-solid mr-3 bg-white text-[#180B5B] rounded-full p-1 text-[0.5vw] fa-check"></i>
                <div className="flex items-start">14 Days Turnaround Time</div>
              </li>
            </ul>
            <div className="mt-10 text-center">
              <p className="text-3xl font-bold headingfont">
                $399{" "}
                <sub className="font-normal text-[0.9vw]">(one time fee)</sub>
              </p>
              <button className="hover:bg-gray-200 bg-purple-600 text-white hover:text-purple-600 font-bold py-[2vh] px-[4vw] mb-4 rounded mt-4">
                <Link href="/sign-in">Choose Plan</Link>
              </button>
            </div>
          </div>
          <div className="bg-white  relative rounded-[30px]  p-6  md:w-[24%] border mb-[12vh] shadow-2xl">
            <h3 className="text-2xl headingfont font-semibold mb-1  px-[3vw]">
              Premium Plan
            </h3>
            <p className="text-gray-600 mb-4 headingfont px-[3vw]">
              E-commerce Website
            </p>
            <hr className="py-[1vh] w-[70%] m-auto" />
            <ul className=" px-[3vw]">
              <li className="flex items-start py-2 pfont">
                <i className="fa-solid mr-3 text-white bg-[#180B5B] rounded-full p-1 text-[0.5vw] fa-check"></i>
                <div className="flex items-start">Up to 15 Product Pages</div>
              </li>
              <li className="flex items-start py-2 pfont">
                <i className="fa-solid mr-3 text-white bg-[#180B5B] rounded-full p-1 text-[0.5vw] fa-check"></i>
                <div className="flex items-start">Responsive Design</div>
              </li>
              <li className="flex items-start py-2 pfont">
                <i className="fa-solid mr-3 text-white bg-[#180B5B] rounded-full p-1 text-[0.5vw] fa-check"></i>
                <div className="flex items-start">Complete SEO Setup</div>
              </li>
              <li className="flex items-start py-2 pfont">
                <i className="fa-solid mr-3 text-white bg-[#180B5B] rounded-full p-1 text-[0.5vw] fa-check"></i>
                <div className="flex items-start">
                  Shopping Cart & Payment Gateway Integration
                </div>{" "}
              </li>
              <li className="flex items-start py-2 pfont">
                <i className="fa-solid mr-3 text-white bg-[#180B5B] rounded-full p-1 text-[0.5vw] fa-check"></i>
                <div className="flex items-start">
                  Product Showcase & Categories
                </div>{" "}
              </li>
              <li className="flex items-start py-2 pfont">
                <i className="fa-solid mr-3 text-white bg-[#180B5B] rounded-full p-1 text-[0.5vw] fa-check"></i>
                <div className="flex items-start">Hosting & Maintenance</div>
              </li>
            </ul>
            <div className="mt-6 text-center">
              <button className="bg-gray-200 hover:bg-purple-600 hover:text-white text-purple-600 font-bold py-[2vh] px-[4vw] mb-4 rounded mt-4">
                <Link href="/contact-us">Contact Sales</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-[5vh] ">
        <h2 className="text-3xl font-bold text-[#180B5B] headingfont text-center py-[5vh]">
          LinkedIn Automation Pricing Plans
        </h2>
        <div className=" md:flex justify-center w-[100%] relative top-[10vh] ">
          <div className="bg-white rounded-[30px] relative  p-6 md:w-[24%] shadow-2xl border mb-[12vh]">
            <h3 className="text-2xl font-semibold mb-1 px-[3vw] headingfont">
              Beginner&lsquo;s Package
            </h3>
            <hr className="py-[1vh] w-[70%] m-auto" />
            <ul className=" px-[3vw] ">
              <li className="flex items-start py-2 pfont">
                <i className="fa-solid mr-3 text-white bg-[#180B5B] rounded-full p-1 text-[0.5vw] fa-check"></i>
                <div className="flex items-start">All features included</div>
              </li>
            </ul>
            <div className="mt-6 text-center">
              <p className="text-3xl font-bold headingfont">
                $59<sub className="font-normal text-[0.9vw]">/ Month</sub>
              </p>
              <button className="bg-gray-200 hover:bg-purple-600 hover:text-white text-purple-600 font-bold py-[2vh] px-[4vw] mb-4 rounded mt-4">
                <Link href="/sign-in">Choose Plan</Link>
              </button>
            </div>
          </div>
          <div className="bg-[#180B5B] relative bottom-[10vh]  rounded-[30px] border-2 text-white  p-6 md:w-[24%]">
            <h3 className="text-2xl font-semibold mb-1 px-[3vw] headingfont">
              Complete Care Package
            </h3>
            <hr className="py-[1vh] w-[70%] m-auto" />
            <ul className=" px-[3vw]">
              <li className="flex items-start py-2 pfont">
                <i className="fa-solid mr-3 bg-white text-[#180B5B] rounded-full p-1 text-[0.5vw] fa-check"></i>
                <div className="flex items-start">
                  All features included&lsquo;, &lsquo;Access to experts to set
                  up pitch and Target audience
                </div>
              </li>
            </ul>
            <div className="mt-10 text-center">
              <p className="text-3xl font-bold headingfont">
                $89<sub className="font-normal text-[0.9vw]">/Month </sub>
              </p>
              <button className="hover:bg-gray-200 bg-purple-600 text-white hover:text-purple-600 font-bold py-[2vh] px-[4vw] mb-4 rounded mt-4">
                <Link href="/sign-in">Choose Plan</Link>
              </button>
            </div>
          </div>
          <div className="bg-white  relative rounded-[30px]  p-6  md:w-[26%] shadow-2xl border mb-[12vh]">
            <h3 className="text-2xl headingfont font-semibold mb-1  px-[3vw]">
              Agency / Bulk Users
            </h3>
            <hr className="py-[1vh] w-[70%] m-auto" />
            <ul className=" px-[3vw]">
              <li className="flex items-start py-2 pfont">
                <i className="fa-solid mr-3 text-white bg-[#180B5B] rounded-full p-1 text-[0.5vw] fa-check"></i>
                <div className="flex items-start">
                  Access to multiple accounts, and customized features
                </div>
              </li>
            </ul>
            <div className="mt-6 text-center">
              <p className="text-2xl font-bold headingfont">Custom Pricing</p>
              <button className="bg-gray-200 hover:bg-purple-600 hover:text-white text-purple-600 font-bold py-[2vh] px-[4vw] mb-4 rounded mt-4">
                <Link href="/sign-in">Contact Sales</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div
        className="md:w-[50%] m-auto p-5 pb-[5vh] shadow-2xl border bg-white
             rounded-2xl"
      >
        <h3 className="text-2xl headingfont font-semibold text-center mb-[5vh]">
          All Features
        </h3>
        <ul className="list-disc text-center md:flex justify-between">
          <div>
            <li className="flex items-start py-2 pfont">
              <i className="fa-solid mr-3 text-white bg-[#180B5B] rounded-full p-1 text-[0.5vw] fa-check"></i>
              <div className="flex items-start">
                Unique IP Address and desktop
              </div>
            </li>
            <li className="flex items-start py-2 pfont">
              <i className="fa-solid mr-3 text-white bg-[#180B5B] rounded-full p-1 text-[0.5vw] fa-check"></i>
              <div className="flex items-start">
                Smart AI based reply management
              </div>
            </li>
            <li className="flex items-start py-2 pfont">
              <i className="fa-solid mr-3 text-white bg-[#180B5B] rounded-full p-1 text-[0.5vw] fa-check"></i>
              <div className="flex items-start">
                Drip campaigns for new invites
              </div>
            </li>
            <li className="flex items-start py-2 pfont">
              <i className="fa-solid mr-3 text-white bg-[#180B5B] rounded-full p-1 text-[0.5vw] fa-check"></i>
              <div className="flex items-start">
                Integration with 3rd party apps
              </div>
            </li>
            <li className="flex items-start py-2 pfont">
              <i className="fa-solid mr-3 text-white bg-[#180B5B] rounded-full p-1 text-[0.5vw] fa-check"></i>
              <div className="flex items-start">
                Drip campaigns for 1st degree leads
              </div>
            </li>
            <li className="flex items-start py-2 pfont">
              <i className="fa-solid mr-3 text-white bg-[#180B5B] rounded-full p-1 text-[0.5vw] fa-check"></i>
              <div className="flex items-start">
                Get campaign performance emails
              </div>
            </li>
          </div>
          <div>
            <li className="flex items-start py-2 pfont">
              <i className="fa-solid mr-3 text-white bg-[#180B5B] rounded-full p-1 text-[0.5vw] fa-check"></i>
              <div className="flex items-start">
                View/Analyze Prospect profile
              </div>
            </li>
            <li className="flex items-start py-2 pfont">
              <i className="fa-solid mr-3 text-white bg-[#180B5B] rounded-full p-1 text-[0.5vw] fa-check"></i>
              <div className="flex items-start">
                Download all data in CSV format
              </div>
            </li>
            <li className="flex items-start py-2 pfont">
              <i className="fa-solid mr-3 text-white bg-[#180B5B] rounded-full p-1 text-[0.5vw] fa-check"></i>
              <div className="flex items-start">Message to Linkedin groups</div>
            </li>
            <li className="flex items-start py-2 pfont">
              <i className="fa-solid mr-3 text-white bg-[#180B5B] rounded-full p-1 text-[0.5vw] fa-check"></i>
              <div className="flex items-start">
                Send personalized images & gifs
              </div>
            </li>
            <li className="flex items-start py-2 pfont">
              <i className="fa-solid mr-3 text-white bg-[#180B5B] rounded-full p-1 text-[0.5vw] fa-check"></i>
              <div className="flex items-start">
                Easily track and manage campaigns
              </div>
            </li>
            <li className="flex items-start py-2 pfont">
              <i className="fa-solid mr-3 text-white bg-[#180B5B] rounded-full p-1 text-[0.5vw] fa-check"></i>
              <div className="flex items-start">
                Setup own tags to segregate leads
              </div>
            </li>
          </div>
        </ul>
      </div>
    </section>
  );
};

export default Pricing;
