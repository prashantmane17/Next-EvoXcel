import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
    username: {
    type: String,
    required: true, // Ensure name is provided
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure email is unique
  },
  password: {
    type: String,
    required: true, // Ensure password is provided
  },
  phone: {
    type: String, // Use String to accommodate different number formats
    unique: true, // Ensure each mobile number is unique
    required: true, // Ensure mobile number is provided
  },
  otp: {
    type: String, // Store OTP as String to preserve leading zeros
    required: false,
  },
  otpExpiresAt: {
    type: Date,
    required: false,
  },
  isVerified: {
    type: Boolean,
    default: false, // Default is unverified
  },
});

// Check if the model is already defined to avoid OverwriteModelError
export const User = mongoose.models.User || mongoose.model("User", UserSchema);
