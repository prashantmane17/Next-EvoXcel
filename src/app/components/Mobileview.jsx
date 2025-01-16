'use client'

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from 'lucide-react'

const transition = {
    type: "spring",
    mass: 0.5,
    damping: 11.5,
    stiffness: 100,
    restDelta: 0.001,
    restSpeed: 0.001,
}

const Mobileview = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState(null)

    const menuItems = [
        {
            name: "Products",
            href: "/products",
            submenu: [
                { name: "Finanace", href: "/finance" },
                { name: "Email Automation", href: "/email-automation" },
                { name: "Linkedin Automation", href: "/linkedin-automation" },
                { name: "HR Management", href: "/hr-management" },
            ]
        },
        {
            name: "Services",
            href: "/services",
            submenu: [
                { name: "Software Development", href: "/software-development" },
                { name: "Lead Generation", href: "/lead-generation" },
                { name: "Application Development", href: "/application-development" },
                { name: "Web Development", href: "/web-development" },
            ]
        },
        { name: "Pricing", href: "/pricing" },
        {
            name: "Insights",
            href: "",
            submenu: [
                { name: "Blog", href: "/blog" },
                { name: "Mobile App Development", href: "/services/mobile-app-development" },
                { name: "UI/UX Design", href: "/services/ui-ux-design" },
            ]
        },
        { name: "About Us", href: "/about" },
        { name: "Lets Connect", href: "/contact-us" },
    ]

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
    const toggleDropdown = (item) => {
        setActiveDropdown(activeDropdown === item ? null : item)
    }
    const closeMenuAndDropdown = () => {
        setIsMenuOpen(false)
        setActiveDropdown(null)
    }

    return (
        <div
            className={cn("fixed top-0 inset-x-0 max-w-3xl mx-auto z-50")}>
            {/* <div className="h-[100vh] bg-gray-600" > */}
            <nav className="bg-black dark:bg-gray-800 rounded-lg shadow-md mb-6">
                <div className="flex justify-between items-center p-4 bg-black">
                    <Link href="/" className="text-xl font-bold text-gray-800 dark:text-white">
                        <Image
                            src="/images/Evoxcel White.webp"
                            width={20}
                            height={30}
                            alt="logo"
                            className="w-12 cursor-pointer"
                        />
                    </Link>
                    <button onClick={toggleMenu} className="text-gray-600 dark:text-gray-200">
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={transition}
                        >
                            {menuItems.map((item) => (
                                <div key={item.name} className="border-t ">
                                    {item.submenu ? (
                                        <>
                                            <button
                                                onClick={() => toggleDropdown(item.name)}
                                                className="flex justify-between items-center w-full p-4 text-left text-white hover:bg-black dark:hover:bg-black-700"

                                            >
                                                {item.name}
                                                <ChevronDown
                                                    size={20}
                                                    className={`transition-transform ${activeDropdown === item.name ? "rotate-180" : ""}`}
                                                />
                                            </button>
                                            <AnimatePresence>
                                                {activeDropdown === item.name && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: "auto" }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        transition={transition}
                                                        className="bg-black dark:bg-gray-900"
                                                    >
                                                        {item.submenu.map((subItem) => (
                                                            <Link
                                                                key={subItem.name}
                                                                href={subItem.href}
                                                                className="block p-4 text-sm text-white hover:bg-black "
                                                                onClick={closeMenuAndDropdown}
                                                            >
                                                                {subItem.name}
                                                            </Link>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            className="block p-4  text-white bg-black"
                                            onClick={closeMenuAndDropdown}
                                        >
                                            {item.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
            {/* </div> */}
        </div>
    )
}

export default Mobileview