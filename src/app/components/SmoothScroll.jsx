"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    // Create Lenis instance with smoother but lighter scrolling behavior
    const lenis = new Lenis({
      duration: 0.8, // Shorter duration for a quicker scroll
      easing: (t) => 1 - Math.pow(1 - t, 4), // Smoother easing for less lag
      smooth: true,
      smoothTouch: true, // Enable for touchpad or mobile devices
      direction: "vertical", // Vertical scrolling
    });

    // Function to run Lenis smooth scroll
    const animate = (time) => {
      lenis.raf(time); // Request animation frame for smooth scrolling
      requestAnimationFrame(animate); // Keep the animation frame running
    };

    requestAnimationFrame(animate);

    // Cleanup on component unmount
    return () => lenis.destroy();
  }, []);

  return <div>{children}</div>;
}
