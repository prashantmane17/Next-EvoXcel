import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const protectedRoutes = ['/dashboard', '/profile', '/settings'];

export async function middleware(req) {
  const url = req.nextUrl.clone();
  const token = req.cookies.get('token')?.value;

  if (protectedRoutes.includes(url.pathname)) {
    if (!token) {
      url.pathname = '/login';
      return NextResponse.redirect(url);
    }

    // Verify the token
    try {
      jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
      // Token is invalid, redirect to login
      url.pathname = '/login';
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard', '/profile', '/settings'], // Define the routes that should use this middleware
};
