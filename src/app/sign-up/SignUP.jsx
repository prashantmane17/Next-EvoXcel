"use client";
import React, { useState } from "react";
import Image from "next/image";
const Signup = () => {
  const [isFocused, setIsFocused] = useState({
    username: false,
    email: false,
    password: false,
    confirmPassword: false,
    phone: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleFocus = (field) => {
    setIsFocused({ ...isFocused, [field]: true });
  };

  const handleBlur = (field, value) => {
    setIsFocused({ ...isFocused, [field]: value !== "" });
  };

  const togglePasswordVisibility = (field) => {
    if (field === "password") {
      setShowPassword(!showPassword);
    } else if (field === "confirmPassword") {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordsMatch(e.target.value === confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordsMatch(password === e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwordsMatch) {
      // Proceed with form submission logic (e.g., sending data to the server)
    }
  };
  return (
    <>
      <section className="h-[100vh] w-[100%]  flex justify-between">
        {/* <Helmet>
          <title>Create Your EvoXcel Account</title>
          <meta name="description" content="" />
          <link rel="canonical" href="https://nigussystems.com/" />
        </Helmet> */}
        <aside className="h-[100%] hidden md:flex md:w-[40%]  items-center justify-end">
          <Image
            src="/images/sign/Sign_up.webp"
            width={300}
            height={300}
            className="w-[80%] pt-[10vh] object-contain "
            alt=""
          />
        </aside>
        <aside className="h-[100%] w-full md:w-[60%]  mx-5 md:m-0">
          <div class="flex flex-col justify-start px-0 py-12 lg:px-0 pt-[12vh] md:pt-[10vh]">
            <div className="max-w-lg w-full pt-[5vh] bg-white border p-8 rounded-lg shadow-lg transform transition-all duration-300">
              <h2 className=" text-2xl md:text-3xl font-bold text-center text-gray-900">
                Create an Account
              </h2>

              <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                {[
                  { id: "username", label: "Username", type: "text" },
                  { id: "email", label: "Email address", type: "email" },
                  {
                    id: "password",
                    label: "Password",
                    type: showPassword ? "text" : "password",
                  },
                  {
                    id: "confirmPassword",
                    label: "Confirm Password",
                    type: showConfirmPassword ? "text" : "password",
                  },
                  { id: "phone", label: "Phone Number", type: "tel" },
                ].map((field, index) => (
                  <div key={index} className="relative">
                    <label
                      htmlFor={field.id}
                      className={`absolute left-[3%] bg-white text-sm font-medium text-gray-400 transition-all duration-500 ease-in-out ${
                        isFocused[field.id]
                          ? "-top-[21%] text-xs text-indigo-600"
                          : "top-[21%]"
                      }`}
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      name={field.id}
                      type={field.type}
                      required
                      onFocus={() => handleFocus(field.id)}
                      onBlur={(e) => handleBlur(field.id, e.target.value)}
                      onChange={
                        field.id === "password"
                          ? handlePasswordChange
                          : field.id === "confirmPassword"
                          ? handleConfirmPasswordChange
                          : null
                      }
                      className={`mt-4 block w-full px-3 py-1 md:py-2 border ${
                        !passwordsMatch && field.id === "confirmPassword"
                          ? "border-red-500"
                          : "border-gray-300"
                      } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                    />
                    {(field.id === "password" ||
                      field.id === "confirmPassword") && (
                      <div
                        onClick={() => togglePasswordVisibility(field.id)}
                        className={`absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer ${
                          !passwordsMatch && field.id === "confirmPassword"
                            ? "translate-y-[-3px]"
                            : ""
                        }`}
                      >
                        <i
                          className={`fa ${
                            (field.id === "password" && showPassword) ||
                            (field.id === "confirmPassword" &&
                              showConfirmPassword)
                              ? "fa-eye-slash"
                              : "fa-eye"
                          } text-gray-700`}
                        ></i>
                      </div>
                    )}
                    {!passwordsMatch && field.id === "confirmPassword" && (
                      <p className="text-red-500 text-sm mt-1">
                        Passwords do not match
                      </p>
                    )}
                  </div>
                ))}

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform transition-transform duration-300 ease-in-out hover:scale-105"
                  >
                    Sign Up
                  </button>
                </div>
              </form>

              <p className="mt-6 text-center text-sm text-gray-600">
                Already have an account?{" "}
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Log in
                </a>
              </p>
            </div>
          </div>
        </aside>
      </section>
    </>
  );
};

export default Signup;
