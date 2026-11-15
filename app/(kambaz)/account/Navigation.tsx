"use client";

import Link from "next/link";
import { useAccountContext } from "./AccountContext";

export default function AccountNavigation() {
  const { currentUser } = useAccountContext();
  const links = currentUser
    ? (["profile"] as const)
    : (["signin", "signup"] as const);
  return (
    <div id="wd-account-navigation" className="flex flex-col w-32 gap-1">
      {links.map((link) => (
        <Link
          key={link}
          href={`/account/${link}`}
          className="py-2 px-2 text-sm text-gray-600 border-b hover:text-red-700"
        >
          {link === "signin"
            ? "Signin"
            : link === "signup"
              ? "Signup"
              : "Profile"}
        </Link>
      ))}
    </div>
  );
}
