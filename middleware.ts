import { createClientComponentClient, createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";

export default async function midddleware(req: NextRequest){
    const res = NextResponse.next()
    const superbase = createMiddlewareClient<Database>({req, res})
    await superbase.auth.getSession()

    return res
}