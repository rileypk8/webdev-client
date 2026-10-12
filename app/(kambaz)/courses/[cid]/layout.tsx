import { ReactNode } from "react";
import CourseNavigation from "./Navigation";

export default async function CoursesLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: Promise<{ cid: string }>;
}>) {
  const { cid } = await params;
  return (
    <div id="wd-courses">
      <h2 className="text-xl font-bold">Courses {cid}</h2>
      <hr className="my-2" />
      <div className="flex gap-4">
        <CourseNavigation cid={cid} />
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
