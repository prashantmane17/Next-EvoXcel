import { BackgroundBoxesDemo } from '@/components/finance/BackgroundBoxesDemo';
import { HeroScrollDemo } from '@/components/homePage/HeroScrollDemo';
import { DollarSign, PieChart, Link2, ShieldCheck, Users } from 'lucide-react'
import Image from 'next/image';
import Link from 'next/link';
import './finance.css'
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
            <main className=" relative overflow-hidden">
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
                                        {/* <a href="https://finance.evoxcel.com/" target='_blank' className='text-white'> */}
                                {/* get started button */}
                                <button className="button">
                                    <div className="outline" />
                                    <div className="state state--default">
                                        <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="1em" width="1em">
                                            <g style={{ filter: "url(#shadow)" }}>
                                            <path
                                                fill="currentColor"
                                                d="M14.2199 21.63C13.0399 21.63 11.3699 20.8 10.0499 16.83L9.32988 14.67L7.16988 13.95C3.20988 12.63 2.37988 10.96 2.37988 9.78001C2.37988 8.61001 3.20988 6.93001 7.16988 5.60001L15.6599 2.77001C17.7799 2.06001 19.5499 2.27001 20.6399 3.35001C21.7299 4.43001 21.9399 6.21001 21.2299 8.33001L18.3999 16.82C17.0699 20.8 15.3999 21.63 14.2199 21.63Z"
                                            />
                                            <path
                                                fill="currentColor"
                                                d="M10.11 14.4C9.92005 14.4 9.73005 14.33 9.58005 14.18C9.29005 13.89 9.29005 13.41 9.58005 13.12L13.16 9.53C13.45 9.24 13.93 9.24 14.22 9.53C14.51 9.82 14.51 10.3 14.22 10.59L10.64 14.18C10.5 14.33 10.3 14.4 10.11 14.4Z"
                                            />
                                            </g>
                                            <defs>
                                            <filter id="shadow">
                                                <feDropShadow floodOpacity="0.5" stdDeviation="0.6" dy="1" dx="0" floodColor="black" />
                                            </filter>
                                            </defs>
                                        </svg>
                                        </div>
                                        <p>
                                        <span style={{ "--i": 0 }}>S</span>
                                        <span style={{ "--i": 1 }}>e</span>
                                        <span style={{ "--i": 2 }}>n</span>
                                        <span style={{ "--i": 3 }}>d</span>
                                        <span style={{ "--i": 4 }}>M</span>
                                        <span style={{ "--i": 5 }}>e</span>
                                        <span style={{ "--i": 6 }}>s</span>
                                        <span style={{ "--i": 7 }}>s</span>
                                        <span style={{ "--i": 8 }}>a</span>
                                        <span style={{ "--i": 9 }}>g</span>
                                        <span style={{ "--i": 10 }}>e</span>
                                        </p>
                                    </div>
                                    <div className="state state--sent">
                                        <div className="icon">
                                        <svg stroke="black" strokeWidth="0.5px" width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g style={{ filter: "url(#shadow)" }}>
                                            <path
                                                d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M10.5795 15.5801C10.3795 15.5801 10.1895 15.5001 10.0495 15.3601L7.21945 12.5301C6.92945 12.2401 6.92945 11.7601 7.21945 11.4701C7.50945 11.1801 7.98945 11.1801 8.27945 11.4701L10.5795 13.7701L15.7195 8.6301C16.0095 8.3401 16.4895 8.3401 16.7795 8.6301C17.0695 8.9201 17.0695 9.4001 16.7795 9.6901L11.1095 15.3601C10.9695 15.5001 10.7795 15.5801 10.5795 15.5801Z"
                                                fill="currentColor"
                                            />
                                            </g>
                                        </svg>
                                        </div>
                                        <p>
                                        <span style={{ "--i": 5 }}>S</span>
                                        <span style={{ "--i": 6 }}>e</span>
                                        <span style={{ "--i": 7 }}>n</span>
                                        <span style={{ "--i": 8 }}>t</span>
                                        </p>
                                    </div>
                                </button>


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