import { NextResponse } from "next/server";

import client from "@sendgrid/client";

client.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(req: Request) {
  const { email } = await req.json();

  try {
    const request = {
      url: `/v3/marketing/contacts`,
      method: "PUT" as const,
      body: {
        list_ids: ["1005136c-572c-4930-841d-5b8e4e2b4ac3"],
        contacts: [
          {
            email,
          },
        ],
      },
    };
    await client.request(request);
  } catch (error) {
    return new Response((error as any).message, {
      status: (error as any).code,
    });
  }

  return NextResponse.json({ message: "success : email saved in newsletter" });
}
