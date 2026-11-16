"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { emptyUser, useAccountContext } from "../AccountContext";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const { setCurrentUser, createUser } = useAccountContext();
  const router = useRouter();

  const signup = () => {
    if (!username || !password || password !== verifyPassword) return;
    setCurrentUser(createUser({ ...emptyUser, username, password }));
    router.push("/account/profile");
  };

  return (
    <div id="wd-signup-screen" className="flex flex-col gap-2 max-w-xs">
      <h3 className="text-lg font-bold">Sign up</h3>
      <input
        id="wd-username"
        placeholder="username"
        className="wd-username border rounded px-2 py-1"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        id="wd-password"
        placeholder="password"
        type="password"
        className="wd-password border rounded px-2 py-1"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        id="wd-password-verify"
        placeholder="verify password"
        type="password"
        className="wd-password-verify border rounded px-2 py-1"
        value={verifyPassword}
        onChange={(e) => setVerifyPassword(e.target.value)}
      />
      <button
        type="button"
        onClick={signup}
        id="wd-signup-btn"
        className="bg-red-700 text-white rounded px-3 py-2 text-center text-sm"
      >
        Sign up
      </button>
      <Link
        href="/account/signin"
        id="wd-signin-link"
        className="text-blue-700 text-sm text-center hover:underline"
      >
        Sign in
      </Link>
    </div>
  );
}
