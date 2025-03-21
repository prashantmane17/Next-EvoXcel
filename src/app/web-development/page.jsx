"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";
import "./webDevelopment.css";

const metadata = {
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
      <Head>{/* <link rel="stylesheet" href="./webDevelopment.css" /> */}</Head>
      <section className="w-[100%] px-[8vw] pt-[7vh] md:pt-[14vh] pb-[10vh] items-center justify-between md:flex">
        <div className="md:w-[50%] my-14 lg:my-0">
          <motion.h1
            initial={{ opacity: 0, x: -100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[2rem] leading-tight lg:text-[3vw] font-bold text-blue-500">
            Crafting Digital Experiences that Ignite and Elevate
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay:0.3 }} 
            className="text-white mt-4 mb-10 max-w-lg leading-relaxed text-[4vw] md:text-[1.2vw] text-justify">
            We specialize in creating exceptional web experiences that captivate
            your audience and deliver measurable results for your business. By
            leveraging our web development expertise, we help you establish a
            dynamic online presence that sets you apart in today’s fast-paced
            digital landscape. As a premium web development company, we offer
            custom web solutions tailored to your specific needs, ensuring your
            brand stands out in the digital world.
          </motion.p>
        </div>

        <motion.figure
          className="md:w-[50%] flex justify-center"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/web-development/Programmer.webp"
            width={300}
            height={300}
            alt="Santa Claus"
            className="md:w-[70%]"
          />
        </motion.figure>
      </section>
      <section className="w-[100%] text-white h-[100%] py-9">
        <motion.p
          className="text-purple-500 text-center headingfont md:text-[2rem] font-bold px-2"
          initial={{ opacity: 0, y: -100 }} // Initial state (hidden)
          whileInView={{ opacity: 1, y: 0 }} // Animation when in view
          viewport={{ once: true }} // Only animate once
          transition={{ duration: 0.8 }} // Animation duration
        >
          Unleash Your Brand&lsquo;s Potential with a Premium Web Development
          Company
        </motion.p>

        <div className="py-9 flex flex-wrap justify-center items-center">
          {[
            "Web Development Services",
            "Tailored Web Solutions",
            "Effortless Content Management",
            "Reliable Web Maintenance",
          ].map((title, index) => (
            <motion.div
              key={index}
              className="card block relative w-[290px] h-[250px] bg-[#f2f8f9]"
              initial={{ opacity: 0, y: 50 }} // Initial state (hidden)
              whileInView={{ opacity: 1, y: 0 }} // Animation when in view
              viewport={{ once: true }} // Only animate once
              transition={{ duration: 0.8, delay: index * 0.2 }} // Animation duration with delay
            >
              <p className="text-white card-title pfont headingfont">{title}</p>
              <p className="text-white small-desc pfont">
                {index === 0
                  ? "Craft a Dynamic Online Presence Utilize the latest platforms and technologies to build a robust and engaging website that’s tailored to your specific needs."
                  : index === 1
                  ? "Design and develop custom web solutions that align seamlessly with your brand identity and unique requirements."
                  : index === 2
                  ? "Our services offer intuitive content management systems (CMS) that allow you to easily update text, images, and multimedia, ensuring your site remains fresh and engaging."
                  : "Our ongoing maintenance and support services keep your site optimized, secure, and up-to-date, enabling you to focus on your core business."}
              </p>
              <div className="go-corner">
                <div className="go-arrow">→</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <section>
              <div className="w-width ">
                <div className="w-full  py-3">
                  <motion.h2
                    initial={{ opacity: 0, y: -100 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-purple-500 text-center font-semibold text-[8vw] md:text-[2.5rem]  headingfont">
                    Our Process Involves
                  </motion.h2>
                </div>
                <div className=" bgcolor">
                  <div className=" flex flex-wrap">
                    <div className=" lg:w-1/2 px-4">
                      <div className="">
                        <div className=" text-center">
                          <motion.p
                             initial={{ opacity: 0, x: -100 }} 
                             whileInView={{ opacity: 1, x: 0 }} 
                             viewport={{ once: true }}
                             transition={{ duration: 0.8 }}
                            className="text-blue-500 text-[7vw] md:text-4xl font-semibold headingfont">
                            Discovery & Strategy
                          </motion.p>
                        </div>
                        <div className="content1 py-4 px-[5vw] text-justify">
                          <motion.div
                             initial={{ opacity: 0, x: -100 }} 
                             whileInView={{ opacity: 1, x: 0 }} 
                             viewport={{ once: true }}
                             transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-white font-[400] text-[1rem] pfont sans-serif">
                            We begin by thoroughly understanding your business vision
                            and target audience. Through detailed consultations, we:
                            <ul className="text-white list-disc pfont py-4 pl-5 sans-serif">
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
                          </motion.div>
                        </div>
                      </div>
                    </div>
                    <div className="lg:w-1/2 px-4">
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className=" h-[92%] w-[92%] flex justify-center bg-cover bg-center">
                        
                        <Image
                          className="w-[60%] object-contain"
                          src="/images/web-development/statergy.webp"
                          width={300}
                          height={300}
                          alt="web-development_statergy"
                        />
                      </motion.div>
                    </div>
                  </div>
                </div>
                <div className=" my-[7vh] mx-auto bgcolor">
                  <div className=" flex flex-wrap">
                    <div className="flex flex-wrap flex-col-reverse md:flex-row">
                      <div className="lg:w-1/2 px-4">
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8 }}
                          className="h-[92%] w-[92%] flex justify-center bg-cover bg-center">
                          <Image
                            className="w-[60%] object-contain"
                            src="/images/web-development/planning.webp"
                            width={300}
                            height={300}
                            alt="web-development_planning"
                          />
                        </motion.div>
                      </div>
                      <div className=" lg:w-1/2 px-4">
                        <div className=" text-center">
                          <motion.p
                             initial={{ opacity: 0, x: 100 }} 
                             whileInView={{ opacity: 1, x: 0 }} 
                             viewport={{ once: true }}
                             transition={{ duration: 0.8 }}
                            className="text-blue-500 text-4xl font-semibold headingfont">
                            Strategic Project Planning
                          </motion.p>
                        </div>
                        <div className="content1 py-4 px-[5vw] text-justify">
                          <motion.div
                             initial={{ opacity: 0, x: 100 }} 
                             whileInView={{ opacity: 1, x: 0 }} 
                             viewport={{ once: true }}
                             transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-white font-[400] text-[1rem] pfont sans-serif">
                            We create a comprehensive project roadmap that includes:{" "}
                            <ul className=" text-white list-disc pfont py-4 pl-5 sans-serif">
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
                          </motion.div>
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
                          <motion.p
                             initial={{ opacity: 0, x: -100 }} 
                             whileInView={{ opacity: 1, x: 0 }} 
                             viewport={{ once: true }}
                             transition={{ duration: 0.8 }}
                            className=" text-blue-500 text-4xl font-semibold headingfont">
                            Our Design Process
                          </motion.p>
                        </div>
                        <div className="content1 py-4 px-[5vw] text-justify">
                          <motion.div
                             initial={{ opacity: 0, x: -100 }} 
                             whileInView={{ opacity: 1, x: 0 }} 
                             viewport={{ once: true }}
                             transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-white font-[400] text-[1rem] pfont sans-serif">
                            Your concept is realized by our design team using:
                            <ul className="text-white list-disc pfont py-4 pl-5 sans-serif">
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
                          </motion.div>
                        </div>
                      </div>
                      <div className="lg:w-1/2 px-4">
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8 }}
                          className="h-[92%] w-[92%] flex justify-center bg-cover bg-center">
                          <Image
                            className="w-[55%] object-contain"
                            src="/images/web-development/design.webp"
                            width={300}
                            height={300}
                            alt="web-development_design"
                          />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" mx-auto">
                  <div className=" flex flex-wrap">
                    <div className=" flex flex-wrap flex-col-reverse md:flex-row">
                      <div className="lg:w-1/2 px-4">
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8 }}
                          className=" h-fit py-8 w-full flex justify-center bg-cover bg-center">
                          <Image
                            className="w-[60%] object-contain"
                            width={300}
                            height={300}
                            src="/images/web-development/developmentprocess.webp"
                            alt="web-developmentproces"
                          />
                        </motion.div>
                      </div>
                      <div className=" lg:w-1/2 px-4 flex flex-col justify-center">
                        <div className=" text-center">
                          <motion.p
                             initial={{ opacity: 0, x: 100 }} 
                             whileInView={{ opacity: 1, x: 0 }} 
                             viewport={{ once: true }}
                             transition={{ duration: 0.8 }}
                            className="text-blue-500 text-4xl font-semibold headingfont">
                            Development Process
                          </motion.p>
                        </div>
                        <div className="content1 py-4 px-[5vw] text-justify">
                          <motion.div
                             initial={{ opacity: 0, x: 100 }} 
                             whileInView={{ opacity: 1, x: 0 }} 
                             viewport={{ once: true }}
                             transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-white font-[400] text-[1rem] pfont sans-serif">
                            Our developers turn designs into a fully-functional,
                            scalable website:
                            <ul className="text-white list-disc pfont py-4 pl-5 sans-serif">
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
                          </motion.div>
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
                          <motion.p
                             initial={{ opacity: 0, x: -100 }} 
                             whileInView={{ opacity: 1, x: 0 }} 
                             viewport={{ once: true }}
                             transition={{ duration: 0.8 }}
                            className=" text-blue-500 text-4xl font-semibold  headingfont">
                            Comprehensive Website Testing
                          </motion.p>
                        </div>
                        <div className="content1 py-4 px-[5vw] text-justify">
                          <motion.div
                             initial={{ opacity: 0, x: -100 }} 
                             whileInView={{ opacity: 1, x: 0 }} 
                             viewport={{ once: true }}
                             transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-white font-[400] text-[1rem] pfont sans-serif">
                            We guarantee top-notch performance with:
                            <ul className=" text-white list-disc pfont py-4 pl-5 sans-serif">
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
                          </motion.div>
                        </div>
                      </div>
                      <div className="lg:w-1/2 px-4">
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8 }}
                          className="h-[92%] w-[92%] flex justify-center bg-cover bg-center">
                          <Image
                            className="w-[55%] object-contain"
                            src="/images/web-development/consul.webp"
                            width={300}
                            height={300}
                            alt="web-development_consult"
                          />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content1 py-8 px-[5vw] text-justify">
                  <div className=" flex flex-wrap">
                    <div className=" flex flex-wrap flex-col-reverse md:flex-row">
                      <div className="lg:w-1/2 px-4">
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8 }}
                          className="w-full flex justify-center bg-cover bg-center">
                          <Image
                            className="w-[70%] object-contain"
                            src="/images/web-development/maintain.webp"
                            width={300}
                            height={300}
                            alt="web-development_maintain"
                          />
                        </motion.div>
                      </div>
                      <div className=" lg:w-1/2 px-4 py-[7vh]">
                        <div className=" text-center">
                          <motion.p
                             initial={{ opacity: 0, x: 100 }} 
                             whileInView={{ opacity: 1, x: 0 }} 
                             viewport={{ once: true }}
                             transition={{ duration: 0.8 }}
                            className="text-blue-500 text-4xl font-semibold headingfont">
                            Comprehensive Website Maintenance
                          </motion.p>
                        </div>
                        <div className="content1 py-4 px-[5vw] text-justify flex flex-col justify-center items-center">
                          <motion.div
                             initial={{ opacity: 0, x: 100 }} 
                             whileInView={{ opacity: 1, x: 0 }} 
                             viewport={{ once: true }}
                             transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-white font-[400] text-[1rem] pfont sans-serif">
                            We keep your website running efficiently with:
                            <ul className="text-white list-disc pfont py-4 pl-5 sans-serif">
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
                          </motion.div>
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
