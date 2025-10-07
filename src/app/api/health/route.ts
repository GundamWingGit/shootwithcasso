import { NextResponse } from 'next/server';

export function GET() {
  const hasUrl = !!process.env.NEXT_PUBLIC_SUPABASE_URL;
  const hasAnon = !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  return NextResponse.json({
    ok: true,
    env: { NEXT_PUBLIC_SUPABASE_URL: hasUrl, NEXT_PUBLIC_SUPABASE_ANON_KEY: hasAnon },
    ts: new Date().toISOString(),
  });
}
