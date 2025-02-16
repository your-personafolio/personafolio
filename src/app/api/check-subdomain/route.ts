import { NextResponse } from "next/server";

const CLOUDFLARE_API_TOKEN = process.env.CLOUDFLARE_API_TOKEN!;
const ZONE_ID = process.env.CLOUDFLARE_ZONE_ID!;
const BASE_DOMAIN = "personafolio.com";

export async function POST(req: Request) {
  try {
    const { subdomain } = await req.json();
    if (!subdomain) {
      return NextResponse.json(
        { error: "Subdomain is required" },
        { status: 400 }
      );
    }

    const fullDomain = `${subdomain}.${BASE_DOMAIN}`;

    // Cek DNS Records di Cloudflare
    const response = await fetch(
      `https://api.cloudflare.com/client/v4/zones/${ZONE_ID}/dns_records?name=${fullDomain}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${CLOUDFLARE_API_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();

    if (data.success) {
      const isAvailable = data.result.length === 0;
      return NextResponse.json({ available: isAvailable });
    } else {
      return NextResponse.json(
        { error: "Failed to fetch Cloudflare API" },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
