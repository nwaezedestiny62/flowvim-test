import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'src/lib/siteContent.json');

export async function GET() {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return NextResponse.json(JSON.parse(data));
  } catch {
    const defaultContent = {
      solutionCards: [
        { title: "Business Strategy", description: "Develop clear roadmaps..." },
        { title: "Operations Excellence", description: "Streamline processes..." },
        { title: "People Development", description: "Build high-performing teams..." }
      ],
      about: {
        storyTitle: "Empowering Nigerian Businesses Through People, Processes, and Performance.",
        valueCards: [
          { title: "Strategic Clarity", desc: "Turning vision into execution..." },
          { title: "People-Centered Growth", desc: "Unlocking human potential..." },
          { title: "Operational Excellence", desc: "Building scalable systems..." }
        ],
        mission: "Empower SMEs with practical systems...",
        vision: "Become Nigeria’s most trusted transformation consulting firm."
      }
    };
    return NextResponse.json(defaultContent);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    fs.writeFileSync(filePath, JSON.stringify(body, null, 2));
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}