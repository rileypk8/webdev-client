"use client";

import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import {
  emptyCourse,
  useCoursesStore,
  type Course,
} from "../store/coursesStore";
import { useEnrollmentsStore } from "../store/enrollmentsStore";
import { useAccountContext } from "../account/AccountContext";
import * as client from "../courses/client";

export default function Dashboard() {
  const courses = useCoursesStore((state) => state.courses);
  const setCourses = useCoursesStore((state) => state.setCourses);
  const addCourse = useCoursesStore((state) => state.addCourse);
  const updateCourse = useCoursesStore((state) => state.updateCourse);
  const { currentUser } = useAccountContext();
  const enrollments = useEnrollmentsStore((state) => state.enrollments);
  const enrollIntoCourse = useEnrollmentsStore(
    (state) => state.enrollIntoCourse,
  );
  const unenrollFromCourse = useEnrollmentsStore(
    (state) => state.unenrollFromCourse,
  );
  const [showAllCourses, setShowAllCourses] = useState(false);
  const isEnrolled = (courseId: string) =>
    enrollments.some(
      (enrollment) =>
        enrollment.user === currentUser?._id && enrollment.course === courseId,
    );
  // the server is the source of truth: my courses when signed in,
  // every course when signed out or when Enrollments shows them all
  useEffect(() => {
    const load = async () => {
      try {
        setCourses(
          currentUser && !showAllCourses
            ? await client.findMyCourses()
            : await client.fetchAllCourses(),
        );
      } catch (e) {
        console.error("Unable to load courses", e);
      }
    };
    load();
  }, [currentUser, showAllCourses, setCourses]);
  const [course, setCourse] = useState<Course>(emptyCourse);
  const [error, setError] = useState<string | null>(null);

  const onAddCourse = async () => {
    if (!currentUser) {
      setError("Sign in to add a course.");
      return;
    }
    try {
      const newCourse = await client.createCourse(course);
      addCourse(newCourse);
      // the server enrolled the creator; mirror that until enrollments move to the server (5.4.8)
      enrollIntoCourse(currentUser._id, newCourse._id);
      setError(null);
    } catch (e) {
      console.error("Unable to add course", e);
      setError("Unable to add the course.");
    }
  };

  return (
    <div id="wd-dashboard">
      <div className="flex items-center justify-between">
        <h1 id="wd-dashboard-title" className="text-2xl font-bold">
          Dashboard
        </h1>
        {currentUser && (
          <button
            type="button"
            id="wd-enrollments-toggle"
            className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
            onClick={() => setShowAllCourses(!showAllCourses)}
          >
            Enrollments
          </button>
        )}
      </div>
      <hr className="my-2" />
      <h5 className="flex flex-wrap items-center gap-2">
        New Course
        <button
          type="button"
          className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
          id="wd-add-new-course-click"
          onClick={onAddCourse}
        >
          Add
        </button>
        <button
          type="button"
          className="rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium"
          id="wd-update-course-click"
          onClick={() => updateCourse(course)}
        >
          Update
        </button>
      </h5>
      {error && (
        <p
          id="wd-dashboard-error"
          className="mt-2 max-w-xl rounded bg-red-100 px-3 py-2 text-sm text-red-800"
        >
          {error}
        </p>
      )}
      <input
        className="mb-2 mt-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        value={course.name}
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
        id="wd-course-name"
      />
      <textarea
        className="mb-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        rows={3}
        value={course.description}
        onChange={(e) => setCourse({ ...course, description: e.target.value })}
        id="wd-course-description"
      />
      <input
        className="mb-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        value={course.number}
        onChange={(e) => setCourse({ ...course, number: e.target.value })}
        id="wd-course-number"
      />
      <input
        type="date"
        className="mb-3 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        value={course.startDate}
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
        id="wd-course-start-date"
      />
      <hr className="my-2" />
      <h2 id="wd-dashboard-published" className="text-lg font-semibold">
        Published Courses ({courses.length})
      </h2>
      <hr className="my-2" />
      <div
        id="wd-dashboard-courses"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
      >
        {courses.map((c) => (
          <CourseCard
            key={c._id}
            course={c}
            onEdit={() => setCourse(c)}
            enrolled={currentUser ? isEnrolled(c._id) : undefined}
            onToggleEnrollment={() =>
              currentUser &&
              (isEnrolled(c._id)
                ? unenrollFromCourse(currentUser._id, c._id)
                : enrollIntoCourse(currentUser._id, c._id))
            }
          />
        ))}
      </div>
    </div>
  );
}
