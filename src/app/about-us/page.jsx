import React from "react";
import Image from "next/image";
export default function page() {
  return (
    <>
      <div className="sm:flex items-center max-w-screen-xl p-10 sm:p-16 md:p-24">
        <div className="sm:w-2/3 sm:mr-10">
          <div className="text">
            {/* <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">
              about us
            </span> */}
            <h2 className="font-bold text-3xl my-4 sm:text-4xl">
              Welcome to{" "}
              <span className="text-indigo-600 font-bold">EvoXcel</span>, your
              trusted partner in business growth and digital transformation
            </h2>
            <p className="text-gray-700 font-medium">
              We specialize in providing cutting-edge LinkedIn and email
              automation services, as well as comprehensive web development,
              software development, application development, and lead generation
              solutions. Our mission is to empower businesses to achieve their
              full potential through innovative technology and strategic
              solutions.
            </p>
            <p className="text-gray-700 font-medium pt-5">
              At EvoXcel, we believe in the power of automation and digital
              solutions to revolutionize the way businesses operate. Our expert
              team is dedicated to delivering top-notch services tailored to
              meet the unique needs of each client, ensuring measurable results
              and long-term success.
            </p>
          </div>
        </div>
        <div className="sm:w-1/3 sm:mx-auto">
          <div className="image object-center text-center">
            <Image
              src="/images/about-us/about-us.png"
              width={300}
                          height={300}
                          className="w-[28vw] h-[58]"
            />
          </div>
        </div>
      </div>
    </>
  );
}
