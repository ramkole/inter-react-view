"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Session,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

const AuthMangeClient = ({ session }: { session: Session | null }) => {
  const router = useRouter();
  const superbase = createClientComponentClient<Database>();
  const handleLogin = async () => {
    await superbase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: "http://localhost:3000/auth/callback",
      },
    });
  };
  const handleLogOut = async () => {
    await superbase.auth.signOut();
    router.refresh();
  };
  return session ? (
    <Button variant="outline" onClick={handleLogOut}>
      LogOut
    </Button>
  ) : (
    <Button variant="outline" onClick={handleLogin}>
      Login
    </Button>
  );
};

export default AuthMangeClient;
