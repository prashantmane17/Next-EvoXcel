"use client";
import React from "react";
import { useRouter } from "next/navigation"; // Using next/navigation for navigation
import Image from "next/image"; // Using next/image for optimized images
import Link from "next/link";

const blogPosts = {
  1: {
    title: "The Power of Personalization in Lead Generation.",
    content:
      "Personalization has become a critical factor in effective lead generation...",
    img: "/images/one img.png", // Path to the image in the public folder
    h1: "Why Personalization Matters",
    p11: "Understanding Customer Expectations...",
    p12: "EvoXcel’s Approach to Personalization...",
    h2: "Data-Driven Insights for Targeted Campaigns",
    p21: "Harnessing Data for Better Outreach...",
    p22: "Tailored Campaign Strategies...",
    h3: "Building Lasting Customer Relationships",
    p31: "Nurturing Leads Through Personalized Communication...",
    p32: "Long-Term Benefits of Personalization...",
    h4: "Staying Ahead of the Curve",
    p41: "Innovating with the Latest Trends...",
    p42: "EvoXcel’s Commitment to Excellence...",
  },
  2: {
    title: "Why Multi-Channel Marketing is Essential for Modern Businesses",
    content:
      "In today’s digital landscape, your audience is spread across multiple platforms. To engage them effectively, businesses must adopt a multi-channel marketing strategy. This blog discusses the importance of multi-channel marketing and how EvoXcel’s tools can help you execute it seamlessly.",
    img: "/images/Two page.png",
    h1: "The Importance of Multi-Channel Marketing",
    p11: "Reaching Your Audience Everywhere : Multi-channel marketing ensures that your brand’s message reaches your audience across various platforms, whether they are browsing social media, checking their email, or searching online.",
    p12: "EvoXcel’s Integrated Solutions:EvoXcel offers tools that integrate your marketing efforts across different channels, providing a unified approach that maximizes your reach and impact.",
    h2: "Challenges of Multi-Channel Marketing",
    p21: `Managing Complexity : Coordinating campaigns across multiple platforms can be challenging. EvoXcel simplifies this process by allowing you to manage all your channels from a single, user-friendly dashboard.`,
    p22: `Across Channels: In multi-channel marketing, consistency is essential. EvoXcel’s tools ensure that your messaging remains consistent across all platforms, reinforcing your brand identity.`,
    h3: `Leveraging Automation for Efficiency`,
    p31: `Automating Multi-Channel Campaigns : Automation is crucial for managing multi-channel campaigns effectively. EvoXcel’s solutions automate key tasks like scheduling posts, sending emails, and tracking performance, saving you time and effort.`,
    p32: `Maximizing ROI with Automation : By automating repetitive tasks, EvoXcel allows you to focus on strategic decision-making, ultimately driving better results and a higher return on investment.`,
    h4: `Staying Ahead of the Curve`,
    p41: `Innovating with the Latest Trends : By staying informed and proactive about emerging trends, EvoXcel helps you maintain a competitive edge, ensuring that your applications are not only relevant but also ahead of the industry curve.`,
    p42: `The EvoXcel Commitment to Excellence: We at EvoXcel are committed to providing innovative application development services that take advantage of the newest developments in technology and trends in order to assist you in reaching your business objectives.`,
  },

  3: {
    title: "Optimizing Your Website for Lead Conversion",
    content:
      "Your website is more than just an online presence—it’s a powerful tool for generating leads. However, to fully leverage this potential, your website must be optimized for lead conversion. This blog explores the key elements of a high-converting website and how EvoXcel can help you enhance your online presence.",
    img: "/images/Three Page.png",
    h1: "The Role of Website Design in Conversion",
    p11: "Creating a User-Friendly Experience : A well-designed website keeps visitors engaged and guides them smoothly towards conversion points. EvoXcel’s web development services focus on creating intuitive, attractive websites that enhance user experience.",
    p12: "Responsive and Mobile-Optimized Design : With more users browsing on mobile devices, having a responsive design is crucial. EvoXcel ensures that your website performs well across all devices, providing a seamless experience for every visitor.",
    h2: "Compelling Content for Higher Engagement",
    p21: `Crafting Content That Converts : Content is king when it comes to lead conversion. EvoXcel helps you develop compelling, informative content that addresses the needs of your audience, establishing your brand as an industry leader.`,
    p22: `Incorporating Effective Call-to-Actions (CTAs) : Strategic CTAs guide visitors towards taking action, whether it’s signing up for a newsletter or making a purchase. EvoXcel’s expertise ensures that your CTAs are persuasive and well-placed for maximum impact.`,
    h3: `Lead Capture and Analytics Integration`,
    p31: `Maximizing Lead Capture Opportunities : Integrating lead capture forms throughout your website ensures that you’re collecting valuable information from visitors. EvoXcel’s tools help you design and implement effective lead capture strategies.`,
    p32: `Utilizing Analytics for Continuous Improvement : Monitoring your website’s performance with analytics is essential for optimizing conversion rates. EvoXcel provides you with the tools and insights needed to continually improve your website’s effectiveness.`,
    h4: `Staying Ahead of the Curve`,
    p41: `Innovating with the Latest Trends : By staying informed and proactive about emerging trends, EvoXcel helps you maintain a competitive edge, ensuring that your applications are not only relevant but also ahead of the industry curve.`,
    p42: `EvoXcel’s Commitment to Excellence:At EvoXcel, we are dedicated to delivering cutting-edge application development services that leverage the latest trends and technologies, helping you achieve your business goals.`,
  },

  4: {
    title: "The Role of Automation in Scaling Your Business",
    content:
      "As businesses grow, maintaining efficiency becomes a challenge. Automation offers a solution by streamlining processes, reducing manual tasks, and enabling businesses to scale effectively. This blog explores the benefits of automation and how EvoXcel’s solutions can support your growth.",
    img: "/images/four img.png",
    h1: "Understanding the Need for Automation",
    p11: "Scaling with Efficiency : Growth brings complexity, and without automation, businesses can struggle to maintain efficiency. EvoXcel’s automation tools help streamline operations, allowing you to scale without sacrificing quality.",
    p12: "Reducing Manual Tasks : Automation eliminates repetitive manual tasks, freeing up your team to focus on higher-level strategic activities that drive business growth.",
    h2: "Key Areas to Automate",
    p21: `Automating Marketing and Sales : EvoXcel’s tools automate key marketing and sales activities, from email campaigns to lead scoring, ensuring that your processes are efficient and effective.`,
    p22: `Improving Customer Service with Automation : Automation can also enhance customer service by providing quick, consistent responses to common queries, improving customer satisfaction and loyalty.`,
    h3: `Achieving Sustainable Growth`,
    p31: `Scalability Through Automation : Automation tools are designed to grow with your business. EvoXcel ensures that as your needs expand, your automated systems can scale accordingly, supporting sustainable growth.`,
    p32: `Focusing on Strategic Initiatives : By automating routine tasks, you can focus on strategic growth initiatives, such as product development and market expansion, driving long-term success.`,
    h4: `Staying Ahead of the Curve`,
    p41: `Innovating with the Latest Trends : By staying informed and proactive about emerging trends, EvoXcel helps you maintain a competitive edge, ensuring that your applications are not only relevant but also ahead of the industry curve.`,
    p42: `EvoXcel’s Commitment to Excellence:At EvoXcel, we are dedicated to delivering cutting-edge application development services that leverage the latest trends and technologies, helping you achieve your business goals.`,
  },

  5: {
    title: "Emerging Trends in Application Development",
    content:
      "The field of application development is rapidly evolving, driven by new technologies and changing user expectations. Staying ahead of these trends is essential for businesses looking to maintain a competitive edge. This blog examines the latest trends in application development and how EvoXcel can help you leverage these innovations.",
    img: "/images/Five Page.png",
    h1: "The Rise of Low-Code Development Platforms",
    p11: "Accelerating Development with Low-Code : Low-code platforms are revolutionizing application development by enabling faster, more efficient creation of applications. EvoXcel’s development services incorporate low-code solutions to help you bring products to market faster.",
    p12: "Empowering Non-Technical Teams : Low-code platforms allow non-technical team members to participate in the development process, fostering innovation and collaboration across your organization.",
    h2: "AI-Driven Development Processes",
    p21: `Integrating AI in Development : Artificial Intelligence is transforming the way applications are developed, from automating code generation to optimizing testing processes. EvoXcel leverages AI to improve the efficiency and quality of your application development projects.`,
    p22: `Enhancing User Experience with AI : AI can also be used to create more intuitive and personalized user experiences, setting your applications apart from the competition.`,
    h3: `The Shift Towards Cloud-Native Applications`,
    p31: `Why Cloud-Native is the Future : Cloud-native applications offer greater scalability, flexibility, and resilience. EvoXcel specializes in developing cloud-native solutions that are designed to grow with your business and adapt to changing demands.`,
    p32: `Optimizing for the Cloud : EvoXcel’s expertise in cloud technology ensures that your applications are optimized for performance, security, and cost-efficiency in the cloud environment.`,
    h4: `Staying Ahead of the Curve`,
    p41: `Innovating with the Latest Trends : By staying informed and proactive about emerging trends, EvoXcel helps you maintain a competitive edge, ensuring that your applications are not only relevant but also ahead of the industry curve.`,
    p42: `EvoXcel’s Commitment to Excellence:At EvoXcel, we are dedicated to delivering cutting-edge application development services that leverage the latest trends and technologies, helping you achieve your business goals.`,
  },
  // Include other blog posts here...
};

