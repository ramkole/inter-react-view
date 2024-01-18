import { createRouteHandlerClient, createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest) {
 
    const reqURL = new URL(request.url)

    const code = reqURL.searchParams.get('code')

    if(code){
        const superbase = createRouteHandlerClient<Database>({ cookies });
        await superbase.auth.exchangeCodeForSession(code)
    }

    return NextResponse.redirect(reqURL.origin)

}