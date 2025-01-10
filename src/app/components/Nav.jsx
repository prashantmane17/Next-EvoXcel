"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    (<div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />

    </div>)
  );
}

function Navbar({
  className
}) {
  const [active, setActive] = useState(null);
  return (
    (<div
      className={cn("fixed top-10 inset-x-0 max-w-3xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <div className="w-32">
          <Link href="/">
            <Image
              src="/images/Evoxcel White.webp"
              width={20}
              height={30}
              alt="logo"
              className="w-12 cursor-pointer"
            />
          </Link>
        </div>
        <div className="flex items-center justify-between w-full">
          <MenuItem setActive={setActive} active={active} item="Products">
            <div className="  text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Finanace"
                href="/finance"
                src="https://assets.aceternity.com/demos/algochurn.webp"
                description="Empower Your Financial Journey with Budgeting, and Wealth Management...." />
              <ProductItem
                title="Email Automation"
                href="/email-automation"
                src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                description="In today’s fast-paced digital world, having robust,
                          scalable..." />
              <ProductItem
                title="Linkedin Automation"
                href="/linkedin-automation"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                description=" Unlock Your Digital Potential with Expert Web
                          Development..." />
              <ProductItem
                title="HR Management"
                href="/hr-management"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                description="HR Management boosts employee streamlines processes..." />
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Services">
            <div className="  text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Software Development"
                href="/software-development"
                src="https://assets.aceternity.com/demos/algochurn.webp"
                description="In today’s fast-paced digital world, having robust, scalable..." />
              <ProductItem
                title="Lead Generation"
                href="/lead-generation"
                src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                description="Lead generation is more than just a marketing strategy it‘s the..." />
              <ProductItem
                title="Application Development"
                href="/application-development"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                description="We specialize in crafting tailored application development solutions..." />
              <ProductItem
                title="Web Development"
                href="/web-development"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                description="Unlock Your Digital Potential with Expert Web Development..." />
            </div>
          </MenuItem>
          {/* <MenuItem setActive={setActive} active={active} item="Pricing" /> */}
          <HoveredLink href="/pricing">Pricing</HoveredLink>
          <MenuItem setActive={setActive} active={active} item="Insights">
            <div className="  text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Blog"
                href="/blog"
                src="https://assets.aceternity.com/demos/algochurn.webp"
                description="Unlock Your Digital Potential with Expert Web Development..." />
              <ProductItem
                title="Case Studies "
                href="https://tailwindmasterkit.com"
                src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                description="In today’s fast-paced digital world, having robust, scalable.p" />
              <ProductItem
                title="Helpdesk"
                href="https://gomoonbeam.com"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                description="We specialize in crafting tailored application development solutions ..." />
              <ProductItem
                title="Rogue"
                href="https://userogue.com"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI" />
            </div>
          </MenuItem>
          <HoveredLink href="/about-us">About Us</HoveredLink>
          <HoveredLink href="/contact-us">Let's Connect</HoveredLink>
        </div>
      </Menu>
    </div>)
  );
}
