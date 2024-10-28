import React from "react";
import "../globals.css";
import Image from "next/image";
export const metadata = {
  title: "LinkedIn Automation Solutions | EvoXcel",
  description:
    "Automate your LinkedIn outreach with EvoXcel’s LinkedIn automation tool. Expand your network, generate leads, and grow your business effortlessly with our advanced solutions.",
  alternates: {
    canonical: "https://www.evoxcel.com/linkedin-automation/",
  },
  siteName: "EvoXcel",
  openGraph: {
    type: "website",
    url: "https://www.evoxcel.com/linkedin-automation/",
    title: "Automate Your LinkedIn Growth with EvoXcel",
    description:
      "Optimize your LinkedIn outreach and lead generation with EvoXcel’s automation tool, designed for seamless business networking",
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
    title: "Automate Your LinkedIn Growth with EvoXcel",
    description:
      "Optimize your LinkedIn outreach and lead generation with EvoXcel’s automation tool, designed for seamless business networking",
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
const LinkedInAutomation = () => {
  return (
    <>
      <section className="w-[100%]  bgwebdev px-[8vw]  pt-[7vh] md:pt-[14vh] pb-[10vh] items-center justify-between md:flex">
        <div data-aos="fade-up" className="md:w-[50%] text-white my-14 lg:my-0">
          <h1 className="capitalize headingfont text-[2rem]  leading-tight lg:text-[3vw] font-bold pt-[6vh] text-[#03449a] bg-clip-text bg-gradient-to-r from-slate-400,text-[#03449a]">
            Revolutionize Your Networking with LinkedIn Automation Solutions
          </h1>
          <p className="mt-4 pfont mb-10 max-w-lg leading-relaxed text-[4vw] md:text-[1.2vw] text-justify text-black">
            Leverage EvoXcel&apos;s LinkedIn automation tool to fully unlock the
            potential of LinkedIn lead generation and professional networking
            automation. Our LinkedIn automation solutions are designed to
            streamline your LinkedIn activities, helping you expand your
            network, generate high-quality leads, and accelerate business growth
            through automated LinkedIn outreach.
          </p>
          {/* <a href="#" className="inline-block capitalize font-semibold bg-gradient-to-r from-purple-500 to-pink-800 rounded-full px-7 py-2 hover:from-purple-500 hover:to-gray-800">learn more</a> */}
        </div>
        <figure className="md:w-[50%] flex justify-center">
          <Image
            src="/images/linkedin-automation/linkedinhome.webp"
            width={300}
            height={300}
            alt="Santa Claus"
            className="md:w-[65%]"
          />
        </figure>
      </section>

      <section data-aos="fade-right" className="pt-16 pb-10">
        <div data-aos="fade-right" className="text-center">
          <h2 className="text-[7vw] md:text-[2vw] font-semibold text-[#718BFF] headingfont">
            Benefits of Using Our LinkedIn Automation Tool
          </h2>
          <p className="text-gray-700 pfont px-2 mt-4 md:text-[1.2vw]">
            Maximize your business success and networking efficiency with our
            time-saving LinkedIn automation:
          </p>
        </div>
        <div data-aos="fade-right" className=" mx-auto md:mt-[11vh]">
          <div className="grid grid-cols-1 md:px-12 md:grid-cols-2 gap-8">
            {[
              "Efficient LinkedIn Networking: Automate repetitive tasks, allowing you to focus on strategic networking",
              "Enhanced LinkedIn Personalization: Deliver customized messages that resonate with your audience, increasing engagement",
              "Increased LinkedIn Visibility: Maintain a consistent LinkedIn presence, boosting credibility and keeping you top-of-mind with your network",
              "Quality Lead Generation on LinkedIn: Connect with high-quality leads that convert into real business opportunities",
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

      <section className="md:flex justify-between flex-wrap w-[100%] px-[5vw] text-justify py-[4vh]">
        <figure className="md:w-[50%] flex justify-center" data-aos="fade-in">
          <Image
            src="/images/linkedin-automation/linked-in-why-chooseUs.webp"
            width={300}
            height={300}
            className="w-[57%]"
            alt="linked-in-why-chooseUs"
          />
        </figure>
        <article className="md:w-[50%] mt-[5vh] md:mt-0">
          <h3 className="text-[7vw] md:text-[2vw] font-bold text-[#718BFF] headingfont">
            Why Choose Our LinkedIn Automation Tool?
          </h3>
          <ul className="md:text-[1vw] mt-5 list-disc list-outside pl-4 ">
            <li className="mt-2 pfont">
              Revolutionize LinkedIn Networking: Simplify your LinkedIn
              processes, giving you more time to focus on meaningful connections
              and closing deals.
            </li>
            <li className="mt-2 pfont">
              Smart LinkedIn Targeting: Use advanced algorithms to target your
              ideal audience with precision, enhancing your outreach success.
            </li>
            <li className="mt-2 pfont">
              Seamless LinkedIn Workflow Integration: Effortlessly integrate our
              tool with your CRM system for improved efficiency.
            </li>
            <li className="mt-2 pfont">
              Data-Driven LinkedIn Insights: Gain valuable insights with
              LinkedIn performance metrics to improve your outreach approach.
            </li>
            <li className="mt-2 pfont">
              LinkedIn GDPR Compliance & Security: Ensure your data is secure
              with advanced LinkedIn data encryption and compliance with GDPR
              standards.
            </li>
            {/* <li className="mt-2 pfont">
              User-Friendly Interface: Take advantage of an interface that is
              simple to use and intuitive, requiring no technical knowledge and
              making it available to everybody.
            </li> */}
          </ul>
        </article>
      </section>
      <section className="w-[100%] px-[7vw]  py-[5vh] md:flex justify-between mt-4">
        <article className="md:w-[50%] flex flex-col justify-center items-start">
          <h3 className="md:text-[1.5vw] font-bold headingfont">
            Precision Prospect Targeting
          </h3>
          <h2 className="md:text-[16px] pfont font-sans mt-1">
            EvoXcel&apos;s LinkedIn prospect targeting tools allow you to
            pinpoint your ideal leads with precision:
          </h2>
          <div className="md:flex mt-[3vh] justify-between w-[100%]">
            <div className="text-justify md:w-[45%]">
              <i className="fa-solid fa-filter-circle-dollar px-[10px] py-[11px]  text-white bg-purple-300 rounded-full md:text-[1.3vw]"></i>
              <h3 className="md:text-[1.2vw] font-semibold pt-3 headingfont">
                Advanced LinkedIn Search Filters:
              </h3>
              <p className="md:text-[0.9vw] text-start pfont">
                Apply sophisticated filters on Sales Navigator to find the
                perfect set of leads
              </p>
            </div>
            <div className="text-justify md:w-[45%]">
              <i className="fa-solid fa-link px-[10px] py-[11px] text-white bg-purple-300 rounded-full md:text-[1.3vw]"></i>
              <h3 className="md:text-[1.2vw] font-semibold pt-2 headingfont">
                LinkedIn URL Upload:
              </h3>
              <p className="md:text-[0.9vw] text-start pfont">
                Upload CSV files with LinkedIn URLs to streamline your outreach
                to key individuals.
              </p>
            </div>
          </div>
          <div className="md:flex mt-[6vh] justify-between w-[100%]">
            <div className="text-justify md:w-[45%]">
              <i className="fa-regular fa-rectangle-list px-[10px] py-[11px] text-white bg-purple-300 rounded-full md:text-[1.3vw]"></i>
              <h3 className="md:text-[1.2vw] headingfont text-start font-semibold pt-2">
                Targeted LinkedIn Company Pages
              </h3>
              <p className="md:text-[0.9vw] text-start pfont">
                Directly connect with decision-makers by uploading lists of
                specific company pages.
              </p>
            </div>
            <div className="text-justify md:w-[45%]">
              <i className="fa-solid fa-users-viewfinder px-[10px] py-[11px] text-white bg-purple-300 rounded-full md:text-[1.3vw]"></i>
              <h3 className="md:text-[1.2vw] headingfont font-semibold pt-2">
                Domain Targeting:
              </h3>
              <p className="md:text-[0.9vw] text-start pfont">
                Access key stakeholders from targeted website domains for
                enhanced lead generation.
              </p>
            </div>
          </div>
        </article>
        <article className="md:w-[50%] hidden md:flex items-center justify-center ">
          <Image
            src="/images/linkedin-automation/Precision-Targeting_image.webp"
            width={300}
            height={300}
            className="w-[80%]"
            alt="Precision-Targeting_image"
          />
        </article>
      </section>
      <section className="w-[100%] px-[7vw]  py-[5vh] md:flex justify-between">
        <article className="md:w-[50%] hidden md:flex items-center justify-start">
          <Image
            src="/images/linkedin-automation/Manage-Campaigns_image.webp"
            width={300}
            height={300}
            className="w-[87%]"
            alt="Manage-Campaigns_image"
          />
        </article>
        <article className="md:w-[50%] flex flex-col justify-center items-start">
          <h3 className="md:text-[1.5vw] font-bold headingfont">
            Manage Drip Campaigns
          </h3>
          <h2 className="md:text-[1vw] font-sans mt-2 text-justify  ">
            Set up and monitor multiple LinkedIn drip campaigns designed to
            engage your prospects effectively:
          </h2>
          <div className="md:flex mt-[6vh] justify-between w-[100%]">
            <div className="text-justify md:w-[45%]">
              <i className="fa-solid fa-filter-circle-dollar px-[10px] py-[11px]  text-white bg-purple-300 rounded-full md:text-[1.3vw]"></i>
              <h3 className="md:text-[1.1vw] font-semibold headingfont pt-2">
                Connect Invites to 2nd/3rd Degree Connections:
              </h3>
              <p className="md:text-[0.9vw]">
                Create a drip campaign to send new connection invites, with the
                capability to send up to 800 invites per month from a single
                account.
              </p>
            </div>
            <div className="text-justify md:w-[45%]">
              <i className="fa-solid fa-link px-[10px] py-[11px] text-white bg-purple-300 rounded-full md:text-[1.3vw]"></i>
              <h3 className="md:text-[1.1vw] headingfont font-semibold pt-2">
                Group Members Targeting:
              </h3>
              <p className="md:text-[0.9vw]">
                Launch targeted outreach campaigns to specific Group members.
                Filter these members based on criteria such as Title, Location,
                Seniority, and more.
              </p>
            </div>
          </div>
          <div className="md:flex mt-[6vh] justify-between w-[100%]">
            <div className="text-justify md:w-[45%]">
              <i className="fa-regular fa-rectangle-list px-[10px] py-[11px] text-white bg-purple-300 rounded-full md:text-[1.3vw]"></i>
              <h3 className="md:text-[1.1vw] font-semibold headingfont pt-2">
                Messages to 1st Degree Connections
              </h3>
              <p className="md:text-[0.9vw]">
                Set up drip campaigns to consistently reach out to your existing
                connections, nurturing those relationships.
              </p>
            </div>
            <div className="text-justify md:w-[45%]">
              <i className="fa-solid fa-users-viewfinder px-[10px] py-[11px] text-white bg-purple-300 rounded-full md:text-[1.3vw]"></i>
              <h3 className="md:text-[1.1vw] font-semibold headingfont pt-2">
                InMail Messages:{" "}
              </h3>
              <p className="md:text-[0.9vw]">
                Develop a strategic approach by combining connection invites to
                closed profiles with InMail to open profiles using Sales
                Navigator.
              </p>
            </div>
          </div>
        </article>
      </section>
      <section className="w-[100%] px-[7vw]  py-[5vh] md:flex justify-between mt-4">
        <article className="md:w-[50%] flex flex-col justify-center items-start">
          <h3 className="md:text-[1.5vw] font-bold headingfont">
            Optimized Inbox Management
          </h3>
          <h2 className="md:text-[16px] pfont font-sans mt-1">
            EvoXcel offers seamless solutions for managing leads through
            LinkedIn inbox management:
          </h2>
          <div className="md:flex mt-[3vh] justify-between w-[100%]">
            <div className="text-justify md:w-[45%]">
              <i className="fa-solid fa-filter-circle-dollar px-[10px] py-[11px]  text-white bg-purple-300 rounded-full md:text-[1.3vw]"></i>
              <h3 className="md:text-[1.2vw] font-semibold pt-3 headingfont">
                Automatic Reply Detection
              </h3>
              <p className="md:text-[0.9vw] text-start pfont">
                Automatically categorize responses from prospects.
              </p>
            </div>
            <div className="text-justify md:w-[45%]">
              <i className="fa-solid fa-link px-[10px] py-[11px] text-white bg-purple-300 rounded-full md:text-[1.3vw]"></i>
              <h3 className="md:text-[1.2vw] font-semibold pt-2 headingfont">
                Comprehensive Chat History:
              </h3>
              <p className="md:text-[0.9vw] text-start pfont">
                Track all interactions in one place to keep conversations
                organized.
              </p>
            </div>
          </div>
          <div className="md:flex mt-[6vh] justify-between w-[100%]">
            <div className="text-justify md:w-[45%]">
              <i className="fa-regular fa-rectangle-list px-[10px] py-[11px] text-white bg-purple-300 rounded-full md:text-[1.3vw]"></i>
              <h3 className="md:text-[1.2vw] headingfont text-start font-semibold pt-2">
                Sentiment- Based Analysis
              </h3>
              <p className="md:text-[0.9vw] text-start pfont">
                Prioritize follow-ups based on positive, negative, or inquiry
                responses.
              </p>
            </div>
            <div className="text-justify md:w-[45%]">
              <i className="fa-solid fa-users-viewfinder px-[10px] py-[11px] text-white bg-purple-300 rounded-full md:text-[1.3vw]"></i>
              <h3 className="md:text-[1.2vw] headingfont font-semibold pt-2">
                Direct In-App Chat Response
              </h3>
              <p className="md:text-[0.9vw] text-start pfont">
                Respond to leads instantly from within your EvoXcel inbox
              </p>
            </div>
          </div>
        </article>
        <article className="md:w-[50%] hidden md:flex items-center justify-center">
          <Image
            src="/images/linkedin-automation/Inbox-Management_image.webp"
            width={300}
            height={300}
            className="w-[80%]"
            alt="Inbox-Management_image"
          />
        </article>
      </section>
      <section className="w-[100%] px-[7vw]  py-[5vh] md:flex justify-between">
        <article className="md:w-[50%] hidden md:flex items-center justify-start">
          <Image
            src="/images/linkedin-automation/Essential-Performance-Metrics_image.webp"
            width={300}
            height={300}
            className="w-[87%]"
            alt="Essential-Performance-Metrics_image"
          />
        </article>
        <article className="md:w-[50%] flex flex-col justify-center items-start">
          <h2 className="md:text-[1.5vw] font-bold headingfont">
            Essential Performance Metrics
          </h2>
          <h2 className="md:text-[1vw] font-sans mt-2 text-justify ">
            Access LinkedIn performance metrics to enhance your campaigns:
          </h2>
          <div className="md:flex mt-[6vh] justify-between w-[100%]">
            <div className="text-justify md:w-[45%]">
              <i className="fa-solid fa-filter-circle-dollar px-[10px] py-[11px]  text-white bg-purple-300 rounded-full md:text-[1.3vw]"></i>
              <h3 className="md:text-[1.1vw] font-semibold headingfont pt-2">
                Campaign KPIs
              </h3>
              <p className="md:text-[0.9vw]">
                Monitor key metrics such as Invite Acceptance Rate, Reply Rate,
                and Positive Response Rate.
              </p>
            </div>
            <div className="text-justify md:w-[45%]">
              <i className="fa-solid fa-link px-[10px] py-[11px] text-white bg-purple-300 rounded-full md:text-[1.3vw]"></i>
              <h3 className="md:text-[1.1vw] headingfont font-semibold pt-2">
                Demographic Insights
              </h3>
              <p className="md:text-[0.9vw]">
                Utilize demographic insights like Location, Title, and Company
                for better targeting.
              </p>
            </div>
          </div>
          <div className="md:flex mt-[6vh] justify-between w-[100%]">
            <div className="text-justify md:w-[45%]">
              <i className="fa-regular fa-rectangle-list px-[10px] py-[11px] text-white bg-purple-300 rounded-full md:text-[1.3vw]"></i>
              <h3 className="md:text-[1.1vw] font-semibold headingfont pt-2">
                A/B Testing
              </h3>
              <p className="md:text-[0.9vw]">
                Test variations in your campaigns with LinkedIn A/B testing.
              </p>
            </div>
            <div className="text-justify md:w-[45%]">
              <i className="fa-solid fa-users-viewfinder px-[10px] py-[11px] text-white bg-purple-300 rounded-full md:text-[1.3vw]"></i>
              <h3 className="md:text-[1.1vw] font-semibold headingfont pt-2">
                Data Export
              </h3>
              <p className="md:text-[0.9vw]">
                Export data to CSV for detailed reporting and analysis.
              </p>
            </div>
          </div>
        </article>
      </section>
      <section className="w-[100%] px-[7vw]  py-[5vh] md:flex justify-between mt-4">
        <article className="md:w-[50%] flex flex-col justify-center items-start">
          <h2 className="md:text-[1.5vw] font-bold headingfont">
            Effortless Integrations
          </h2>
          <h2 className="md:text-[16px] pfont font-sans mt-1">
            EvoXcel’s LinkedIn CRM integration and data enrichment tools allow
            for seamless integration with your existing workflows:
          </h2>
          <div className="md:flex mt-[3vh] justify-between w-[100%]">
            <div className="text-justify md:w-[45%]">
              <i className="fa-solid fa-filter-circle-dollar px-[10px] py-[11px]  text-white bg-purple-300 rounded-full md:text-[1.3vw]"></i>
              <h3 className="md:text-[1.2vw] font-semibold pt-3 headingfont">
                CRM Integration
              </h3>
              <p className="md:text-[0.9vw] text-start pfont">
                Implement custom integrations with any API-based CRM system,
                ensuring smooth data flow and enhanced customer relationship
                management.
              </p>
            </div>
            <div className="text-justify md:w-[45%]">
              <i className="fa-solid fa-link px-[10px] py-[11px] text-white bg-purple-300 rounded-full md:text-[1.3vw]"></i>
              <h3 className="md:text-[1.2vw] font-semibold pt-2 headingfont">
                Data Enrichment Tools
              </h3>
              <p className="md:text-[0.9vw] text-start pfont">
                Connect with data enrichment applications to automatically
                gather and update contact details, giving you richer, more
                actionable insights.
              </p>
            </div>
          </div>
          <div className="md:flex mt-[6vh] justify-between w-[100%]">
            <div className="text-justify md:w-[45%]">
              <i className="fa-regular fa-rectangle-list px-[10px] py-[11px] text-white bg-purple-300 rounded-full md:text-[1.3vw]"></i>
              <h3 className="md:text-[1.2vw] headingfont text-start font-semibold pt-2">
                Applicant Tracking System Integration
              </h3>
              <p className="md:text-[0.9vw] text-start pfont">
                Tailor integrations with Applicant Tracking Systems (ATS) to
                streamline recruitment processes, making it easier for
                recruiters to manage and track candidates.
              </p>
            </div>
          </div>
        </article>
        <article className="md:w-[50%] hidden md:flex items-center justify-center ">
          <Image
            src="/images/linkedin-automation/Effortless-Integrations_image.webp"
            width={300}
            height={300}
            className="w-[80%]"
            alt="Effortless-Integrations_image"
          />
        </article>
      </section>
      <section className="w-[100%] px-[7vw]  py-[5vh] md:flex justify-between">
        <article className="md:w-[50%] hidden md:flex items-center justify-start">
          <Image
            src="/images/linkedin-automation/Security-Data_image.webp"
            width={300}
            height={300}
            className="w-[87%]"
            alt="Security-Data_image"
          />
        </article>
        <article className="md:w-[50%] flex flex-col justify-center items-start">
          <p className="md:text-[1.5vw] font-bold headingfont">
            Robust Security & Data Protection
          </p>
          <h2 className="md:text-[16px] font-sans mt-2 text-justify  ">
            EvoXcel is committed to ensuring the highest level of security and
            data protection.
          </h2>
          <div className="md:flex mt-[6vh] justify-between w-[100%]">
            <div className="text-justify md:w-[45%]">
              <i className="fa-solid fa-filter-circle-dollar px-[10px] py-[11px]  text-white bg-purple-300 rounded-full md:text-[1.3vw]"></i>
              <h3 className="md:text-[1.1vw] font-semibold headingfont pt-2">
                GDPR Compliance
              </h3>
              <p className="md:text-[0.9vw]">
                EvoXcel guarantees GDPR compliance by only gathering customer
                information with permission—either through approved connection
                requests or already-existing connections.
              </p>
            </div>
            <div className="text-justify md:w-[45%]">
              <i className="fa-solid fa-link px-[10px] py-[11px] text-white bg-purple-300 rounded-full md:text-[1.3vw]"></i>
              <h3 className="md:text-[1.1vw] headingfont font-semibold pt-2">
                Regular Data Backups
              </h3>
              <p className="md:text-[0.9vw]">
                Rest easy knowing that all your leads, responses, and data
                metrics are securely backed up and always accessible through the
                EvoXcel dashboard.
              </p>
            </div>
          </div>
          <div className="md:flex mt-[6vh] justify-between w-[100%]">
            <div className="text-justify md:w-[45%]">
              <i className="fa-regular fa-rectangle-list px-[10px] py-[11px] text-white bg-purple-300 rounded-full md:text-[1.3vw]"></i>
              <h3 className="md:text-[1.1vw] font-semibold headingfont pt-2">
                Advanced Data Encryption
              </h3>
              <p className="md:text-[0.9vw]">
                : All passwords are stored in an encrypted format, ensuring that
                your data remains secure and inaccessible to unauthorized
                parties.
              </p>
            </div>
          </div>
        </article>
      </section>
      <section className="w-[100%] px-[7vw]  py-[5vh] md:flex justify-between mt-4">
        <article className="md:w-[50%] flex flex-col justify-center items-start">
          <p className="md:text-[1.5vw] font-bold headingfont">
            Streamlined Multiple Accounts Management
          </p>
          <h2 className="md:text-[16px] pfont font-sans mt-1">
            Efficiently manage all your LinkedIn accounts from a single
            platform, enhancing productivity and organization.
          </h2>
          <div className="md:flex mt-[5vh] justify-between w-[100%]">
            <div className="text-justify md:w-[45%]">
              <i className="fa-solid fa-filter-circle-dollar px-[10px] py-[11px]  text-white bg-purple-300 rounded-full md:text-[1.3vw]"></i>
              <h3 className="md:text-[1.2vw] font-semibold pt-3 headingfont">
                Unified Dashboard
              </h3>
              <p className="md:text-[0.9vw] text-start pfont">
                Manage all your LinkedIn accounts from a single, centralized
                platform.
              </p>
            </div>
            {/* <div className='text-justify md:w-[45%]'>
              <i className="fa-solid fa-link px-[10px] py-[11px] text-white bg-purple-300 rounded-full md:text-[1.3vw]"></i>
              <h3 className='md:text-[1.2vw] font-semibold pt-2 headingfont'>Seamless Account Switching</h3>
              <p className='md:text-[0.9vw] text-start pfont'>Easily switch between accounts and track performance</p>
            </div> */}
          </div>
          <div className="md:flex mt-[6vh] justify-between w-[100%]">
            <div className="text-justify md:w-[45%]">
              <i className="fa-solid fa-link px-[10px] py-[11px] text-white bg-purple-300 rounded-full md:text-[1.3vw]"></i>
              <h3 className="md:text-[1.2vw] font-semibold pt-2 headingfont">
                Seamless Account Switching
              </h3>
              <p className="md:text-[0.9vw] text-start pfont">
                Effortlessly switch between accounts and track performance
                across profiles.
              </p>
            </div>
            {/* <div className='text-justify md:w-[45%]'>
              <i className="fa-regular fa-rectangle-list px-[10px] py-[11px] text-white bg-purple-300 rounded-full md:text-[1.3vw]"></i>
              <h3 className='md:text-[1.2vw] headingfont text-start font-semibold pt-2'>Targeted LinkedIn Company Pages</h3>
              <p className='md:text-[0.9vw] text-start pfont'>Upload a list of specific LinkedIn Company Pages to directly connect with decision-makers within those organizations.</p>
            </div>
            <div className='text-justify md:w-[45%]'>
              <i className="fa-solid fa-users-viewfinder px-[10px] py-[11px] text-white bg-purple-300 rounded-full md:text-[1.3vw]"></i>
              <h3 className='md:text-[1.2vw] headingfont font-semibold pt-2'>Domain Targeting</h3>
              <p className='md:text-[0.9vw] text-start pfont'>Provide a list of targeted website domains, enabling direct access to key stakeholders within those companies.</p>
            </div> */}
          </div>
        </article>
        <article className="md:w-[50%] hidden md:flex items-center justify-center ">
          <Image
            src="/images/linkedin-automation/Multiple-Accounts-Management_image.webp"
            width={300}
            height={300}
            className="w-[80%]"
            alt="Multiple-Accounts-Management_image"
          />
        </article>
      </section>
      <section className="w-[100%] px-[7vw]  py-[5vh] md:flex justify-between">
        <article className="md:w-[50%] hidden md:flex items-center justify-start">
          <Image
            src="/images/linkedin-automation/Support-Custom-Solutions_image.webp"
            width={300}
            height={300}
            className="w-[87%]"
            alt=" Support-Custom-Solutions_image"
          />
        </article>
        <article className="md:w-[50%] flex flex-col justify-center items-start">
          <p className="md:text-[1.5vw] font-bold headingfont">
            Comprehensive Support & Custom Solutions
          </p>
          <h2 className="md:text-[1vw] font-sans mt-2 text-justify  ">
            EvoXcel offers personalized support and custom solutions to ensure
            your success.
          </h2>
          <div className="md:flex mt-[6vh] justify-between w-[100%]">
            <div className="text-justify md:w-[45%]">
              <i className="fa-solid fa-filter-circle-dollar px-[10px] py-[11px]  text-white bg-purple-300 rounded-full md:text-[1.3vw]"></i>
              <h3 className="md:text-[1.1vw] font-semibold headingfont pt-2">
                Personalized Assistance
              </h3>
              <p className="md:text-[0.9vw]">
                Receive dedicated support with onboarding, feature tours, and
                best practices. To assist you, our staff is always available by
                phone, email, and chat.
              </p>
            </div>
            <div className="text-justify md:w-[45%]">
              <i className="fa-solid fa-link px-[10px] py-[11px] text-white bg-purple-300 rounded-full md:text-[1.3vw]"></i>
              <h3 className="md:text-[1.1vw] headingfont font-semibold pt-2">
                Expert Consulting
              </h3>
              <p className="md:text-[0.9vw]">
                Optimize your outreach campaigns with expert advice on
                copywriting and targeting strategies to ensure exceptional
                results.
              </p>
            </div>
          </div>
          <div className="md:flex mt-[6vh] justify-between w-[100%]">
            <div className="text-justify md:w-[45%]">
              <i className="fa-regular fa-rectangle-list px-[10px] py-[11px] text-white bg-purple-300 rounded-full md:text-[1.3vw]"></i>
              <h3 className="md:text-[1.1vw] font-semibold headingfont pt-2">
                Tailored Customizations
              </h3>
              <p className="md:text-[0.9vw]">
                Adapt our prospecting services to fit your unique sales
                processes, with customized solutions designed to integrate
                seamlessly into your business operations.
              </p>
            </div>
          </div>
        </article>
      </section>
      <section className="w-[100%] px-[7vw]  py-[5vh] md:flex justify-between mt-4">
        <article className="md:w-[50%] flex flex-col justify-center items-start">
          <p className="md:text-[1.5vw] font-bold headingfont">
            360° Competitor Insights
          </p>
          <h2 className="md:text-[16px] pfont font-sans mt-1">
            Stay ahead of the competition by gaining deep insights into their
            strategies and performance.
          </h2>
          <div className="md:flex mt-[5vh] justify-between w-[100%]">
            <div className="text-justify md:w-[45%]">
              <i className="fa-solid fa-filter-circle-dollar px-[10px] py-[11px]  text-white bg-purple-300 rounded-full md:text-[1.3vw]"></i>
              <h3 className="md:text-[1.2vw] font-semibold pt-3 headingfont">
                Analyze Competitor Content
              </h3>
              <p className="md:text-[0.9vw] text-start pfont">
                Examine competitor posts to understand which types of content
                engage your target audience effectively.
              </p>
            </div>
            <div className="text-justify md:w-[45%]">
              <i className="fa-solid fa-link px-[10px] py-[11px] text-white bg-purple-300 rounded-full md:text-[1.3vw]"></i>
              <h3 className="md:text-[1.2vw] font-semibold pt-2 headingfont">
                Reveal Audience Preferences
              </h3>
              <p className="md:text-[0.9vw] text-start pfont">
                Identify content that drives the most engagement within your
                industry. Find the messages and subjects that appeal to
                prospective clients.
              </p>
            </div>
          </div>
          <div className="md:flex mt-[6vh] justify-between w-[100%]">
            <div className="text-justify md:w-[45%]">
              <i className="fa-solid fa-link px-[10px] py-[11px] text-white bg-purple-300 rounded-full md:text-[1.3vw]"></i>
              <h3 className="md:text-[1.2vw] font-semibold pt-2 headingfont">
                Access Prospect Profiles
              </h3>
              <p className="md:text-[0.9vw] text-start pfont">
                View detailed LinkedIn profiles of individuals interacting with
                competitor content. Explore their professional backgrounds,
                interests, and potential challenges.
              </p>
            </div>
            <div className="text-justify md:w-[45%]">
              <i className="fa-regular fa-rectangle-list px-[10px] py-[11px] text-white bg-purple-300 rounded-full md:text-[1.3vw]"></i>
              <h3 className="md:text-[1.2vw] headingfont text-start font-semibold pt-2">
                Export Data for Analysis
              </h3>
              <p className="md:text-[0.9vw] text-start pfont">
                Easily download information into Excel for in-depth analysis and
                strategic planning. Leverage this data to enhance your content
                strategy and improve your outreach efforts.
              </p>
            </div>
          </div>
        </article>
        <article className="md:w-[50%] hidden md:flex items-center justify-center ">
          <Image
            src="/images/linkedin-automation/Competitor-Insights_image.webp"
            width={300}
            height={300}
            className="w-[80%]"
            alt="Competitor-Insights_image"
          />
        </article>
      </section>
      <section className="w-[100%] px-[7vw]  py-[5vh] md:flex justify-between">
        <article className="md:w-[50%] hidden md:flex items-center justify-start">
          <Image
            src="/images/linkedin-automation/Boost-Company_image.webp"
            width={300}
            height={300}
            className="w-[90%]"
            alt="Amplify Your LinkedIn Company Page"
          />
        </article>
        <article className="md:w-[50%] flex flex-col justify-center items-start">
          <p className="md:text-[1.5vw] font-bold headingfont">
            Amplify Your LinkedIn Company Page
          </p>
          <h2 className="md:text-[1vw] font-sans mt-2 text-justify  ">
            Boost the visibility of your LinkedIn Company Page with
            EvoXcel&lsquo;s powerful features.
          </h2>
          <div className="md:flex mt-[6vh] justify-between w-[100%]">
            <div className="text-justify md:w-[45%]">
              <i className="fa-solid fa-filter-circle-dollar px-[10px] py-[11px]  text-white bg-purple-300 rounded-full md:text-[1.3vw]"></i>
              <h3 className="md:text-[1.1vw] font-semibold headingfont pt-2">
                Increase Your Follower Count:
              </h3>
              <p className="md:text-[1vw] mt-[2vh]">
                Increase Your Follower Count: Strategically send invitations to
                your relevant connections to increase your follower count and
                enhance your page’s prominence.
              </p>
            </div>
            <div className="text-justify md:w-[45%]">
              <i className="fa-regular fa-rectangle-list px-[10px] py-[11px] text-white bg-purple-300 rounded-full md:text-[1.3vw]"></i>
              <h3 className="md:text-[1.1vw] font-semibold headingfont pt-2">
                Enhance Your Page’s Prominence
              </h3>
              <p className="md:text-[1vw] mt-[2vh]">
                As your followers grow, your page has a higher chance of
                appearing in the &lsquo;Trending&lsquo; section, leading to
                greater exposure and attracting more professionals to your
                offerings.
              </p>
            </div>
          </div>

          <div className="md:flex mt-[4vh] justify-between w-[100%]">
            <div className="text-justify md:w-[45%]">
              <i className="fa-regular fa-rectangle-list px-[10px] py-[11px] text-white bg-purple-300 rounded-full md:text-[1.3vw]"></i>
              <h3 className="md:text-[1.1vw] font-semibold headingfont pt-2">
                Elevate Your Brand’s Recognition
              </h3>
              <p className="md:text-[1vw] mt-[2vh]">
                Cultivate a growing following to elevate your brand’s
                recognition and authority on LinkedIn.
              </p>
            </div>
          </div>
        </article>
      </section>
      <section className="w-[100%] px-[7vw]  py-[5vh] md:flex justify-between mt-4">
        <article className="md:w-[50%] flex flex-col justify-center items-start">
          <p className="md:text-[1.5vw] font-bold headingfont">
            Transform Followers into Paying Customers
          </p>
          <h2 className="md:text-[16px] pfont font-sans mt-1">
            Convert your LinkedIn followers into paying customers with targeted
            strategies and drip campaigns.
          </h2>
          <div className="md:flex mt-[5vh] justify-between w-[100%]">
            <div className="text-justify md:w-[45%]">
              <i className="fa-solid fa-filter-circle-dollar px-[10px] py-[11px]  text-white bg-purple-300 rounded-full md:text-[1.3vw]"></i>
              <h3 className="md:text-[1.2vw] font-semibold pt-3 headingfont">
                Extract Connections
              </h3>
              <p className="md:text-[0.9vw] text-start pfont">
                Identify and reach out to 1st, 2nd, and 3rd-degree connections
                from your LinkedIn Company Page, expanding your reach within
                your industry.
              </p>
            </div>
            <div className="text-justify md:w-[45%]">
              <i className="fa-solid fa-link px-[10px] py-[11px] text-white bg-purple-300 rounded-full md:text-[1.3vw]"></i>
              <h3 className="md:text-[1.2vw] font-semibold pt-2 headingfont">
                Initiate Connect Invite Campaigns
              </h3>
              <p className="md:text-[0.9vw] text-start pfont">
                Start connect invite campaigns for 2nd and 3rd-degree
                connections, with follow-up messages to convert distant
                connections into engaged followers.
              </p>
            </div>
          </div>
          <div className="md:flex mt-[6vh] justify-between w-[100%]">
            <div className="text-justify md:w-[45%]">
              <i className="fa-solid fa-link px-[10px] py-[11px] text-white bg-purple-300 rounded-full md:text-[1.3vw]"></i>
              <h3 className="md:text-[1.2vw] font-semibold pt-2 headingfont">
                Launch Targeted Drip Campaigns
              </h3>
              <p className="md:text-[0.9vw] text-start pfont">
                Automatically send personalized drip campaigns to 1st-degree
                connections, nurturing them with relevant content to guide them
                from interest to purchase.
              </p>
            </div>
            {
              <div className="text-justify md:w-[45%]">
                <i className="fa-regular fa-rectangle-list px-[10px] py-[11px] text-white bg-purple-300 rounded-full md:text-[1.3vw]"></i>
                <h3 className="md:text-[1.2vw] headingfont text-start font-semibold pt-2">
                  Unlock LinkedIn’s Potential
                </h3>
                <p className="md:text-[0.9vw] text-start pfont">
                  Use connection extraction, targeted campaigns, and drip
                  sequences to transform passive followers into active, paying
                  customers, enhancing your online presence and driving growth.
                </p>
              </div>
            }
          </div>
        </article>
        <article className="md:w-[50%] hidden md:flex items-center justify-center ">
          <Image
            src="/images/linkedin-automation/Paying-Customers_image.webp"
            width={300}
            height={300}
            className="w-[85%]"
            alt="Transform Followers into Paying Customers"
          />
        </article>
      </section>
    </>
  );
};

export default LinkedInAutomation;
