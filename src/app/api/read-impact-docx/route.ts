import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const src = "C:/Users/venkat66/.gemini/antigravity-ide/brain/b27436ab-29b0-4626-ad97-25d31670c3cc/reach_depth_classroom_1791802957333.jpg";
    const dest = path.resolve(process.cwd(), "public/images/reach_depth_classroom.jpg");
    
    fs.copyFileSync(src, dest);
    return NextResponse.json({ success: true, message: "Copied successfully to " + dest });
  } catch (err: any) {
    return NextResponse.json({ error: err.message });
  }
}
