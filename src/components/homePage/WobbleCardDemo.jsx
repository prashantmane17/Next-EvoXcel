"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "../ui/wobble-card";

export function WobbleCardDemo() {
    return (
        (<div
            className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full p-4 pb-7 2xl:p-0 2xl:mb-10">
            <WobbleCard
                containerClassName="col-span-1 lg:col-span-2 h-full bg-[#221e2a] min-h-[500px] lg:min-h-[300px]"
                className="">
                <div className="max-w-xs">
                    <h2
                        className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        Boost Conversions with Smart Sequences
                    </h2>
                    <p className="mt-4 text-left  text-base/6 text-neutral-200">
                        Automated invites and follow-ups. <br />
                        Structured messaging for better engagement. <br />
                        Targeted communication with group prospects.
                    </p>
                </div>
                <div className="md:absolute -right-4 lg:right-0  top-10 md:mt-0  mt-10">

                    <Image
                        src="/images/Home/MC.webp"
                        width={400}
                        height={400}
                        alt="linear demo image"
                        className="filterobject-contain rounded-2xl" />
                </div>
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 bg-[#1d2b2b] md:min-h-[300px]">
                <h2
                    className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    Confident Campaign Launches.
                </h2>
                <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                    Boost response rates with precise targeting. <br />
                    Boost response rates with precise targeting. <br />
                    Manage multiple LinkedIn accounts from a single dashboard.
                </p>
            </WobbleCard>
            <WobbleCard
                containerClassName="col-span-1 lg:col-span-3 bg-[#232a35] min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
                <div className="max-w-sm">
                    <h2
                        className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        Optimize with Data-Driven Insights
                    </h2>
                    <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                        Evaluate campaign performance via a powerful dashboard. <br />
                        Access detailed demographic data for targeted insights. <br />
                        Identify trends across LinkedIn accounts.
                    </p>
                </div>
                <div className="md:absolute -right-10 md:-right-[0%] lg:right-0 md:top-20 md:mt-0  mt-10">
                    <Image
                        src="/images/Home/OWDDI.webp"
                        width={400}
                        height={400}
                        alt="linear demo image"
                        className="object-contain rounded-2xl" />
                </div>
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 bg-[#1d2b2b] min-h-[300px]">
                <h2
                    className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    Enhance Connections with Intelligent Communication.
                </h2>
                <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                    AI-driven sentiment analysis for smarter interactions. <br />
                    Centralized message management for efficiency. <br />
                    Tag and track warm leads with ease.
                </p>
            </WobbleCard>
            <WobbleCard
                containerClassName="col-span-1 lg:col-span-2 h-full bg-[#221e2a] min-h-[500px] lg:min-h-[300px]"
                className="">
                <div className="md:absolute md:-left-4  md:top-8 md:mb:0  mb-10">
                    <Image
                        src="/images/Home/SI.webp"
                        width={400}
                        height={400}
                        alt="linear demo image"
                        className="filterobject-contain rounded-2xl" />
                </div>
                <div className="flex justify-end">

                    <div className="max-w-xs">
                        <h2
                            className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                            Seamless Tool Integration
                        </h2>
                        <p className="mt-4 text-left  text-base/6 text-neutral-200">
                            Integrations with CRM sales tools. <br />
                            Applicant management system compatibility. <br />
                            Data enrichment tool integrations for enriched outreach.
                        </p>
                    </div>
                </div>
            </WobbleCard>

        </div>)
    );
}
