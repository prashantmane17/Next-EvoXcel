//this file is not for use, this is the previous code of contact form.
"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './contact.css';

const Contactus = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, // Use environment variables
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Email sent successfully!");
        },
        (error) => {
          console.error("FAILED...", error.text);
          toast.error("Failed to send email.");
        }
      );

    form.current.reset();
  };

  return (
    <div className="isolate  px-6 py-24 sm:py-32 lg:px-8 relative z-40">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>
      {/* heading with para */}
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl headingfont font-bold tracking-tight text-white sm:text-4xl">
          Contact Us
        </h2>
        <p className="mt-2 text-lg pfont leading-8 text-white">
          We&lsquo;re excited to hear from you! Whether you&lsquo;re looking to
          kickstart a new project, need support with an existing one, or just
          want to explore how we can help your business grow, you&lsquo;re in
          the right place.
        </p>
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="mx-auto mt-16 max-w-xl sm:mt-1 p-6 md:p-0 bg-black md:bg-transparent rounded-md shadow-lg shadow-gray-400 md:shadow-none"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 bg-black ">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-white"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 text-white"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-white"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-white">
              Phone number
            </label>
            <div className="relative mt-2.5">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">
                  Country
                </label>
                <select id="country" name="country" className="h-full rounded-md border-0 bg-transparent bg-none py-0 pr-2 text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                  <option>IN</option>
                  <option>US</option>
                  <option>CA</option>
                  <option>EU</option>
                </select>
              </div>
              <input
                type="tel"
                name="phone-number"
                id="phone-number"
                autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 pl-25 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-white"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows="4"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="mt-6">
          {/* send button */}
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 
                      px-3.5 py-2.5 text-center text-sm font-semibold 
                      text-white shadow-sm hover:bg-indigo-500 focus-visible:outline 
                      focus-visible:outline-2 focus-visible:outline-offset-2 
                      focus-visible:outline-indigo-600">
            Send
          </button>
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
                                        <span style={{ "--i": 0 }}>G</span>
                                        <span style={{ "--i": 1 }}>e</span>
                                        <span style={{ "--i": 2 }}>t</span>
                                        <span style={{ "--i": 3 }}> </span>
                                        <span style={{ "--i": 4 }}>S</span>
                                        <span style={{ "--i": 5 }}>t</span>
                                        <span style={{ "--i": 6 }}>a</span>
                                        <span style={{ "--i": 7 }}>r</span>
                                        <span style={{ "--i": 8 }}>t</span>
                                        <span style={{ "--i": 9 }}>e</span>
                                        <span style={{ "--i": 10 }}>d</span>
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

          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </div>
      </form>
    </div>
  );
};

export default Contactus;
