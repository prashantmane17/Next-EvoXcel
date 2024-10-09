// File: src/app/api/login/route.js
import { connectDb } from "@/helper/db_connect";
import { User } from "@/models/user"; 
import bcrypt from "bcryptjs"; 
import jwt from "jsonwebtoken"; // Import jsonwebtoken
import { NextResponse } from "next/server";

connectDb();

export async function POST(request) {
  const { email, password } = await request.json(); 

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    }
    if (!user.isVerified) {
      return NextResponse.json(
        { success: false, message: "Please verify your email before logging in." },
        { status: 403 }
      );
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { success: false, message: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Create a JWT token
    const token = jwt.sign({ userId: user._id, email: user.email, name: user.username}, process.env.JWT_SECRET, { expiresIn: '7d' }); // Set token expiry

    return NextResponse.json({ success: true, message: "Login successful", user: {
      id: user._id,
      email: user.email,
      name: user.name // Include more fields as necessary
    } , token });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
