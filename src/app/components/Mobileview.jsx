'use client'

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
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
    const pathname = usePathname()

    const menuItems = [
        {
            name: "Products",
            href: "/products",
            submenu: [
                { name: "Finance", href: "/finance" },
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
            href: "/insights",
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

    const isActive = (href) => {
        if (href === '/') {
            return pathname === href
        }
        return pathname.startsWith(href)
    }

    return (
        <div className={cn("fixed top-0 inset-x-0 max-w-3xl mx-auto z-50")}>
            <nav className="bg-black dark:bg-gray-800 rounded-lg shadow-md mb-6">
                <div className="flex justify-between items-center m-2 p-3 rounded-2xl bg-[#3d3c3c]">
                    <Link href="/" className="text-xl font-bold text-gray-800 dark:text-white">
                        <Image
                            src="/images/Evoxcel White.webp"
                            width={20}
                            height={30}
                            alt="logo"
                            className="w-12 cursor-pointer"
                        />
                    </Link>
                    <button
                        onClick={toggleMenu}
                        className="text-white"
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    >
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
                            <div className="h-[100vh] bg-black" >
                                {menuItems.map((item) => (
                                    <div key={item.name} className="">
                                        {item.submenu ? (
                                            <>
                                                <button
                                                    onClick={() => toggleDropdown(item.name)}
                                                    className={cn(
                                                        "flex justify-between items-center w-full p-4 text-left text-white hover:bg-gray-700",
                                                        isActive(item.href) && "bg-gray-700"
                                                    )}
                                                    aria-expanded={activeDropdown === item.name}
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
                                                            className="bg-gray-900"
                                                        >
                                                            {item.submenu.map((subItem) => (
                                                                <Link
                                                                    key={subItem.name}
                                                                    href={subItem.href}
                                                                    className={cn(
                                                                        "block p-4 text-sm text-white hover:bg-gray-800",
                                                                        isActive(subItem.href) && "bg-gray-800"
                                                                    )}
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
                                                className={cn(
                                                    "block p-4 text-white hover:bg-gray-700",
                                                    isActive(item.href) && "bg-gray-700"
                                                )}
                                                onClick={closeMenuAndDropdown}
                                            >
                                                {item.name}
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </div>
    )
}

export default Mobileview
