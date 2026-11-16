"use client";

import { ReactNode, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { FaAlignJustify } from "react-icons/fa6";
import CourseNavigation from "./Navigation";
import Breadcrumb from "./Breadcrumb";
import { useCoursesStore } from "../../store/coursesStore";
import { useEnrollmentsStore } from "../../store/enrollmentsStore";
import { isAdmin, useAccountContext } from "../../account/AccountContext";

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
  const router = useRouter();
  const { currentUser } = useAccountContext();
  const enrollments = useEnrollmentsStore((state) => state.enrollments);
  // admins can open any course; everyone else only the courses they are enrolled in
  const canOpen =
    isAdmin(currentUser) ||
    enrollments.some(
      (enrollment) =>
        enrollment.user === currentUser?._id && enrollment.course === courseId,
    );

  useEffect(() => {
    if (!canOpen) router.replace("/dashboard");
  }, [canOpen, router]);

  if (!canOpen) return null;

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
