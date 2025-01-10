"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useAnimation,
  useInView,
  AnimatePresence,
} from "framer-motion";
import HrSection from "./HrSection";
import Facial from "./Facial";
import RemoteWork from "./RemoteWork";


const FadeInSection = ({ children }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 20 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default function HrHome() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: "Geo-Spatial Tracking",
      items: [
        "Monitor Remote Teams",
        "Facial Attendance",
        "Location History",
        "Digital Onboarding",
      ],
      color: "from-purple-500 to-indigo-500",
    },
    {
      title: "Task and Time Management",
      items: [
        "Task Tracking",
        "Auto Scheduling",
        "Shift & Roster Automation",
        "Payroll Automation",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Data-Driven Insights",
      items: [
        "Performance Analytics",
        "Resource Analytics",
        "Capacity Forecasting",
        "Threat Detection",
      ],
      color: "from-green-500 to-teal-500",
    },
    {
      title: "Empower Your Sales Team",
      items: [
        "AI Knowledge Bot",
        "Sales Analytics",
        "Expense Management",
        "Lead Management",
      ],
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Upskill Your Workforce",
      items: [
        "AI-Enabled Course Recommendations",
        "Competency Mapping",
        "Mobile-Based Training",
        "Automatic Assessments",
      ],
      color: "from-red-500 to-pink-500",
    },
  ];

  const industries = [
    {
      name: "Real Estate",
      icon: "🏢",
      color: "#4F46E5",
      description:
        "Revolutionizing property management and real estate operations with cutting-edge AI solutions.",
    },
    {
      name: "Healthcare",
      icon: "🏥",
      color: "#06B6D4",
      description:
        "Enhancing patient care and streamlining medical processes through advanced technology integration.",
    },
    {
      name: "Manufacturing",
      icon: "🏭",
      color: "#10B981",
      description:
        "Optimizing production lines and inventory management with smart, data-driven systems.",
    },
    {
      name: "Logistics",
      icon: "🚚",
      color: "#F59E0B",
      description:
        "Improving supply chain efficiency and tracking with real-time monitoring and AI-powered analytics.",
    },
    {
      name: "Utilities",
      icon: "⚡",
      color: "#EC4899",
      description:
        "Modernizing utility management and distribution networks with intelligent grid solutions.",
    },
    {
      name: "Education",
      icon: "🎓",
      color: "#8B5CF6",
      description:
        "Transforming learning experiences and institutional management through innovative EdTech platforms.",
    },
  ];
  const uniqueFeatures = [
    {
      title: "AI-Driven Operations",
      description:
        "Automate shift scheduling, task assignments, and capacity modeling using historical analytics for improved efficiency.",
    },
    {
      title: "Custom Knowledge Bot",
      description:
        "Access a mobile AI chatbot for instant knowledge base queries and support.",
    },
    {
      title: "Offline Functionality",
      description:
        "Utilize core features without internet access, ideal for remote or low-connectivity locations.",
    },
    {
      title: "Employee Engagement",
      description:
        "Engage staff with a mobile app available in multiple languages, featuring rewards and recognition for motivation.",
    },
    {
      title: "Dynamic Data Analytics",
      description:
        "Use real-time dashboards to gain insights into productivity, expenses, and attendance for informed decision-making.",
    },
    {
      title: "Advanced Facial Recognition",
      description:
        "Ensure secure authentication with state-of-the-art facial recognition and spoof detection technologies for enhanced security.",
    },
  ];
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  useEffect(() => {
    if (isAutoScrolling) {
      const interval = setInterval(() => {
        setActiveIndustry((prev) => (prev + 1) % industries.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoScrolling]);

  return (
    <div className="text-gray-900 font-sans">
      <HrSection />
      <Facial />
      <RemoteWork />

      <section className=" flex items-center justify-center py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">
            Industries We Serve
          </h2>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative w-64 h-64">
                {industries.map((industry, index) => (
                  <AnimatePresence key={industry.name}>
                    {activeIndustry === index && (
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div
                          className="w-full h-full rounded-full flex items-center justify-center text-8xl"
                          style={{ backgroundColor: industry.color }}
                        >
                          {industry.icon}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndustry}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-50 p-6 rounded-lg shadow-lg"
                >
                  <h3
                    className="text-2xl font-semibold mb-4"
                    style={{ color: industries[activeIndustry].color }}
                  >
                    {industries[activeIndustry].name}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {industries[activeIndustry].description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {industries.map((industry, index) => (
                      <button
                        key={industry.name}
                        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${activeIndustry === index
                          ? "bg-gray-800 text-white"
                          : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                          }`}
                        onClick={() => {
                          setActiveIndustry(index);
                          setIsAutoScrolling(false);
                        }}
                      >
                        {industry.name}
                      </button>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <section className=" flex items-center justify-center  py-20">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {uniqueFeatures.map((feature, index) => (
              <div
                key={index}
                className="relative p-6 bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, #ffffff 0%, #f0f7ff 100%)",
                }}
              >
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-50">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={
                          index === 0
                            ? "M13 10V3L4 14h7v7l9-11h-7z"
                            : index === 1
                              ? "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                              : index === 2
                                ? "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
                                : index === 3
                                  ? "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                  : index === 4
                                    ? "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                    : "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                        }
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-blue-600">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
