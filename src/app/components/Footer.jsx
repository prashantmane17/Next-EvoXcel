"use client";

import { Facebook, Linkedin, MapPin, Mail, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Component() {
  return (
    <footer className="relative bg-gray-900 pt-32 overflow-hidden">
      {/* Wave SVG */}
      <div className="absolute top-0 left-0 w-full">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-auto transform rotate-180"
        >
          <defs>
            <linearGradient
              id="footer-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" style={{ stopColor: "#f36a3e" }} />
              <stop offset="100%" style={{ stopColor: "#ffb30b" }} />
            </linearGradient>
          </defs>
          <path
            fill="url(#footer-gradient)"
            d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,213.3C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-16">
          {/* Newsletter Subscription */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-white mb-4">
              Get in Touch
            </h3>
            <p className="text-gray-400 mb-4">
              Don't miss any updates of our new templates and extensions!
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-orange-500"
              />
              <button
                type="submit"
                className="p-2 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 transition-colors"
              >
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                "Web Development",
                "Software Development",
                "Application Development",
                "Lead Generation",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Products</h3>
            <ul className="space-y-2">
              {[
                "LinkedIn Automation",
                "Email Automation",
                "Analytics Tools",
                "CRM Solutions",
              ].map((product) => (
                <li key={product}>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help & Support */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Help</h3>
            <ul className="space-y-2">
              {[
                "FAQ",
                "Terms & Conditions",
                "Privacy Policy",
                "Documentation",
                "Support",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links & Contact */}
        <div className="border-t border-gray-800 pt-8 pb-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </Link>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Mail className="h-5 w-5" />
              <a
                href="mailto:contact@example.com"
                className="hover:text-orange-500 transition-colors"
              >
                contact@example.com
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Quantian Technologies. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      {/* <div className="absolute bottom-0 right-0 opacity-10">
        <div className="w-64 h-64 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full blur-3xl" />
      </div> */}
    </footer>
  );
}
