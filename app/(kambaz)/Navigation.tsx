"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaRegCircleUser,
  FaRegFolder,
  FaRegFolderOpen,
  FaRegCalendar,
  FaInbox,
  FaFlask,
} from "react-icons/fa6";
import { FaCogs } from "react-icons/fa";
import { IoCalendarOutline } from "react-icons/io5";

const LINKS = [
  { label: "Dashboard", path: "/dashboard", icon: FaRegFolderOpen },
  { label: "Courses", path: "/dashboard", icon: FaRegFolder },
  { label: "Calendar", path: "/calendar", icon: FaRegCalendar },
  { label: "Inbox", path: "/inbox", icon: FaInbox },
  { label: "Labs", path: "/labs", icon: FaFlask },
  { label: "History", path: "/history", icon: IoCalendarOutline },
] as const;

export default function KambazNavigation() {
  const pathname = usePathname() ?? "";
  const accountActive = pathname.includes("/account");

  return (
    <div
      id="wd-kambaz-navigation"
      className="flex flex-col items-center gap-4 w-24 bg-black text-white min-h-screen py-4"
    >
      <a
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
        target="_blank"
        rel="noreferrer"
        className="text-red-600 hover:text-red-400"
      >
        <FaCogs className="text-3xl" />
      </a>
      <Link
        href="/account"
        id="wd-account-link"
        className={`flex flex-col items-center text-xs hover:text-red-400 ${
          accountActive ? "text-red-400" : ""
        }`}
      >
        <FaRegCircleUser className="text-2xl" />
        Account
      </Link>
      {LINKS.map((link) => {
        const active =
          link.label === "Courses"
            ? pathname.includes("/courses")
            : pathname.includes(link.path);
        const Icon = link.icon;
        return (
          <Link
            key={link.label}
            href={link.path}
            id={`wd-${link.label.toLowerCase()}-link`}
            className={`flex flex-col items-center text-xs hover:text-red-400 ${
              active ? "text-red-400" : ""
            }`}
          >
            <Icon className="text-2xl" />
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}
