import Module from "./Module";
import Lesson from "./Lesson";

export default function Modules() {
  return (
    <div>
      <div className="flex gap-2 mb-3">
        <button className="border rounded px-3 py-1 text-sm">
          Collapse All
        </button>
        <button className="border rounded px-3 py-1 text-sm">
          View Progress
        </button>
        <select
          defaultValue="publish-all"
          className="border rounded px-2 py-1 text-sm"
        >
          <option value="publish-all">Publish All</option>
        </select>
        <button className="bg-red-700 text-white rounded px-3 py-1 text-sm ml-auto">
          + Module
        </button>
      </div>
      <ul id="wd-modules">
        <Module title="Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda">
          <Lesson title="LEARNING OBJECTIVES">
            <li className="wd-content-item">Introduction to the course</li>
            <li className="wd-content-item">Learn what is Web Development</li>
          </Lesson>
          <Lesson title="READING">
            <li className="wd-content-item">
              Full Stack Developer - Chapter 1 - Introduction
            </li>
            <li className="wd-content-item">
              Full Stack Developer - Chapter 2 - Creating User Interfaces
            </li>
          </Lesson>
          <Lesson title="SLIDES">
            <li className="wd-content-item">Introduction to Web Development</li>
            <li className="wd-content-item">
              Creating an HTTP server with Node.js
            </li>
            <li className="wd-content-item">Creating a React Application</li>
          </Lesson>
        </Module>
        <Module title="Week 2">{/* Expand lessons on your own */}</Module>
        <Module title="Week 3" />
      </ul>
    </div>
  );
}
