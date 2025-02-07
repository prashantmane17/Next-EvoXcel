import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
    const data = [
        {
            title: "Task & Time Management",
            content: (
                <div>
                    <div className="mb-8">
                        <div
                            className="flex gap-2 items-center text-neutral-500 text-xs md:text-xl font-bold mb-4">
                            ✅ Real-time task progress and employee performance insights
                        </div>
                        <div
                            className="flex gap-2 items-center text-neutral-500 text-xs md:text-xl font-bold mb-4">
                            ✅ AI-powered auto scheduling for optimal workforce management
                        </div>
                        <div
                            className="flex gap-2 items-center text-neutral-500 text-xs md:text-xl font-bold mb-4">
                            ✅ Automated shift and roster generation based on rules and preferences
                        </div>
                        <div
                            className="flex gap-2 items-center text-neutral-500 text-xs md:text-xl font-bold mb-4">
                            ✅ Mobile-accessible payroll automation for accurate management
                        </div>

                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/images/Home/task.jpeg"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                        <Image
                            src="https://images.unsplash.com/photo-1527792931932-443873b57953?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                        <Image
                            src="/images/hr-management/hrmng.jpeg"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                        <Image
                            src="/images/hr-management/hrmng4.jpeg"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                    </div>
                </div>
            ),
        },
        {
            title: "Geo-Spatial Tracking",
            content: (
                <div>
                    <div className="mb-8">
                        <div
                            className="flex gap-2 items-center text-neutral-500 text-xs md:text-xl font-bold mb-4">
                            ✅ Track remote employees locations and statuses
                        </div>
                        <div
                            className="flex gap-2 items-center text-neutral-500 text-xs md:text-xl font-bold mb-4">
                            ✅ Maintain detailed records of staff movements
                        </div>
                        <div
                            className="flex gap-2 items-center text-neutral-500 text-xs md:text-xl font-bold mb-4">
                            ✅ Ensure precise time tracking with facial attendance
                        </div>
                        <div
                            className="flex gap-2 items-center text-neutral-500 text-xs md:text-xl font-bold mb-4">
                            ✅ Streamline digital onboarding for new hires
                        </div>

                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="https://images.unsplash.com/photo-1555371363-27a37f8e8c46?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="hero template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                        <Image
                            src="/images/Home/tackiing.jpeg"
                            alt="feature template"
                            width={500}
                            height={500}
                            className="rounded-lg object-fit h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                        <Image
                            src="/images/hr-management/hrmng2.jpeg"
                            alt="bento template"
                            width={500}
                            height={500}
                            className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />

                        <Image
                            src="/images/hr-management/hrmng3.jpeg"
                            alt="cards template"
                            width={500}
                            height={500}
                            className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                    </div>
                </div>
            ),
        },
        {
            title: "Data-Driven Insights",
            content: (
                <div>

                    <div className="mb-8">
                        <div
                            className="flex gap-2 items-center text-neutral-500 text-xs md:text-xl font-bold mb-4">
                            ✅ Real-time individual and team performance metrics
                        </div>
                        <div
                            className="flex gap-2 items-center text-neutral-500 text-xs md:text-xl font-bold mb-4">
                            ✅ Resource utilization analysis for productivity improvement
                        </div>
                        <div
                            className="flex gap-2 items-center text-neutral-500 text-xs md:text-xl font-bold mb-4">
                            ✅ Advanced capacity forecasting for optimal staffing
                        </div>
                        <div
                            className="flex gap-2 items-center text-neutral-500 text-xs md:text-xl font-bold mb-4">
                            ✅ AI-powered threat detection for enhanced security
                        </div>

                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/images/Home/drive1.jpeg"
                            alt="hero template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                        <Image
                            src="/images/Home/drive2.jpeg"
                            alt="feature template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                        <Image
                            src="/images/hr-management/hrmng5.jpeg"
                            alt="bento template"
                            width={500}
                            height={500}
                            className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                        <Image
                            src="/images/hr-management/hrmng4.jpeg"
                            alt="cards template"
                            width={500}
                            height={500}
                            className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                    </div>
                </div>
            ),
        },
        {
            title: "Empower Your Sales Team",
            content: (
                <div>

                    <div className="mb-8">
                        <div
                            className="flex gap-2 items-center text-neutral-500 text-xs md:text-xl font-bold mb-4">
                            ✅ Enhance customer satisfaction with instant responses via our AI-powered chatbot
                        </div>
                        <div
                            className="flex gap-2 items-center text-neutral-500 text-xs md:text-xl font-bold mb-4">
                            ✅ Access detailed reports on conversion rates, sales cycles, and revenue trends to drive strategic decisions
                        </div>
                        <div
                            className="flex gap-2 items-center text-neutral-500 text-xs md:text-xl font-bold mb-4">
                            ✅ Track and categorize sales expenses with real-time budget updates, ensuring financial control
                        </div>
                        <div
                            className="flex gap-2 items-center text-neutral-500 text-xs md:text-xl font-bold mb-4">
                            ✅ Oversee leads throughout the sales funnel, ensuring proper prioritization and allocation for optimal conversion.
                        </div>

                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/images/Home/expense.jpeg"
                            alt="hero template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                        <Image
                            src="/images/Home/sales2.jpeg"
                            alt="feature template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                        <Image
                            src="/images/hr-management/hrMannagement.jpeg"
                            alt="bento template"
                            width={500}
                            height={500}
                            className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                        <Image
                            src="/images/hr-management/hrmng4.jpeg"
                            alt="cards template"
                            width={500}
                            height={500}
                            className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                    </div>
                </div>
            ),
        },
        {
            title: "Upskill Your Workforce",
            content: (
                <div>

                    <div className="mb-8">
                        <div
                            className="flex gap-2 items-center text-neutral-500 text-xs md:text-xl font-bold mb-4">
                            ✅ Receive personalized training module suggestions through our mobile platform to enhance skills and knowledge.
                        </div>
                        <div
                            className="flex gap-2 items-center text-neutral-500 text-xs md:text-xl font-bold mb-4">
                            ✅ Identify strengths and areas for improvement in employee skills, supporting targeted development.
                        </div>
                        <div
                            className="flex gap-2 items-center text-neutral-500 text-xs md:text-xl font-bold mb-4">
                            ✅ Provide interactive training accessible via mobile devices, facilitating learning on-the-go.
                        </div>
                        <div
                            className="flex gap-2 items-center text-neutral-500 text-xs md:text-xl font-bold mb-4">
                            ✅ Evaluate employee progress and skill acquisition with automated assessments for continuous improvement.
                        </div>

                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/images/Home/upskill.jpeg"
                            alt="hero template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                        <Image
                            src="/images/Home/skill2.jpeg"
                            alt="feature template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                        <Image
                            src="/images/hr-management/hrmng6.jpeg"
                            alt="bento template"
                            width={500}
                            height={500}
                            className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                        <Image
                            src="/images/hr-management/hrmng4.jpeg"
                            alt="cards template"
                            width={500}
                            height={500}
                            className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                    </div>
                </div>
            ),
        },
    ];
    return (
        (<div className="w-full">
            <Timeline data={data} />
        </div>)
    );
}
