"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-100">
      <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center p-6 pt-[30vw] lg:p-16 lg:pt-6 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 lg:pr-12"
        >
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-800 leading-tight">
            Welcome to{" "}
            <span className="text-indigo-600 font-extrabold">EvoXcel</span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
            Your trusted partner in business growth and digital transformation.
            We specialize in cutting-edge LinkedIn and email automation
            services, as well as comprehensive web, software, and application
            development solutions.
          </p>
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105">
            Learn More
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 mt-12 mx-auto lg:mt-0 flex justify-center"
        >
          <Image
            src="/images/about-us/about-us.webp"
            width={350}
            height={350}
            alt="About EvoXcel"
            className=""
          />
        </motion.div>
      </section>

      <section className="py-20 px-6 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold text-center mb-16 text-gray-800">
            Our Mission & Vision
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-8 text-white shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg leading-relaxed">
                Empower businesses by providing innovative, reliable, and
                efficient digital solutions. We strive to be the catalyst for
                our clients success, helping them navigate the digital landscape
                with confidence and agility.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-pink-500 to-orange-400 rounded-xl p-8 text-white shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg leading-relaxed">
                To be the global leader in digital innovation, recognized for
                our transformative solutions and unwavering commitment to client
                success. We envision a future where technology seamlessly
                integrates with business strategies, driving unprecedented
                growth and efficiency.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold text-center mb-16 text-gray-800">
            Why Choose EvoXcel?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Innovative Solutions", icon: "💡" },
              { title: "Expert Team", icon: "👥" },
              { title: "Client-Centric Approach", icon: "🤝" },
              { title: "Cutting-Edge Technology", icon: "🚀" },
              { title: "Proven Track Record", icon: "📈" },
              { title: "24/7 Support", icon: "🔧" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-16 bg-indigo-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-8">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-12">
            Let&apos;s collaborate to drive your success in the digital age.
          </p>
          <button className="bg-white text-indigo-900 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-200 transition duration-300 ease-in-out transform hover:scale-105">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
}
