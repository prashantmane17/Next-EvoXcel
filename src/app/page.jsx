import Link from "next/link";
import Image from "next/image";
import Hero from "./components/Home_page/Hero";

const Home = () => {
  return (
    <div className="w-[100%]">
      <Hero />

      {/* <div className="carddoll hidden absolute md:top-[50vh] top-[55vh] right-[0vw] md:w-[16em] w-[12em]">
        <img
          src="https://uiverse.io/build/_assets/astronaut-WTFWARES.png"
          alt=""
          className="image w-[10vw]"
        />
      </div> */}
      <section className="md:h-[75vh] w-[100%] pt-[5vh] mb-[5vh] md:mb-0 bg-slate-50">
        <article className="m-auto w-[90%] md:h-[75vh]  md:flex   justify-between">
          <figure className="md:w-[50%] flex items-start justify-center  overflow-hidden">
            {/* <img className='w-[100%] object-cover' src="https://images.unsplash.com/photo-1600275669283-4bf2bb8a990c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
            <Image
              className="w-[100%] h-[100%] object-contain"
              src="/images/Home/welcomeImage.webp"
              width={300}
              height={300}
              alt=""
            />
          </figure>
          <div
            className="md:w-[50%] justify-center px-[5vw]"
            data-aos="fade-in"
          >
            <h2 className="text-center pt-[7vh] headingfont text-[#112029] md:text-[2.3vw] font-[700]">
              Welcome to EvoXcel
            </h2>
            <p className="md:text-[1.1vw] md:leading-8 mb-[5vh] md:mb-0 text-[4vw] text-justify pt-[2vh] pfont">
              &ldquo;We empower your business success with a comprehensive range
              of cutting-edge services and products. From custom web, software,
              and application development to expert lead generation strategies,
              we are here to drive your growth. Explore our advanced LinkedIn
              automation and email automation tools designed to streamline
              outreach and maximize results. Let us partner with you to achieve
              your business objectives. &ldquo;
            </p>
          </div>
        </article>
      </section>
      <section className="bghome3 pl-[3vw]">
        <article className="w-[100%] md:flex">
          <div className="md:w-[55%] pr-[3vw]">
            {/* <h2 className='text-white text-[2vw]'>~</h2> */}
            <h2
              className="text-[7vw] md:text-[1.3vw] pt-[5vh] text-[#fff] headingfont"
              data-aos="fade-right"
              data-aos-duration="700"
            >
              WHAT WE PROVIDE
            </h2>
            <h2
              className=" text-[10vw] md:text-[3.1vw] font-bold text-[#fff] headingfont"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              Our Services
            </h2>
            <article className="md:flex justify-between text-white mt-[5vh] w-[100%]">
              <Link
                href="/web-development"
                className="md:w-[45%] cursor-pointer"
                data-aos="fade-right"
                data-aos-duration="700"
              >
                <div>
                  <i className="fa-solid fa-laptop md:text-[1.5vw] px-[3vw] py-[3.5vw] md:px-[0.7vw] md:py-[0.9vw] bg-[#ffffff42] rounded-full"></i>
                  <h2 className="md:text-[1.2vw] font-[550] mt-4 headingfont">
                    Web Development
                  </h2>
                  <p className="md:text-[1vw] pt-[1.4vh] text-slate-300 pfont">
                    Specializing in custom web development, we craft visually
                    stunning and high-performing websites that drive revenue and
                    elevate user experience.....
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
                  <h2 className="md:text-[1.2vw] font-[550] mt-4 headingfont">
                    Software Development
                  </h2>
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
            <article className="md:flex justify-between text-white md:py-[9vh]  w-[100%]">
              <Link
                href="/application-development"
                className="md:w-[45%] cursor-pointer"
                data-aos="fade-right"
                data-aos-duration="700"
              >
                <div>
                  <i className="fa-solid fa-computer md:text-[1.5vw] px-[3vw] py-[3.5vw] md:px-[0.7vw] md:py-[0.9vw] bg-[#ffffff42] rounded-full"></i>
                  <h2 className="md:text-[1.2vw] font-[550] mt-4 headingfont">
                    Application Development
                  </h2>
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
                  <h2 className="md:text-[1.2vw] font-[550] mt-4 headingfont">
                    Lead Generation
                  </h2>
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
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
              alt="our-products-Image"
            />
          </figure>
          <div className="md:w-[50%] px-[4vw] md:px-0 pt-[5vh] ">
            <h2
              className="text-[7vw] md:text-[1.3vw] font-[500] text-[#112029] headingfont"
              data-aos="fade-right"
              data-aos-duration="700"
            >
              WHAT WE PROVIDE
            </h2>
            <h2
              className="text-[10vw] md:text-[3.1vw] font-bold text-[#112029] headingfont"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              Our Products
            </h2>
            <article className="md:flex justify-between gap-[2vw] text-white mt-[5vh] w-[100%]">
              <Link href="/linkedin-automation" data-aos="fade-right">
                <div className="w-[100%] cursor-pointer">
                  <i className="fa-brands fa-linkedin md:text-[1.5vw] p-2 bg-[#112029] rounded-full"></i>
                  <h2 className="md:text-[1.2vw] font-[550] mt-4 text-[#112029] headingfont">
                    LinkedIn Automation
                  </h2>
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
                  <h2 className="md:text-[1.2vw] font-[550] mt-4 text-[#112029] headingfont">
                    Email Automation
                  </h2>
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
        <h2
          className="text-center md:text-[2.5vw] font-[600] headingfont text-white"
          data-aos="fade-right"
        >
          Why Choose ExoXcel?
        </h2>
        <section className="md:flex homepagelast justify-between w-[100%] mt-[5vh]">
          <aside
            className="md:w-[50%] flex flex-col items-start justify-center pl-7"
            data-aos="fade-right"
          >
            <h2 className="md:text-[2.5vw] font-[600] headingfont text-slate-800">
              Confident Campaign Launches.
            </h2>
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
              className="w-[65%]"
              alt=""
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
              className="w-[80%]"
              alt=""
            />
          </figure>
          <aside
            className="md:w-[50%] flex flex-col items-start justify-center pl-7"
            data-aos="fade-right"
          >
            <h2 className="md:text-[2.5vw] font-[600] headingfont  text-white">
              Boost Conversions with Smart Sequences.
            </h2>
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
            <h2 className="md:text-[2.5vw] font-[600] headingfont text-slate-800">
              Enhance Connections with Intelligent Communication.
            </h2>
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
              className="w-[70%]"
              alt=""
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
              className="w-[60%]"
              alt=""
            />
          </figure>
          <aside
            className="md:w-[50%] flex flex-col items-start justify-center pl-7"
            data-aos="fade-right"
          >
            <h2 className="md:text-[2.5vw] font-[600] headingfont  text-white">
              Optimize with Data-Driven Insights
            </h2>
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
            <h2 className="md:text-[2.5vw] font-[600] headingfont text-slate-800">
              Seamless Tool Integration.
            </h2>
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
              className="w-[65%]"
              alt=""
            />
          </figure>
        </section>
      </article>
    </div>
  );
};

export default Home;
