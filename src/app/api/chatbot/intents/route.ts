import { supabaseServer } from "@/lib/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const d = await req.json();
  const { interaction_id, intent_name, confidence_score } = d;

  const { data, error } = await supabaseServer
    .from("chatbot_intents")
    .insert([{ interaction_id, intent_name, confidence_score }]);

  if (error)
    return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json({ success: true, data });
}
