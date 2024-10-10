import { NextResponse } from "next/server";

export async function POST(request) {
    const response = NextResponse.json({ success: true, message: "Logged out successfully" });
  
    // Remove the token cookie
    response.headers.set("Set-Cookie", "token=; Max-Age=0; Path=/; HttpOnly; SameSite=Strict");
  
    return response;
  }
  