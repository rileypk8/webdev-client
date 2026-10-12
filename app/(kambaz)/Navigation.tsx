import Link from "next/link";
import {
  FaRegCircleUser,
  FaRegFolder,
  FaRegFolderOpen,
  FaRegCalendar,
  FaInbox,
  FaFlask,
} from "react-icons/fa6";
import { FaCogs } from "react-icons/fa";

export default function KambazNavigation() {
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
        className="flex flex-col items-center text-xs hover:text-red-400"
      >
        <FaRegCircleUser className="text-2xl" />
        Account
      </Link>
      <Link
        href="/dashboard"
        id="wd-dashboard-link"
        className="flex flex-col items-center text-xs hover:text-red-400"
      >
        <FaRegFolderOpen className="text-2xl" />
        Dashboard
      </Link>
      <Link
        href="/dashboard"
        id="wd-course-link"
        className="flex flex-col items-center text-xs hover:text-red-400"
      >
        <FaRegFolder className="text-2xl" />
        Courses
      </Link>
      <Link
        href="/calendar"
        id="wd-calendar-link"
        className="flex flex-col items-center text-xs hover:text-red-400"
      >
        <FaRegCalendar className="text-2xl" />
        Calendar
      </Link>
      <Link
        href="/inbox"
        id="wd-inbox-link"
        className="flex flex-col items-center text-xs hover:text-red-400"
      >
        <FaInbox className="text-2xl" />
        Inbox
      </Link>
      <Link
        href="/labs"
        id="wd-labs-link"
        className="flex flex-col items-center text-xs hover:text-red-400"
      >
        <FaFlask className="text-2xl" />
        Labs
      </Link>
    </div>
  );
}
