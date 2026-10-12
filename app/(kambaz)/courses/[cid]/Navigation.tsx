import Link from "next/link";

const links = [
  { href: "home", label: "Home", id: "wd-course-home-link" },
  { href: "modules", label: "Modules", id: "wd-course-modules-link" },
  { href: "piazza", label: "Piazza", id: "wd-course-piazza-link" },
  { href: "zoom", label: "Zoom", id: "wd-course-zoom-link" },
  { href: "assignments", label: "Assignments", id: "wd-course-assignments-link" },
  { href: "quizzes", label: "Quizzes", id: "wd-course-quizzes-link" },
  { href: "grades", label: "Grades", id: "wd-course-grades-link" },
  { href: "people/table", label: "People", id: "wd-course-people-link" },
];

export default function CourseNavigation({ cid }: { cid: string }) {
  return (
    <div
      id="wd-courses-navigation"
      className="flex flex-col w-40 border-r border-gray-200 pr-2"
    >
      {links.map((link) => (
        <Link
          key={link.id}
          href={`/courses/${cid}/${link.href}`}
          id={link.id}
          className="py-2 px-2 text-sm text-gray-600 border-b hover:text-red-700 hover:border-red-700"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
