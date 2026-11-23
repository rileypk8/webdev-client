"use client";

import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import {
  emptyCourse,
  useCoursesStore,
  type Course,
} from "../store/coursesStore";
import { useAccountContext } from "../account/AccountContext";
import * as client from "../courses/client";

export default function Dashboard() {
  const courses = useCoursesStore((state) => state.courses);
  const setCourses = useCoursesStore((state) => state.setCourses);
  const addCourse = useCoursesStore((state) => state.addCourse);
  const updateCourse = useCoursesStore((state) => state.updateCourse);
  const deleteCourse = useCoursesStore((state) => state.deleteCourse);
  const { currentUser } = useAccountContext();
  const [showAllCourses, setShowAllCourses] = useState(false);
  // ids of the courses the server says I'm enrolled in
  const [myCourseIds, setMyCourseIds] = useState<string[]>([]);
  const isEnrolled = (courseId: string) => myCourseIds.includes(courseId);
  // the server is the source of truth: my courses when signed in,
  // every course when signed out or when Enrollments shows them all
  useEffect(() => {
    const load = async () => {
      try {
        const myCourses: Course[] = currentUser
          ? await client.findMyCourses()
          : [];
        setMyCourseIds(myCourses.map((c) => c._id));
        setCourses(
          currentUser && !showAllCourses
            ? myCourses
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

  const onUpdateCourse = async () => {
    try {
      await client.updateCourse(course);
      updateCourse(course);
      setError(null);
    } catch (e) {
      console.error("Unable to update course", e);
      setError("Unable to update the course.");
    }
  };

  const onDeleteCourse = async (courseId: string) => {
    try {
      await client.deleteCourse(courseId);
      deleteCourse(courseId);
      setError(null);
    } catch (e) {
      console.error("Unable to delete course", e);
      setError("Unable to delete the course.");
    }
  };

  const onAddCourse = async () => {
    if (!currentUser) {
      setError("Sign in to add a course.");
      return;
    }
    try {
      const newCourse = await client.createCourse(course);
      addCourse(newCourse);
      // the server enrolled the creator
      setMyCourseIds([...myCourseIds, newCourse._id]);
      setError(null);
    } catch (e) {
      console.error("Unable to add course", e);
      setError("Unable to add the course.");
    }
  };

  const onToggleEnrollment = async (courseId: string) => {
    if (!currentUser) return;
    try {
      if (isEnrolled(courseId)) {
        await client.unenrollFromCourse(currentUser._id, courseId);
        setMyCourseIds(myCourseIds.filter((id) => id !== courseId));
        // my-courses view: the course leaves the list
        if (!showAllCourses) setCourses(courses.filter((c) => c._id !== courseId));
      } else {
        await client.enrollIntoCourse(currentUser._id, courseId);
        setMyCourseIds([...myCourseIds, courseId]);
      }
      setError(null);
    } catch (e) {
      console.error("Unable to change enrollment", e);
      setError("Unable to change the enrollment.");
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
          onClick={onUpdateCourse}
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
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        {courses.map((c) => (
          <CourseCard
            key={c._id}
            course={c}
            onEdit={() => setCourse(c)}
            onDelete={() => onDeleteCourse(c._id)}
            enrolled={currentUser ? isEnrolled(c._id) : undefined}
            onToggleEnrollment={() => onToggleEnrollment(c._id)}
          />
        ))}
      </div>
    </div>
  );
}
