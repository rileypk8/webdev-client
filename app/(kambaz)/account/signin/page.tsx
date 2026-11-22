"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useAccountContext } from "../AccountContext";
import * as client from "../client";

export default function Signin() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const { setCurrentUser } = useAccountContext();
  const router = useRouter();

  const signin = async () => {
    try {
      const user = await client.signin(credentials);
      if (!user) return;
      setCurrentUser(user);
      router.push("/dashboard");
    } catch (e) {
      setError(
        axios.isAxiosError(e)
          ? (e.response?.data?.message ?? e.message)
          : "Unable to sign in",
      );
    }
  };

  return (
    <div id="wd-signin-screen" className="flex flex-col gap-2 max-w-xs">
      <h3 className="text-lg font-bold">Sign in</h3>
      {error && (
        <p id="wd-signin-error" className="rounded bg-red-100 px-3 py-2 text-sm text-red-800">
          {error}
        </p>
      )}
      <input
        placeholder="username"
        id="wd-username"
        className="wd-username border rounded px-2 py-1"
        value={credentials.username}
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
      />
      <input
        placeholder="password"
        type="password"
        id="wd-password"
        className="wd-password border rounded px-2 py-1"
        value={credentials.password}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
      />
      <button
        type="button"
        onClick={signin}
        id="wd-signin-btn"
        className="bg-red-700 text-white rounded px-3 py-2 text-center text-sm"
      >
        Sign in
      </button>
      <Link
        href="/account/signup"
        id="wd-signup-link"
        className="text-blue-700 text-sm text-center hover:underline"
      >
        Sign up
      </Link>
    </div>
  );
}
