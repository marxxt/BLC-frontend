import { supabaseServer } from "@/lib/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const d = await req.json();
  const { interaction_id, entity_name, entity_value } = d;

  const { data, error } = await supabaseServer
    .from("chatbot_entities")
    .insert([{ interaction_id, entity_name, entity_value }]);

  if (error)
    return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json({ success: true, data });
}
