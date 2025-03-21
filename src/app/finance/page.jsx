"use client";
import { BackgroundBoxesDemo } from '@/components/finance/BackgroundBoxesDemo';
import { HeroScrollDemo } from '@/components/homePage/HeroScrollDemo';
import { DollarSign, PieChart, Link2, ShieldCheck, Users } from 'lucide-react'
import Image from 'next/image';
import Link from 'next/link';
//import './finance.css'
import styled from 'styled-components';


const StyledWrapper = styled.div`
  .animated-button {
    position: relative;
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 16px 36px;
    border: 4px solid;
    border-color: transparent;
    font-size: 16px;
    background-color: inherit;
    border-radius: 100px;
    font-weight: 600;
    color: white;
    box-shadow: 0 0 0 2px #622bff;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .animated-button svg {
    position: absolute;
    width: 24px;
    fill: white;
    z-index: 9;
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .animated-button .arr-1 {
    right: 16px;
  }

  .animated-button .arr-2 {
    left: -25%;
  }

  .animated-button .circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    background-color: #622bff;
    border-radius: 50%;
    opacity: 0;
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .animated-button .text {
    position: relative;
    z-index: 1;
    transform: translateX(-12px);
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .animated-button:hover {
    box-shadow: 0 0 0 12px transparent;
    color: white;
    border-radius: 12px;
  }

  .animated-button:hover .arr-1 {
    right: -25%;
  }

  .animated-button:hover .arr-2 {
    left: 16px;
  }

  .animated-button:hover .text {
    transform: translateX(12px);
  }

  .animated-button:hover svg {
    fill: white;
  }

  .animated-button:active {
    scale: 0.95;
    box-shadow: 0 0 0 4px 622BFF;
  }

  .animated-button:hover .circle {
    width: 220px;
    height: 220px;
    opacity: 1;
  }`;