function Blogpost({ params }) {
  const { id } = params; // Destructure the id from params
  const blog = blogPosts[id];

  if (!blog) {
    return <p>Blog not found!</p>; // Handling case for a non-existent blog
  }

  const router = useRouter();

  return (
    <div className="pt-[15vh] md:pt-[20vh] px-[5vw] w-[100%]">
      <div>
        <h1 className="pl-[4vw] text-[4vw] md:text-[1vw] flex gap-3">
          <span
            className="text-gray-400 cursor-pointer"
            onClick={() => router.push("/")}
          >
            Home /
          </span>
          <span
            onClick={() => router.push("/blog")}
            className="text-gray-400 cursor-pointer"
          >
            Blog /
          </span>
          <span className="cursor-pointer hidden md:block">{blog.title}</span>
        </h1>
      </div>
      <h1 className="md:w-[70%] pl-[4vw] headingfont md:text-[2vw] pt-[2vh] font-[550] text-[#01114A]">
        {blog.title}
      </h1>
      <section className="flex w-[100%] justify-between px-[4vw]">
        <aside className="md:w-[68%] mt-[7vh] md:pr-[4vw] md:border-r border-black">
          <Image
            src={blog.img}
            className="w-[100%]"
            alt={blog.title}
            width={300}
            height={200}
          />
          <p className="mt-[7vh] text-justify md:text-[1vw] pfont">
            {blog.content}
          </p>
          <h1 className="md:text-[2vw] font-[550] headingfont mt-[5vh] mb-[3vh]">
            {blog.h1}
          </h1>
          <p className="my-[3vh] text-justify md:text-[1vw] pfont">
            {blog.p11}
          </p>
          <p className="my-[3vh] text-justify md:text-[1vw] pfont">
            {blog.p12}
          </p>
          <h1 className="md:text-[2vw] font-[550] headingfont mt-[5vh] mb-[3vh]">
            {blog.h2}
          </h1>
          <p className="my-[3vh] text-justify md:text-[1vw] pfont">
            {blog.p21}
          </p>
          <p className="my-[3vh] text-justify md:text-[1vw] pfont">
            {blog.p22}
          </p>
          <h1 className="md:text-[2vw] font-[550] headingfont mt-[5vh] mb-[3vh]">
            {blog.h3}
          </h1>
          <p className="my-[3vh] text-justify md:text-[1vw] pfont">
            {blog.p31}
          </p>
          <p className="my-[3vh] text-justify md:text-[1vw] pfont">
            {blog.p32}
          </p>
          <h1 className="md:text-[2vw] font-[550] headingfont mt-[5vh] mb-[3vh]">
            {blog.h4}
          </h1>
          <p className="my-[3vh] text-justify md:text-[1vw] pfont">
            {blog.p41}
          </p>
          <p className="my-[3vh] text-justify md:text-[1vw] pfont">
            {blog.p42}
          </p>
        </aside>
        <aside className="md:w-[30%] mt-[7vh] hidden md:block">
          <h1 className="text-[0.9vw] font-[700] text-gray-700 headingfont">
            RECENT POST
          </h1>
          <div className="flex flex-col gap-[2.5vh] mt-[5vh] text-[0.95vw] pfont">
            <Link href="/blog/1">
              The Power of Personalization in Lead Generation?
            </Link>
            <hr />
            <Link href="/blog/2">
              Why Multi-Channel Marketing is Essential for Modern Businesses?
            </Link>
            <hr />
            <Link href="/blog/3">
              Optimizing Your Website for Lead Conversion?
            </Link>
            <hr />
            <Link href="/blog/4">
              The Role of Automation in Scaling Your Business?
            </Link>
            <hr />
            <Link href="/blog/5">
              Emerging Trends in Application Development?
            </Link>
          </div>
        </aside>
      </section>
    </div>
  );
}

export default Blogpost;
