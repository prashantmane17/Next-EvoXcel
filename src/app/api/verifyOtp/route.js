// pages/api/verify/route.js
import { User } from "@/models/user"; // Import your User model
import { connectDb } from "@/helper/db_connect"; // Import your database connection helper
import { NextResponse } from "next/server"; // Import NextResponse for handling responses

connectDb(); // Connect to the database

// POST request to verify the OTP
export async function POST(request) {
    const { email, otp } = await request.json(); // Extract email and OTP from the request body

    try {
        const user = await User.findOne({ email }); // Find the user by email
        if (!user) {
            return NextResponse.json({ success: false, message: "User not found" }, { status: 404 }); // User not found
        }

        console.log(user.otp,otp+" otpotp")
        // Check if the OTP is valid and not expired
        if (user.otp.toString() === otp.toString() && user.otpExpiresAt > new Date() ) {
            user.isVerified = true; // Mark user as verified
            user.otp = null; // Clear OTP
            user.otpExpiresAt = null; // Clear expiration
            await user.save(); // Save the updated user

            return NextResponse.json({ success: true, message: "OTP verified successfully" }); // Success response
        }

        return NextResponse.json({ success: false, message: "Invalid or expired OTP" }, { status: 400 }); // OTP invalid or expired
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 }); // Error response
    }
}
