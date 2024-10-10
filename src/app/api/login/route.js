import { connectDb } from "@/helper/db_connect";
import { User } from "@/models/user"; 
import bcrypt from "bcryptjs"; 
import jwt from "jsonwebtoken"; 
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
    const token = jwt.sign(
      { user: {
        id: user._id,
        email: user.email,
        name: user.username // Include more fields as necessary
      } }, 
      process.env.JWT_SECRET, 
      { expiresIn: '7d' } // Set token expiry
    );

    const response = NextResponse.json({
      success: true,
      message: "Login successful",
      user: {
        id: user._id,
        email: user.email,
        name: user.username // Include more fields as necessary
      }
    });
    response.headers.set(
      "Set-Cookie",
      `token=${token}; HttpOnly; Path=/; Max-Age=604800; Secure; SameSite=Strict`
    );

    return response;

  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
