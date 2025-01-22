"use client";
import React, { useEffect, useState } from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import Image from "next/image";
import { Cover } from "../ui/cover";
import SuperchargeShowcase from "./SuperchargeShowcase";


export function HeroScrollDemo() {

    return (
        (<div className="md:flex flex-col md:overflow-hidden">
            <ContainerScroll
                titleComponent={
                    <>
                        <h1 className="text-4xl font-semibold text-white md:mb-2 ">
                            <span className="block 2xl:text-5xl"> Supercharge your
                                <SuperchargeShowcase />
                            </span>
                            <span className="text-4xl md:text-[6rem] font-bold leading-none ">
                                with <Cover className=""> Evoxcel</Cover>
                            </span>
                        </h1>
                    </>
                }>
                <Image
                    src="/images/Home/Hero-Image.webp"
                    alt="hero"
                    height={720}
                    width={1400}
                    className="mx-auto rounded-2xl md:object-cover bg-black 2xl:h-full md:object-left-top"
                    draggable={false} />
            </ContainerScroll>
        </div>)
    );
}
