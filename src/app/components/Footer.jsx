import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="new_footer_area bg_color">
        <div className="new_footer_top">
          <div className=" mx-auto px-[4vw]">
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
              <div className="w-full md:w-1/2 lg:w-[15%] px-4 mb-8">
                <div
                  className="about-widget pl-0 md:pl-8 wow fadeInLeft"
                  data-wow-delay="0.4s"
                >
                  <h3 className="f-title font-semibold text-lg text-gray-800 mb-4">
                    Services
                  </h3>
                  <ul className="list-none space-y-2">
                    <li>
                      <Link
                        href="/web-development"
                        className="text-gray-600 hover:text-gray-800"
                      >
                        Web Development
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/software-development"
                        className="text-gray-600 hover:text-gray-800"
                      >
                        Software Development
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/application-development"
                        className="text-gray-600 hover:text-gray-800"
                      >
                        Application Development
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/lead-generation"
                        className="text-gray-600 hover:text-gray-800"
                      >
                        Lead Generation
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-[15%] px-4 mb-8">
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
                        className="text-gray-600 hover:text-gray-800"
                      >
                        Linkedin Automation
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/email-automation"
                        className="text-gray-600 hover:text-gray-800"
                      >
                        Email Automation
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-[15%] px-2 mb-8">
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

              <div className="w-full md:w-1/2 lg:w-[25%] px-4 mb-8">
                <div
                  className="social-widget pl-0 md:pl-8 wow fadeInLeft"
                  data-wow-delay="0.8s"
                >
                  <h3 className="f-title font-semibold text-lg text-gray-800 mb-4">
                    Team Solutions
                  </h3>
                  <div className="f_social_icon flex space-x-4">
                    <Link
                      href="/"
                      className="fab fa-facebook text-gray-600 hover:text-gray-800"
                    ></Link>
                    <Link
                      href="/"
                      className="fab fa-twitter text-gray-600 hover:text-gray-800"
                    ></Link>
                    <a
                      href="https://www.linkedin.com/company/evoxcel-tech/"
                      className="fab fa-linkedin text-gray-600 hover:text-gray-800"
                    ></a>
                    <Link
                      href="/"
                      className="fab fa-pinterest text-gray-600 hover:text-gray-800"
                    ></Link>
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
                        href=""
                        className="d:text-[1.1vw] text-gray-600 hover:text-gray-800 block"
                      >
                        <i className="fa-solid fa-envelope mr-1 my-2"></i>{" "}
                        sales@evoxcel.com
                      </a>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer_bg">
            <div className="footer_bg_one"></div>
            <div className="footer_bg_two"></div>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="w-[100%] text-center mt-8">
            <p className="">© EvoXcel Inc.. 2024 All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
