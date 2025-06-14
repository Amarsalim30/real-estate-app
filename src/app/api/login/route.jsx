// app/api/login/route.ts
import { NextResponse } from 'next/server';
import { users } from '@/data/user';

export async function POST(req) {
  const body = await req.json();
  const { identifier, password } = body;

  const user = users.find(
    u => (u.username === identifier || u.email === identifier) && u.password === password
  );

  if (!user) {
    return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
  }

  // Simulate token or session (optional)
  return NextResponse.json({ success: true, user: { id: user.id, role: user.role } });
}
