import { NextResponse } from "next/server";

export async function GET() {
  const url = `${process.env.WP_BASE}/wp-json/wp/v2/posts?per_page=5`;
  const auth = Buffer.from(
    `${process.env.WP_USER}:${process.env.WP_APP_PW}`
  ).toString("base64");

  const r = await fetch(url, { headers: { Authorization: `Basic ${auth}` } });
  if (!r.ok)
    return NextResponse.json({ error: await r.text() }, { status: r.status });
  return NextResponse.json(await r.json());
}
