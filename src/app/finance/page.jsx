import { DollarSign, PieChart, Link2, ShieldCheck, Users } from 'lucide-react'
import Image from 'next/image';
import Link from 'next/link';
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
            <main className="min-h-screen bg-gradient-to-r from-[#022e2b] to-[#031356] relative overflow-hidden">
                <div className="container mx-auto px-6 py-12 md:py-20">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="w-full md:w-1/2 space-y-6 z-10 pl-[4vw]">
                            <div className="text-gray-200 text-sm md:text-base">
                                Transform Financial Management with
                            </div>
                            <div className="space-y-4">
                                <h1 className="text-[3.6rem] md:text-[3.6rem] font-bold text-white tracking-tight">
                                    EvoXcel&apos;s Advanced
                                    <br />
                                    <span className="text-emerald-400">Finance Software</span>
                                </h1>
                                <p className="text-gray-200 text-lg md:text-xl max-w-xl leading-relaxed">
                                    EvoXcel&apos;s Finance Software empowers businesses with seamless financial
                                    management. From budget planning and expense tracking to real-time financial analytics, it’s
                                    designed to optimize resources and ensure compliance across global operations.
                                </p>
                                <div className="navBar lg:py-[15px] lg:pr-[1vw] text-color relative z-20 ">


                                    <button className="relative flex items-center overflow-hidden rounded-full bg-white text-gray-900 shadow-md hover:text-blue">
                                        <a href="https://finance.evoxcel.com/" target='_blank' className='text-white'>
                                            <span className="absolute inset-0 bg-green-600 -translate-x-full transition-transform duration-300 hover:translate-x-0"></span>
                                            <div className="flex items-center relative z-10">
                                                <div className="flex items-center justify-center w-12 h-10 bg-green-600">
                                                    <svg
                                                        viewBox="0 0 50 50"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                    >
                                                        <circle
                                                            opacity="0.5"
                                                            cx="25"
                                                            cy="25"
                                                            r="23"
                                                            fill="url(#icon-payments-cat_svg__paint0_linear_1141_21101)"
                                                        ></circle>
                                                        <mask id="icon-payments-cat_svg__a" fill="#fff">
                                                            <path
                                                                fillRule="evenodd"
                                                                clipRule="evenodd"
                                                                d="M34.42 15.93c.382-1.145-.706-2.234-1.851-1.852l-18.568 6.189c-1.186.395-1.362 2-.29 2.644l5.12 3.072a1.464 1.464 0 001.733-.167l5.394-4.854a1.464 1.464 0 011.958 2.177l-5.154 4.638a1.464 1.464 0 00-.276 1.841l3.101 5.17c.644 1.072 2.25.896 2.645-.29L34.42 15.93z"
                                                            ></path>
                                                        </mask>
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M34.42 15.93c.382-1.145-.706-2.234-1.851-1.852l-18.568 6.189c-1.186.395-1.362 2-.29 2.644l5.12 3.072a1.464 1.464 0 001.733-.167l5.394-4.854a1.464 1.464 0 011.958 2.177l-5.154 4.638a1.464 1.464 0 00-.276 1.841l3.101 5.17c.644 1.072 2.25.896 2.645-.29L34.42 15.93z"
                                                            fill="#fff"
                                                        ></path>
                                                        <defs>
                                                            <linearGradient
                                                                id="icon-payments-cat_svg__paint0_linear_1141_21101"
                                                                x1="25"
                                                                y1="2"
                                                                x2="25"
                                                                y2="48"
                                                                gradientUnits="userSpaceOnUse"
                                                            >
                                                                <stop stopColor="#fff" stopOpacity="0.71"></stop>
                                                                <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
                                                            </linearGradient>
                                                        </defs>
                                                    </svg>
                                                </div>
                                                <span className="pl-3 pr-6 text-sm font-semibold text-black">Get Started</span>
                                            </div>
                                        </a>
                                    </button>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 h-[500px] relative ">
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
            <section className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-[4.2vw]">
                    <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
                        Why Choose EvoXcel Finance Software?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105"
                            >
                                <div className="p-6">
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
            <section className=" bg-gradient-to-br from-blue-50 to-indigo-100">
                <main className="container  py-[6.25rem]">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mx-[6vw]">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-4xl font-bold text-gray-800 mb-8">Key Features</h2>

                            <div className="space-y-6">
                                {featuredata.map((featuredatas, index) => (
                                    <div key={index} className="flex items-start space-x-4 group">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center group-hover:bg-indigo-200 transition-colors duration-300">
                                            <featuredatas.icon className="w-6 h-6 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-800 mb-1 group-hover:text-indigo-600 transition-colors duration-300">{featuredatas.title}</h3>
                                            <p className="text-gray-600">{featuredatas.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>

                        <div className="w-full lg:w-1/2">
                            <div className="relative">
                                {/* <div className="absolute inset-0 bg-gradient-to-r from-indigo-200 to-blue-200 transform skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-[11rem]"></div> */}
                                <Image
                                    width={300}
                                    height={300}
                                    src="/images/finance/img2.jpg"
                                    alt="Expense Tracking Dashboard"
                                    className="relative rounded-3xl shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </main>
            </section>
            <section className="w-[100%] py-[5vh] bg-[#191D31] px-[6vw] flex items-center">
                <figure className="w-[50%] flex items-center justify-center">
                    <Image
                        width={300}
                        height={300} className="md:h-[96%] w-[96%]"
                        src="/images/finance/finance-s.png"
                        loading="lazy" alt="" />
                </figure>
                <div className="w-[50%] space-y-[20px]">
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