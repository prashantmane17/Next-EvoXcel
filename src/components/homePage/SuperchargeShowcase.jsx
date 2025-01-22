"use client";

import { useState, useEffect } from "react";

const systems = ["LinkedIn Automation", "Email Automation", "HR Management", "Finance Management", "Web Development"];

export default function SuperchargeShowcase() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVanishing, setIsVanishing] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsVanishing(true);
            setTimeout(() => {
                setIsVanishing(false);
                setCurrentIndex((prevIndex) => (prevIndex + 1) % systems.length);
            }, 1000);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-20 flex items-center justify-center overflow-hidden">
            <p
                className={`text-3xl md:text-5xl font-semibold text-green-400 transition-all duration-1000 ${isVanishing ? "opacity-0 transform translate-y-full" : "opacity-100 transform translate-y-0"
                    }`}
            >
                {systems[currentIndex]}
            </p>
        </div>
    );
}
