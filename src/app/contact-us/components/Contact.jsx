"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './contact.css';
import { useForm } from "react-hook-form";

function Contactus() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  // function onSubmit(data){
  //   console.log("submitting the form", data);
  // }
  const form = useRef();

  const sendEmail = (e, data) => {
    e.preventDefault();
    console.log("submitting the form", data);

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
  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div className="isolate bg-black px-6 py-24 sm:py-32 lg:px-8 relative z-40">
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
        className=" mx-auto mt-16 max-w-xl sm:mt-1 p-6 md:p-0 bg-black text-white md:bg-transparent rounded-md shadow-lg shadow-gray-400 md:shadow-none"
        onSubmit={handleSubmit(sendEmail)}
        >
        <div className='grid grid-cols-1 gap-x-8 sm:grid-cols-2 bg-black'>
          {/* first name */}
          <div className="flex flex-col items-start m-4">
            <label htmlFor="">First Name</label>
            <input 
                  className=" w-[100%] px-4 py-2 bg-white text-black border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...register("firstName",{ required: true })} />
                  {errors.firstName && <span className="text-red-500">please enter First Name</span>}
          </div>
          {/* last name */}
          <div className="flex flex-col items-start m-4">
            <label htmlFor="">Last Name</label>
            <input 
                  className=" w-[100%] px-4 py-2 bg-white text-black border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...register("lastName",{ required: true })} />
                  {errors.lastName && <span className="text-red-500">please enter Last Name</span>}
          </div>
        </div>
        {/* email */}
        <div className="flex flex-col items-start m-4">
          <label htmlFor="">Email</label>
          <input 
                className=" w-[100%] px-4 py-2 bg-white text-black border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("email",{ required: true })} />
                {errors.email && <span className="text-red-500">please enter Email</span>}
        </div>
        {/* number */}
        <div className="flex flex-col items-start m-4">
            <label htmlFor="">Number</label>
            <div className=" w-[100%] bg-white text-black border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <select className='w-[12%] ' {...register("gender")}>
                <option value="In">IN</option>
                <option value="US">US</option>
                <option value="CA">CA</option>
                <option value="EU">EU</option>
              </select>
            
              <input 
                    className=" py-2  w-[86%] focus:outline-none"
                    {...register("number",{ required: true })} />
            </div>
            {errors.number && <span className="text-red-500">please Enter Number</span>}
        </div>
        {/*message */}
        <div className="flex flex-col items-start m-4">
          <label htmlFor="">Your Message</label>
          <textarea
                rows='4' 
                className=" w-[100%] px-4 py-2 bg-white text-black border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("message",{ required: true })} />
                {errors.message && <span className="text-red-500">please enter Message</span>}
        </div>
      
      
        {errors.exampleRequired && <span>This field is required</span>}
        <div className=" flex justify-center items-start m-4">
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
        {/* <input type="submit" className="px-4 py-2 border-2 border-blue-700 font-medium rounded-lg w-full"/> */}
        </div>
    </form>
    </div>
  );
}
export default Contactus;
