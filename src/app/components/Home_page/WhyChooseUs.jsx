import React from 'react';
import { Target, Zap, MessageCircle, BarChart2, Users, Brain, BookOpen } from 'lucide-react';
import Link from 'next/link';
import "./home.css";

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white  rounded-lg shadow-2xl p-6 transition-all duration-300 hover:shadow-xl">
    <Icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
    <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400">{description}</p>
  </div>
);

const features = [
//   {
//     icon: Target,
//     title: "Precise Targeting",
//     description: "Boost response rates with AI-driven targeting across multiple LinkedIn accounts."
//   },
//   {
//     icon: Zap,
//     title: "Smart Sequences",
//     description: "Automate invites and follow-ups with structured messaging for better engagement."
//   },
  {
    icon: BarChart2,
    title: "Empower Your Sales Team",
    description: "Access detailed reports on conversion rates, sales cycles, and revenue trends to drive strategic decisions"
  },
  {
    icon: Target,
    title: "Geo-Spatial Tracking",
    description: "Track remote employees locations and statuses with high accuracy."
  },
  {
    icon: Users,
    title: "Task and Time Management",
    description: "Gain real-time insights into task progress and employee performance"
  },
  {
    icon: Brain,
    title: "Data-Driven Insights",
    description: "Access real-time metrics for individuals and teams, driving data-informed decisions."
  },
  {
    icon: BookOpen,
    title: "Upskill Your Workforce",
    description: "Identify strengths and areas for improvement in employee skills, supporting targeted development."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 ">
          Why Choose ExoXcel <span className='text-sky-600'> HR Management</span>?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
        <div className="mt-16 text-center" >
        <Link
      href="/contact-us"
      className="bouce_button inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
    >
      Get Started with ExoXcel
    </Link>
        </div>
      </div>
    </section>
  );
}
