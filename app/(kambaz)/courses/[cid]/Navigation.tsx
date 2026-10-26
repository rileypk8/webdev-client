"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { segment: "home", label: "Home", id: "wd-course-home-link" },
  { segment: "modules", label: "Modules", id: "wd-course-modules-link" },
  { segment: "piazza", label: "Piazza", id: "wd-course-piazza-link" },
  { segment: "zoom", label: "Zoom", id: "wd-course-zoom-link" },
  { segment: "assignments", label: "Assignments", id: "wd-course-assignments-link", },
  { segment: "quizzes", label: "Quizzes", id: "wd-course-quizzes-link" },
  { segment: "grades", label: "Grades", id: "wd-course-grades-link" },
  { segment: "people/table", label: "People", id: "wd-course-people-link" },
  { segment: "announcements", label: "Announcements", id: "wd-course-announcements-link" },
];

export default function CourseNavigation({ cid }: { cid: string }) {
  const pathname = usePathname() ?? "";
  const inCourse = pathname.startsWith(`/courses/${cid}`);

  return (
    <div
      id="wd-courses-navigation"
      className="flex flex-col w-40 border-r border-gray-200 pr-2"
    >
      {LINKS.map(({ segment, id, label }) => {
        const href = `/courses/${cid}/${segment}`;
        const active = inCourse
          ? pathname === href ||
            (segment !== "home" && pathname.startsWith(href))
          : segment === "home";
        return (
          <Link
            key={id}
            href={href}
            id={id}
            className={
              active
                ? "py-2 px-2 text-sm border-b bg-red-700 text-white"
                : "py-2 px-2 text-sm text-gray-600 border-b hover:text-red-700 hover:border-red-700"
            }
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
}
