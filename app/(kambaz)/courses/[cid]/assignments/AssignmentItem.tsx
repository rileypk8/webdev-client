import Link from "next/link";

export default function AssignmentItem({
  cid,
  aid,
  title,
  details,
}: {
  cid: string;
  aid: string;
  title: string;
  details: string;
}) {
  return (
    <li className="wd-assignment-list-item border-b p-3">
      <Link
        href={`/courses/${cid}/assignments/${aid}`}
        className="wd-assignment-link font-semibold text-blue-700 hover:underline"
      >
        {title}
      </Link>
      <p className="text-sm text-gray-500">{details}</p>
    </li>
  );
}
