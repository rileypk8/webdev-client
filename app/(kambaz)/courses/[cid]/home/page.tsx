import Modules from "../modules/page";
import CourseStatus from "./Status";

export default function Home() {
  return (
    <div id="wd-home" className="flex flex-col md:flex-row gap-4">
      <div className="md:w-[70%]">
        <Modules />
      </div>
      <div className="md:flex-1">
        <CourseStatus />
      </div>
    </div>
  );
}