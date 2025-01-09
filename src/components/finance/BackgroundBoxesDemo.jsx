"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";

export function BackgroundBoxesDemo() {
    return (
        (<div
            className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
            <div
                className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
            <Boxes />

            <div className="relative z-10 text-center">
                <div className={cn("text-gray-200  md:text-base  text-[4.6vw]")}>
                    Transform Financial Management with
                </div>
                <div className="space-y-4">
                    <h1 className=" md:text-[3.1rem] text-[6vw] font-bold text-white tracking-tight">
                        EvoXcel&apos;s Advanced
                        <br />
                        <span className="text-emerald-400">Finance Software</span>
                    </h1>
                    <div className="lg:py-[15px] lg:pr-[1vw] w-[200px] text-center rounded-full text-color absolute -bottom-20 left-32 z-20 bg-white ">
                        <a href="https://finance.evoxcel.com/" target='_blank' className='text-white'>
                            <span className="pl-3 pr-6 text-sm font-semibold text-black">Get Started</span>
                        </a>

                    </div>
                </div>
            </div>
        </div>)
    );
}
