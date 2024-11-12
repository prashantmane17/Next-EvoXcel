"use client"; // Ensure this is a client component

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footers = () => {
  const [isMounted, setIsMounted] = useState(false);
  const email = "sales@evoxcel.com";
  const location = usePathname();

  useEffect(() => {
    setIsMounted(true); // Set mounted state
  }, []);
  const isActiveLink = (path) => {
    return path === location ? "text-sky-500" : "";
  };
  if (!isMounted) return null; // Prevent rendering until mounted
  return (
    <>
      <footer className="new_footer_area bg_color relative">
        {/* <div className="absolute w-full h-full bottom-0 z-1">
          <svg
            id="wave"
            style={{ transform: "rotate(0deg)", transition: "0.3s" }}
            viewBox="0 0 1440 490"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                <stop stopColor="rgba(243, 106, 62, 1)" offset="0%"></stop>
                <stop stopColor="rgba(255, 179, 11, 1)" offset="100%"></stop>
              </linearGradient>
            </defs>
            <path
              style={{ transform: "translate(0, 0px)", opacity: 1 }}
              fill="url(#sw-gradient-0)"
              d="M0,0L720,196L1440,49L2160,49L2880,49L3600,196L4320,98L5040,441L5760,392L6480,0L7200,441L7920,392L8640,49L9360,392L10080,245L10800,98L11520,441L12240,441L12960,294L13680,196L14400,49L15120,245L15840,294L16560,0L17280,392L17280,490L16560,490L15840,490L15120,490L14400,490L13680,490L12960,490L12240,490L11520,490L10800,490L10080,490L9360,490L8640,490L7920,490L7200,490L6480,490L5760,490L5040,490L4320,490L3600,490L2880,490L2160,490L1440,490L720,490L0,490Z"
            ></path>
          </svg>
        </div> */}
        <div className="new_footer_top z-2">
          <div className=" mx-auto px-[4vw] ">
            <div className="flex flex-wrap justify-between">
              <div className="w-full md:w-1/2 lg:w-[15%] pl-4 mb-8">
                <div
                  className="company_widget wow fadeInLeft"
                  data-wow-delay="0.2s"
                >
                  <h3 className="f-title font-semibold text-lg text-gray-800 mb-4">
                    Get in Touch
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Don’t miss any updates of our new templates and extensions.!
                  </p>
                  <form
                    action="#"
                    className="f_subscribe_two mailchimp"
                    method="post"
                    noValidate
                  >
                    <input
                      type="text"
                      name="EMAIL"
                      className="form-control ring-1 text-black ring-gray-300 memail w-full p-2 mb-4"
                      placeholder="Email"
                    />
                    <button
                      className="btn btn_get btn_get_two bg-blue-500 text-white py-2 px-4 rounded"
                      type="submit"
                    >
                      Subscribe
                    </button>
                    <p className="mchimp-errmessage hidden"></p>
                    <p className="mchimp-sucmessage hidden"></p>
                  </form>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-[15%]">
                <div
                  className="about-widget pl-0 md:pl-8 wow fadeInLeft"
                  data-wow-delay="0.4s"
                >
                  <h3 className="f-title font-semibold text-lg text-gray-800 mb-4">
                    Services
                  </h3>
                  <ul className="list-none space-y-2 ">
                    <li className="">
                      <Link
                        href="/software-development"
                        className={`text-gray-600  hover:text-gray-800  ${isActiveLink(
                          "/software-development/"
                        )}`}
                      >
                        Software Development
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/lead-generation"
                        className={`text-gray-600 hover:text-gray-800 ${isActiveLink(
                          "/lead-generation/"
                        )}`}
                      >
                        Lead Generation
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/application-development"
                        className={`text-gray-600 hover:text-gray-800 ${isActiveLink(
                          "/application-development/"
                        )}`}
                      >
                        Application Development
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/web-development"
                        className={`text-gray-600 hover:text-gray-800 ${isActiveLink(
                          "/web-development/"
                        )}`}
                      >
                        Web Development
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-[15%]">
                <div
                  className="about-widget pl-0 md:pl-8 wow fadeInLeft"
                  data-wow-delay="0.4s"
                >
                  <h3 className="f-title font-semibold text-lg text-gray-800 mb-4">
                    Products
                  </h3>
                  <ul className="list-none space-y-2">
                    <li>
                      <Link
                        href="/linkedin-automation"
                        className={`text-gray-600 hover:text-gray-800 ${isActiveLink(
                          "/linkedin-automation/"
                        )}`}
                      >
                        Linkedin Automation
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/hr-management"
                        className={`text-gray-600 hover:text-gray-800 ${isActiveLink(
                          "/hr-management/"
                        )}`}
                      >
                        HR Management
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/email-automation"
                        className={`text-gray-600 hover:text-gray-800 ${isActiveLink(
                          "/email-automation/"
                        )}`}
                      >
                        Email Automation
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-[15%]">
                <div
                  className="about-widget pl-0 md:pl-8 wow fadeInLeft"
                  data-wow-delay="0.6s"
                >
                  <h3 className="f-title font-semibold text-lg text-gray-800 mb-4">
                    Help
                  </h3>
                  <ul className="list-none space-y-2">
                    <li>
                      <Link
                        href=""
                        className="text-gray-600 hover:text-gray-800"
                      >
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-gray-600 hover:text-gray-800"
                      >
                        Term &amp; conditions
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-gray-600 hover:text-gray-800"
                      >
                        Reporting
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-gray-600 hover:text-gray-800"
                      >
                        Documentation
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-gray-600 hover:text-gray-800"
                      >
                        Support Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-gray-600 hover:text-gray-800"
                      >
                        Privacy
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-[25%]">
                <div
                  className="social-widget pl-0 md:pl-8 wow fadeInLeft"
                  data-wow-delay="0.8s"
                >
                  <h3 className="f-title font-semibold text-lg text-gray-800 mb-4">
                    Team Solutions
                  </h3>
                  <div className="f_social_icon flex space-x-4">
                    <Link
                      href="https://www.facebook.com/profile.php?id=61566321227448"
                      className="fab fa-facebook text-gray-600 hover:text-gray-800"
                      title="Follow us on Facebook"
                      aria-label="Facebook"
                      target="_blank"
                      rel="noopener noreferrer"
                    />

                    <Link
                      href="https://www.youtube.com/@EvoXcel-tech"
                      className="fab fa-youtube text-gray-600 hover:text-gray-800"
                      title="Subscribe to our YouTube channel"
                      aria-label="YouTube"
                      target="_blank"
                      rel="noopener noreferrer"
                    />

                    <Link
                      href="https://www.linkedin.com/company/evoxcel-tech/"
                      className="fab fa-linkedin text-gray-600 hover:text-gray-800"
                      title="Connect with us on LinkedIn"
                      aria-label="LinkedIn"
                      target="_blank"
                      rel="noopener noreferrer"
                    />

                    <Link
                      href="https://www.instagram.com/evoxcel/"
                      className="fab fa-instagram text-gray-600 hover:text-gray-800"
                      title="Follow us on Instagram"
                      aria-label="Instagram"
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  </div>
                  <div>
                    <h3 className="mt-[5vh] mb-[1vh] text-gray-600 hover:text-gray-800">
                      INDIA
                    </h3>
                    <ul>
                      <li className="text-gray-600 hover:text-gray-800 md:text-[1.1vw]">
                        No.8, 2nd Floor, 20th Main,
                      </li>
                      <li className="text-gray-600 hover:text-gray-800 md:text-[1.1vw]">
                        5th Block, Koramangala, Bangalore 560095
                      </li>
                      <a
                        href={`mailto:${email}`}
                        className="d:text-[1.1vw] text-gray-600 hover:text-gray-800 block"
                      >
                        <i className="fa-solid fa-envelope mr-1 my-2"></i>{" "}
                        {email}
                      </a>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="footer_bg">
            <div className="footer_bg_one"></div>
            <div className="footer_bg_two"></div>
          </div> */}
        </div>
        <div className="footer_bottom">
          <div className="w-[100%] text-center text-black mt-8">
            <p className="">© EvoXcel Inc.. 2024 All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footers;
