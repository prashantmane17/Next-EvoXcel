"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Image from "next/image";

const NavItem = ({ href, children, dropdownContent, className = "" }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <div
      className={`cursor-pointer navBar lg:py-[15px] lg:px-[1vw] relative ${className}`}
    >
      <Link href={href} className={isActive ? "text-sky-500" : ""}>
        {children}
      </Link>
      {dropdownContent && (
        <div className="hidden absolute rounded-b-lg dropdown shadow-lg bg-white w-[100%] top-[50px] text-black">
          {dropdownContent}
        </div>
      )}
    </div>
  );
};

const NewNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = usePathname();
  const navRef = useRef();
  const menuRef = useRef(null);

  const navbarClasses = [
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
    scrolled
      ? "bg-white text-black"
      : location === "/"
        ? "text-white bgnav"
        : ["/sign-in/", "/sign-up/", "/blog/"].includes(location)
          ? "bg-white text-black"
          : "text-black bg-transparent",
  ];

  useEffect(() => {
    AOS.init({ duration: 500 });
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logoSrc =
    location === "/"
      ? scrolled
        ? "/images/Evoxcel.webp"
        : "/images/Evoxcel White.webp"
      : "/images/Evoxcel.webp";

  const navItems = [
    {
      name: "Products",
      href: "#",
      dropdownContent: (
        <section className="flex text-gray-700">
          <article className="w-[100%] gap-2 flex py-[2vh] px-[1vw]">
            <div className="w-full">
              <NavItem href="/linkedin-automation">
                <i className="fa-brands fa-linkedin text-[2vw] mr-[1vw]"></i>
                <div>
                  <p className="font-semibold">Linkedin Automation</p>
                  <p className="text-[14px] font-[500]">
                    Unlock Your Digital Potential with Expert Web Development...
                  </p>
                </div>
              </NavItem>
              <NavItem href="/email-automation">
                <i className="fa-solid fa-envelope-circle-check text-[2vw] mr-[1vw]"></i>
                <div>
                  <p className="font-semibold">Email Automation</p>
                  <p className="text-[14px] font-[500]">
                    In today&apos;s fast-paced digital world, having robust,
                    scalable...
                  </p>
                </div>
              </NavItem>
            </div>
            <div className="w-full">
              <NavItem href="/hr-management" className="w-1/2">
                <i className="fa-solid fa-envelope-circle-check text-[2vw] mr-[1vw]"></i>
                <div>
                  <p className="font-semibold">HR Management</p>
                  <p className="text-[14px] font-[500]">
                    HR Management boosts employee streamlines processes...
                  </p>
                </div>
              </NavItem>
            </div>
          </article>
        </section>
      ),
    },
    {
      name: "Services",
      href: "#",
      dropdownContent: (
        <section className="flex text-gray-700">
          <article className="w-[50%] py-[2vh] px-[1vw] font-[500]">
            <NavItem href="/software-development">
              <i className="fa-solid fa-computer text-[2vw] mr-[1vw]"></i>
              <div>
                <p className="font-semibold">Software Development</p>
                <p className="text-[14px]">
                  In today&apos;s fast-paced digital world, having robust,
                  scalable...
                </p>
              </div>
            </NavItem>
            <NavItem href="/lead-generation">
              <i className="fa-solid fa-filter-circle-dollar text-[2vw] mr-[1vw]"></i>
              <div>
                <p className="font-semibold">Lead Generation</p>
                <p className="text-[14px] font-[500]">
                  Lead generation is more than just a marketing strategy
                  it&lsquo;s the...
                </p>
              </div>
            </NavItem>
          </article>
          <article className="w-[50%] py-[2vh] pr-[1vw]">
            <NavItem href="/application-development">
              <i className="fa-solid fa-code text-[2vw] mr-[1vw]"></i>
              <div>
                <p className="font-semibold">Application Development</p>
                <p className="text-[14px] font-[500]">
                  We specialize in crafting tailored application development
                  solutions
                </p>
              </div>
            </NavItem>
            <NavItem href="/web-development">
              <i className="fa-solid fa-laptop-code text-[2vw] mr-[1vw]"></i>
              <div>
                <p className="font-semibold">Web Development</p>
                <p className="text-[14px] font-normal">
                  Unlock Your Digital Potential with Expert Web Development...
                </p>
              </div>
            </NavItem>
          </article>
        </section>
      ),
    },

    { name: "Pricing", href: "/pricing" },
    {
      name: "Insights",
      href: "#",
      dropdownContent: (
        <section className="flex">
          <article className="w-[50%] py-[2vh] px-[1vw]">
            <NavItem href="/blog">
              <i className="fa-solid fa-clipboard text-[2vw] mr-[1vw]"></i>
              <div>
                <p className="font-semibold">Blog</p>
                <p className="text-[14px] font-[500]">
                  Unlock Your Digital Potential with Expert Web Development...
                </p>
              </div>
            </NavItem>
            <a className="hover:bg-gray-200 px-[1vw] py-[3vh] rounded-lg flex items-center">
              <i className="fa-solid fa-note-sticky text-[2vw] mr-[1vw]"></i>
              <div>
                <p className="font-semibold">Case Studies</p>
                <p className="text-[14px] font-[500]">
                  In today&apos;s fast-paced digital world, having robust,
                  scalable...
                </p>
              </div>
            </a>
          </article>
          <article className="w-[50%] py-[2vh] pr-[1vw]">
            <a className="hover:bg-gray-200 px-[1vw] py-[3vh] rounded-lg flex items-center">
              <i className="fa-solid fa-handshake-angle text-[2vw] mr-[1vw]"></i>
              <div>
                <p className="font-semibold">Helpdesk</p>
                <p className="text-[14px] font-[500]">
                  We specialize in crafting tailored application development
                  solutions ...
                </p>
              </div>
            </a>
          </article>
        </section>
      ),
    },
    { name: "About Us", href: "/about-us" },
    { name: "Let's Connect", href: "/contact-us" },
    { name: "Sign up", href: "/sign-up" },
    { name: "Log in", href: "/sign-in", className: "text-white bg-black" },
  ];

  return (
    <div className="relative z-50">
      <nav ref={navRef} className={navbarClasses.join(" ")}>
        <Link href="/" onClick={() => setMenuOpen(false)}>
          <Image
            src={logoSrc}
            width={300}
            height={300}
            alt="Logo"
            loading="lazy"
            className="md:w-[5vw] w-[15vw] z-5"
          />
        </Link>
        <div className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <i
            className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"
              } text-black relative z-30 text-[1.5rem] cursor-pointer`}
          ></i>
        </div>
        <div className="md:flex hidden justify-between pfont relative w-[55%] text-[1vw] font-[600]">
          {navItems.map((item, index) => (
            <NavItem
              key={index}
              href={item.href}
              dropdownContent={item.dropdownContent}
              className={item.className}
            >
              {item.name}{" "}
              {item.dropdownContent && (
                <i className="fa-solid fa-caret-down ml-1"></i>
              )}
            </NavItem>
          ))}
        </div>
        {menuOpen && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black opacity-0 z-10"
            onClick={() => setMenuOpen(false)}
          ></div>
        )}
        <ul
          ref={menuRef}
          className={`md:hidden flex flex-col items-start absolute bg-white top-[0vh] left-0 w-1/2 h-[100vh] pt-5 z-50 transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          {/* Mobile menu content (unchanged) */}
        </ul>
      </nav>
    </div>
  );
};

export default NewNav;
