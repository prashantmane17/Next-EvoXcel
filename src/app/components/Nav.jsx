"use client";
import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const location = usePathname();
  const navRef = useRef();
  const menuRef = useRef(null);

  let navbarClasses = [
    "h-[8vh]",
    "md:h-[10vh]",
    "fixed",
    "top-0",
    "z-50",
    "flex",
    "justify-between",
    "w-[100%]",
    "pl-[5vw]",
    "pr-[7vw]",
    "items-center",
    "transition-colors",
    "duration-300",
  ];
  if (scrolled) {
    navbarClasses.push("bg-white", "text-black");
  } else {
    if (location === "/") {
      navbarClasses.push("text-white", "bgnav");
    } else if (
      location === "/sign-in/" ||
      location === "/sign-up/" ||
      location === "/blog/"
    ) {
      navbarClasses.push("bg-white", "text-black");
    } else {
      navbarClasses.push("text-black", "bg-transparent");
    }
  }
  const isActiveLink = (path) => {
    return path === location ? "text-sky-500" : "";
  };
  // Handle scroll event
  const handleScroll = () => {
    setScrolled(window.scrollY > 0);
  };

  // Toggle menu states
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    navbarClasses.push("bg-white", "text-black");
  };
  const toggleServices = () => {
    setServicesOpen((prev) => !prev);
    setProductsOpen(false); // Close products when services are opened
  };

  const toggleProducts = () => {
    setProductsOpen((prev) => !prev);
    setServicesOpen(false); // Close services when products are opened
  };

  // Close menu if clicking outside
  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setMenuOpen(false);
      setServicesOpen(false);
      setProductsOpen(false);
    }
  };

  useEffect(() => {
    AOS.init({ duration: 500 });
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        toggleMenu(); // Close menu if click is outside the menu
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  // Determine navbar classes based on scroll and location

  // Determine logo source based on route
  const logoSrc =
    location === "/"
      ? scrolled
        ? "/images/Evoxcel.webp"
        : "/images/Evoxcel White.webp"
      : "/images/Evoxcel.webp";

  return (
    <div className="relative z-50">
      <nav ref={navRef} className={navbarClasses.concat("").join(" ")}>
        <Link href="/" onClick={() => setMenuOpen(false)}>
          <Image
            src={logoSrc}
            width={300}
            height={300}
            alt="Logo"
            className="md:w-[5vw] w-[15vw] z-5"
          />
        </Link>
        <div className="md:hidden" onClick={toggleMenu}>
          {menuOpen ? (
            <i className="fa-solid fa-xmark text-black relative z-30 text-[1.5rem] cursor-pointer"></i>
          ) : (
            <i className="fa-solid fa-bars relative z-30 text-[1.5rem] cursor-pointer"></i>
          )}
        </div>
        <div className="md:flex hidden justify-between pfont relative w-[55%] text-[1vw] font-[600]">
          <div className="cursor-pointer servicedropdown navBar lg:py-[15px] lg:pr-[2.3vw]">
            Services <i className="fa-solid fa-caret-down ml-1"></i>
          </div>
          <div className="hidden absolute rounded-b-lg dropdown shadow-lg bg-white w-[100%] top-[50px] text-black">
            <section className="flex text-gray-700">
              <article className="w-[50%] py-[2vh] px-[1vw] font-[500]">
                <Link href="/web-development" className={`flex`} legacyBehavior>
                  <a
                    className={`hover:bg-gray-200  px-[1vw] py-[3vh] rounded-lg flex items-center ${isActiveLink(
                      "/web-development/"
                    )}`}
                  >
                    <i className="fa-solid fa-laptop-code text-[2vw] mr-[1vw]"></i>
                    {/* <img src={laptop} className='w-[50px] object-contain mr-2' alt="" /> */}
                    <div>
                      <p className="font-semibold ">Web Development</p>
                      <p className="text-[14px]">
                        Unlock Your Digital Potential with Expert Web
                        Development...
                      </p>
                    </div>
                  </a>
                </Link>

                <Link
                  href="/software-development"
                  className="flex"
                  legacyBehavior
                >
                  <a
                    className={`hover:bg-gray-200 px-[1vw] py-[3vh] rounded-lg flex items-center ${isActiveLink(
                      "/software-development/"
                    )}`}
                  >
                    <i className="fa-solid fa-computer text-[2vw] mr-[1vw]"></i>
                    <div>
                      <p className="font-semibold">Software Development</p>
                      <p className="text-[14px]">
                        In today’s fast-paced digital world, having robust,
                        scalable...
                      </p>
                    </div>
                  </a>
                </Link>
              </article>
              <article className="w-[50%] py-[2vh] pr-[1vw]">
                <Link
                  href="/application-development"
                  className="flex "
                  legacyBehavior
                >
                  <a
                    className={`hover:bg-gray-200  px-[1vw] py-[3vh] rounded-lg flex items-center ${isActiveLink(
                      "/application-development/"
                    )}`}
                  >
                    {/* <a
                      href="https://www.flaticon.com/free-icons/design"
                      className="hidden"
                      title="design icons"
                    >
                      Design icons created by Freepik - Flaticon
                    </a> */}
                    {/* <img src={application} className='w-[50px] object-contain  mr-2' alt="" /> */}
                    <i className="fa-solid fa-code  text-[2vw] mr-[1vw]"></i>
                    <div>
                      <p className="font-semibold ">Application Development</p>
                      <p className="text-[14px] font-[500]">
                        We specialize in crafting tailored application
                        development solutions
                      </p>
                    </div>
                  </a>
                </Link>
                <Link href="/lead-generation" className="flex " legacyBehavior>
                  <a
                    className={`hover:bg-gray-200  px-[1vw] py-[3vh] rounded-lg flex items-center ${isActiveLink(
                      "/lead-generation/"
                    )}`}
                  >
                    {/* <img src={lead} className='w-[60px] object-contain mr-2' alt="" /> */}
                    <i className="fa-solid fa-filter-circle-dollar text-[2vw] mr-[1vw]"></i>
                    <div>
                      <p className="font-semibold ">Lead Generation</p>
                      <p className="text-[14px] font-[500]">
                        Lead generation is more than just a marketing strategy
                        it&lsquo;s the...
                      </p>
                    </div>
                  </a>
                </Link>
              </article>
            </section>
          </div>
          <div className="cursor-pointer productdropdown lg:pr-[2.3vw] navBar lg:py-[15px] ">
            Products <i className="fa-solid fa-caret-down ml-1"></i>
          </div>
          <div className="hidden absolute dropdown1 bg-white w-[100%] top-[50px] text-black shadow-lg rounded-b-lg">
            <section className="flex text-gray-700">
              <article className="w-[100%] gap-2 flex py-[2vh] px-[1vw] ">
                <Link
                  href="/linkedin-automation"
                  className="flex "
                  legacyBehavior
                >
                  <a
                    className={`hover:bg-gray-200  px-[1vw] py-[3vh] rounded-lg flex items-center ${isActiveLink(
                      "/linkedin-automation/"
                    )}`}
                  >
                    {/* <img src={linkedin} className='w-[40px] object-contain  mr-2' alt="" /> */}
                    <i className="fa-brands fa-linkedin  text-[2vw] mr-[1vw]"></i>
                    <div>
                      <p className="font-semibold ">Linkedin Automation</p>
                      <p className="text-[14px] font-[500]">
                        Unlock Your Digital Potential with Expert Web
                        Development...
                      </p>
                    </div>
                  </a>
                </Link>
                <Link href="/email-automation" className="flex " legacyBehavior>
                  <a
                    className={`hover:bg-gray-200  px-[1vw] py-[3vh] rounded-lg flex items-center ${isActiveLink(
                      "/email-automation/"
                    )}`}
                  >
                    {/* <img src={outlook} className='w-[50px] object-contain mr-2' alt="" /> */}
                    <i className="fa-solid fa-envelope-circle-check  text-[2vw] mr-[1vw]"></i>
                    <div>
                      <p className="font-semibold ">Email Automation</p>
                      <p className="text-[14px] font-[500]">
                        In today’s fast-paced digital world, having robust,
                        scalable...
                      </p>
                    </div>
                  </a>
                </Link>
              </article>
            </section>
          </div>
          <div className="cursor-pointer lg:pr-[2vw] navBar lg:py-[15px] text-color relative z-20">
            <Link href={"/pricing"} className={`${isActiveLink("/pricing/")}`}>
              Pricing
            </Link>
          </div>
          {/* <Link to={'/about-us'}><li className='cursor-pointer navBar lg:py-[15px] text-color relative z-20'>Resources</li></Link> */}
          <div className="cursor-pointer resourcedropdown navBar lg:pr-[2vw] lg:py-[15px]">
            Insights <i className="fa-solid fa-caret-down ml-1"></i>
          </div>
          <div className="hidden absolute rounded-b-lg text-gray-700 dropdown2 shadow-lg bg-white w-[100%] top-[50px]">
            <section className="flex">
              <article className="w-[50%] py-[2vh] px-[1vw] ">
                <Link href="/blog" className="flex " legacyBehavior>
                  <a
                    className={`hover:bg-gray-200  px-[1vw] py-[3vh] rounded-lg flex items-center ${isActiveLink(
                      "/blog/"
                    )}`}
                  >
                    {/* <img src={laptop} className='w-[50px] object-contain mr-2' alt="" /> */}
                    <i className="fa-solid fa-clipboard text-[2vw] mr-[1vw]"></i>
                    <div>
                      <p className="font-semibold ">Blog</p>
                      <p className="text-[14px] font-[500]">
                        Unlock Your Digital Potential with Expert Web
                        Development...
                      </p>
                    </div>
                  </a>
                </Link>
                {/* <Link to='/case-study' className='flex ' legacyBehavior> */}
                <a className="hover:bg-gray-200  px-[1vw] py-[3vh] rounded-lg flex items-center">
                  {/* <img src={computer} className='w-[50px] object-contain mr-2' alt="" /> */}
                  <i className="fa-solid fa-note-sticky text-[2vw] mr-[1vw]"></i>
                  <div>
                    <p className="font-semibold ">Case Studies</p>
                    <p className="text-[14px] font-[500]">
                      In today’s fast-paced digital world, having robust,
                      scalable.p
                    </p>
                  </div>
                </a>
                {/* </Link> */}
              </article>
              <article className="w-[50%] py-[2vh] pr-[1vw]">
                {/* <Link to='/helpdesk' className='flex ' legacyBehavior> */}
                <a className="hover:bg-gray-200  px-[1vw] py-[3vh] rounded-lg flex items-center">
                  <i className="fa-solid fa-handshake-angle text-[2vw] mr-[1vw]"></i>
                  <div>
                    <p className="font-semibold ">Helpdesk </p>
                    <p className="text-[14px] font-[500]">
                      We specialize in crafting tailored application development
                      solutions ...
                    </p>
                  </div>
                </a>
                {/* </Link> */}
              </article>
            </section>
          </div>
          <div className="cursor-pointer  navBar lg:py-[15px] lg:pr-[2vw] text-color relative z-20">
            <Link
              href={"/about-us"}
              className={`${isActiveLink("/about-us/")}`}
            >
              About Us
            </Link>
          </div>

          <div className="relative left-[0.7vw]">
            <div className="cursor-pointer logindropdown   navBar lg:py-[15px] lg:pr-[2vw]">
              Log in <i className="fa-solid fa-caret-down ml-1"></i>
            </div>
            <div className="hidden absolute dropdown3 bg-white left-0 w-[10vw] top-[50px] text-black shadow-lg rounded-b-lg">
              <section className="flex">
                <article className="w-[100%] justify-between flex text-gray-700">
                  <Link
                    className={`hover:bg-gray-400 hover:text-white rounded-es-lg px-[0.5vw] py-[1.5vh] w-[50%] ${isActiveLink(
                      "/sign-up/"
                    )}`}
                    href="/sign-up"
                  >
                    Sign up
                  </Link>
                  <Link
                    className={`hover:bg-gray-400 hover:text-white rounded-ee-lg   px-[0.5vw] py-[1.5vh] w-[50%] ${isActiveLink(
                      "/sign-in/"
                    )}`}
                    href="/sign-in"
                  >
                    Sign in
                  </Link>
                </article>
              </section>
            </div>
          </div>
          <div className="cursor-pointer navBar lg:py-[15px] text-color relative z-20">
            <Link
              href={"/contact-us"}
              className={`${isActiveLink("/contact-us/")}`}
            >
              Let&lsquo;s Connect
            </Link>
          </div>
        </div>

        {menuOpen && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black opacity-0 z-10"
            onClick={toggleMenu} // Close menu when clicking on the overlay
          ></div>
        )}
        <ul
          ref={menuRef}
          className={`md:hidden flex flex-col items-start absolute bg-white top-[0vh] left-0 w-1/2 h-[100dvh] pt-5 z-50 transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <li className="px-4 py-2 ">
            <Image
              src={logoSrc}
              width={300}
              height={300}
              alt="Logo"
              className="md:w-[5vw] w-[15vw] z-5"
            />
          </li>
          <li
            className="px-4 py-2 border-b cursor-pointer text-black w-full"
            onClick={toggleServices}
          >
            Services <i className="fa-solid fa-caret-down ml-1"></i>
          </li>
          {servicesOpen && (
            <div className=" w-full">
              <Link
                href="/web-development"
                onClick={() => {
                  toggleMenu();
                  setServicesOpen(false);
                }}
                legacyBehavior
              >
                <a
                  className={`px-4 py-2 w-full inline-block text-black ${isActiveLink(
                    "/web-development/"
                  )}`}
                >
                  Web Development
                </a>
              </Link>
              <Link
                href="/software-development"
                onClick={() => {
                  toggleMenu();
                  setServicesOpen(false);
                }}
                legacyBehavior
              >
                <a
                  className={`px-4 py-2  w-full inline-block text-black ${isActiveLink(
                    "/software-development/"
                  )}`}
                >
                  Software Development
                </a>
              </Link>

              <Link
                href="/application-development"
                onClick={() => {
                  toggleMenu();
                  setServicesOpen(false);
                }}
                legacyBehavior
              >
                <a
                  className={`px-4 py-2  w-full inline-block text-black ${isActiveLink(
                    "/application-development/"
                  )}`}
                >
                  Application Development
                </a>
              </Link>
              <Link
                href="/lead-generation"
                onClick={() => {
                  toggleMenu();
                  setServicesOpen(false);
                }}
                legacyBehavior
              >
                <a
                  className={`px-4 py-2  w-full inline-block text-black ${isActiveLink(
                    "/lead-generation/"
                  )}`}
                >
                  Lead Generation
                </a>
              </Link>
            </div>
          )}
          <li
            className="px-4 py-2 border-b cursor-pointer text-black w-full"
            onClick={toggleProducts}
          >
            Products <i className="fa-solid fa-caret-down ml-1"></i>
          </li>
          {productsOpen && (
            <div className="w-full ">
              <Link
                href="/linkedin-automation"
                onClick={() => {
                  toggleMenu();
                  setProductsOpen(false);
                }}
                legacyBehavior
              >
                <a
                  className={`px-4 py-2 w-full inline-block text-black ${isActiveLink(
                    "/linkedin-automation/"
                  )}`}
                >
                  Linkedin Automation
                </a>
              </Link>
              <Link
                href="/email-automation"
                onClick={() => {
                  toggleMenu();
                  setProductsOpen(false);
                }}
                legacyBehavior
              >
                <a
                  className={`px-4 py-2 w-full inline-block text-black ${isActiveLink(
                    "/email-automation/"
                  )}`}
                >
                  Email Automation
                </a>
              </Link>
            </div>
          )}
          <li className="px-4 py-2 text-black border-b">
            <Link
              href="/pricing"
              onClick={toggleMenu}
              className={`w-full ${isActiveLink("/pricing/")}`}
            >
              Pricing
            </Link>
          </li>
          <li className="px-4 py-2 text-black border-b">
            <Link
              href="/about-us"
              onClick={toggleMenu}
              className={`w-full ${isActiveLink("/about-us/")}`}
            >
              About Us
            </Link>
          </li>
          <li className="px-4 py-2 text-black border-b">
            <Link
              href="/contact-us"
              onClick={toggleMenu}
              className={`w-full ${isActiveLink("/contact-us/")}`}
            >
              Contact Us
            </Link>
          </li>

          <li className="px-[4vw] pt-7 py-[2vw] text-[4vw] w-full relative  border-b border-transparent">
            <Link
              href="/sign-in"
              onClick={toggleMenu}
              className={`absolute w-fit left-5 rounded-lg bg-black text-white px-2 py-[2px] first:last:only:border-gray-400 ${isActiveLink(
                "/pricing/"
              )}`}
            >
              Sign in
            </Link>
            <Link
              href="/sign-up"
              onClick={toggleMenu}
              className={`absolute w-fit right-9  border-gray-400 rounded-lg bg-black text-white px-2 py-[2px] ${isActiveLink(
                "/pricing/"
              )}`}
            >
              Sign Up
            </Link>
          </li>
          <li className="px-[4vw] py-[2vw] text-[4vw]  text-black border-b border-transparent"></li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
