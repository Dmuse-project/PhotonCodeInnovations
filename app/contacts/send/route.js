// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(req) {
//   const { name, email, message } = await req.json();

//   try {
//     const data = await resend.emails.send({
//       from: process.env.RESEND_FROM_EMAIL,
//       to: process.env.RESEND_TO_EMAIL,
//       subject: `New Contact Form Submission from Website from ${name}`,
//       reply_to: email,
//       html: `
//         <h2>New Contact Form Submission</h2>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Message:</strong><br/>${message}</p>
//       `,
//     });



//     return Response.json({ success: true, message: 'Email sent' });
//   } catch (error) {
//     console.error('Email failed to send:', error);
//     return Response.json({ success: false, message: 'Failed to send email' });
//   }
// }




// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(req) {
//   const { name, email, message } = await req.json();

//   try {
//     await resend.emails.send({
//       from: process.env.RESEND_FROM_EMAIL,
//       to: process.env.RESEND_TO_EMAIL,
//       subject: `New Contact Message from ${name}`,
//       reply_to: email,
//       html: `
//         <h2>New Message</h2>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Message:</strong><br/>${message}</p>
//       `,
//     });

//     return Response.json({ success: true });
//   } catch (error) {
//     console.error(error);
//     return Response.json({ success: false, error: error.message });
//   }
// }



// app/contact/send/route.js
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_2QZY6poY_NPNPXYhfDYbbc8zkTUTRJDck");

export async function POST(req) {
  const body = await req.json();
  const { name, email, message, number } = body;

  try {
    const data = await resend.emails.send({
      from:"onboarding@resend.dev",
      to:"lordmuse057@gmail.com", // your email
      subject: `New message from Website, ${name} `,
      reply_to: email,
      text:`${message}, this is my email: ${email}, my name is:${name} you can reach me on ${number}`,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

