import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(req: Request) {
  const { firstname, lastname, email, message } = await req.json();

  try {
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
    await sgMail.send(msg);
  } catch (error) {
    return new Response((error as any).message, {
      status: (error as any).code,
    });
  }

  return NextResponse.json({ message: "success : email sent" });
}
