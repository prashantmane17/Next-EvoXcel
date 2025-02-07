import React from "react";
import "./emailAutomation.css";
import Image from "next/image";
import Head from "next/head";
import { ArrowRight, ChartBar, Check, Clock, Target, Zap } from "lucide-react";

export const metadata = {
  title: "Email Automation Services | EvoXcel",
  description:
    "Boost engagement with EvoXcel’s email automation services. From personalized campaigns to automated workflows, we help you optimize conversions and improve your email marketing ROI.",
  alternates: {
    canonical: "https://www.evoxcel.com/email-automation/",
  },
  siteName: "EvoXcel",
  openGraph: {
    type: "website",
    url: "https://www.evoxcel.com/email-automation/",
    title: "Streamline Your Email Campaigns with EvoXcel",
    description:
      "Boost engagement and conversion with EvoXcel’s personalized email automation services, delivering targeted content to your audience",
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

const ValueItem = ({ title, description }) => (
  <div className="flex items-start space-x-3 mb-6">
    <div className="flex-shrink-0">
      <Check className="h-6 w-6 text-blue-400" />
    </div>
    <div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  </div>
)
const EmailAutomation = () => {
  const benefits = [
    {
      title: "Streamlined Campaigns",
      description: "Revolutionize your email communication with efficient campaign management",
      icon: Zap,
    },
    {
      title: "Personalized Outreach",
      description: "Increase conversions with tailored campaigns that resonate with your audience",
      icon: Target,
    },
    {
      title: "Time-Saving Automation",
      description: "Maintain consistent outreach with automated email sequences",
      icon: Clock,
    },
    {
      title: "Data-Driven Decisions",
      description: "Make informed choices with detailed performance tracking and reporting",
      icon: ChartBar,
    },
  ]
  return (
    <>
      {/* Hero Section */}
      <section className="w-[100%]   px-[8vw]  pt-[7vh] md:pt-[14vh] pb-[10vh] items-center justify-between md:flex">
        <div className="md:w-[50%] text-white my-14 lg:my-0">
          <h1 className="capitalize headingfont text-[2rem]  leading-tight lg:text-[3vw] font-bold pt-[7.5vh] text-white bg-clip-text bg-gradient-to-r from-slate-400,text-[#03449a]">
            Revolutionize Your Communication with Our Email Automation Tool
          </h1>
          <p className="mt-4 mb-10 max-w-lg pfont leading-relaxed text-[4vw] md:text-[1.2vw] text-justify text-white">
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
      <section className=" pb-13  max-w-6xl px-4 mx-auto">
        <h2 className="text-3xl text-center  md:text-4xl font-semibold text-[#718BFF] mb-4">
          Comprehensive Features of Our Email Automation Service
        </h2>
        <p className="text-lg text-center  text-white">
          Our cutting-edge solution offers a range of feature-specific
          capabilities that elevate your email marketing efforts:
        </p>

        <div class="mb-16 grid gap-8 p-8 md:grid-cols-2">
          <div

            className="relative group flex p-8 mt-[7vh] md:mt-0  flex-col rounded-xl bg-gradient-to-br from-slate-600 to-stone-600 border-purple-500 text-white"
          >
            <div className=" transition-all duration-700 group-hover:scale-105 group-hover:opacity-100 relative mx-auto h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
              <Image
                width={300}
                height={300}
                src="/images/email-automation/email-automation_Email-Campaigns.webp"
                alt="Personalized Email Campaigns"
                className=""
              />
            </div>
            <div className="p-6">
              <h3 className="text-[#ffffff] mb-4 mt-6 text-lg font-bold md:text-2xl ">
                Personalized Email Campaigns
              </h3>
              <p className="block  text-base  leading-relaxed text-inherit antialiased">
                Create customized emails based on user behavior and preferences
                to drive increased email engagement and higher conversion rates.
              </p>
            </div>
          </div>
          <div

            className="relative group flex p-8 mt-[7vh] md:mt-0  flex-col rounded-xl bg-gradient-to-br from-slate-600 to-stone-600 border-purple-500 text-white"
          >
            <div className=" transition-all duration-700 group-hover:scale-105 group-hover:opacity-100 relative mx-auto h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
              <Image
                width={300}
                height={300}
                src="/images/email-automation/email-automation_Email-Workflows.webp"
                alt="Automated Email Workflows"
              />
            </div>
            <div className="p-6">
              <h3 className="text-[#ffffff] mb-4 mt-6 text-lg font-bold md:text-2xl ">
                Automated Email Workflows
              </h3>
              <p className="block  text-base  leading-relaxed text-inherit antialiased">
                Simplify the process with email workflow automation triggered by
                specific actions to save time and enhance communication.
              </p>
            </div>
          </div>
          <div
            className="relative group flex p-8 mt-[7vh] md:mt-0  flex-col rounded-xl bg-gradient-to-br from-slate-600 to-stone-600 border-purple-500 text-white"
          >
            <div className=" transition-all duration-700 group-hover:scale-105 group-hover:opacity-100 relative mx-auto h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
              <Image
                width={300}
                height={300}
                src="/images/email-automation/email-automation_Analytics-Reporting.webp"
                alt="In-Depth Analytics and Reporting"
              />
            </div>
            <div className="p-6">
              <h3 className="text-[#ffffff] mb-4 mt-6 text-lg font-bold md:text-2xl ">
                Email Analytics and Reporting
              </h3>
              <p className="block  text-base  leading-relaxed text-inherit antialiased">
                Leverage in-depth email analytics to gain valuable insights and
                optimize your marketing strategies.
              </p>
            </div>
          </div>
          <div
            className="relative group flex p-8 mt-[7vh] md:mt-0  flex-col rounded-xl bg-gradient-to-br from-slate-600 to-stone-600 border-purple-500 text-white"
          >
            <div className=" transition-all duration-700 group-hover:scale-105 group-hover:opacity-100 relative mx-auto h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
              <Image
                width={300}
                height={300}
                src="/images/email-automation/email-automation_Seamless-Integration.webp"
                alt="Seamless Integration"
                className=""
              />
            </div>
            <div className="p-6">
              <h3 className="text-[#ffffff] mb-4 mt-6 text-lg font-bold md:text-2xl ">
                CRM Integration for Email
              </h3>
              <p className="block  text-base  leading-relaxed text-inherit antialiased">
                Enjoy seamless integration with your existing CRM systems for a
                unified, efficient workflow.
              </p>
            </div>
          </div>
        </div>

      </section>

      {/* Benefits Section */}
      <section className="bg-gradient-to-br from-gray-900 to-black py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Advantages of Our Email Automation</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Unlock the power of efficient email marketing with our cutting-edge automation service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg p-6 shadow-lg transition-all duration-300 hover:shadow-2xl hover:bg-gray-750"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <benefit.icon className="h-8 w-8 text-blue-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="mt-12 text-center">
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-150 ease-in-out"
            >
              Get Started
              <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
            </a>
          </div> */}
        </div>
      </section>
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div >
              <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-8">Our Values</h2>
              <ValueItem
                title="Innovation"
                description="We continually evolve our email personalization technology to stay ahead of industry trends."
              />
              <ValueItem
                title="Customer Success"
                description="We prioritize customer-centric email automation to ensure your business thrives."
              />
              <ValueItem
                title="Integrity"
                description="Guided by honest business practices, we provide cutting-edge email technology to help you succeed."
              />
            </div>
            <div className="flex justify-center md:justify-end">
              <Image
                className="rounded-lg shadow-2xl"
                width={400}
                height={400}
                src="/images/email-automation/email-automation_Our-Values.webp"
                alt="Our Values in Email Automation"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center md:justify-start order-2 md:order-1">
              <Image
                className="rounded-lg shadow-2xl"
                width={400}
                height={400}
                src="/images/email-automation/email-automation_Email-Automation-Tool.webp"
                alt="Email Automation Tool Features"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-8">Why Choose Our Email Automation Tool?</h2>
              <ValueItem
                title="Streamlined Automation"
                description="Automate and manage your B2B email automation or e-commerce email marketing efficiently."
              />
              <ValueItem
                title="Smart Segmentation"
                description="Use email list segmentation to target specific audience groups for maximum effectiveness."
              />
              <ValueItem
                title="Seamless Integration"
                description="Integrate smoothly with your CRM for a cohesive, efficient workflow."
              />
              <ValueItem
                title="Advanced Analytics"
                description="Access data-driven email insights that help you continuously improve your strategy and results."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EmailAutomation;
