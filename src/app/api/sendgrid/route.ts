import { NextResponse } from "next/server";

import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(req: Request) {
  const { firstname, lastname, email, message } = await req.json();

  const msg = {
    to: `${process.env.MY_MAIL}`,
    from: `${process.env.MY_MAIL}`,
    replyTo: email,
    subject: `DM-MAX (Website) : Nouveau message de ${firstname} ${lastname}`,
    text: `
    Last Name : ${lastname}
    First Name : ${firstname}
    email : ${email}
    Message : ${message}`,
  };

  try {
    const response = await sgMail.send(msg);
    return NextResponse.json(response);
  } catch (error) {
    return new Response((error as any).message, {
      status: (error as any).code,
    });
  }
}
