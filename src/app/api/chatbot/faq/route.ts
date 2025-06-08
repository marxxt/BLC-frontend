import { supabaseServer } from "@/lib/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const d = await req.json();
  const { question, answer, category } = d;

  const { data, error } = await supabaseServer
    .from("faq_entries")
    .insert([{ question, answer, category }]);

  if (error)
    return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json({ success: true, data });
}
