import { connectDb } from "@/helper/db_connect"; // Import your database connection helper
import { User } from "@/models/user"; // Import your User model
import { NextResponse } from "next/server";

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

  // Generate a random 6-digit OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const otpExpiresAt = new Date(Date.now() + 10 * 60 * 1000); // OTP expires in 10 minutes

  try {
    // Check if a user with the given email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ success: false, message: "Email already exists" }, { status: 400 });
    }

    // Create a new user
    const newUser = new User({ username, email, password, phone, otp, otpExpiresAt });
    await newUser.save(); 

    // Configure nodemailer
 

    return NextResponse.json({ success: true, message: "User registered and OTP sent" }); // Success response
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 }); // Error response
  }
}