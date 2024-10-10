import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { connectDb } from '@/helper/db_connect';
connectDb();

export async function GET(request) {
  const token = request.cookies.get('token')?.value;
  if (!token) {
    return NextResponse.json(
      { success: false, message: "Authentication required" },
      { status: 401 }
    );
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
   
    return NextResponse.json(
      { success: true, message: "Authenticated", user: decoded }
    );
  } catch (error) {
    // Token is invalid or verification failed
    return NextResponse.json(
      { success: false, message: "Invalid token" },
      { status: 403 }
    );
  }
}
