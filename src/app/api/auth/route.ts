import { NextResponse } from "next/server";

const PREVIEW_PASSWORD = process.env.PREVIEW_PASSWORD || "texans2026";

export async function POST(request: Request) {
  const body = await request.json();
  const { password } = body;

  if (password === PREVIEW_PASSWORD) {
    const response = NextResponse.json({ success: true });
    response.cookies.set("preview_auth", "authenticated", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });
    return response;
  }

  return NextResponse.json({ error: "Invalid password" }, { status: 401 });
}
