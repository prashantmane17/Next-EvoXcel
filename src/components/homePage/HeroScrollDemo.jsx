"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import Image from "next/image";
import { Cover } from "../ui/cover";

export function HeroScrollDemo() {
    return (
        (<div className="flex flex-col overflow-hidden">
            <ContainerScroll
                titleComponent={
                    <>
                        <h1 className="text-4xl font-semibold text-white mb-10">
                            Supercharge your Software<br />
                            <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none mt-3">
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
                    className="mx-auto rounded-2xl object-cover bg-black h-full object-left-top"
                    draggable={false} />
            </ContainerScroll>
        </div>)
    );
}
