import { connectDb } from "@/helper/db_connect"; 
import { User } from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

connectDb();

export async function GET(request) {
  try {
    const users = await User.find();
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  const { username, email, password, phone } = await request.json(); // Extract user data from the request body
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const otpExpiresAt = new Date(Date.now() + 10 * 60 * 1000); // OTP expires in 10 minutes

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ success: false, message: "Email already exists" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password:hashedPassword, phone, otp, otpExpiresAt });
    await newUser.save(); 

    return NextResponse.json({ success: true, message: "User registered and OTP sent" }); // Success response
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 }); // Error response
  }
}