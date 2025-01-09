"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const transition = {
    type: "spring",
    mass: 0.5,
    damping: 11.5,
    stiffness: 100,
    restDelta: 0.001,
    restSpeed: 0.001,
};

export const MenuItem = ({
    setActive,
    active,
    item,
    children
}) => {
    return (
        (<div onMouseEnter={() => setActive(item)} className="relative ">

            <motion.p
                transition={{ duration: 0.3 }}
                className="cursor-pointer hover:opacity-[0.9] text-white text-sm">
                <span className="flex items-center">

                    {item}
                    <ChevronDown className="w-4 h-4" />
                </span>
            </motion.p>
            {active !== null && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.85, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={transition}>
                    {active === item && (
                        <div
                            className="absolute top-[calc(100%_+_0.8rem)] left-1/2 transform -translate-x-1/2 pt-4">
                            <motion.div
                                transition={transition}
                                // layoutId ensures smooth animation
                                layoutId="active"
                                className="bg-gray-800 dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl">
                                <motion.div
                                    // layout ensures smooth animation
                                    layout
                                    className="w-max h-full p-4">
                                    {children}
                                </motion.div>
                            </motion.div>
                        </div>
                    )}
                </motion.div>
            )}
        </div>)
    );
};

export const Menu = ({
    setActive,
    children
}) => {
    return (
        (<nav
            // resets the state
            onMouseLeave={() => setActive(null)}
            className="relative rounded-full border  bg-gradient-to-br from-[#262626] to-[#363333] border-white/[0.2]  shadow-input flex justify-between space-x-4 px-4 py-3 ">
            {children}
        </nav>)
    );
};

export const ProductItem = ({
    title,
    description,
    href,
    src
}) => {
    return (
        (<Link href={href} className="flex w-80  gap-4">
            <Image
                src={src}
                width={100}
                height={50}
                alt={title}
                className="flex-shrink-0 rounded-md shadow-2xl" />

            <div>
                <h4 className="text-xl font-bold mb-1 text-white">
                    {title}
                </h4>
                <p className="text-sm max-w-[15rem] text-neutral-300">
                    {description}
                </p>
            </div>
        </Link>)
    );
};

export const HoveredLink = ({
    children,
    ...rest
}) => {
    return (
        (<Link
            {...rest}
            className="text-gray-200 text-sm ">
            {children}
        </Link>)
    );
};
