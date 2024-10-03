import React from "react";
import Image from "next/image";

import "./webDevelopment.css";
const WebDevelopment = () => {
  return (
    <>
      <section className="w-[100%]  bgwebdev px-[8vw] pt-[7vh] md:pt-[14vh] pb-[10vh] items-center justify-between md:flex">
        {/* <Helmet>
          <title>
            Expert Web Development Solutions for Business Growth | EvoXcel
          </title>
          <meta
            name="description"
            content="Boost your online presence with EvoXcel’s custom web development. Get tailored designs, advanced functionality, and ongoing support to drive growth and engagement."
          />
          <link
            rel="canonical"
            href="https://www.evoxcel.com/web-development"
          />
        </Helmet> */}
        <div data-aos="fade-up" className="md:w-[50%] text-white my-14 lg:my-0">
          <h1 className="capitalize headingfont text-[2rem]  leading-tight lg:text-[3vw] font-bold text-[#03449a] bg-clip-text bg-gradient-to-r from-slate-400,text-[#03449a]">
            Crafting Digital Experiences that Ignite and Elevate
          </h1>
          <p className="mt-4 pfont mb-10 max-w-lg leading-relaxed text-[4vw] md:text-[1.2vw] text-justify pfont text-black">
            We specialize in creating exceptional web experiences that captivate
            your audience and deliver measurable results for your business. By
            leveraging our web development expertise, we help you establish a
            compelling online presence that sets you apart in today’s fast-paced
            digital landscape.
          </p>
          {/* <a href="#" className="inline-block capitalize font-semibold bg-gradient-to-r from-purple-500 to-pink-800 rounded-full px-7 py-2 hover:from-purple-500 hover:to-gray-800">learn more</a> */}
        </div>
        <figure className="md:w-[50%] flex justify-center">
          <Image
            src="/images/Programmer.png"
            width={300}
            height={300}
            alt="Santa Claus"
            className="md:w-[70%]"
          />
        </figure>
      </section>

      <section className="w-[100%]  text-black h-100% py-9">
        <h1 className="text-center headingfont md:text-[2rem] font-bold px-2">
          Unleash Your Brand's Potential with a Premium Web Development Company
        </h1>
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
                    <h1 className="text-[7vw] md:text-4xl font-semibold headingfont">
                      Discovery & Strategy
                    </h1>
                  </div>
                  <div className="content1 py-4 px-[5vw] text-justify">
                    <p className="text-gray-800 font-[400] text-[1rem] pfont sans-serif">
                      We begin by thoroughly understanding your business vision
                      and target audience. Through detailed consultations, we:
                      <ul className="list-disc pfont py-4 pl-5 sans-serif">
                        <li>
                          Set Clear Objectives: Align your business goals with a
                          tailored web strategy.
                        </li>
                        <li>
                          Understand Your Audience: Conduct in-depth market
                          research to identify your audience's preferences and
                          behaviors.
                        </li>
                        <li>
                          Gather Requirements: Collaborate with stakeholders to
                          define the specific requirements of the project.
                        </li>
                      </ul>
                      This collaborative approach ensures a strategic plan with
                      well-defined milestones and timelines, driving your
                      project toward success.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 px-4">
                <div className=" h-full w-full flex justify-center bg-cover bg-center">
                  <Image
                    className="w-[60%] object-contain"
                    src="/images/statergy.png"
                    width={300}
                    height={300}
                    alt=""
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
                      src="/images/planning.png"
                      width={300}
                      height={300}
                      alt=""
                    />
                  </div>
                </div>
                <div className=" lg:w-1/2 px-4">
                  <div className=" text-center">
                    <h1 className="text-4xl font-semibold headingfont">
                      Strategic Project Planning
                    </h1>
                  </div>
                  <div className="content1 py-4 px-[5vw] text-justify">
                    <p className="text-gray-800 font-[400] text-[1rem] pfont sans-serif">
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
                    </p>
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
                    <h1 className="text-4xl font-semibold headingfont">
                      Our Design Process
                    </h1>
                  </div>
                  <div className="content1 py-4 px-[5vw] text-justify">
                    <p className="text-gray-800 font-[400] text-[1rem] pfont sans-serif">
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
                    </p>
                  </div>
                </div>
                <div className="lg:w-1/2 px-4">
                  <div className=" h-full w-full flex justify-center bg-cover bg-center">
                    <Image
                      className="w-[55%] object-contain"
                      src="/images/design.png"
                      width={300}
                      height={300}
                      alt=""
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
                  <div className=" h-[70vh] w-full flex justify-center bg-cover bg-center">
                    <Image
                      className="w-[60%] object-contain"
                      width={300}
                      height={300}
                      src="/images/developmentprocess.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className=" lg:w-1/2 px-4 flex flex-col justify-center">
                  <div className=" text-center">
                    <h1 className="text-4xl font-semibold headingfont">
                      Development Process
                    </h1>
                  </div>
                  <div className="content1 py-4 px-[5vw] text-justify">
                    <p className="text-gray-800 font-[400] text-[1rem] pfont sans-serif">
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
                    </p>
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
                    <h1 className="text-4xl font-semibold  headingfont">
                      Comprehensive Website Testing
                    </h1>
                  </div>
                  <div className="content1 py-4 px-[5vw] text-justify">
                    <p className="text-gray-800 font-[400] text-[1rem] pfont sans-serif">
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
                    </p>
                  </div>
                </div>
                <div className="lg:w-1/2 px-4">
                  <div className=" h-full w-full flex justify-center bg-cover bg-center">
                    <Image
                      className="w-[55%] object-contain"
                      src="/images/consult.png"
                      width={300}
                      height={300}
                      alt=""
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
                      src="/images/maintain.png"
                      width={300}
                      height={300}
                      alt=""
                    />
                  </div>
                </div>
                <div className=" lg:w-1/2 px-4 py-[7vh]">
                  <div className=" text-center">
                    <h1 className="text-4xl font-semibold headingfont">
                      Comprehensive Website Maintenance
                    </h1>
                  </div>
                  <div className="content1 py-4 px-[5vw] text-justify flex flex-col justify-center items-center">
                    <p className="text-gray-800 font-[400] text-[1rem] pfont sans-serif">
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
                    </p>
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
