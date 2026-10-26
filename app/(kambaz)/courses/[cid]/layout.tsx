import { ReactNode } from "react";
import CourseNavigation from "./Navigation";
import Breadcrumb from "./Breadcrumb";
import { courses } from "../../database";

export default async function CoursesLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: Promise<{ cid: string }>;
}>) {
  const { cid } = await params;
  const course = courses.find((c) => c._id === cid);
  return (
    <div id="wd-courses">
      <h2 className="text-xl font-bold">
        <Breadcrumb course={course} />{" "}
        <span className="text-sm font-normal">({course?._id})</span>
      </h2>
      <hr className="my-2" />
      <div className="flex gap-4">
        <CourseNavigation cid={cid} />
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
