"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
    {
        title: "Confident Campaign Launches.",
        description:
            "Boost response rates with precise targeting Boost response rates with precise targeting  Manage multiple LinkedIn accounts from a single dashboard.",
        content: (
            <div
                className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/images/Home/Campaign-Image.webp"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo" />
            </div>
        ),
    },
    {
        title: "Boost Conversions with Smart Sequences.",
        description:
            "Automated invites and follow-ups, Structured messaging for better engagement, Targeted communication with group prospects.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/images/Home/MC.webp"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo" />
            </div>
        ),
    },
    {
        title: "Enhance Connections with Intelligent Communication",
        description:
            " AI-driven sentiment analysis for smarter interactions, Centralized message management for efficiency, Tag and track warm leads with ease.",
        content: (
            <div
                className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/images/Home/SCIC.webp"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo" />
            </div>
        ),
    },
    {
        title: "Seamless Tool Integration",
        description:
            "Integrations with CRM sales tools, Applicant management system compatibility, Data enrichment tool integrations for enriched outreach.",
        content: (
            <div
                className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/images/Home/OWDDI.webp"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo" />
            </div>
        ),
    },
    {
        title: "Optimize with Data-Driven Insights",
        description:
            "Evaluate campaign performance via a powerful dashboard, Access detailed demographic data for targeted insights, Identify trends across LinkedIn accounts.",
        content: (
            <div
                className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/images/Home/SI.webp"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo" />
            </div>
        ),
    },
];
export function StickyScrollRevealDemo() {
    return (
        (<div className="p-10">
            <StickyScroll content={content} />
        </div>)
    );
}
