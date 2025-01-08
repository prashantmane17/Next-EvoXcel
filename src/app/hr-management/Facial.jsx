import { MapPin, Scan, Fingerprint } from "lucide-react";
import Image from "next/image";
import "./hr-management.css";

export default function Facial() {
  return (
    <div className="container mx-auto p-4 md:p-6 px-4 md:px-14">
      <h2 className="text-white text-center font-semibold text-[30px] py-8">
        Enhance Productivity with Optick, Our Premier AI Platform
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* 1M+ Daily Transactions Card */}
        <div className="bg-gradient-to-br from-sky-50 to-blue-100 p-8 rounded-3xl md:w-[118.5%] bg_hover">
          <div className="space-y-4">
            <Image
              src="/images/hr-management/transaction.svg"
              alt="Optick Logo"
              width={120}
              height={40}
              className=""
            />
            <h1 className="text-4xl md:text-5xl font-bold text-navy-900">
              1M+ daily
              <br />
              transactions
            </h1>
            <p className="text-gray-600">
              Efficient architecture supporting 1M+ API calls
            </p>
            {/* <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </button> */}
          </div>
        </div>

        {/* Facial Recognition Card */}
        <div className="bg_hover bg-gradient-to-br from-blue-500 to-blue-600 p-8 rounded-3xl  md:ml-[21%]">
          <div className="space-y-4">
            <div className="bg-white rounded-xl w-16 h-16 flex items-center justify-center">
              {/* <Scan className="w-8 h-8 text-blue-500" /> */}
              <Image
                src="/images/hr-management/facial.svg"
                alt="Optick Logo"
                width={120}
                height={40}
                className=""
              />
            </div>
            <h2 className="text-2xl font-bold">Facial recognition based</h2>
            <p className="">
              Fast & Accurate biometric identification using facial images
            </p>
          </div>
        </div>

        {/* Live Tracking Card */}
        <div className="bg-gradient-to-br from-sky-100 to-blue-200 p-8 rounded-3xl bg_hover">
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-xl w-16 h-16 flex items-center justify-center">
              <MapPin className="w-8 h-8 text-blue-500" />
            </div>
            <h2 className="text-2xl font-bold text-navy-900">Live tracking</h2>
            <p className="text-gray-600">
              Accurate real time location using geo spatial datapoints
            </p>
          </div>
        </div>

        {/* Platform Independent Card */}
        <div className="bg-gradient-to-br from-sky-100 to-blue-200 p-8 rounded-3xl bg_hover">
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className=" rounded-xl w-16 h-16 flex items-center justify-center">
                <Image
                  src="/images/hr-management/devices.svg"
                  alt="Apple logo"
                  width={80}
                  height={50}
                />
              </div>
              {/* <div className="bg-white p-4 rounded-xl w-16 h-16 flex items-center justify-center">
                <Image
                  src="/placeholder.svg"
                  alt="Android logo"
                  width={32}
                  height={32}
                />
              </div> */}
            </div>
            <h2 className="text-2xl font-bold text-navy-900">
              Platform independent
            </h2>
            <p className="text-gray-600">
              Works on any Android or iOS device including mobile, tabs
            </p>
          </div>
        </div>

        {/* 400+ Sites Card */}
        <div className="bg_hover md:col-span-2 lg:col-span-1 bg-gradient-to-br from-blue-500 to-blue-600 p-8 rounded-3xl ">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">400+ sites</h2>
            <p className="text-xl ">
              Deployed across India and works under diverse real world
              conditions
            </p>
          </div>
        </div>

        {/* Easy Integration Card */}
        <div className=" bg_hover bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-3xl ">
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-xl w-16 h-16 flex items-center justify-center">
              <Fingerprint className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold">Easy Integration</h2>
            <p className="">
              Seamless integration with other biometric hardware devices
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
