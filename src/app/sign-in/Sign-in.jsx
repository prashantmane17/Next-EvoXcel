"use client";
import React from "react";
// import img from "../assets/Sign In.png";
import Image from "next/image";

const Signin = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = "https://dashboard.evoxcel.com/login";
  };

  return (
    <>
      <section className="h-[100vh] w-[100%] flex justify-between">
        <aside className="h-[100%] w-full md:w-[45%]">
          <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              {/* <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"/> */}
              <h2 className="mt-10 headingfont text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Sign in to your account
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm p-3 md:p-0">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block headingfont text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block headingfont text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 pfont"
                  >
                    Sign in
                  </button>
                </div>
              </form>
              <div className="text-sm text-center mt-6">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500 headingfont"
                >
                  Forgot password?
                </a>
              </div>
              <p className="mt-6 text-center headingfont text-sm text-gray-500">
                Not a member?
                <a
                  href="#"
                  className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                >
                  Start a 10 days free trial
                </a>
              </p>
            </div>
          </div>
        </aside>
        <aside className="h-[100%] hidden w-[55%] pt-[12vh] md:flex justify-center items-center">
          <Image
            src="/images/sign/Sign_In.webp"
            width={300}
            height={300}
            className="w-[70%]"
            alt="Sign_In-image"
          />
        </aside>
      </section>
    </>
  );
};

export default Signin;
