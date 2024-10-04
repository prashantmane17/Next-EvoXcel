import React from "react";
import "./emailAutomation.css";
import Image from "next/image";
const EmailAutomation = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="w-[100%]  bgwebdev px-[8vw]  pt-[7vh] md:pt-[14vh] pb-[10vh] items-center justify-between md:flex">
        {/* <Helmet>
          <title>
            Powerful Email Automation Tools for Business Growth | EvoXcel
          </title>
          <meta
            name="description"
            content="Boost your marketing with EvoXcel’s email automation tools. Enjoy personalized messaging, seamless campaign management, and data-driven insights to enhance engagement and conversions."
          />
          <link
            rel="canonical"
            href="https://www.evoxcel.com/email-automation"
          />
        </Helmet> */}
        <div data-aos="fade-up" className="md:w-[50%] text-white my-14 lg:my-0">
          <h1 className="capitalize headingfont text-[2rem]  leading-tight lg:text-[3vw] font-bold pt-[7.5vh] text-[#03449a] bg-clip-text bg-gradient-to-r from-slate-400,text-[#03449a]">
            Revolutionize Your Communication with Our Email Automation Tool
          </h1>
          <p className="mt-4 mb-10 max-w-lg pfont leading-relaxed text-[4vw] md:text-[1.2vw] text-justify text-black">
            Transform your marketing strategy with EvoXcel&lsquo;s Email
            Automation Tool. Our cutting-edge solution is designed to enhance
            your email marketing efforts, automate your campaigns, and deliver
            personalized content to drive engagement and growth.
          </p>
          {/* <a href="#" className="inline-block capitalize font-semibold bg-gradient-to-r from-purple-500 to-pink-800 rounded-full px-7 py-2 hover:from-purple-500 hover:to-gray-800">learn more</a> */}
        </div>
        <figure className="md:w-[50%] flex justify-center">
          <Image
            src="/images/email1.png"
            width="300"
            height="300"
            alt="Santa Claus"
            className="md:w-[70%]"
          />
        </figure>
      </section>
      <section className="bg-gray-50 pb-13">
        <h1 className="text-3xl text-center headingfont md:text-4xl font-semibold text-[#718BFF] mb-4">
          Comprehensive Features of Our Email Automation Service
        </h1>
        <p className="text-lg text-center headingfont text-gray-700">
          Discover the robust capabilities of our email automation solution
          tailored to elevate your marketing strategy:
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
                src="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div class="p-6">
              <h3 class="text-[#718BFF] headingfont mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Personalized Email Campaigns
              </h3>
              <p class="block font-sans text-base pfont font-normal leading-relaxed text-inherit antialiased">
                Deliver highly personalized content based on user behavior,
                preferences, and interactions to increase engagement and
                conversions.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            class="relative flex md:w-[24%] mt-[7vh] md:mt-0  hover:scale-105  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
          >
            <div class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
              <Image width={300} height={300}
                src="https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div class="p-6">
              <h3 class="text-[#718BFF] mb-2 headingfont block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Automated Email Workflows
              </h3>
              <p class="block font-sans text-base pfont font-normal leading-relaxed text-inherit antialiased">
                Create automated workflows triggered by specific actions or
                behaviors to streamline communication and save time.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            class="relative flex md:w-[24%] mt-[7vh] md:mt-0  hover:scale-105  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
          >
            <div class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
              <Image width={300} height={300}
                src="https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div class="p-6">
              <h3 class="text-[#718BFF] mb-2 block headingfont font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                In-Depth Analytics and Reporting
              </h3>
              <p class="block font-sans text-base pfont font-normal leading-relaxed text-inherit antialiased">
                Gain valuable insights with advanced analytics and reporting
                features to track performance and optimize your strategies.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            class="relative flex md:w-[24%] mt-[7vh] md:mt-0 hover:scale-105 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
          >
            <div class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
              <Image width={300} height={300}
                src="https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div class="p-6">
              <h3 class="text-[#718BFF] headingfont mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Seamless Integration
              </h3>
              <p class="block font-sans pfont text-base font-normal leading-relaxed text-inherit antialiased">
                Integrate effortlessly with existing CRM and marketing tools to
                create a unified and efficient workflow.
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
              Experience the benefits of using our email automation service to
              enhance your marketing efforts
            </p>
          </div>
          <div
            data-aos="fade-right"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              "Effortless Campaign Management: Automate your email campaigns to save time and focus on strategic planning.",
              "Personalized Messaging: Send customized emails that resonate with your audience and drive higher conversion rates.",
              "Consistent Outreach: Maintain regular communication with your contacts to ensure your brand stays top-of-mind.",
              "Data-Driven Insights: Utilize analytics to refine your email campaigns and achieve better results with actionable insights.",
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
      <article className="md:flex w-[100%] justify-between px-[8vw] bg-white md:h-[60vh]">
        <div data-aos="fade-right" className="md:w-[55%]">
          <h2 className="text-[#718BFF] headingfont text-[10vw] md:text-[2.5vw] font-[600] mt-[6vh]">
            Our Values
          </h2>
          <p className="text-black mt-[3vh] pfont">
            <i className="fa-solid fa-check bg-[#718BFF] text-white p-[3px] rounded-full mr-2"></i>
            <span className="font-[600]">Innovation - </span>We continuously
            evolve our tools to adapt to market changes, exploring new
            technologies and approaches to keep our clients ahead of the
            competition.
          </p>
          <p className="text-black mt-[3vh] pfont">
            <i className="fa-solid fa-check  bg-[#718BFF] text-white p-[3px] rounded-full mr-2"></i>
            <span className="font-[600]">Customer Success - </span> Your success
            is our top priority. We are dedicated to providing exceptional
            support and services to help you achieve your marketing goals.
          </p>
          <p className="text-black my-[3vh] pfont">
            <i className="fa-solid fa-check  bg-[#718BFF] text-white p-[3px] rounded-full mr-2"></i>
            <span className="font-[600]">Integrity - </span> We uphold honest
            and transparent business practices, ensuring that every decision and
            action is guided by our commitment to integrity.
          </p>
        </div>
        <figure className="md:w-[35%]  flex justify-end">
          <Image
            className="w-[100%] object-contain"
            width={300}
            height={300}
            src="/images/email.png"
            alt=""
          />
        </figure>
      </article>
      <article className="md:flex w-[100%] justify-between px-[8vw] bg-white md:h-[70vh]">
        <figure className="md:w-[35%]  flex justify-end">
          <Image
            className="w-[100%] object-contain"
            src="/images/email2.png"
            width={300}
            height={300}
            alt=""
          />
        </figure>
        <div data-aos="fade-right" className="md:w-[55%]">
          <h2 className="text-[#718BFF] headingfont text-[10vw] md:text-[2.5vw] font-[600] mt-[6vh]">
            Why Choose Our Email Automation Tool?
          </h2>
          <p className="text-black mt-[3vh] pfont">
            <i className="fa-solid fa-check bg-[#718BFF] text-white p-[3px] rounded-full mr-2"></i>
            <span className="font-[600]">Streamlined Automation - </span>{" "}
            Simplify the process of creating and managing email campaigns,
            allowing you to focus on what matters most.
          </p>
          <p className="text-black mt-[3vh] pfont">
            <i className="fa-solid fa-check  bg-[#718BFF] text-white p-[3px] rounded-full mr-2"></i>
            <span className="font-[600]">Smart Segmentation - </span> Target
            specific segments of your audience with tailored messages to
            maximize engagement and effectiveness.
          </p>
          <p className="text-black my-[3vh] pfont">
            <i className="fa-solid fa-check  bg-[#718BFF] text-white p-[3px] rounded-full mr-2"></i>
            <span className="font-[600]">Seamless Integration - </span> Easily
            integrate our tool with your existing CRM and other systems for a
            cohesive workflow.
          </p>
          <p className="text-black my-[3vh] pfont">
            <i className="fa-solid fa-check  bg-[#718BFF] text-white p-[3px] rounded-full mr-2"></i>
            <span className="font-[600]">Advanced Analytics - </span> Access
            detailed reports and insights to continuously improve your email
            marketing strategy and achieve superior results.
          </p>
        </div>
      </article>
    </>
  );
};

export default EmailAutomation;
