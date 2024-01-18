import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import AuthMange from "./authMange";
import AuthMangeClient from "./authMange";

export default async function AuthSever() {
  const superbase = createServerComponentClient<Database>({ cookies });

  const {
    data: { session },
  } = await superbase.auth.getSession();

  return <AuthMangeClient session={session} />;
}
