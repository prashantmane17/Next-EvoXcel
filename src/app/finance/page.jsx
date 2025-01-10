import { BackgroundBoxesDemo } from '@/components/finance/BackgroundBoxesDemo';
import { HeroScrollDemo } from '@/components/homePage/HeroScrollDemo';
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
            {/* bg-gradient-to-r from-[#022e2b] to-[#031356] */}
            {/* <BackgroundBoxesDemo /> */}
            <HeroScrollDemo />
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


                                    <button className="relative flex items-center overflow-hidden rounded-full bg-white text-gray-900 shadow-md hover:text-blue">
                                        <a href="https://finance.evoxcel.com/" target='_blank' className='text-white'>
                                            <span className="absolute inset-0 bg-green-600 -translate-x-full transition-transform duration-300 hover:translate-x-0"></span>
                                            <div className="flex items-center relative z-10">
                                                <div className="flex items-center justify-center w-12 h-10 bg-green-600">

                                                </div>
                                                <span className="pl-3 pr-6 text-sm font-semibold text-black">Get Started</span>
                                            </div>
                                        </a>
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
                                            <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-indigo-600 transition-colors duration-300">{featuredatas.title}</h3>
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