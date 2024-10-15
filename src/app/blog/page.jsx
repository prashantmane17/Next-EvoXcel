"use client"; // Import this if you're using client-side hooks like useEffect

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Use next/navigation for routing

const blogs = [
  {
    id: 1,
    title: "The Power of Personalization in Lead Generation",
    img: "/images/blog/blog-lead-generation.webp",
    summary:
      "Personalization has become a critical factor in effective lead generation. In an era where customers...",
  },
  {
    id: 2,
    title: "Why Multi-Channel Marketing is Essential for Modern Businesses",
    img: "/images/blog/blog-Essential-for-Modern-Businesses.webp",
    summary:
      "In today’s digital landscape, your audience is spread across multiple platforms. To engage them...",
  },
  {
    id: 3,
    title: "Optimizing Your Website for Lead Conversion",
    img: "/images/blog/blog_Essential-for-Modern-Businesses.webp",
    summary:
      "Your website is more than just an online presence—it’s a powerful tool for generating leads. However...",
  },
  {
    id: 4,
    title: "The Role of Automation in Scaling Your Business",
    img: "/images/blog/blog_Automation-in-Scaling-Your-Business.webp",
    summary:
      "As businesses grow, maintaining efficiency becomes a challenge. Automation offers a solution by...",
  },
  {
    id: 5,
    title: "Emerging Trends in Application Development",
    img: "/images/blog/blog_Emerging-Trends-in-Application-Development.webp",
    summary:
      "The field of application development is rapidly evolving, driven by new technologies and changing...",
  },
];

const Aboutus = () => {
  const router = useRouter();

  const handleBlogClick = (id) => {
    router.push(`/blog/${id}`);
  };

  return (
    <section>
      <div className="h-[20vh] md:h-[45vh] bg-[#01114A] flex items-end pl-[5vw]">
        <h1 className="bg-slate-100 px-[5vw] pt-[2vh] md:text-[3vw] font-[550] text-[#01114A]">
          Read Our Latest Blogs On <br /> EvoXcel
        </h1>
      </div>
      <div className="px-[5vw] flex flex-wrap justify-start bg-slate-100 gap-[4vw] py-[10vh] w-[100%]">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="md:w-[30%] hover:shadow-2xl bg-white p-[1vw] cursor-pointer"
            onClick={() => handleBlogClick(blog.id)}
          >
            <Image src={blog.img} alt={blog.title} width={300} height={200} />
            <h1 className="mt-2 md:text-[1.5vw] hfont font-[550] text-slate-700">
              {blog.title}
            </h1>
            <p className="my-[1vh] md:text-[1vw]">{blog.summary}</p>
            <button className="bg-blue-500 p-2 rounded-sm text-white">
              Read More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Aboutus;
