"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import "./chat_Bot.css";

const Chatbot = () => {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const data = [
    {
      service: "Software Development",
      paragraph:
        "Integrate a cutting-edge phone system into your website to streamline",
      route: "/software-development",
    },
    {
      service: "Web Development",
      paragraph:
        "Integrate a cutting-edge phone system into your website to streamline",
      route: "/web-development",
    },
    {
      service: "Email Automation",
      paragraph:
        "Elevate your online presence with cutting edge web development solutions",
      route: "/email-automation",
    },
    {
      service: "HR Management",
      paragraph:
        "Integrate a cutting-edge phone system into your website to streamline",
      route: "/hr-management",
    },
    {
      service: "Lead Generation",
      paragraph:
        "Integrate a cutting-edge phone system into your website to streamline",
      route: "/lead-generation",
    },
    {
      service: "Linkedin Automation",
      paragraph:
        "Integrate a cutting-edge phone system into your website to streamline",
      route: "/linkedin-automation",
    },
  ];
  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)} // Open modal on button click
        className="fixed bottom-5 right-5 md:bottom-10 md:right-10 rounded-full w-[50px] h-[50px] md:w-[80px] md:h-[80px] lg:w-[4.5vw] lg:h-[4.5vw] p-0 bg-transparent chat_bot"
        aria-label="Open chat"
      >
        <Image
          src="/images/chatbot/chatbot.svg"
          width={80}
          height={80}
          alt="Chatbot"
          className="w-full h-full"
        />
      </Button>
    );
  }

  // Render the modal if isOpen is true
  return (
    <>
      <div className="fixed w-full h-[90vh] pt-[10vh] z-10 top-[8vh] lg:top-[10vh] bg-[#00000038] "></div>
      <div
        id="notificationModal"
        className="fixed bottom-4 right-0 md:right-4 z-50 w-full md:w-[380px]  md:h-[80vh] rounded-md shadow-xl "
      >
        <div className=" h-[60vh] md:h-[76vh]  py-5 rounded-lg ">
          <article className="px-5">
            <h1 className="mb-1 text-[5vw] md:text-[26px] text-white opacity-850 font-bold">
              Hi there <span className="wave text-[7vw] md:text-[3vw]">👋</span>
            </h1>
            <h1 className="mb-5 text-[5vw] md:text-[26px] text-white font-bold">
              What can we do for you?
            </h1>
            <div className="w-[100%] flex items-center justify-between bg-white h-[5vh] md:h-[7vh] rounded-lg mb-4">
              <input
                type="search"
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Find the right service"
                className="h-[100%] text-[13px] md:text-[14px] placeholder:text-black outline-none w-[90%] pl-4 rounded-lg"
              />
              <i className="fa-solid fa-magnifying-glass text-[#20ACE0] w-[10%]"></i>
            </div>
          </article>
          <div className="overflow-y-scroll h-[65%] no-scrollBar md:pr-4">
            {data
              .filter((x) =>
                search.toLowerCase() === ""
                  ? x
                  : x.service.toLowerCase().includes(search)
              )
              .map((x, index) => (
                <Link key={index} href={x.route}>
                  <div className="ml-5 mr-5 md:mr-0 bg-white p-2 md:p-4 rounded-lg border-gray-400 mb-1 md:mb-3 border">
                    <h2 className="text-[12px] md:text-[14px] font-[500]">
                      {x.service}
                    </h2>
                    <p className="text-[10px] md:text-[14px] mt-1 text-gray-500">
                      {x.paragraph} ...
                    </p>
                  </div>
                </Link>
              ))}
          </div>
          <Button
            onClick={() => setIsOpen(false)} // Close modal button
            className="absolute top-2 right-2 px-2 text-gray-500 text-lg -rotate-90"
            aria-label="Close chat"
          >
            <svg
              width={30}
              height={40}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={``}
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
