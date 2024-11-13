"use client";

// import * as React from "react";
// import { Send, X } from "lucide-react";
// import "./chatBot.css";
// import { Avatar, AvatarImage } from "./ui/avatar";
// import { Button } from "./ui/button";
// import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
// import { Input } from "./ui/input";
// import Image from "next/image";

// export default function Chatbot() {
//   const [isOpen, setIsOpen] = React.useState(false);
//   const [isVisible, setIsVisible] = React.useState(true);
//   const [messages, setMessages] = React.useState([
//     {
//       role: "agent",
//       content: "Hi! Welcome to Evoxcel.",
//     },
//   ]);
//   const [inputValue, setInputValue] = React.useState("");
//   const [loading, setLoading] = React.useState(false); // Loading state

//   const messagesEndRef = React.useRef(null);

//   // Auto-scroll to the bottom of the chat after each message update
//   React.useEffect(() => {
//     if (messagesEndRef.current) {
//       messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [messages]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!inputValue.trim()) return;

//     // User message
//     setMessages((prev) => [...prev, { role: "user", content: inputValue }]);

//     // Start loading state
//     setLoading(true);

//     // Agent response based on user input
//     setTimeout(() => {
//       let response = "Sorry, I didn’t understand that.";

//       // Basic conversation flow based on user input
//       if (inputValue.toLowerCase().includes("hi")) {
//         response = "Hello! How can I assist you today?";
//       } else if (
//         inputValue.toLowerCase().includes("evoxcel") ||
//         inputValue.toLowerCase().includes("what is evoxcel")
//       ) {
//         response =
//           "EvoXcel is a platform that specializes in LinkedIn automation tools. We help businesses grow by automating outreach, engagement, and lead generation. How can I assist you with our features?";
//       } else if (
//         inputValue.toLowerCase().includes("features") ||
//         inputValue.toLowerCase().includes("tools")
//       ) {
//         response =
//           "EvoXcel offers a suite of LinkedIn automation tools including automated connection requests, follow-ups, and messaging. Would you like to know more about any specific feature?";
//       } else if (inputValue.toLowerCase().includes("pricing")) {
//         response =
//           "Our pricing is flexible based on your needs. We have different plans to suit businesses of all sizes. Would you like to view the pricing details?";
//       } else if (
//         inputValue.toLowerCase().includes("support") ||
//         inputValue.toLowerCase().includes("contact")
//       ) {
//         response =
//           "You can reach out to our support team through the contact page on our website. How can I assist you with your current issue?";
//       } else if (
//         inputValue.toLowerCase().includes("thank you") ||
//         inputValue.toLowerCase().includes("thanks")
//       ) {
//         response = "You're welcome! If you need more help, feel free to ask.";
//       }

//       // End loading state
//       setLoading(false);

//       // Append the agent response
//       setMessages((prev) => [
//         ...prev,
//         {
//           role: "agent",
//           content: response,
//         },
//       ]);
//     }, 1000);

//     // Clear input
//     setInputValue("");
//   };

//   const handleClose = () => {
//     setIsOpen(false);
//     setIsVisible(false);
//   };

//   const handleClearChat = () => {
//     setMessages([
//       {
//         role: "agent",
//         content: "Hi! How can I help you with LinkedIn automation today?",
//       },
//     ]);
//   };

//   if (!isVisible) {
//     return null;
//   }

//   if (!isOpen) {
//     return (
//       <Button
//         onClick={() => setIsOpen(true)}
//         className="fixed bottom-4 right-6 rounded-full w-[7.5vw] h-[7.5vw] p-0 bg-transparent chat_bot"
//         aria-label="Open chat"
//       >
//         <Image
//           src="/images/chatbot/chatBot_icon.svg"
//           width={80}
//           height={80}
//           alt="Chatbot"
//           className="w-full h-full "
//         />
//       </Button>
//     );
//   }

