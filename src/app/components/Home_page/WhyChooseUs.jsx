// import React from 'react';
// import { Target, Zap, MessageCircle, BarChart2, Users, Brain, BookOpen } from 'lucide-react';
// import Link from 'next/link';
// import "./home.css";

// const FeatureCard = ({ icon: Icon, title, description }) => (
//   <div className="bg-white  rounded-lg shadow-2xl p-6 transition-all duration-300 hover:shadow-xl">
//     <Icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
//     <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">{title}</h3>
//     <p className="text-gray-600 dark:text-gray-400">{description}</p>
//   </div>
// );

// const features = [
// //   {
// //     icon: Target,
// //     title: "Precise Targeting",
// //     description: "Boost response rates with AI-driven targeting across multiple LinkedIn accounts."
// //   },
// //   {
// //     icon: Zap,
// //     title: "Smart Sequences",
// //     description: "Automate invites and follow-ups with structured messaging for better engagement."
// //   },
//   {
//     icon: BarChart2,
//     title: "Empower Your Sales Team",
//     description: "Access detailed reports on conversion rates, sales cycles, and revenue trends to drive strategic decisions"
//   },
//   {
//     icon: Target,
//     title: "Geo-Spatial Tracking",
//     description: "Track remote employees locations and statuses with high accuracy."
//   },
//   {
//     icon: Users,
//     title: "Task and Time Management",
//     description: "Gain real-time insights into task progress and employee performance"
//   },
//   {
//     icon: Brain,
//     title: "Data-Driven Insights",
//     description: "Access real-time metrics for individuals and teams, driving data-informed decisions."
//   },
//   {
//     icon: BookOpen,
//     title: "Upskill Your Workforce",
//     description: "Identify strengths and areas for improvement in employee skills, supporting targeted development."
//   }
// ];

// export default function WhyChooseUs() {
//   return (
//     <section className="py-16 bg-white ">
//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 ">
//           Why Choose ExoXcel <span className='text-sky-600'> HR Management</span>?
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {features.map((feature, index) => (
//             <FeatureCard
//               key={index}
//               icon={feature.icon}
//               title={feature.title}
//               description={feature.description}
//             />
//           ))}
//         </div>
//         <div className="mt-16 text-center" >
//         <Link
//       href="/contact-us"
//       className="bouce_button inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
//     >
//       Get Started with ExoXcel
//     </Link>
//         </div>
//       </div>
//     </section>
//   );
// }
import Image from "next/image";
import Link from "next/link";
import "./home.css";

const contentData = [
  {
    title: "Geo-Spatial Tracking",
    items: [
      "Track remote employees locations and statuses",
      "Ensure precise time tracking with facial attendance",
      "Maintain detailed records of staff movements",
      "Streamline digital onboarding for new hires",
    ],
    image: "/images/hr-management/tracking.svg",
  },
  {
    title: "Task and Time Management",
    items: [
      "Real-time task progress and employee performance insights",
      "AI-powered auto scheduling for optimal workforce management",
      "Automated shift and roster generation based on rules and preferences",
      "Mobile-accessible payroll automation for accurate management",
    ],
    image: "/images/hr-management/time-management.svg",
  },
  {
    title: "Data-Driven Insights",
    items: [
      "Real-time individual and team performance metrics",
      "Resource utilization analysis for productivity improvement",
      "Advanced capacity forecasting for optimal staffing",
      "AI-powered threat detection for enhanced security",
    ],
    image: "/images/hr-management/insights.svg",
  },
  {
    title: "Empower Your Sales Team",
    items: [
      "AI-powered chatbot for instant customer responses",
      "Detailed reports on conversion rates and revenue trends",
      "Real-time sales expense tracking and budget updates",
      "Efficient lead management throughout the sales funnel",
    ],
    image: "/images/hr-management/salesImage.svg",
  },
  // {
  //   title: "Upskill Your Workforce",
  //   items: [
  //     "Personalized training module suggestions via mobile platform",
  //     "Skill gap analysis for targeted development",
  //     "Interactive, mobile-accessible training modules",
  //     "Automated assessments for continuous improvement",
  //   ],
  //   image: "/images/hr-management/workplace.svg",
  // },
];

export default function Evoxcel() {
  return (
    <>
      <div className="pt-[4vw] pb-[2vw]">
        <h2 className="text-4xl lg:text-[3vw] font-bold text-center mb-12 text-white ">
          Why Choose ExoXcel{" "}
          <span className="text-sky-600"> HR Management</span>?
        </h2>
      </div>
      <div className="min-h-screen w-full flex items-center justify-center py-4 relative px-[5vw]">
        <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {contentData.map((content, index) => (
            <div
              key={index}
              className={`space-y-8 flex ${index % 2 === 0 ? "flex-col" : "flex-col-reverse"
                }`}
            >
              <div
                className={`relative flex justify-center aspect-[4/3] w-full ${index % 2 === 0 ? "mt-2" : "mt-6"
                  } `}
              >
                <Image
                  src={content.image}
                  alt={content.title}
                  width={300}
                  height={300}
                  className="rounded-lg w-[75%]"
                />
              </div>
              <div
                className={` p-8 rounded-lg text-white space-y-4 ${index % 2 === 1 ? "boxColor2" : "boxColor1"
                  }`}
              >
                <h2 className=" text-white md:text-[3vw] text-[2vw] py-5 font-bold">
                  {content.title}
                </h2>
                {content.items.map((item, itemIndex) => (
                  <p key={itemIndex} className="text-white md:text-[1.2vw]">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <Link
          href="/contact-us"
          className="bouce_button inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 absolute bottom-[-15vh]"
        >
          Get Started with ExoXcel
        </Link>
      </div>
    </>
  );
}
