"use client"; // Import this if you're using client-side hooks like useEffect

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Use next/navigation for routing
export const metadata = {
  title: "About Us",
  description: "about us",
  alternates: {
    canonical: "https://www.evoxcel.com/blog/",
  },
  siteName: "EvoXcel",
};
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

const Blog = () => {
  const router = useRouter();

  const handleBlogClick = (id) => {
    router.push(`/blog/${id}`);
  };

  return (
    <section>
      <div className="h-[20vh] md:h-[45vh] bg-[#01114A] flex items-end pl-[5vw]">
        <h2 className="px-[5vw] pt-[2vh] md:text-[3vw] font-[550] text-white">
          Read Our Latest Blogs On <br /> EvoXcel
        </h2>
      </div>
      <div className="px-[5vw] flex flex-wrap justify-start bg-slate-100 gap-[4vw] py-[10vh] w-[100%]">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="md:w-[30%] hover:shadow-2xl  p-[1vw] cursor-pointer"
            onClick={() => handleBlogClick(blog.id)}
          >
            {blog.id === 1 && (
              <Image
                src="/images/Blog/blog-lead-generation.webp"
                loading="lazy"
                alt={blog.title}
                width={300}
                height={200}
              />
            )}
            {blog.id === 2 && (
              <Image
                src="/images/Blog/blog-Essential-for-Modern-Businesses.webp"
                alt={blog.title}
                width={300}
                height={200}
                loading="lazy"
              />
            )}
            {blog.id === 3 && (
              <Image
                src="/images/Blog/blog_Essential-for-Modern-Businesses.webp"
                alt={blog.title}
                width={300}
                height={200}
                loading="lazy"
              />
            )}
            {blog.id === 4 && (
              <Image
                src="/images/Blog/blog_Automation-in-Scaling-Your-Business.webp"
                alt={blog.title}
                width={300}
                height={200}
                loading="lazy"
              />
            )}
            {blog.id === 5 && (
              <Image
                src="/images/Blog/blog_Emerging-Trends-in-Application-Development.webp"
                alt={blog.title}
                width={300}
                height={200}
                loading="lazy"
              />
            )}
            <h2 className="mt-2 md:text-[1.5vw] hfont font-[550] text-slate-700">
              {blog.title}
            </h2>
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

export default Blog;
