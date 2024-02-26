import { NextRequest, NextResponse } from "next/server";

const nodemailer = require("nodemailer");
const email = process.env.GMAIL_USER;
const pass = process.env.GMAIL_APP_PASS;

export async function POST(request: NextRequest) {
   try {
      const { name, tel, question } = await request.json();

      const transporter = nodemailer.createTransport({
         service: "gmail",
         host: "smtp.gmail.com",
         port: 465,
         secure: true,
         auth: {
            user: email,
            pass: pass,
         },
      });
      const mailOption = {
         from: email,
         to: "sales@welkingulf.ae",
         subject: `Request from ${name} | welkin-team.ae`,
         html: `
         <h2>Name: ${name}</h2>
         <h3>Phone number: ${tel}</h3>
         <h3>Question: ${question}</h3>
      `,
      };
      await transporter.sendMail(mailOption);
      return NextResponse.json({ message: "email send seccess" }, { status: 200 });
   } catch (err: any) {
      console.log(err);
      return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
   }
}
