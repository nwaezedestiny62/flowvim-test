import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const { fullName, email, phone, experienceYears, vacancy, candidateId, score, status } = data;

    await resend.emails.send({
      from: 'Careers <careers@flowvim.com>',   // Change to your verified domain later
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
        <p>Application received on ${new Date().toLocaleString()}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Resend error:', error);
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
  }
}