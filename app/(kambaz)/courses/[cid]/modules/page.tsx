"use client";

import { useParams } from "next/navigation";
import Module from "./Module";
import Lesson from "./Lesson";
import * as db from "../../../database";

export default function Modules() {
  const { cid } = useParams();
  const modules = db.modules.filter((module) => module.course === cid);
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
        {modules.map((module) => (
          <Module key={module._id} title={module.name}>
            {module.lessons?.map((lesson) => (
              <Lesson key={lesson._id} title={lesson.name} />
            ))}
          </Module>
        ))}
      </ul>
    </div>
  );
}
