import React from "react";
import Image from "next/image";
import Head from "next/head";
// import "./webDevelopment.css";
export const metadata = {
  title: "Custom Web Development Services | EvoXcel",
  description:
    "Elevate your online presence with EvoXcel’s custom web development services. From responsive design to seamless integration, we create high-performance websites tailored to your business",
  alternates: {
    canonical: "https://www.evoxcel.com/web-development/",
  },
  siteName: "EvoXcel",
  openGraph: {
    type: "website",
    url: "https://www.evoxcel.com/",
    title: "Professional Web Development by EvoXcel",
    description:
      "Build high-performance websites that enhance user experiences and drive growth with EvoXcel’s custom web development services.",
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
    title: "Professional Web Development by EvoXcel",
    description:
      "Build high-performance websites that enhance user experiences and drive growth with EvoXcel’s custom web development services.",
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
const WebDevelopment = () => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="./webDevelopment.css" />
      </Head>
      <section className="w-[100%]  bgwebdev px-[8vw] pt-[7vh] md:pt-[14vh] pb-[10vh] items-center justify-between md:flex">
        <div data-aos="fade-up" className="md:w-[50%] text-white my-14 lg:my-0">
          <h1 className="capitalize headingfont text-[2rem]  leading-tight lg:text-[3vw] font-bold text-[#03449a] bg-clip-text bg-gradient-to-r from-slate-400,text-[#03449a]">
            Crafting Digital Experiences that Ignite and Elevate
          </h1>
          <p className="mt-4 pfont mb-10 max-w-lg leading-relaxed text-[4vw] md:text-[1.2vw] text-justify pfont text-black">
            We specialize in creating exceptional web experiences that captivate
            your audience and deliver measurable results for your business. By
            leveraging our web development expertise, we help you establish a
            dynamic online presence that sets you apart in today’s fast-paced
            digital landscape. As a premium web development company, we offer
            custom web solutions tailored to your specific needs, ensuring your
            brand stands out in the digital world.
          </p>
          {/* <a href="#" className="inline-block capitalize font-semibold bg-gradient-to-r from-purple-500 to-pink-800 rounded-full px-7 py-2 hover:from-purple-500 hover:to-gray-800">learn more</a> */}
        </div>
        <figure className="md:w-[50%] flex justify-center">
          <Image
            src="/images/web-development/Programmer.webp"
            width={300}
            height={300}
            alt="Santa Claus"
            className="md:w-[70%]"
          />
        </figure>
      </section>

      <section className="w-[100%]  text-black h-100% py-9">
        <p className="text-center headingfont md:text-[2rem] font-bold px-2">
          Unleash Your Brand&lsquo;s Potential with a Premium Web Development
          Company
        </p>
        <div className="py-9 flex flex-wrap justify-center items-center">
          <div
            data-aos="fade-up"
            className="card block relative w-[290px] h-[250px] bg-[#f2f8f9] "
          >
            <p className="card-title pfont headingfont">
              Web Development Services
            </p>
            <p className="small-desc pfont">
              Craft a Dynamic Online Presence Utilize the latest platforms and
              technologies to build a robust and engaging website that’s
              tailored to your specific needs.
            </p>
            <div className="go-corner">
              <div className="go-arrow">→</div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="card block relative w-[290px] h-[250px] bg-[#f2f8f9]"
          >
            <p className="card-title  headingfont">Tailored Web Solutions</p>
            <p className="small-desc pfont">
              Design and develop custom web solutions that align seamlessly with
              your brand identity and unique requirements.{" "}
            </p>
            <div className="go-corner">
              <div className="go-arrow">→</div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="card block relative w-[290px] h-[250px] bg-[#f2f8f9]"
          >
            <p className="card-title headingfont">
              Effortless Content Management
            </p>
            <p className="small-desc pfont">
              Our services offer intuitive content management systems (CMS) that
              allow you to easily update text, images, and multimedia, ensuring
              your site remains fresh and engaging.
            </p>
            <div className="go-corner">
              <div className="go-arrow">→</div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="card block relative w-[290px] h-[250px] bg-[#f2f8f9]"
          >
            <p className="card-title headingfont">Reliable Web Maintenance</p>
            <p className="small-desc pfont">
              Our ongoing maintenance and support services keep your site
              optimized, secure, and up-to-date, enabling you to focus on your
              core business.
            </p>
            <div className="go-corner">
              <div className="go-arrow">→</div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-[vh]"></section>
      <section>
        <div className="w-width ">
          <div className="w-full  py-3">
            <h2 className="text-center font-semibold text-[8vw] md:text-[2.5rem] text-black headingfont">
              Our Process Involves
            </h2>
          </div>
          <div className=" bgcolor">
            <div className=" flex flex-wrap">
              <div className=" lg:w-1/2 px-4">
                <div className="">
                  <div className=" text-center">
                    <p className="text-[7vw] md:text-4xl font-semibold headingfont">
                      Discovery & Strategy
                    </p>
                  </div>
                  <div className="content1 py-4 px-[5vw] text-justify">
                    <div className="text-gray-800 font-[400] text-[1rem] pfont sans-serif">
                      We begin by thoroughly understanding your business vision
                      and target audience. Through detailed consultations, we:
                      <ul className="list-disc pfont py-4 pl-5 sans-serif">
                        <li>
                          Set Clear Objectives: Align your business goals with a
                          tailored web strategy.
                        </li>
                        <li>
                          Understand Your Audience: Conduct in-depth market
                          research to identify your audience&lsquo;s preferences
                          and behaviors.
                        </li>
                        <li>
                          Gather Requirements: Collaborate with stakeholders to
                          define the specific requirements of the project.
                        </li>
                      </ul>
                      This collaborative approach ensures a strategic plan with
                      well-defined milestones and timelines, driving your
                      project toward success.{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 px-4">
                <div className=" h-full w-full flex justify-center bg-cover bg-center">
                  <Image
                    className="w-[60%] object-contain"
                    src="/images/web-development/statergy.webp"
                    width={300}
                    height={300}
                    alt="web-development_statergy"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" my-[7vh] mx-auto bgcolor">
            <div className=" flex flex-wrap">
              <div className="flex flex-wrap">
                <div className="lg:w-1/2 px-4">
                  <div className=" h-full w-full flex justify-center bg-cover bg-center">
                    <Image
                      className="w-[60%] object-contain"
                      src="/images/web-development/planning.webp"
                      width={300}
                      height={300}
                      alt="web-development_planning"
                    />
                  </div>
                </div>
                <div className=" lg:w-1/2 px-4">
                  <div className=" text-center">
                    <p className="text-4xl font-semibold headingfont">
                      Strategic Project Planning
                    </p>
                  </div>
                  <div className="content1 py-4 px-[5vw] text-justify">
                    <div className="text-gray-800 font-[400] text-[1rem] pfont sans-serif">
                      We create a comprehensive project roadmap that includes:{" "}
                      <ul className="list-disc pfont py-4 pl-5 sans-serif">
                        <li>
                          Timelines: Establish clear deadlines for each phase of
                          the project.
                        </li>
                        <li>
                          Milestones: Track significant progress points to
                          ensure the project stays on course.
                        </li>
                        <li>
                          Deliverables: Define the expected outcomes and
                          deliverables for each stage.
                        </li>
                      </ul>
                      This meticulous planning keeps your project aligned with
                      your objectives and ensures timely delivery.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" mx-auto">
            <div className=" flex flex-wrap">
              <div className=" flex flex-wrap">
                <div className=" lg:w-1/2 px-4">
                  <div className=" text-center">
                    <p className="text-4xl font-semibold headingfont">
                      Our Design Process
                    </p>
                  </div>
                  <div className="content1 py-4 px-[5vw] text-justify">
                    <div className="text-gray-800 font-[400] text-[1rem] pfont sans-serif">
                      Your concept is realized by our design team using:
                      <ul className="list-disc pfont py-4 pl-5 sans-serif">
                        <li>
                          Wireframes: Establish the structure and functionality
                          of the website.
                        </li>
                        <li>
                          Mockups: Visualize the final design before development
                          begins.
                        </li>
                        <li>
                          User-Centered Focus: Develop a user experience (UX)
                          that is both engaging and easy to navigate.
                        </li>
                      </ul>
                      We ensure that your website is not only visually appealing
                      but also user-friendly and intuitive.
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 px-4">
                  <div className=" h-full w-full flex justify-center bg-cover bg-center">
                    <Image
                      className="w-[55%] object-contain"
                      src="/images/web-development/design.webp"
                      width={300}
                      height={300}
                      alt="web-development_design"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" mx-auto">
            <div className=" flex flex-wrap">
              <div className=" flex flex-wrap">
                <div className="lg:w-1/2 px-4">
                  <div className=" h-fit py-8 w-full flex justify-center bg-cover bg-center">
                    <Image
                      className="w-[60%] object-contain"
                      width={300}
                      height={300}
                      src="/images/web-development/developmentprocess.webp"
                      alt="web-developmentproces"
                    />
                  </div>
                </div>
                <div className=" lg:w-1/2 px-4 flex flex-col justify-center">
                  <div className=" text-center">
                    <p className="text-4xl font-semibold headingfont">
                      Development Process
                    </p>
                  </div>
                  <div className="content1 py-4 px-[5vw] text-justify">
                    <div className="text-gray-800 font-[400] text-[1rem] pfont sans-serif">
                      Our developers turn designs into a fully-functional,
                      scalable website:
                      <ul className="list-disc pfont py-4 pl-5 sans-serif">
                        <li>
                          Front-End Development: Create a dynamic, responsive
                          interface that adapts to all devices.
                        </li>
                        <li>
                          Back-End Development: Implement server-side logic to
                          ensure a seamless user experience.
                        </li>
                        <li>
                          Quality Assurance: Conduct thorough testing to ensure
                          flawless performance across all devices and browsers.
                        </li>
                      </ul>
                      We deliver a website that is both technically sound and
                      aesthetically pleasing.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" mx-auto">
            <div className=" flex flex-wrap">
              <div className=" flex flex-wrap">
                <div className=" lg:w-1/2 px-4">
                  <div className=" text-center">
                    <p className="text-4xl font-semibold  headingfont">
                      Comprehensive Website Testing
                    </p>
                  </div>
                  <div className="content1 py-4 px-[5vw] text-justify">
                    <div className="text-gray-800 font-[400] text-[1rem] pfont sans-serif">
                      We guarantee top-notch performance with:
                      <ul className="list-disc pfont py-4 pl-5 sans-serif">
                        <li>
                          UX Evaluation: Ensure smooth navigation and optimal
                          usability.
                        </li>
                        <li>
                          Security Checks: Identify and address potential
                          vulnerabilities to safeguard your website.
                        </li>
                      </ul>
                      This rigorous testing process ensures a reliable, secure,
                      and high-performing website.
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 px-4">
                  <div className=" h-full w-full flex justify-center bg-cover bg-center">
                    <Image
                      className="w-[55%] object-contain"
                      src="/images/web-development/consul.webp"
                      width={300}
                      height={300}
                      alt="web-development_consult"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content1 py-8 px-[5vw] text-justify">
            <div className=" flex flex-wrap">
              <div className=" flex flex-wrap">
                <div className="lg:w-1/2 px-4">
                  <div className="w-full flex justify-center bg-cover bg-center">
                    <Image
                      className="w-[70%] object-contain"
                      src="/images/web-development/maintain.webp"
                      width={300}
                      height={300}
                      alt="web-development_maintain"
                    />
                  </div>
                </div>
                <div className=" lg:w-1/2 px-4 py-[7vh]">
                  <div className=" text-center">
                    <p className="text-4xl font-semibold headingfont">
                      Comprehensive Website Maintenance
                    </p>
                  </div>
                  <div className="content1 py-4 px-[5vw] text-justify flex flex-col justify-center items-center">
                    <div className="text-gray-800 font-[400] text-[1rem] pfont sans-serif">
                      We keep your website running efficiently with:
                      <ul className="list-disc pfont py-4 pl-5 sans-serif">
                        <li>
                          Regular Updates: Stay updated with the latest
                          technologies and industry standards.
                        </li>
                        <li>
                          Feature Enhancements: Continuously improve and expand
                          your website’s functionality.
                        </li>
                        <li>
                          Issue Resolution: Promptly address and resolve any
                          issues that arise.
                        </li>
                      </ul>
                      Our maintenance services ensure your website remains
                      optimized and evolves with your business needs.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebDevelopment;
