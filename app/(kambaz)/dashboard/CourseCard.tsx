import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import type { Course } from "../store/coursesStore";

// shown when a course has no image or its file is missing
const fallbackImage = "/images/reactjs.jpg";

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
  const [imageFailed, setImageFailed] = useState(false);
  return (
    <div className="wd-dashboard-course border rounded-lg shadow overflow-hidden bg-white">
      <Link
        href={`/courses/${course._id}/home`}
        className="wd-dashboard-course-link block"
      >
        <Image
          src={imageFailed || !course.image ? fallbackImage : course.image}
          width={400}
          height={400}
          alt={course.name}
          onError={() => setImageFailed(true)}
          className="w-full aspect-square object-cover"
        />
        <div className="p-3">
          <h5 className="wd-dashboard-course-title font-bold text-gray-900 truncate">
            {course.name}
          </h5>
          <p className="wd-dashboard-course-description text-sm text-gray-500 line-clamp-3 h-15">
            {course.description}
          </p>
          <button
            type="button"
            className="mt-2 bg-green-700 text-white text-sm px-3 py-1 rounded"
          >
            Go
          </button>
          {enrolled !== undefined && (
            <button
              type="button"
              id={enrolled ? "wd-unenroll-course-click" : "wd-enroll-course-click"}
              className={`mt-2 ms-2 text-sm px-3 py-1 rounded border ${
                enrolled
                  ? "border-red-600 bg-red-600 text-white"
                  : "border-green-700 bg-white text-green-700"
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
            className="mt-2 ms-2 bg-blue-600 text-white text-sm px-3 py-1 rounded"
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
