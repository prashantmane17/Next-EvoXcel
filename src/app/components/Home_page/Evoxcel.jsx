import Image from "next/image";

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
  {
    title: "Upskill Your Workforce",
    items: [
      "Personalized training module suggestions via mobile platform",
      "Skill gap analysis for targeted development",
      "Interactive, mobile-accessible training modules",
      "Automated assessments for continuous improvement",
    ],
    image: "/images/hr-management/workplace.svg",
  },
];

export default function Evoxcel() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {contentData.map((content, index) => (
          <div
            key={index}
            className={`space-y-8 flex ${
              index % 2 === 0 ? "flex-col" : "flex-col-reverse"
            }`}
          >
            <div
              className={`relative flex justify-center aspect-[4/3] w-full `}
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
              className={` p-8 rounded-lg text-white space-y-4 ${
                index % 2 === 1 ? "bg-[#F15A29]" : "bg-[#323232]"
              }`}
            >
              <h2 className="text-3xl font-bold">{content.title}</h2>
              {content.items.map((item, itemIndex) => (
                <p key={itemIndex} className="text-white">
                  <svg
                    className="w-6 h-6 text-white mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  {item}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
