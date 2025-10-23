import { NextResponse } from "next/server";

const BACKEND_URL = process.env.BACKEND_URL;

export async function GET() {
  try {
    const res = await fetch(`${BACKEND_URL}/api/v1/coins`, {
      next: { revalidate: 60 },
    });
    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json([]);
  }
}