const Home = () => {

    const features = [
        {
            title: "Business Budgeting Tools",
            description: "Simplify financial planning and resource optimization.",
            icon: "💼",
        },
        {
            title: "Automated Invoicing Solutions",
            description: "Streamline workflows and reconciliation.",
            icon: "🧾",
        },
        {
            title: "Financial Analytics Platform",
            description: "Gain actionable insights via dynamic dashboards.",
            icon: "📊",
        },
        {
            title: "Multi-Currency Financial Management",
            description: "Perfect for global transactions.",
            icon: "🌐",
        },
        {
            title: "Compliance Financial Software",
            description: "Meet tax and audit regulations with confidence.",
            icon: "✅",
        },
    ];
    const featuredata = [
        {
            title: "Expense Tracking",
            description: "Monitor and approve expenditures in real-time.",
            icon: DollarSign
        },
        {
            title: "Custom Reports",
            description: "Tailored financial insights for smarter decisions.",
            icon: PieChart
        },
        {
            title: "Seamless Integrations",
            description: "Works with ERP, payroll, and accounting systems.",
            icon: Link2
        },
        {
            title: "Data Security",
            description: "Advanced encryption for secure operations.",
            icon: ShieldCheck
        },
        {
            title: "Access Control",
            description: "Precision in managing user access.",
            icon: Users
        }
    ]
    return (
        <div>
            {/* bg-gradient-to-r from-[#022e2b] to-[#031356] */}
            {/* <BackgroundBoxesDemo /> */}
            {/* <HeroScrollDemo /> */}
            <main className=" relative overflow-hidden py-2">
                <div className="container mx-auto md:px-6 px-3 pt-[1rem] md:pt-[7rem]">
                    <div className="md:flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="w-full md:w-1/2 space-y-6 z-10 pl-[4vw]">
                            <div className="text-gray-200  md:text-base  text-[4.6vw]">
                                Transform Financial Management with
                            </div>
                            <div className="space-y-4">
                                <h1 className=" md:text-[3.1rem] text-[6vw] font-bold text-white tracking-tight">
                                    EvoXcel&apos;s Advanced
                                    <br />
                                    <span className="text-emerald-400">Finance Software</span>
                                </h1>
                                <p className="text-gray-200 text-lg md:text-xl text-[3vw] max-w-xl leading-relaxed">
                                    EvoXcel&apos;s Finance Software empowers businesses with seamless financial
                                    management. From budget planning and expense tracking to real-time financial analytics, it’s
                                    designed to optimize resources and ensure compliance across global operations.
                                </p>
                                <div className="navBar lg:py-[15px] lg:pr-[1vw] text-color relative z-20 ">
                                         {/* get started button */}
                                        <a href="https://finance.evoxcel.com/" target='_blank'>
                                            <StyledWrapper>
                                                <button className="animated-button">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="arr-2" viewBox="0 0 24 24">
                                                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                                                    </svg>
                                                    <span className="text">Get Started</span>
                                                    <span className="circle" />
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="arr-1" viewBox="0 0 24 24">
                                                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                                                    </svg>
                                                </button>
                                            </StyledWrapper>
                                        </a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 md:h-[500px] relative ">
                            {/* <div className="absolute inset-0 bg-gradient-to-r from-teal-900/50 to-emerald-50/50 z-10 rounded-lg"></div> */}
                            <Image
                                width={300}
                                height={300}
                                src="/images/finance/img3.png"
                                // src="/assets/finance-software.png"
                                alt="Financial Management Illustration"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                    </div>
                </div>
                {/* <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-50/10 -skew-x-12 transform origin-top"></div> */}
            </main>
            {/* bg-gradient-to-br from-blue-100 to-indigo-200 */}
            <section className=" md:py-12 px-4 sm:px-6 lg:px-5">
                <div className="max-w-7xl mx-[4.2vw]">
                    <h2 className="text-2xl font-extrabold text-center text-white mb-12">
                        Why Choose EvoXcel Finance Software?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105"
                            >
                                <div className="md:p-6 p-5">
                                    <div className="text-4xl mb-4">{feature.icon}</div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section >
            {/* bg-gradient-to-br from-blue-50 to-indigo-100 */}
            <section className=" ">
                <main className="container md:py-[6.25rem] py-[1rem]">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mx-[6vw] ">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-4xl font-bold text-white mb-8">Key Features</h2>

                            <div className="space-y-6">
                                {featuredata.map((featuredatas, index) => (
                                    <div key={index} className="flex items-start space-x-4 group">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center group-hover:bg-indigo-200 transition-colors duration-300">
                                            <featuredatas.icon className="w-6 h-6 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white mb-1 transition-colors duration-300">{featuredatas.title}</h3>
                                            <p className="text-white">{featuredatas.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>

                        <div className="w-full lg:w-1/2">
                            <div className="relative">
                                {/* <div className="absolute inset-0 bg-gradient-to-r from-indigo-200 to-blue-200 transform skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-[11rem]"></div> */}
                                <Image
                                    width={700}
                                    height={700}
                                    src="/images/finance/img2.jpg"
                                    alt="Expense Tracking Dashboard"
                                    className="relative rounded-3xl shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </main>
            </section>
            {/* bg-[#191D31] */}
            <section className="md:w-[100%] md:py-[5vh]  md:flex items-center">
                <figure className="md:w-[50%] flex items-center justify-center">
                    <Image
                        width={900}
                        height={900} className="md:h-[96%] w-[96%]"
                        src="/images/finance/finance-s.png"
                        loading="lazy" alt="" />
                </figure>
                <div className="md:w-[50%] md:px-0 px-5">
                    <h2 className="text-4xl text-white font-bold"></h2>
                    <p className="text-xl text-white">EvoXcel&apos;s financial management software combines scalability,
                        security, and efficiency to help businesses succeed globally. Unlock the power of automation, enterprise financial solutions,
                        and compliance-ready tools with EvoXcel Finance Software.</p>
                </div>
            </section>

        </div>
    );
}
export default Home;