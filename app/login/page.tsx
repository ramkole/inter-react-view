import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AuthMangeClient from "../authMange";

export default async function Login() {
  const superbase = createServerComponentClient<Database>({ cookies });

  const {
    data: { session },
  } = await superbase.auth.getSession();

  if (session) {
    redirect("/");
  }

  return <AuthMangeClient session={session} />;
}
