"use client";

import { useEffect, useState } from "react";
import * as client from "./client";

export default function WorkingWithRemoteObjectsAsync() {
  const [assignment, setAssignment] = useState<client.Assignment | null>(null);
  const updateTitle = async () => {
    if (!assignment) return;
    setAssignment(await client.updateTitle(assignment.title));
  };
  useEffect(() => {
    const fetchAssignment = async () => {
      setAssignment(await client.fetchAssignment());
    };
    fetchAssignment();
  }, []);
  return (
    <div id="wd-working-with-objects-async">
      <h3>Working with Objects Asynchronously</h3>
      <h4>Assignment</h4>
      {assignment && (
        <>
          <input
            id="wd-async-assignment-title"
            className="mb-2 block w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5"
            value={assignment.title}
            onChange={(e) =>
              setAssignment({ ...assignment, title: e.target.value })
            }
          />
          <label className="mr-2 inline-flex items-center gap-1">
            <input
              id="wd-async-assignment-completed"
              type="checkbox"
              checked={assignment.completed}
              onChange={(e) =>
                setAssignment({ ...assignment, completed: e.target.checked })
              }
            />
            Completed
          </label>
          <button
            id="wd-async-update-assignment-title"
            type="button"
            className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
            onClick={updateTitle}
          >
            Update Title
          </button>
          <pre className="mt-2 text-sm">{JSON.stringify(assignment, null, 2)}</pre>
        </>
      )}
      <hr />
    </div>
  );
}