//   return (
//     <Card className="fixed bottom-4 right-4 w-[380px] h-[80vh] shadow-xl chat_botMain">
//       <CardHeader className="flex flex-row items-center justify-between p-4">
//         <div className="flex items-center gap-3">
//           <Avatar>
//             <AvatarImage
//               src="/images/Evoxcel.webp"
//               alt="Support"
//               className="h-6"
//             />
//           </Avatar>
//           <div>
//             <h3 className="font-semibold">EvoXcel Support</h3>
//             <p className="text-sm text-muted-foreground">
//               Typically replies in a few minutes
//             </p>
//           </div>
//         </div>
//         <button
//           className="text-muted-foreground hover:text-foreground"
//           onClick={() => setIsOpen(false)}
//           aria-label="Close chat"
//         >
//           <X className="h-6 w-6" />
//         </button>
//       </CardHeader>
//       <CardContent className="h-[55vh] overflow-y-auto p-4 space-y-4">
//         {messages.map((message, index) => (
//           <div
//             key={index}
//             className={`flex ${
//               message.role === "user" ? "justify-end" : "justify-start"
//             }`}
//           >
//             <div
//               className={`rounded-lg px-4 py-2 max-w-[80%] ${
//                 message.role === "user"
//                   ? "bg-slate-300 text-primary-foreground"
//                   : "bg-[#e7f2f5] "
//               }`}
//             >
//               {message.content}
//             </div>
//           </div>
//         ))}
//         {loading && (
//           <div className="flex justify-start">
//             <div className="rounded-lg px-4 py-2 max-w-[80%] bg-gray-200 text-gray-700">
//               <span>...</span> {/* Simulate thinking/loading */}
//             </div>
//           </div>
//         )}
//         <div ref={messagesEndRef} />
//       </CardContent>
//       <CardFooter className="p-4 pt-2">
//         <form onSubmit={handleSubmit} className="flex w-full gap-2">
//           <Input
//             placeholder="Type your message..."
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             className="flex-1"
//           />
//           <Button
//             type="submit"
//             size="icon"
//             aria-label="Send message"
//             className="px-4"
//           >
//             <Send className="h-4 w-4" />
//           </Button>
//         </form>
//         {/* <Button onClick={handleClearChat} className="mt-2 w-full bg-gray-200">
//           Clear Chat
//         </Button> */}
//       </CardFooter>
//     </Card>
//   );
// }
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import "./chatBot.css";

const Chatbot = () => {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const data = [
    {
      service: "Software Development",
      paragraph:
        "Integrate a cutting-edge phone system into your website to streamline",
      route: "/software-development",
    },
    {
      service: "Web Development",
      paragraph:
        "Integrate a cutting-edge phone system into your website to streamline",
      route: "/web-development",
    },
    {
      service: "Email Automation",
      paragraph:
        "Elevate your online presence with cutting edge web development solutions",
      route: "/email-automation",
    },
    {
      service: "HR Management",
      paragraph:
        "Integrate a cutting-edge phone system into your website to streamline",
      route: "/hr-management",
    },
    {
      service: "Lead Generation",
      paragraph:
        "Integrate a cutting-edge phone system into your website to streamline",
      route: "/lead-generation",
    },
    {
      service: "Linkedin Automation",
      paragraph:
        "Integrate a cutting-edge phone system into your website to streamline",
      route: "/linkedin-automation",
    },
  ];
  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)} // Open modal on button click
        className="fixed bottom-5 right-5 md:bottom-10 md:right-10 rounded-full w-[50px] h-[50px] md:w-[80px] md:h-[80px] lg:w-[4.5vw] lg:h-[4.5vw] p-0 bg-transparent chat_bot"
        aria-label="Open chat"
      >
        <Image
          src="/images/chatbot/chatBot.svg"
          width={80}
          height={80}
          alt="Chatbot"
          className="w-full h-full"
        />
      </Button>
    );
  }

  // Render the modal if isOpen is true
  return (
    <>
      <div className="fixed w-full h-[90vh] pt-[10vh] z-10 top-[8vh] lg:top-[10vh] bg-[#00000038] "></div>
      <div
        id="notificationModal"
        className="fixed bottom-4 right-0 md:right-4 z-50 w-full md:w-[380px]  md:h-[80vh] rounded-md shadow-xl "
      >
        <div className=" h-[60vh] md:h-[76vh]  py-5 rounded-lg ">
          <article className="px-5">
            <h1 className="mb-1 text-[5vw] md:text-[26px] text-white opacity-850 font-bold">
              Hi there <span className="wave text-[7vw] md:text-[3vw]">👋</span>
            </h1>
            <h1 className="mb-5 text-[5vw] md:text-[26px] text-white font-bold">
              What can we do for you?
            </h1>
            <div className="w-[100%] flex items-center justify-between bg-white h-[5vh] md:h-[7vh] rounded-lg mb-4">
              <input
                type="search"
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Find the right service"
                className="h-[100%] text-[13px] md:text-[14px] placeholder:text-black outline-none w-[90%] pl-4 rounded-lg"
              />
              <i className="fa-solid fa-magnifying-glass text-[#20ACE0] w-[10%]"></i>
            </div>
          </article>
          <div className="overflow-y-scroll h-[65%] no-scrollBar md:pr-4">
            {data
              .filter((x) =>
                search.toLowerCase() === ""
                  ? x
                  : x.service.toLowerCase().includes(search)
              )
              .map((x, index) => (
                <Link key={index} href={x.route}>
                  <div className="ml-5 mr-5 md:mr-0 bg-white p-2 md:p-4 rounded-lg border-gray-400 mb-1 md:mb-3 border">
                    <h2 className="text-[12px] md:text-[14px] font-[500]">
                      {x.service}
                    </h2>
                    <p className="text-[10px] md:text-[14px] mt-1 text-gray-500">
                      {x.paragraph} ...
                    </p>
                  </div>
                </Link>
              ))}
          </div>
          <Button
            onClick={() => setIsOpen(false)} // Close modal button
            className="absolute top-2 right-2 px-2 text-gray-500 text-lg -rotate-90"
            aria-label="Close chat"
          >
            <svg
              width={30}
              height={40}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={``}
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
