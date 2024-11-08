import Link from "next/link";
import Image from "next/image";
import Hero from "./components/Home_page/Hero";
import Script from "next/script";

export const metadata = {
  title: "EvoXcel – Tailored IT Staffing & Business Solutions",
  description:
    "Evoxcel offers customized IT staffing solutions, from flexible staffing to expert project management, helping businesses achieve scalable and cost-effective results.",

  alternates: {
    canonical: "https://web.evoxcel.com/",
  },
  siteName: "EvoXcel",
  openGraph: {
    type: "website",
    url: "https://web.evoxcel.com/",
    site_name: "EvoXcel",
    title: "EvoXcel | Your Partner in IT Excellence",
    description:
      "At EvoXcel, we offer dynamic IT solutions, including staffing, software development, and business-enhancing technologies to drive success.",
    locale: "en_US",
    images: [
      {
        url: "https://web.evoxcel.com/images/e_logo.webp",
        width: 1200,
        height: 630,
        alt: "EvoXcel",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "EvoXcel | Your Partner in IT Excellence",
    description:
      "At EvoXcel, we offer dynamic IT solutions, including staffing, software development, and business-enhancing technologies to drive success.",
    site: "@yourTwitterHandle",
    creator: "@yourTwitterHandle",
    images: [
      {
        url: "https://web.evoxcel.com/images/e_logo.webp",
        alt: "EvoXcel",
      },
    ],
  },

  facebookAppId: "your_facebook_app_id_here",

  metadata: {
    keywords: [
      "IT Staffing",
      "Business Solutions",
      "EvoXcel",
      "Project Management",
    ],
    author: "EvoXcel",
  },
};

const Home = () => {
  return (
    <>
      <div className="w-[100%]">
        <Hero />
        <section className="md:h-fit w-[100%]  mb-[5vh] md:mb-0 bg-slate-50">
          <article className="m-auto w-[90%] md:h-fit  md:flex   justify-between">
            <figure className="md:w-[50%] flex items-start justify-center  overflow-hidden">
              <Image
                className="w-[100%] h-[100%] object-contain"
                src="/images/Home/welcomeImage.webp"
                width={300}
                height={300}
                loading="lazy"
                alt="welcomeImage"
              />
            </figure>
            <div
              className="md:w-[50%] justify-center px-[5vw]"
              data-aos="fade-in"
            >
              <p className="text-center pt-[7vh] headingfont text-[#112029] md:text-[2.3vw] font-[700]">
                Welcome to EvoXcel
              </p>
              <p className="md:text-[1.1vw] md:leading-8 mb-[5vh] md:mb-0 text-[4vw] text-justify pt-[2vh] pfont">
                &ldquo;We empower your business success with a comprehensive
                range of cutting-edge services and products. From custom web,
                software, and application development to expert lead generation
                strategies, we are here to drive your growth. Explore our
                advanced LinkedIn automation and email automation tools designed
                to streamline outreach and maximize results. Let us partner with
                you to achieve your business objectives. &ldquo;
              </p>
            </div>
          </article>
        </section>
        <section className="bghome3 pl-[3vw]">
          <article className="w-[100%] md:flex">
            <div className="md:w-[55%] pr-[3vw]">
              {/* <p className='text-white text-[2vw]'>~</p> */}
              <p
                className="text-[7vw] md:text-[1.3vw] pt-[5vh] text-[#fff] headingfont"
                data-aos="fade-right"
                data-aos-duration="700"
              >
                WHAT WE PROVIDE
              </p>
              <p
                className=" text-[10vw] md:text-[3.1vw] font-bold text-[#fff] headingfont"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                Our Services
              </p>
              <article className="md:flex justify-between text-white mt-[5vh] w-[100%]">
                <Link
                  href="/web-development"
                  className="md:w-[45%] cursor-pointer"
                  data-aos="fade-right"
                  data-aos-duration="700"
                >
                  <div>
                    <i className="fa-solid fa-laptop md:text-[1.5vw] px-[3vw] py-[3.5vw] md:px-[0.7vw] md:py-[0.9vw] bg-[#ffffff42] rounded-full"></i>
                    <p className="md:text-[1.2vw] font-[550] mt-4 headingfont">
                      Web Development
                    </p>
                    <p className="md:text-[1vw] pt-[1.4vh] text-slate-300 pfont">
                      Specializing in custom web development, we craft visually
                      stunning and high-performing websites that drive revenue
                      and elevate user experience.....
                    </p>
                    <button className="mt-3 md:text-[0.9vw] text-slate-300 pfont">
                      Know More <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                </Link>
                <Link
                  href="/software-development"
                  className="md:w-[45%] cursor-pointer"
                  data-aos="fade-right"
                  data-aos-duration="700"
                >
                  <div>
                    <i className="fa-solid fa-code md:text-[1.5vw] px-[3vw] py-[3.5vw] md:px-[0.7vw] md:py-[0.9vw] bg-[#ffffff42] rounded-full"></i>
                    <p className="md:text-[1.2vw] font-[550] mt-4 headingfont">
                      Software Development
                    </p>
                    <p className="md:text-[1vw] pt-[1.4vh] text-slate-300 pfont">
                      Our expert team utilizes state-of-the-art technology to
                      create scalable, secure, and innovative software solutions
                      tailored to your unique needs....
                    </p>
                    <button className=" md:text-[0.9vw] mt-3 text-slate-300 pfont">
                      Know More <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                </Link>
              </article>
              <article className="md:flex justify-between text-white md:py-[4vh]  w-[100%]">
                <Link
                  href="/application-development"
                  className="md:w-[45%] cursor-pointer"
                  data-aos="fade-right"
                  data-aos-duration="700"
                >
                  <div>
                    <i className="fa-solid fa-computer md:text-[1.5vw] px-[3vw] py-[3.5vw] md:px-[0.7vw] md:py-[0.9vw] bg-[#ffffff42] rounded-full"></i>
                    <p className="md:text-[1.2vw] font-[550] mt-4 headingfont">
                      Application Development
                    </p>
                    <p className="md:text-[1vw] pt-[1.4vh] text-slate-300 pfont">
                      Whether you need bespoke software, scalable web apps, or
                      robust mobile applications, our skilled team delivers
                      solutions that drive business success....
                    </p>
                    <button className="mt-3 md:text-[0.9vw] text-slate-300 pfont">
                      Know More <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                </Link>
                <Link
                  href="/lead-generation"
                  className="md:w-[45%] cursor-pointer"
                  data-aos="fade-right"
                  data-aos-duration="700"
                >
                  <div>
                    <i className="fa-solid fa-filter-circle-dollar md:text-[1.5vw] px-[3vw] py-[3.5vw] md:px-[0.7vw] md:py-[0.9vw] bg-[#ffffff42] rounded-full"></i>
                    <p className="md:text-[1.2vw] font-[550] mt-4 headingfont">
                      Lead Generation
                    </p>
                    <p className="md:text-[1vw] pt-[1.4vh] text-slate-300 pfont">
                      Leverage targeted lead generation to attract and engage
                      high-quality prospects. Our all-encompassing approach
                      ensures you reach the right audience effectively....
                    </p>
                    <button className="mt-3 md:text-[0.9vw] text-slate-300 pfont">
                      Know More <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                </Link>
              </article>
            </div>
            <figure className="md:w-[45%] flex justify-end" data-aos="fade-in">
              <Image
                className="w-[100%] h-[100%] mb-5 object-cover"
                width={300}
                height={300}
                loading="lazy"
                src="/images/Home/Our_Services.webp"
                alt="Our-services-image"
              />
            </figure>
          </article>
        </section>

        <section className=" pr-[6vw] bg-slate-50">
          <article className="w-[100%] md:flex justify-between ">
            <figure className="md:w-[45%] hidden md:block">
              <Image
                className=" w-[100%] h-[100%] mb-5 object-cover"
                src="/images/Home/product-Image.webp"
                width={300}
                height={300}
                loading="lazy"
                alt="our-products-Image"
              />
            </figure>
            <div className="md:w-[50%] px-[4vw] md:px-0 pt-[5vh] ">
              <p
                className="text-[7vw] md:text-[1.3vw] font-[500] text-[#112029] headingfont"
                data-aos="fade-right"
                data-aos-duration="700"
              >
                WHAT WE PROVIDE
              </p>
              <p
                className="text-[10vw] md:text-[3.1vw] font-bold text-[#112029] headingfont"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                Our Products
              </p>
              <article className="md:flex justify-between gap-[2vw] text-white mt-[5vh] w-[100%]">
                <Link href="/linkedin-automation" data-aos="fade-right">
                  <div className="w-[100%] cursor-pointer">
                    <i className="fa-brands fa-linkedin md:text-[1.5vw] p-2 bg-[#112029] rounded-full"></i>
                    <p className="md:text-[1.2vw] font-[550] mt-4 text-[#112029] headingfont">
                      LinkedIn Automation
                    </p>
                    <p className="md:text-[1vw] pfont pt-[1vh] text-[#112029]">
                      Automate your outreach with precision. Our LinkedIn
                      automation tools are designed to boost response rates,
                      bypass restrictions, and manage multiple accounts
                      effortlessly....
                    </p>
                    <button className="mt-3 pfont md:text-[0.9vw] text-[#112029] relative z-50">
                      Know More <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                </Link>
                <Link href="/email-automation" data-aos="fade-right">
                  <div className="w-[100%] cursor-pointer">
                    <i className="fa-solid fa-envelope md:text-[1.5vw] p-2 bg-[#112029] rounded-full"></i>
                    <p className="md:text-[1.2vw] font-[550] mt-4 text-[#112029] headingfont">
                      Email Automation
                    </p>
                    <p className="md:text-[1vw] pfont pt-[1vh] text-[#112029]">
                      Maximize your email campaigns with our powerful automation
                      tools, ensuring personalized messaging that engages and
                      converts high-quality leads...
                    </p>
                    <button className="mt-3 pfont md:text-[0.9vw] text-[#112029]">
                      Know More <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                </Link>
              </article>
            </div>
          </article>
        </section>
        <article className="px-[5vw] py-[10vh] bghomecolor">
          <p
            className="text-center md:text-[2.5vw] font-[600] headingfont text-white"
            data-aos="fade-right"
          >
            Why Choose ExoXcel?
          </p>
          <section className="md:flex homepagelast justify-between w-[100%] mt-[5vh]">
            <aside
              className="md:w-[50%] flex flex-col items-start justify-center pl-7"
              data-aos="fade-right"
            >
              <p className="md:text-[2.5vw] font-[600] headingfont text-slate-800">
                Confident Campaign Launches.
              </p>
              <ul className="md:text-[1.2vw] pfont flex flex-col gap-[2vh] mt-[5vh]">
                <li>
                  <i className="fa-solid fa-check mr-2 bg-[#003C71] p-1 rounded-full text-white"></i>{" "}
                  Boost response rates with precise targeting.
                </li>
                <li>
                  <i className="fa-solid fa-check mr-2 bg-[#003C71] p-1 rounded-full text-white"></i>{" "}
                  Boost response rates with precise targeting.
                </li>
                <li>
                  <i className="fa-solid fa-check mr-2 bg-[#003C71] p-1 rounded-full text-white"></i>{" "}
                  Manage multiple LinkedIn accounts from a single dashboard.
                </li>
              </ul>
            </aside>
            <figure
              className="md:w-[50%] flex justify-center items-center"
              data-aos="fade-in"
            >
              <Image
                src="/images/Home/Campaign-Image.webp"
                width={300}
                height={300}
                loading="lazy"
                className="w-[65%]"
                alt="Campaign-Image"
              />
            </figure>
          </section>
          <section className="md:flex homepagelast justify-between w-[100%] mt-[5vh]">
            <figure
              className="md:w-[50%] flex justify-center items-center"
              data-aos="fade-in"
            >
              <Image
                src="/images/Home/MC.webp"
                width={300}
                height={300}
                loading="lazy"
                className="w-[80%]"
                alt="Boost Conversions with Smart Sequences."
              />
            </figure>
            <aside
              className="md:w-[50%] flex flex-col items-start justify-center pl-7"
              data-aos="fade-right"
            >
              <p className="md:text-[2.5vw] font-[600] headingfont  text-white">
                Boost Conversions with Smart Sequences.
              </p>
              <ul className="md:text-[1.2vw] pfont flex flex-col gap-[2vh] mt-[5vh]">
                <li>
                  <i className="fa-solid fa-check mr-2 bg-[#003C71] p-1 rounded-full text-white"></i>{" "}
                  Automated invites and follow-ups.
                </li>
                <li>
                  <i className="fa-solid fa-check mr-2 bg-[#003C71] p-1 rounded-full text-white"></i>{" "}
                  Structured messaging for better engagement.
                </li>
                <li>
                  <i className="fa-solid fa-check mr-2 bg-[#003C71] p-1 rounded-full text-white"></i>{" "}
                  Targeted communication with group prospects.
                </li>
              </ul>
            </aside>
          </section>
          <section className="md:flex homepagelast justify-between w-[100%] mt-[5vh]">
            <aside
              className="md:w-[50%] flex flex-col items-start justify-center pl-7"
              data-aos="fade-right"
            >
              <p className="md:text-[2.5vw] font-[600] headingfont text-slate-800">
                Enhance Connections with Intelligent Communication.
              </p>
              <ul className="md:text-[1.2vw] pfont flex flex-col gap-[2vh] mt-[5vh]">
                <li>
                  <i className="fa-solid fa-check mr-2 bg-[#003C71] p-1 rounded-full text-white"></i>{" "}
                  AI-driven sentiment analysis for smarter interactions.
                </li>
                <li>
                  <i className="fa-solid fa-check mr-2 bg-[#003C71] p-1 rounded-full text-white"></i>{" "}
                  Centralized message management for efficiency.
                </li>
                <li>
                  <i className="fa-solid fa-check mr-2 bg-[#003C71] p-1 rounded-full text-white"></i>{" "}
                  Tag and track warm leads with ease.
                </li>
              </ul>
            </aside>
            <figure
              className="md:w-[50%] flex justify-center items-center"
              data-aos="fade-in"
            >
              <Image
                src="/images/Home/SCIC.webp"
                width={300}
                height={300}
                loading="lazy"
                className="w-[70%]"
                alt="Enhance Connections with Intelligent Communication."
              />
            </figure>
          </section>
          <section className="md:flex homepagelast justify-between w-[100%] mt-[5vh]">
            <figure
              className="md:w-[50%] flex justify-center items-center"
              data-aos="fade-in"
            >
              <Image
                src="/images/Home/OWDDI.webp"
                width={300}
                height={300}
                loading="lazy"
                className="w-[60%]"
                alt="Optimize with Data-Driven Insights"
              />
            </figure>
            <aside
              className="md:w-[50%] flex flex-col items-start justify-center pl-7"
              data-aos="fade-right"
            >
              <p className="md:text-[2.5vw] font-[600] headingfont  text-white">
                Optimize with Data-Driven Insights
              </p>
              <ul className="md:text-[1.2vw] pfont flex flex-col gap-[2vh] mt-[5vh]">
                <li>
                  <i className="fa-solid fa-check mr-2 bg-[#003C71] p-1 rounded-full text-white"></i>{" "}
                  Evaluate campaign performance via a powerful dashboard.
                </li>
                <li>
                  <i className="fa-solid fa-check mr-2 bg-[#003C71] p-1 rounded-full text-white"></i>{" "}
                  Access detailed demographic data for targeted insights.
                </li>
                <li>
                  <i className="fa-solid fa-check mr-2 bg-[#003C71] p-1 rounded-full text-white"></i>{" "}
                  Identify trends across LinkedIn accounts.
                </li>
              </ul>
            </aside>
          </section>
          <section className="md:flex homepagelast justify-between w-[100%] mt-[5vh]">
            <aside
              className="md:w-[50%] flex flex-col items-start justify-center pl-7"
              data-aos="fade-right"
            >
              <p className="md:text-[2.5vw] font-[600] headingfont text-slate-800">
                Seamless Tool Integration.
              </p>
              <ul className="md:text-[1.2vw] pfont flex flex-col gap-[2vh] mt-[5vh]">
                <li>
                  <i className="fa-solid fa-check mr-2 bg-[#003C71] p-1 rounded-full text-white"></i>{" "}
                  Integrations with CRM sales tools.
                </li>
                <li>
                  <i className="fa-solid fa-check mr-2 bg-[#003C71] p-1 rounded-full text-white"></i>{" "}
                  Applicant management system compatibility.
                </li>
                <li>
                  <i className="fa-solid fa-check mr-2 bg-[#003C71] p-1 rounded-full text-white"></i>{" "}
                  Data enrichment tool integrations for enriched outreach.
                </li>
              </ul>
            </aside>
            <figure
              className="md:w-[50%] flex justify-center items-center"
              data-aos="fade-in"
            >
              <Image
                src="/images/Home/SI.webp"
                width="300"
                height={300}
                loading="lazy"
                className="w-[65%]"
                alt="Seamless Tool Integration"
              />
            </figure>
          </section>
        </article>
      </div>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Evoxcel",
              url: "https://web.evoxcel.com",
              logo: "https://web.evoxcel.com/images/e_logo.webp",
              contactPoint: {
                "@type": "ContactPoint",
                email: "sales@evoxcel.com",
                contactType: "IT Service",
                areaServed: "IN",
                availableLanguage: "English",
              },
              sameAs: [
                "https://www.facebook.com/profile.php?id=61566321227448",
                "https://www.instagram.com/evoxcel/",
                "https://www.linkedin.com/company/evoxcel-tech/",
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Evoxcel",
              alternateName: "Evoxcel Technologies",
              url: "https://web.evoxcel.com",
            },
          ]),
        }}
      />
    </>
  );
};

export default Home;
