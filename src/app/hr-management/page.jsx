"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useAnimation,
  useInView,
  AnimatePresence,
} from "framer-motion";
import HrSection from "./HrSection";

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

export default function EvoXcelContent() {
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
    <div className="bg-white text-gray-900 font-sans">
      <HrSection />

      <section className="min-h-screen flex items-center justify-center py-20">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <h2 className="text-4xl font-bold mb-12 text-center">
              Transform Your Remote Operations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "1M+ Daily Transactions",
                  description:
                    "Leverage a robust architecture capable of handling over 1 million API calls daily.",
                },
                {
                  title: "Advanced Facial Recognition",
                  description:
                    "Utilize fast and accurate biometric identification through sophisticated facial recognition technology.",
                },
                {
                  title: "Real-Time Location Tracking",
                  description:
                    "Monitor precise geo-spatial data for accurate, real-time location tracking of remote teams.",
                },
                {
                  title: "Platform Compatibility",
                  description:
                    "Access our solutions on any Android or iOS device, including smartphones and tablets.",
                },
                {
                  title: "Extensive Deployment",
                  description:
                    "Join over 400 sites across India successfully utilizing our technology under diverse real-world conditions.",
                },
                {
                  title: "Seamless Integration",
                  description:
                    "Easily integrate with existing biometric hardware systems, ensuring smooth deployment and functionality.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-100 p-6 rounded-lg shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="text-xl font-semibold mb-3 text-indigo-600">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      <section className=" flex items-center justify-center bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <h2 className="text-4xl font-bold mb-12 text-center">
              Revolutionize Your Remote Workforce
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="w-full md:w-1/3">
                {features.map((feature, index) => (
                  <motion.button
                    key={index}
                    className={`w-full text-left p-4 mb-2 rounded-lg transition-colors ${
                      activeFeature === index
                        ? `bg-gradient-to-r ${feature.color} text-white`
                        : "bg-white text-gray-700 hover:bg-gray-200"
                    }`}
                    onClick={() => setActiveFeature(index)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {feature.title}
                  </motion.button>
                ))}
              </div>
              <div className="w-full md:w-2/3 bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-indigo-600">
                  {features[activeFeature].title}
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  {features[activeFeature].items.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="text-gray-700"
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      <section className="min-h-screen flex items-center justify-center bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
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
                  className="bg-gray-100 p-6 rounded-lg shadow-lg"
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
                        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                          activeIndustry === index
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

      <section className="min-h-screen flex items-center justify-center bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <h2 className="text-4xl font-bold mb-12 text-center">
              Optick&apos;s Unique Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {uniqueFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="text-xl font-semibold mb-3 text-indigo-600">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
