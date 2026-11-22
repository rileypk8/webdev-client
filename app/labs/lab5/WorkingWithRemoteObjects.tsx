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

export default function WorkingWithRemoteObjects() {
  const [assignment, setAssignment] = useState<Assignment>({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2026-10-10",
    completed: false,
    score: 0,
  });
  const ASSIGNMENT_API_URL = `${HTTP_SERVER}/lab5/assignment`;
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
        className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
        href={`${HTTP_SERVER}/lab5/assignment/title`}
      >
        Get Title
      </a>
      <h4>Modifying Properties</h4>
      <input
        id="wd-assignment-title"
        className="mb-2 block w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5"
        value={assignment.title}
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
      />
      <a
        id="wd-update-assignment-title"
        className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
        href={`${ASSIGNMENT_API_URL}/title/${encodeURIComponent(assignment.title)}`}
      >
        Update Title
      </a>
      <hr />
    </div>
  );
}
