"use client";

import * as React from "react";
import { Send, X } from "lucide-react";
import "./chatBot.css";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Input } from "./ui/input";
import Image from "next/image";

export default function Chatbot() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(true);
  const [messages, setMessages] = React.useState([
    {
      role: "agent",
      content: "Hi! Welcome to Evoxcel.",
    },
  ]);
  const [inputValue, setInputValue] = React.useState("");
  const [loading, setLoading] = React.useState(false); // Loading state

  const messagesEndRef = React.useRef(null);

  // Auto-scroll to the bottom of the chat after each message update
  React.useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // User message
    setMessages((prev) => [...prev, { role: "user", content: inputValue }]);

    // Start loading state
    setLoading(true);

    // Agent response based on user input
    setTimeout(() => {
      let response = "Sorry, I didn’t understand that.";

      // Basic conversation flow based on user input
      if (inputValue.toLowerCase().includes("hi")) {
        response = "Hello! How can I assist you today?";
      } else if (
        inputValue.toLowerCase().includes("evoxcel") ||
        inputValue.toLowerCase().includes("what is evoxcel")
      ) {
        response =
          "EvoXcel is a platform that specializes in LinkedIn automation tools. We help businesses grow by automating outreach, engagement, and lead generation. How can I assist you with our features?";
      } else if (
        inputValue.toLowerCase().includes("features") ||
        inputValue.toLowerCase().includes("tools")
      ) {
        response =
          "EvoXcel offers a suite of LinkedIn automation tools including automated connection requests, follow-ups, and messaging. Would you like to know more about any specific feature?";
      } else if (inputValue.toLowerCase().includes("pricing")) {
        response =
          "Our pricing is flexible based on your needs. We have different plans to suit businesses of all sizes. Would you like to view the pricing details?";
      } else if (
        inputValue.toLowerCase().includes("support") ||
        inputValue.toLowerCase().includes("contact")
      ) {
        response =
          "You can reach out to our support team through the contact page on our website. How can I assist you with your current issue?";
      } else if (
        inputValue.toLowerCase().includes("thank you") ||
        inputValue.toLowerCase().includes("thanks")
      ) {
        response = "You're welcome! If you need more help, feel free to ask.";
      }

      // End loading state
      setLoading(false);

      // Append the agent response
      setMessages((prev) => [
        ...prev,
        {
          role: "agent",
          content: response,
        },
      ]);
    }, 1000);

    // Clear input
    setInputValue("");
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsVisible(false);
  };

  const handleClearChat = () => {
    setMessages([
      {
        role: "agent",
        content: "Hi! How can I help you with LinkedIn automation today?",
      },
    ]);
  };

  if (!isVisible) {
    return null;
  }

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-6 rounded-full w-[7.5vw] h-[7.5vw] p-0 bg-transparent chat_bot"
        aria-label="Open chat"
      >
        <Image
          src="/images/chatbot/chatBot_icon.svg"
          width={80}
          height={80}
          alt="Chatbot"
          className="w-full h-full "
        />
      </Button>
    );
  }

  return (
    <Card className="fixed bottom-4 right-4 w-[380px] h-[80vh] shadow-xl chat_botMain">
      <CardHeader className="flex flex-row items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage
              src="/images/Evoxcel.webp"
              alt="Support"
              className="h-6"
            />
          </Avatar>
          <div>
            <h3 className="font-semibold">EvoXcel Support</h3>
            <p className="text-sm text-muted-foreground">
              Typically replies in a few minutes
            </p>
          </div>
        </div>
        <button
          className="text-muted-foreground hover:text-foreground"
          onClick={() => setIsOpen(false)}
          aria-label="Close chat"
        >
          <X className="h-6 w-6" />
        </button>
      </CardHeader>
      <CardContent className="h-[55vh] overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`rounded-lg px-4 py-2 max-w-[80%] ${
                message.role === "user"
                  ? "bg-slate-300 text-primary-foreground"
                  : "bg-[#e7f2f5] "
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="rounded-lg px-4 py-2 max-w-[80%] bg-gray-200 text-gray-700">
              <span>...</span> {/* Simulate thinking/loading */}
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </CardContent>
      <CardFooter className="p-4 pt-2">
        <form onSubmit={handleSubmit} className="flex w-full gap-2">
          <Input
            placeholder="Type your message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-1"
          />
          <Button
            type="submit"
            size="icon"
            aria-label="Send message"
            className="px-4"
          >
            <Send className="h-4 w-4" />
          </Button>
        </form>
        {/* <Button onClick={handleClearChat} className="mt-2 w-full bg-gray-200">
          Clear Chat
        </Button> */}
      </CardFooter>
    </Card>
  );
}
