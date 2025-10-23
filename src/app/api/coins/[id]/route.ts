// src/app/api/coins/[id]/route.ts
import { NextResponse } from "next/server";

const BACKEND_URL = process.env.BACKEND_URL;

export async function GET(
  _: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const res = await fetch(`${BACKEND_URL}/api/v1/coins/history/${id}`);
  const data = await res.json();
  return NextResponse.json(data);
}
