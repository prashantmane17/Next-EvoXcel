import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
    IconArrowWaveRightUp,
    IconBoxAlignRightFilled,
    IconBoxAlignTopLeft,
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react";
import Image from "next/image";

export function BentoGridDemo() {
    return (
        (<BentoGrid className="max-w-4xl mx-auto">
            {items.map((item, i) => (
                <BentoGridItem
                    key={i}
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    icon={item.icon}
                    className={i === 3 || i === 6 ? "md:col-span-2" : ""} />
            ))}
        </BentoGrid>)
    );
}
const Skeleton = (imagLink) => (
    <div
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">

        <Image
            src={imagLink}
            width={300}
            height={300}
            alt="image"
        />
    </div>
);
const items = [
    {
        title: "Confident Campaign Launches",
        description: "Explore the birth of groundbreaking ideas and inventions.",
        header: "/images/Home/Campaign-Image.webp",
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Boost Conversions with Smart Sequences",
        description: "Dive into the transformative power of technology.",
        header: "/images/Home/MC.webp",
        icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Enhance Connections with Intelligent Communication",
        description: "Discover the beauty of thoughtful and functional design.",
        header: "/images/Home/SCIC.webp",
        icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Optimize with Data-Driven Insights",
        description:
            "Understand the impact of effective communication in our lives.",
        header: "/images/Home/OWDDI.webp",
        icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Seamless Tool Integration",
        description: "Join the quest for understanding and enlightenment.",
        header: "/images/Home/SI.webp",
        icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    },

];
