import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const { fullName, email, phone, experienceYears, vacancy, candidateId, score, status } = data;

    const result = await resend.emails.send({
      from: 'Flowvim Careers <onboarding@resend.dev>',   // ← THIS WORKS FOR TESTING
      to: 'nwaezedestiny62@gmail.com',
      subject: `New Application - ${vacancy} - ${candidateId}`,
      html: `
        <h2>New Career Application Received</h2>
        <p><strong>Candidate ID:</strong> ${candidateId}</p>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Experience:</strong> ${experienceYears} years</p>
        <p><strong>Position:</strong> ${vacancy}</p>
        <p><strong>Score:</strong> ${score}%</p>
        <p><strong>Status:</strong> ${status.toUpperCase()}</p>
        <hr>
        <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
      `,
    });

    console.log("Resend API Response:", result);   // ← For debugging

    return NextResponse.json({ success: true, resendId: result.data?.id });
  } catch (error: any) {
    console.error('Resend Full Error:', error);
    return NextResponse.json({ 
      success: false, 
      error: error.message 
    }, { status: 500 });
  }
}