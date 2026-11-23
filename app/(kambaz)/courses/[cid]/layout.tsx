"use client";

import { ReactNode, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { FaAlignJustify } from "react-icons/fa6";
import CourseNavigation from "./Navigation";
import Breadcrumb from "./Breadcrumb";
import { useCoursesStore, type Course } from "../../store/coursesStore";
import * as client from "../client";
import { isAdmin, useAccountContext } from "../../account/AccountContext";

export default function CoursesLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const { cid } = useParams();
  const courseId = typeof cid === "string" ? cid : "";
  const courses = useCoursesStore((state) => state.courses);
  const [serverCourse, setServerCourse] = useState<Course | undefined>();
  const course = serverCourse ?? courses.find((c) => c._id === courseId);
  const [showCourseNav, setShowCourseNav] = useState(true);
  const router = useRouter();
  const { currentUser } = useAccountContext();
  // ids of the signed-in user's courses, from the server; null while loading
  const [myCourseIds, setMyCourseIds] = useState<string[] | null>(null);

  useEffect(() => {
    const load = async () => {
      const all: Course[] = await client.fetchAllCourses();
      setServerCourse(all.find((c) => c._id === courseId));
      if (currentUser && !isAdmin(currentUser)) {
        const mine: Course[] = await client.findMyCourses();
        setMyCourseIds(mine.map((c) => c._id));
      }
    };
    load().catch((e) => {
      console.error("Unable to load course", e);
      // without my courses the page would wait forever; treat it as none
      setMyCourseIds((ids) => ids ?? []);
    });
  }, [courseId, currentUser]);

  // signed out: browse freely (like the Dashboard). Signed in: admins can open
  // any course, everyone else only the courses they are enrolled in
  const loading = !!currentUser && !isAdmin(currentUser) && myCourseIds === null;
  const canOpen =
    !currentUser ||
    isAdmin(currentUser) ||
    loading ||
    (myCourseIds ?? []).includes(courseId);

  useEffect(() => {
    if (!canOpen) router.replace("/dashboard");
  }, [canOpen, router]);

  if (loading) return null;
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
