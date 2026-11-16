import Link from "next/link";
import { FaTrash } from "react-icons/fa";

export default function AssignmentItem({
  cid,
  aid,
  title,
  details,
  onDelete,
}: {
  cid: string;
  aid: string;
  title: string;
  details: string;
  onDelete?: () => void;
}) {
  return (
    <li className="wd-assignment-list-item border-b p-3 flex items-center justify-between">
      <div>
        <Link
          href={`/courses/${cid}/assignments/${aid}`}
          className="wd-assignment-link font-semibold text-blue-700 hover:underline"
        >
          {title}
        </Link>
        <p className="text-sm text-gray-500">{details}</p>
      </div>
      {onDelete && (
        <FaTrash
          className="wd-delete-assignment cursor-pointer text-red-600"
          onClick={onDelete}
          title="Delete assignment"
        />
      )}
    </li>
  );
}
