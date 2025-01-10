"use client";
import React from "react";
import { HeroParallax } from "../ui/hero-parallax";

export function HeroParallaxDemo() {
    return (
        <div className="p-6 md:px-20">

            < HeroParallax products={products} />;
        </div>
    )
}
export const products = [
    {
        title: "Moonbeam",
        link: "https://finance.evoxcel.com",
        thumbnail:
            "/images/Home/HomeImage.jpg",
    },
    {
        title: "Cursor",
        link: "https://finance.evoxcel.com",
        thumbnail:
            "/images/Home/01.jpg",
    },
    {
        title: "Rogue",
        link: "https://finance.evoxcel.com",
        thumbnail:
            "/images/Home/03.jpg",
    },

    {
        title: "Editorially",
        link: "https://finance.evoxcel.com",
        thumbnail:
            "/images/home/04.jpg",
    },
    {
        title: "Editrix AI",
        link: "https://finance.evoxcel.com",
        thumbnail:
            "/images/Home/05.jpg",
    },
    {
        title: "Pixel Perfect",
        link: "https://finance.evoxcel.com",
        thumbnail:
            "/images/Home/06.jpg",
    },

    {
        title: "Algochurn",
        link: "https://finance.evoxcel.com",
        thumbnail:
            "/images/Home/HomeImage.jpg",
    },
    {
        title: "Aceternity UI",
        link: "https://finance.evoxcel.com/login",
        thumbnail:
            "/images/Home/01.jpg",
    },
    {
        title: "Tailwind Master Kit",
        link: "https://finance.evoxcel.com/signup",
        thumbnail:
            "/images/home/02.jpg",
    },
    {
        title: "SmartBridge",
        link: "https://finance.evoxcel.com",
        thumbnail:
            "/images/home/03.jpg",
    },
    {
        title: "Renderwork Studio",
        link: "https://finance.evoxcel.com/login",
        thumbnail:
            "/images/home/04.jpg",
    },

    {
        title: "Creme Digital",
        link: "https://finance.evoxcel.com",
        thumbnail:
            "/images/home/05.jpg",
    },
    {
        title: "Golden Bells Academy",
        link: "https://finance.evoxcel.com",
        thumbnail:
            "/images/home/06.jpg",
    },
    {
        title: "Invoker Labs",
        link: "https://finance.evoxcel.com/login",
        thumbnail:
            "/images/home/02.jpg",
    },
    {
        title: "E Free Invoice",
        link: "https://finance.evoxcel.com/signup",
        thumbnail:
            "/images/home/01.jpg",
    },
];
