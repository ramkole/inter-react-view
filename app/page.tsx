import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import AddQueAns from "./addQueAns/page";
import AuthSever from "./authServerManage";
import { redirect } from "next/navigation";

export default async function Home() {
  const superbase = createServerComponentClient<Database>({ cookies });
  const {
    data: { session },
  } = await superbase.auth.getSession();

  if (!session) {
    redirect("/login");
  }
  return (
    <>
      <AuthSever />
      <AddQueAns />
    </>
  );
}
