// app/not-found/page.jsx
"use client"; // Add this for Client Component usage

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

const NotFoundPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("event", "404", {
        event_category: "Error",
        event_label: document.location.pathname,
      });
    }
  }, [router]);

  return (
    <main className="flex items-center justify-center min-h-screen bg-white  transition-colors">
      <div className="flex flex-col items-center gap-8 text-center">
        <div className="flex justify-center gap-2">
          <div className="w-20 h-20 md:w-32 md:h-32 bg-yellow-400 rounded-full flex items-center justify-center">
            <div className="w-8 h-8 md:w-12 md:h-12 bg-black rounded-full animate-pupil-move"></div>
          </div>
          <div className="w-20 h-20 md:w-32 md:h-32 bg-yellow-400 rounded-full flex items-center justify-center">
            <div className="w-8 h-8 md:w-12 md:h-12 bg-black rounded-full animate-pupil-move"></div>
          </div>
        </div>

        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-400">
            Looks like you&lsquo;re lost
          </h1>
          <p className="mt-4 text-2xl md:text-3xl text-gray-800 ">404 error</p>
        </div>

        <Link
          href="/"
          className="px-8 py-3 mt-6 text-xl font-light text-gray-800  border border-yellow-400 rounded-lg shadow-md hover:bg-yellow-400 hover:text-white transition-colors"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
};

export default NotFoundPage;
