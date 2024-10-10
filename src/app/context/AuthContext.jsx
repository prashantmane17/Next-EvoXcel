"use client";

import React, { createContext, useState, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; 


const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const fetchUser = async () => {
    try {
      const response = await fetch("/api/getUser", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json(); 
        setUser(data.user.user); 
      } else {
        setUser(null); 
        const error = await response.json(); 
        throw new Error(error.message || "Failed to fetch user data");
      }
    } catch (error) {
      console.error("Error fetching user:", error.message);
    }
  };

  useEffect(() => {
    fetchUser(); 
  }, []); 

  const logoutUser = async () => {
    try {
      const response = await fetch("/api/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.ok) {
        setUser(null); // Clear user state
        toast.success("Logged out successfully", { position: "bottom-center" });
      } else {
        const error = await response.json();
        toast.error(error.message || "Logout failed", { position: "bottom-center" });
      }
    } catch (error) {
      toast.error("An error occurred while logging out", { position: "bottom-center" });
    }
  };
  

  return (
    <AuthContext.Provider value={{ user, logoutUser, fetchUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
