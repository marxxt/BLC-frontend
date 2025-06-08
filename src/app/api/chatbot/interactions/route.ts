// Log chatbot interaction /app/api/chatbot/interaction/route.ts
import { NextRequest, NextResponse } from "next/server";
import { supabaseServer } from "@/lib/server";



export async function POST(req: NextRequest) {
  const d = await req.json();
  const { user_id, session_id, message, response } = d;

  const { data, error } = await supabaseServer
    .from("chatbot_interactions")
    .insert([{ user_id, session_id, message, response }]);

  if (error)
    return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json({ success: true, data });
}
