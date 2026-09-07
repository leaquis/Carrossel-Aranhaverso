import { NextResponse } from "next/server";

import JSONData from "./heroes.json";

export async function GET() {
  let res = await fetch(`${process.env.API_URL}/heroes`);
  let data;

  try {
    data = await res.json();
  } catch {
    data = JSONData;
  }

  if (!res.ok || !data) {
    data = JSONData;
  }

  return NextResponse.json({ data });
}
