"use client";

import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { supabaseClient } from "../../utils/supabase/client";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    getUser();

   // const { data: listener } = supabase.auth.onAuthStateChange(
     // (_event, session) => {
       // setUser(session?.user || null);
      //}
    //);
    console.log("user", user);

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);
console.log("navbar user", user)
  const handleSignIn = async () => {

    const { error } = await supabase.auth.signInWithOAuth({
      provider: process.env.NEXT_PUBLIC_AUTH_PROVIDER,

      options: {
       // redirectTo: `${window.location.origin}/dashboard`,
        queryParams: {
          prompt: "select_account", // forces account chooser to appear
        },
      },
    });
    if (error) {
      console.error("Error signing in:", error.message);
    
    }else{
      return redirect("data.url")
    }
    console.log("sign in with google");
  };

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error signing out:", error.message);
      return;
    } else {
      router.push("/"); //back to landing page after signing out
      setUser(null);
      console.log("sign out success");
    }
  };
  return (
    <nav className="fixed top-0 w-full flex items-center justify-between p-10 bg-black opacity-75">
      <Link href="/">
        <img src="logo3.png" alt="codesphere logo" className="w-sm" />
      </Link>
      <div className="flex items-center gap-5">
        <Link href="/about" className="hover:text-[#ff00ea]">
          About
        </Link>
        <Link href="/dashboard" className="hover:text-[#ff00ea]">
          Dashboard
        </Link>

        {user ? (
          <button
          key="logout"
            onClick={handleSignOut}
            className="bg-[#00c7ff] shadow-lg shadow-cyan-500/50  px-5 py-1 rounded-sm"
          >
            Logout
          </button>
        ) : (
          <button
          key="login"
            onClick={handleSignIn}
            className="bg-[#00c7ff] shadow-lg shadow-cyan-500/50  px-5 py-1 rounded-sm"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
}
