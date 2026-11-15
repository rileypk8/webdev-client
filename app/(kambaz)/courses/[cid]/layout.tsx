"use client";

import { ReactNode, useState } from "react";
import { useParams } from "next/navigation";
import { FaAlignJustify } from "react-icons/fa6";
import CourseNavigation from "./Navigation";
import Breadcrumb from "./Breadcrumb";
import { useCoursesStore } from "../../store/coursesStore";

export default function CoursesLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const { cid } = useParams();
  const courseId = typeof cid === "string" ? cid : "";
  const courses = useCoursesStore((state) => state.courses);
  const course = courses.find((c) => c._id === courseId);
  const [showCourseNav, setShowCourseNav] = useState(true);

  return (
    <div id="wd-courses">
      <h2 className="text-xl font-bold">
        <FaAlignJustify
          className="me-3 mb-1 inline cursor-pointer"
          onClick={() => setShowCourseNav(!showCourseNav)}
          title="Toggle course navigation"
        />
        <Breadcrumb course={course} />{" "}
        {process.env.NODE_ENV === "development" && (
          <span className="text-sm font-normal">({course?._id})</span>
        )}
      </h2>
      <hr className="my-2" />
      <div className="flex gap-4">
        {showCourseNav && <CourseNavigation cid={courseId} />}
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
