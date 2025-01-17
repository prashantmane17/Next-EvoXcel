"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const HeroParallax = ({
    products
}) => {
    const firstRow = products.slice(0, 5);
    const secondRow = products.slice(5, 10);
    const thirdRow = products.slice(10, 15);
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

    const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig);
    const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]), springConfig);
    const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
    const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
    const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
    const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]), springConfig);
    return (
        (<div
            ref={ref}
            className="h-[200vh] 2xl:h-[190vh] md:py-20 overflow-hidden antialiased relative .d:flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]">
            <Header />
            <motion.div
                style={{
                    rotateX,
                    rotateZ,
                    translateY,
                    opacity,
                }}
                className="">
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 md:mb-20">
                    {firstRow.map((product) => (
                        <ProductCard product={product} translate={translateX} key={product.title} />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row  mb-20 space-x-20 ">
                    {secondRow.map((product) => (
                        <ProductCard product={product} translate={translateXReverse} key={product.title} />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
                    {thirdRow.map((product) => (
                        <ProductCard product={product} translate={translateX} key={product.title} />
                    ))}
                </motion.div>
            </motion.div>
        </div>)
    );
};

export const Header = () => {
    return (
        (<div
            className="max-w-7xl relative mx-auto py-0 md:py-1 px-4 w-full  left-0 top-0">
            <h1 className="text-2xl md:text-6xl 2xl:text-7xl font-bold text-white">
                Transform Your Financial Management with <br /> EvoXcel&apos;s Cutting-Edge Software

            </h1>
            <p className="max-w-2xl text-base md:text-xl mt-8 text-neutral-200">
                Streamline your financial processes, enhance accuracy, and unlock new levels of efficiency. Our innovative solutions are designed to help you manage investments, loans, withdrawals, and more—seamlessly and securely.
            </p>
        </div>)
    );
};

export const ProductCard = ({
    product,
    translate
}) => {
    return (
        (<motion.div
            style={{
                x: translate,
            }}
            whileHover={{
                y: -20,
            }}
            key={product.title}
            className="group/product md:h-96 h-40 md:w-[30rem] w-[20rem] relative flex-shrink-0">
            <Link href={product.link} className="block group-hover/product:shadow-2xl ">
                <Image
                    src={product.thumbnail}
                    height="600"
                    width="600"
                    className="object-cover object-left-top absolute h-full w-full inset-0"
                    alt={product.title} />
            </Link>
            <div
                className="md:absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
            <h2
                className="md:absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
                {product.title}
            </h2>
        </motion.div>)
    );
};
