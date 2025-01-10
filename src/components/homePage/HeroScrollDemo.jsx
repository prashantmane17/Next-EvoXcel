"use client";
import React, { useEffect, useState } from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import Image from "next/image";
import { Cover } from "../ui/cover";


export function HeroScrollDemo() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const slides = [
        {
            text: "LinkedIn Automation",
            text1:
                "Automated LinkedIn Outreach | AI-Powered Lead Generation Efficiently connect with decision-makers through LinkedIn outreach automation. Utilize AI-powered lead generation tools to identify and engage with high-potential leads.",
        },
        {
            text: "Email Automation",
            text1:
                "Email Campaign Automation | Personalized Email Marketing Automate your email campaigns with powerful email automation tools that ensure consistent engagement and higher conversion rates. Enhance your marketing efforts with personalized email campaigns.",
        },
        {
            text: "Lead Generation",
            text1:
                "Targeted Lead Generation | ROI Optimization Implement strategic lead generation techniques to attract the right audience and convert prospects into loyal customers. Optimize your ROI with data-driven strategies that cultivate high-quality leads.",
        },
        {
            text: "Software Development",
            text1:
                "Custom Software Solutions | Scalable Software Development Develop custom software solutions that streamline business processes and boost operational efficiency. Empower your organization with scalable, robust software designed to meet your specific requirements.",
        },
        {
            text: "Web Development",
            text1:
                "Responsive Web Design | Custom Website Development Build responsive, high-performance websites that enhance user experience and drive business growth. Our custom-built solutions are tailored to your unique needs, ensuring your online presence stands out.",
        },
        {
            text: "Application Development",
            text1:
                "Mobile App Development | Web App Development Create innovative mobile and web applications tailored to your business needs. Leverage advanced technology to build user-friendly applications that drive success and enhance customer engagement.",
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isHovered) {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [isHovered, slides.length]);
    return (
        (<div className="flex flex-col overflow-hidden">
            <ContainerScroll
                titleComponent={
                    <>
                        <h1 className="text-4xl font-semibold text-white mb-24 ">
                            <span className="block relative bottom-1"> Supercharge your
                                <div className="relative  left-[4em] h-16 overflow-hidden">
                                    <div className="absolute w-[20em] 2xl:w-[22em] h-full text-center">
                                        {slides.map((slide, index) => (
                                            <div
                                                key={index}
                                                className={`absolute w-full h-full flex items-center justify-center transition-transform duration-1000 ${index === currentIndex
                                                    ? "translate-y-0"
                                                    : "translate-y-full"
                                                    } ${index ===
                                                        (currentIndex - 1 + slides.length) % slides.length
                                                        ? "translate-y-0"
                                                        : "-translate-y-full"
                                                    }`}
                                            >
                                                <h2 className="md:text-[1.8vw] lg:text-[2.5vw] text-[6vw] headingfont cursor-pointer text-green-400 font-semibold">
                                                    {slide.text}
                                                </h2>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </span> <br />
                            <span className="text-4xl md:text-[6rem] font-bold leading-none mt-3">
                                with <Cover className="mt-2"> Evoxcel</Cover>
                            </span>
                        </h1>
                    </>
                }>
                <Image
                    src="/images/Home/Hero-Image.webp"
                    alt="hero"
                    height={720}
                    width={1400}
                    className="mx-auto rounded-2xl object-cover bg-black h-full object-left-top"
                    draggable={false} />
            </ContainerScroll>
        </div>)
    );
}
