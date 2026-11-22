import Link from "next/link";
import Image from "next/image";
import type { Course } from "../store/coursesStore";

export default function CourseCard({
  course,
  onEdit,
  onDelete,
  enrolled,
  onToggleEnrollment,
}: {
  course: Course;
  onEdit: () => void;
  onDelete: () => void;
  enrolled?: boolean;
  onToggleEnrollment?: () => void;
}) {
  return (
    <div className="wd-dashboard-course border rounded-lg shadow overflow-hidden bg-white">
      <Link
        href={`/courses/${course._id}/home`}
        className="wd-dashboard-course-link block"
      >
        <Image
          src={course.image}
          width={200}
          height={150}
          alt={course.name}
          className="w-full h-36 object-cover"
        />
        <div className="p-3">
          <h5 className="wd-dashboard-course-title font-bold truncate">
            {course.name}
          </h5>
          <p className="wd-dashboard-course-description text-sm text-gray-500 truncate">
            {course.description}
          </p>
          <button
            type="button"
            className="mt-2 bg-red-700 text-white text-sm px-3 py-1 rounded"
          >
            Go
          </button>
          {enrolled !== undefined && (
            <button
              type="button"
              id={enrolled ? "wd-unenroll-course-click" : "wd-enroll-course-click"}
              className={`mt-2 ms-2 text-white text-sm px-3 py-1 rounded ${
                enrolled ? "bg-red-600" : "bg-green-600"
              }`}
              onClick={(event) => {
                event.preventDefault();
                onToggleEnrollment?.();
              }}
            >
              {enrolled ? "Unenroll" : "Enroll"}
            </button>
          )}
          <button
            type="button"
            id="wd-edit-course-click"
            className="mt-2 ms-2 bg-yellow-400 text-sm px-3 py-1 rounded"
            onClick={(event) => {
              event.preventDefault();
              onEdit();
            }}
          >
            Edit
          </button>
          <button
            type="button"
            id="wd-delete-course-click"
            className="mt-2 ms-2 bg-red-700 text-white text-sm px-3 py-1 rounded"
            onClick={(event) => {
              event.preventDefault();
              onDelete();
            }}
          >
            Delete
          </button>
        </div>
      </Link>
    </div>
  );
}
