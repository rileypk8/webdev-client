import CourseCard from "./CourseCard";
import * as db from "../database";

export default function Dashboard() {
  const courses = db.courses;
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title" className="text-2xl font-bold">
        Dashboard
      </h1>
      <hr className="my-2" />
      <h2 id="wd-dashboard-published" className="text-lg font-semibold">
        Published Courses ({courses.length})
      </h2>
      <hr className="my-2" />
      <div
        id="wd-dashboard-courses"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
      >
        {courses.map((course) => (
          <CourseCard key={course._id} {...course} />
        ))}
      </div>
    </div>
  );
}
