import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconBrandFacebook,
    IconBrandGithub,
    IconBrandLinkedin,
    IconBrandX,
    IconBrandYoutube,
    IconExchange,
    IconHome,
    IconNewSection,
    IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";
import { InstagramLogoIcon } from "@radix-ui/react-icons";

export function FloatingDockDemo() {
    const links = [
        {
            title: "Facebook",
            icon: (
                <IconBrandFacebook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://www.facebook.com/profile.php?id=61566321227448",
        },

        {
            title: "Youtube",
            icon: (
                <IconBrandYoutube className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://www.youtube.com/@EvoXcel-tech",
        },

        {
            title: "Instagram",
            icon: (
                <InstagramLogoIcon className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://www.instagram.com/evoxcel/",
        },
        {
            title: "LinkedIn",
            icon: (
                <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://www.linkedin.com/company/evoxcel-tech/",
        },
    ];
    return (
        (<div className="2Xl:flex items-center justify-start w-full">
            <FloatingDock
                // mobileClassName="translate-y-20"
                items={links} />
        </div>)
    );
}
