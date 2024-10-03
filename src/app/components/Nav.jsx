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

  const handleScroll = () => {
    setScrolled(window.scrollY > 0);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
  };

  const toggleProducts = () => {
    setProductsOpen(!productsOpen);
  };

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

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

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
      location === "/sign-in" ||
      location === "/sign-up" ||
      location === "/blog"
    ) {
      navbarClasses.push("bg-white", "text-black");
    } else {
      navbarClasses.push("text-black", "bg-transparent");
    }
  }

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
        <ul className="md:flex hidden justify-between pfont relative w-[55%] text-[1vw] font-[600]">
          <li className="cursor-pointer servicedropdown navBar lg:py-[15px] lg:pr-[2.3vw]">
            Services <i className="fa-solid fa-caret-down ml-1"></i>
          </li>
          <ul className="hidden absolute rounded-b-lg dropdown shadow-lg bg-white w-[100%] top-[50px] text-black">
            <section className="flex text-gray-700">
              <article className="w-[50%] py-[2vh] px-[1vw] font-[500]">
                <Link href="/web-development" className="flex ">
                  <p className="hover:bg-gray-200  px-[1vw] py-[3vh] rounded-lg flex items-center">
                    <i className="fa-solid fa-laptop-code text-[2vw] mr-[1vw]"></i>
                    {/* <img src={laptop} className='w-[50px] object-contain mr-2' alt="" /> */}
                    <span>
                      <li className="font-semibold ">Web Development</li>
                      <li className="text-[14px]">
                        Unlock Your Digital Potential with Expert Web
                        Development...
                      </li>
                    </span>
                  </p>
                </Link>
                <Link href="/software-development" className="flex ">
                  <p className="hover:bg-gray-200  px-[1vw] py-[3vh] rounded-lg flex items-center">
                    {/* <img src={computer} className='w-[50px] object-contain mr-2' alt="" /> */}
                    <i className="fa-solid fa-computer  text-[2vw] mr-[1vw]"></i>
                    <span>
                      <li className="font-semibold ">Software Development</li>
                      <li className="text-[14px]">
                        In today’s fast-paced digital world, having robust,
                        scalable...
                      </li>
                    </span>
                  </p>
                </Link>
              </article>
              <article className="w-[50%] py-[2vh] pr-[1vw]">
                <Link href="/application-development" className="flex ">
                  <p className="hover:bg-gray-200  px-[1vw] py-[3vh] rounded-lg flex items-center">
                    <a
                      href="https://www.flaticon.com/free-icons/design"
                      className="hidden"
                      title="design icons"
                    >
                      Design icons created by Freepik - Flaticon
                    </a>
                    {/* <img src={application} className='w-[50px] object-contain  mr-2' alt="" /> */}
                    <i className="fa-solid fa-code  text-[2vw] mr-[1vw]"></i>
                    <span>
                      <li className="font-semibold ">
                        Application Development
                      </li>
                      <li className="text-[14px] font-[500]">
                        We specialize in crafting tailored application
                        development solutions ...
                      </li>
                    </span>
                  </p>
                </Link>
                <Link href="/lead-generation" className="flex ">
                  <p className="hover:bg-gray-200  px-[1vw] py-[3vh] rounded-lg flex items-center">
                    {/* <img src={lead} className='w-[60px] object-contain mr-2' alt="" /> */}
                    <i className="fa-solid fa-filter-circle-dollar text-[2vw] mr-[1vw]"></i>
                    <p>
                      <li className="font-semibold ">Lead Generation</li>
                      <li className="text-[14px] font-[500]">
                        {" "}
                        Lead generation is more than just a marketing strategy
                        it's the...
                      </li>
                    </p>
                  </p>
                </Link>
              </article>
            </section>
          </ul>
          <li className="cursor-pointer productdropdown lg:pr-[2.3vw] navBar lg:py-[15px] ">
            Products <i className="fa-solid fa-caret-down ml-1"></i>
          </li>
          <ul className="hidden absolute dropdown1 bg-white w-[100%] top-[50px] text-black shadow-lg rounded-b-lg">
            <section className="flex text-gray-700">
              <article className="w-[100%] gap-2 flex py-[2vh] px-[1vw] ">
                <Link href="/linkedin-automation" className="flex ">
                  <p className="hover:bg-gray-200  px-[1vw] py-[3vh] rounded-lg flex items-center">
                    {/* <img src={linkedin} className='w-[40px] object-contain  mr-2' alt="" /> */}
                    <i className="fa-brands fa-linkedin  text-[2vw] mr-[1vw]"></i>
                    <div>
                      <li className="font-semibold ">Linkedin Automation</li>
                      <li className="text-[14px] font-[500]">
                        Unlock Your Digital Potential with Expert Web
                        Development...
                      </li>
                    </div>
                  </p>
                </Link>
                <Link href="/email-automation" className="flex ">
                  <p className="hover:bg-gray-200  px-[1vw] py-[3vh] rounded-lg flex items-center">
                    {/* <img src={outlook} className='w-[50px] object-contain mr-2' alt="" /> */}
                    <i className="fa-solid fa-envelope-circle-check  text-[2vw] mr-[1vw]"></i>
                    <div>
                      <li className="font-semibold ">Email Automation</li>
                      <li className="text-[14px] font-[500]">
                        In today’s fast-paced digital world, having robust,
                        scalable...
                      </li>
                    </div>
                  </p>
                </Link>
              </article>
            </section>
          </ul>
          <Link href={"/pricing"}>
            <li className="cursor-pointer lg:pr-[2vw] navBar lg:py-[15px] text-color relative z-20">
              Pricing
            </li>
          </Link>
          {/* <Link to={'/about-us'}><li className='cursor-pointer navBar lg:py-[15px] text-color relative z-20'>Resources</li></Link> */}
          <li className="cursor-pointer resourcedropdown navBar lg:py-[15px]">
            Insights <i className="fa-solid fa-caret-down ml-1"></i>
          </li>
          <ul className="hidden absolute rounded-b-lg text-gray-700 dropdown2 shadow-lg bg-white w-[100%] top-[50px]">
            <section className="flex">
              <article className="w-[50%] py-[2vh] px-[1vw] ">
                <Link href="/blog" className="flex ">
                  <p className="hover:bg-gray-200  px-[1vw] py-[3vh] rounded-lg flex items-center">
                    {/* <img src={laptop} className='w-[50px] object-contain mr-2' alt="" /> */}
                    <i className="fa-solid fa-clipboard text-[2vw] mr-[1vw]"></i>
                    <div>
                      <li className="font-semibold ">Blog</li>
                      <li className="text-[14px] font-[500]">
                        Unlock Your Digital Potential with Expert Web
                        Development...
                      </li>
                    </div>
                  </p>
                </Link>
                {/* <Link to='/case-study' className='flex '> */}
                <div className="hover:bg-gray-200  px-[1vw] py-[3vh] rounded-lg flex items-center">
                  {/* <img src={computer} className='w-[50px] object-contain mr-2' alt="" /> */}
                  <i className="fa-solid fa-note-sticky text-[2vw] mr-[1vw]"></i>
                  <div>
                    <li className="font-semibold ">Case Studies</li>
                    <li className="text-[14px] font-[500]">
                      In today’s fast-paced digital world, having robust,
                      scalable...
                    </li>
                  </div>
                </div>
                {/* </Link> */}
              </article>
              <article className="w-[50%] py-[2vh] pr-[1vw]">
                {/* <Link to='/helpdesk' className='flex '> */}
                <div className="hover:bg-gray-200  px-[1vw] py-[3vh] rounded-lg flex items-center">
                  <a
                    href="https://www.flaticon.com/free-icons/design"
                    className="hidden"
                    title="design icons"
                  >
                    Design icons created by Freepik - Flaticon
                  </a>
                  {/* <img src={application} className='w-[50px] object-contain  mr-2' alt="" /> */}
                  <i className="fa-solid fa-handshake-angle text-[2vw] mr-[1vw]"></i>
                  <div>
                    <li className="font-semibold ">Helpdesk </li>
                    <li className="text-[14px] font-[500]">
                      We specialize in crafting tailored application development
                      solutions ...
                    </li>
                  </div>
                </div>
                {/* </Link> */}
              </article>
            </section>
          </ul>

          <div className="relative left-[0.7vw]">
            <li className="cursor-pointer logindropdown  w-[10vw] navBar lg:py-[15px] lg:pl-[2.3vw]">
              Log in <i className="fa-solid fa-caret-down ml-1"></i>
            </li>
            <ul className="hidden absolute dropdown3 bg-white left-0 w-[10vw] top-[50px] text-black shadow-lg rounded-b-lg">
              <section className="flex">
                <article className="w-[100%] justify-between flex text-gray-700">
                  <Link
                    className="hover:bg-gray-400 hover:text-white rounded-es-lg px-[0.5vw] py-[1.5vh] w-[50%]"
                    href="/sign-up"
                  >
                    <button>Sign up</button>
                  </Link>
                  <Link
                    className="hover:bg-gray-400 hover:text-white rounded-ee-lg   px-[0.5vw] py-[1.5vh] w-[50%]"
                    href="/sign-in"
                  >
                    <button>Sign in</button>
                  </Link>
                </article>
              </section>
            </ul>
          </div>
          <Link href={"/contact-us"}>
            <li className="cursor-pointer navBar lg:py-[15px] text-color relative z-20">
              Let's Connect
            </li>
          </Link>
        </ul>
        {/* <ul className={`md:flex hidden md:w-[40%] justify-between text-[1vw] font-[600] `}>
                <li className='cursor-pointer servicedropdown navBar lg:py-[5px] relative z-20'>Services <i className="fa-solid fa-caret-down ml-1"></i></li>
                <div className='text-black border-t-[5px] p-2 border-sky-500 dropdown bg-white absolute top-[7vh] z-10 font-[500] text-[1vw]'>
                    <ul className='text-[0.9vw] font-[600]'>
                        <Link to='/web-development'><li className='px-[1vw] py-[1vh] hover:bg-gray-400'>Web Development</li></Link>
                        <Link to='/software-development'><li className='px-[1vw] py-[1vh] hover:bg-gray-400'>Software Development</li></Link>
                        <Link to='/application-development'><li className='px-[1vw] py-[1vh] hover:bg-gray-400'>Application Development</li></Link>
                        <Link to='/lead-generation'><li className='px-[1vw] py-[1vh] hover:bg-gray-400'>Lead Generation</li></Link>
                    </ul>
                </div>
                <div>
                    <li className='cursor-pointer productdropdown navBar lg:py-[5px] relative z-20'>Products <i className="fa-solid fa-caret-down ml-1"></i></li>
                    <div className='text-black dropdown1 border-t-[5px] p-2 border-sky-500 bg-white absolute top-[7vh] z-10 font-[500] text-[1vw]'>
                        <ul className='text-[0.9vw] font-[600]'>
                            <Link to='/linkedin-automation'><li className='px-[1vw] py-[1vh] hover:bg-gray-400'>Linkedin Automation</li></Link>
                            <Link to='/email-automation'><li className='px-[1vw] py-[1vh] hover:bg-gray-400'>Email Automation</li></Link>
                        </ul>
                    </div>
                </div>
                <Link to={'/pricing'}><li className='cursor-pointer navBar lg:py-[5px] text-color relative z-20'>Pricing</li></Link>
                <Link to={'/about-us'}><li className='cursor-pointer navBar lg:py-[5px] text-color relative z-20'>About us</li></Link>
                <Link to={'/contact-us'}><li className='cursor-pointer navBar lg:py-[5px] text-color relative z-20'>Let's Connect</li></Link>
            </ul> */}
        <ul
          className={`md:hidden flex flex-col items-start absolute bg-white top-[0vh] left-0 w-1/2 h-screen pt-5 z-20 transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <li
            className="px-4 py-2 border-b cursor-pointer text-black w-full"
            onClick={toggleServices}
          >
            Services <i className="fa-solid fa-caret-down ml-1"></i>
          </li>
          {servicesOpen && (
            <ul className="pl-4">
              <Link
                href="/web-development"
                onClick={() => {
                  toggleMenu();
                  setServicesOpen(false);
                }}
              >
                <li className="px-4 py-2  text-black">Web Development</li>
              </Link>

              <Link
                href="/application-development"
                onClick={() => {
                  toggleMenu();
                  setServicesOpen(false);
                }}
              >
                <li className="px-4 py-2  text-black">
                  Application Development
                </li>
              </Link>
              <Link
                href="/lead-generation"
                onClick={() => {
                  toggleMenu();
                  setServicesOpen(false);
                }}
              >
                <li className="px-4 py-2  text-black">Lead Generation</li>
              </Link>
            </ul>
          )}
          <li
            className="px-4 py-2 border-b cursor-pointer text-black w-full"
            onClick={toggleProducts}
          >
            Products <i className="fa-solid fa-caret-down ml-1"></i>
          </li>
          {productsOpen && (
            <ul className="pl-4">
              <Link
                href="/linkedin-automation"
                onClick={() => {
                  toggleMenu();
                  setProductsOpen(false);
                }}
              >
                <li className="px-4 py-2 text-black">Linkedin Automation</li>
              </Link>
              <Link
                href="/email-automation"
                onClick={() => {
                  toggleMenu();
                  setProductsOpen(false);
                }}
              >
                <li className="px-4 py-2 text-black">Email Automation</li>
              </Link>
            </ul>
          )}
          <Link href="/pricing" onClick={toggleMenu} className="w-full">
            <li className="px-4 py-2 text-black border-b">Pricing</li>
          </Link>
          <Link href="/about-us" onClick={toggleMenu} className="w-full">
            <li className="px-4 py-2 text-black border-b">About Us</li>
          </Link>
          <Link href="/contact-us" onClick={toggleMenu} className="w-full">
            <li className="px-4 py-2 text-black border-b">Contact Us</li>
          </Link>

          <Link
            href="/sign-in"
            onClick={toggleMenu}
            className="absolute bottom-[6vh] left-[3vw] border border-gray-400 rounded-lg"
          >
            <li className="px-[4vw] py-[2vw] text-[3vw] text-black border-b border-transparent">
              Sign in
            </li>
          </Link>
          <Link
            href="/sign-up"
            onClick={toggleMenu}
            className="absolute bottom-[6vh] left-[25vw] border border-gray-400 rounded-lg"
          >
            <li className="px-[4vw] py-[2vw] text-[3vw]  text-black border-b border-transparent">
              Sign Up
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
