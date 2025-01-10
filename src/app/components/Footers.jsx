"use client"; // Ensure this is a client component

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FloatingDockDemo } from "@/components/homePage/FloatingDockDemo";

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
      {/* <div className="w-full h-20vh relative top-[1px]">
        <Image
          // src="/images/chatbot/mountain-bg.webp"
          src="/images/chatbot/footer_background.svg"
          width={200}
          height={300}
          alt="Footer"
          className="w-full h-full"
        />
      </div> */}
      {/* <footer className="new_footer_area bg_color relative "> */}
      <footer className=" bg-gradient-to-br from-stone-500 to-slate-700 relative ">
        <div className=" container m-auto new_footer_top z-2">
          <div className=" mx-auto px-[4vw] ">
            <div className="flex flex-wrap justify-between">
              <div className="w-full md:w-1/2 lg:w-[15%] pl-4 mb-1">
                <div
                  className="company_widget wow fadeInLeft"
                  data-wow-delay="0.2s"
                >
                  <h3 className="f-title font-semibold text-lg text-white mb-4">
                    Get in Touch
                  </h3>
                  <p className="text-white mb-4">
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
                        className={`text-white  hover:text-gray-300  ${isActiveLink(
                          "/software-development/"
                        )}`}
                      >
                        Software Development
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/lead-generation"
                        className={`text-white hover:text-gray-300 ${isActiveLink(
                          "/lead-generation/"
                        )}`}
                      >
                        Lead Generation
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/application-development"
                        className={`text-white hover:text-gray-300 ${isActiveLink(
                          "/application-development/"
                        )}`}
                      >
                        Application Development
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/web-development"
                        className={`text-white hover:text-gray-300 ${isActiveLink(
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
                        className={`text-white hover:text-gray-300 ${isActiveLink(
                          "/linkedin-automation/"
                        )}`}
                      >
                        Linkedin Automation
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/hr-management"
                        className={`text-white hover:text-gray-300 ${isActiveLink(
                          "/hr-management/"
                        )}`}
                      >
                        HR Management
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/email-automation"
                        className={`text-white hover:text-gray-300 ${isActiveLink(
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
                      <Link href="" className="text-white hover:text-gray-300">
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-white hover:text-gray-300">
                        Term &amp; conditions
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-white hover:text-gray-300">
                        Reporting
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-white hover:text-gray-300">
                        Documentation
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-white hover:text-gray-300">
                        Support Policy
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-white hover:text-gray-300">
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
                  <FloatingDockDemo />
                  {/* <div className="f_social_icon flex space-x-4">
                    <Link
                      href="https://www.facebook.com/profile.php?id=61566321227448"
                      className="fab fa-facebook text-white hover:text-gray-300"
                      title="Follow us on Facebook"
                      aria-label="Facebook"
                      target="_blank"
                      rel="noopener noreferrer"
                    />

                    <Link
                      href="https://www.youtube.com/@EvoXcel-tech"
                      className="fab fa-youtube text-white hover:text-gray-300"
                      title="Subscribe to our YouTube channel"
                      aria-label="YouTube"
                      target="_blank"
                      rel="noopener noreferrer"
                    />

                    <Link
                      href="https://www.linkedin.com/company/evoxcel-tech/"
                      className="fab fa-linkedin text-white hover:text-gray-300"
                      title="Connect with us on LinkedIn"
                      aria-label="LinkedIn"
                      target="_blank"
                      rel="noopener noreferrer"
                    />

                    <Link
                      href="https://www.instagram.com/evoxcel/"
                      className="fab fa-instagram text-white hover:text-gray-300"
                      title="Follow us on Instagram"
                      aria-label="Instagram"
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  </div> */}
                  <div>
                    <h3 className="mt-[5vh] mb-[1vh] text-white hover:text-gray-300">
                      INDIA
                    </h3>
                    <ul>
                      <li className="text-white hover:text-gray-300 md:text-[1.1vw]">
                        #99, 10th Cross, 20th Main
                      </li>
                      <li className="text-white hover:text-gray-300 md:text-[1.1vw]">
                        BTM loayout 1st stage, Bangalore 560068
                      </li>
                      <a
                        href={`mailto:${email}`}
                        className="d:text-[1.1vw] text-white hover:text-gray-300 block"
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
          <div className="w-[100%] text-center text-white mt-8">
            <p className="">© EvoXcel Inc.. 2024 All rights reserved.</p>
          </div>
        </div>

      </footer>
    </>
  );
};

export default Footers;
