// app/api/register/route.ts
import { NextResponse } from 'next/server';

export async function POST(req) {
  const body = await req.json();
  // You can validate fields here, or just accept them for demo

  // Simulate created user
  return NextResponse.json({
    success: true,
    message: 'User registered successfully',
    user: { id: Date.now(), ...body, role: 'user' },
  });
}
