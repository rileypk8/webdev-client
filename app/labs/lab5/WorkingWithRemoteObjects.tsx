"use client";

import { useState } from "react";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

type Assignment = {
  id: number;
  title: string;
  description: string;
  due: string;
  completed: boolean;
  score: number;
};

type Module = {
  id: string;
  name: string;
  description: string;
  course: string;
};

export default function WorkingWithRemoteObjects() {
  const [assignment, setAssignment] = useState<Assignment>({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2026-10-10",
    completed: false,
    score: 0,
  });
  const [module, setModule] = useState<Module>({
    id: "MS331",
    name: "Advanced Heckling",
    description:
      "Professors emeritae Statler and Waldorf tell you exactly where they'd rather be instead.",
    course: "CS5610",
  });
  const ASSIGNMENT_API_URL = `${HTTP_SERVER}/lab5/assignment`;
  const MODULE_API_URL = `${HTTP_SERVER}/lab5/module`;
  const input = "mb-2 block w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5";
  const link = "inline-block rounded bg-blue-600 px-3 py-1.5 text-sm text-white";
  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>
      <h4>Retrieving Objects</h4>
      <a
        id="wd-retrieve-assignments"
        className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
        href={`${HTTP_SERVER}/lab5/assignment`}
      >
        Get Assignment
      </a>
      <h4>Retrieving Properties</h4>
      <a
        id="wd-retrieve-assignment-title"
        className={link}
        href={`${HTTP_SERVER}/lab5/assignment/title`}
      >
        Get Title
      </a>
      <h4>Modifying Properties</h4>
      <input
        id="wd-assignment-title"
        className={input}
        value={assignment.title}
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
      />
      <a
        id="wd-update-assignment-title"
        className={link}
        href={`${ASSIGNMENT_API_URL}/title/${encodeURIComponent(assignment.title)}`}
      >
        Update Title
      </a>
      <br />
      <input
        id="wd-assignment-score"
        type="number"
        className={`${input} mt-2`}
        value={assignment.score}
        onChange={(e) =>
          setAssignment({ ...assignment, score: Number(e.target.value) })
        }
      />
      <a
        id="wd-update-assignment-score"
        className={link}
        href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}
      >
        Update Score
      </a>
      <br />
      <label className="mt-2 mr-2 inline-flex items-center gap-1">
        <input
          id="wd-assignment-completed"
          type="checkbox"
          checked={assignment.completed}
          onChange={(e) =>
            setAssignment({ ...assignment, completed: e.target.checked })
          }
        />
        Completed
      </label>
      <a
        id="wd-update-assignment-completed"
        className={link}
        href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}
      >
        Update Completed
      </a>
      <h4>Module (On Your Own)</h4>
      <ul className="mb-2 space-y-1">
        <li>
          <a id="wd-retrieve-module" className={link} href={MODULE_API_URL}>
            Get Module
          </a>
        </li>
        <li>
          <a id="wd-retrieve-module-name" className={link} href={`${MODULE_API_URL}/name`}>
            Get Module Name
          </a>
        </li>
      </ul>
      <input
        id="wd-module-name"
        className={input}
        value={module.name}
        onChange={(e) => setModule({ ...module, name: e.target.value })}
      />
      <a
        id="wd-update-module-name"
        className={link}
        href={`${MODULE_API_URL}/name/${encodeURIComponent(module.name)}`}
      >
        Update Module Name
      </a>
      <br />
      <input
        id="wd-module-description"
        className={`${input} mt-2`}
        value={module.description}
        onChange={(e) => setModule({ ...module, description: e.target.value })}
      />
      <a
        id="wd-update-module-description"
        className={link}
        href={`${MODULE_API_URL}/description/${encodeURIComponent(module.description)}`}
      >
        Update Module Description
      </a>
      <hr />
    </div>
  );
}
