"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "1M+ API Calls",
    description: "Robust daily transaction handling",
    color: "bg-pink-500",
  },
  {
    title: "400+ Sites",
    description: "Successful deployments across India",
    color: "bg-pink-500",
  },
  {
    title: "Real-Time Tracking",
    description: "Advanced monitoring systems",
    color: "bg-purple-600",
  },
  {
    title: "AI-Powered",
    description: "Cutting-edge technology integration",
    color: "bg-purple-600",
  },
];

const FeatureCard = ({ feature, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 * index }}
    className="bg-white rounded-lg p-6 shadow-lg relative overflow-hidden"
  >
    <div
      className={`w-12 h-12 ${feature.color} rounded-full flex items-center justify-center mb-4`}
    >
      <span className="text-white text-xl">✦</span>
    </div>
    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
    <p className="text-gray-600">{feature.description}</p>
  </motion.div>
);

export default function HrSection() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden flex item">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-purple-100 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-100 rounded-full translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-4 h-4 text-pink-200"
              style={{
                left: `${Math.random() * 600 - 300}px`,
                top: `${Math.random() * 600 - 300}px`,
                transform: `rotate(${Math.random() * 90}deg)`,
              }}
            >
              +
            </div>
          ))}
        </div>
      </div>

      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-purple-600">EvoXcel:</span> Your Premier
                Partner for{" "}
                <span className="relative inline-block">
                  QuantianTech
                  <div className="absolute bottom-0 left-0 w-full h-2 bg-yellow-300 -rotate-1" />
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                At EvoXcel, we are honored to be a trusted business partner and
                authorized reseller for QuantianTech. Our collaboration delivers
                the Optick AI platform, ensuring your business stays at the
                forefront of technological innovation.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>

          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="w-full h-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
