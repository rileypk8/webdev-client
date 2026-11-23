"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  emptyAssignment,
  useAssignmentsStore,
  type Assignment,
} from "../../../../store/assignmentsStore";
import { isFaculty, useAccountContext } from "../../../../account/AccountContext";
import * as client from "../../../client";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const courseId = String(cid);
  const assignmentId = String(aid);
  const isNew = assignmentId === "new";
  const router = useRouter();
  const { currentUser } = useAccountContext();
  const findAssignment = useAssignmentsStore((state) => state.findAssignment);
  const addAssignment = useAssignmentsStore((state) => state.addAssignment);
  const updateAssignment = useAssignmentsStore((state) => state.updateAssignment);
  const [assignment, setAssignment] = useState<Assignment | null>(() =>
    isNew
      ? { ...emptyAssignment, course: courseId }
      : (findAssignment(assignmentId) ?? null),
  );
  // the cache is empty after a reload, so read this assignment from the server
  useEffect(() => {
    if (isNew) return;
    const load = async () => {
      const assignments: Assignment[] =
        await client.findAssignmentsForCourse(courseId);
      const found = assignments.find((a) => a._id === assignmentId);
      if (found) setAssignment(found);
      else router.push(`/courses/${courseId}/assignments`);
    };
    load().catch((e) => console.error("Unable to load assignment", e));
  }, [isNew, courseId, assignmentId, router]);
  const [error, setError] = useState<string | null>(null);
  const backToList = () => router.push(`/courses/${courseId}/assignments`);
  const save = async () => {
    if (!assignment) return;
    try {
      if (isNew) {
        // the server assigns the _id
        const { _id, ...draft } = assignment;
        void _id;
        addAssignment(await client.createAssignmentForCourse(courseId, draft));
      } else {
        updateAssignment(await client.updateAssignment(assignment));
      }
      backToList();
    } catch (e) {
      console.error("Unable to save assignment", e);
      setError("Unable to save the assignment.");
    }
  };

  if (!assignment) return null;

  return (
    <div id="wd-assignments-editor" className="flex flex-col gap-4 max-w-2xl">
      {error && (
        <p
          id="wd-assignment-editor-error"
          className="rounded bg-red-100 px-3 py-2 text-sm text-red-800"
        >
          {error}
        </p>
      )}
      <div className="flex flex-col gap-1">
        <label htmlFor="wd-name" className="font-semibold text-sm">
          Assignment Name
        </label>
        <input
          id="wd-name"
          value={assignment.title}
          onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
          className="border rounded px-2 py-1"
        />
        <p id="wd-assignment-id" className="text-sm text-gray-500">
          Assignment id: {assignmentId}
        </p>
      </div>
      <textarea
        id="wd-description"
        className="border rounded px-2 py-1 h-32"
        value={assignment.description}
        onChange={(e) =>
          setAssignment({ ...assignment, description: e.target.value })
        }
      />
      <div className="border rounded p-4 flex flex-col gap-4">
        <div className="grid grid-cols-[150px_1fr] items-center gap-2">
          <label htmlFor="wd-points" className="text-right font-semibold text-sm">
            Points
          </label>
          <input
            id="wd-points"
            type="number"
            value={assignment.points}
            onChange={(e) =>
              setAssignment({ ...assignment, points: Number(e.target.value) || 0 })
            }
            className="border rounded px-2 py-1"
          />

          <label htmlFor="wd-group" className="text-right font-semibold text-sm">
            Assignment Group
          </label>
          <select
            id="wd-group"
            defaultValue="ASSIGNMENTS"
            className="border rounded px-2 py-1"
          >
            <option value="ASSIGNMENTS">Assignments</option>
            <option value="QUIZZES">Quizzes</option>
            <option value="EXAMS">Exams</option>
            <option value="PROJECT">Project</option>
          </select>

          <label
            htmlFor="wd-display-grade-as"
            className="text-right font-semibold text-sm"
          >
            Display Grade as
          </label>
          <select
            id="wd-display-grade-as"
            defaultValue="PERCENTAGE"
            className="border rounded px-2 py-1"
          >
            <option value="PERCENTAGE">Percentage</option>
            <option value="POINTS">Points</option>
            <option value="COMPLETE_INCOMPLETE">Complete/Incomplete</option>
            <option value="LETTER_GRADE">Letter Grade</option>
          </select>

          <label
            htmlFor="wd-submission-type"
            className="text-right font-semibold text-sm self-start"
          >
            Submission Type
          </label>
          <div className="flex flex-col gap-2">
            <select
              id="wd-submission-type"
              defaultValue="ONLINE"
              className="border rounded px-2 py-1"
            >
              <option value="ONLINE">Online</option>
              <option value="ON_PAPER">On Paper</option>
              <option value="NO_SUBMISSION">No Submission</option>
              <option value="EXTERNAL_TOOL">External Tool</option>
            </select>
            <span className="font-semibold text-sm">Online Entry Options</span>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" id="wd-text-entry" defaultChecked />
              Text Entry
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" id="wd-website-url" defaultChecked />
              Website URL
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" id="wd-media-recordings" />
              Media Recordings
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" id="wd-student-annotation" />
              Student Annotation
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" id="wd-file-upload" />
              File Uploads
            </label>
          </div>

          <label htmlFor="wd-assign-to" className="text-right font-semibold text-sm self-start">
            Assign
          </label>
          <div className="flex flex-col gap-2">
            <label htmlFor="wd-assign-to" className="text-sm">
              Assign to
            </label>
            <input
              id="wd-assign-to"
              defaultValue="Everyone"
              className="border rounded px-2 py-1"
            />
            <label htmlFor="wd-due-date" className="text-sm">
              Due
            </label>
            <input
              type="date"
              id="wd-due-date"
              value={assignment.due}
              onChange={(e) => setAssignment({ ...assignment, due: e.target.value })}
              className="border rounded px-2 py-1"
            />
            <div className="flex gap-2">
              <div className="flex flex-col gap-1 flex-1">
                <label htmlFor="wd-available-from" className="text-sm">
                  Available from
                </label>
                <input
                  type="date"
                  id="wd-available-from"
                  value={assignment.available}
                  onChange={(e) =>
                    setAssignment({ ...assignment, available: e.target.value })
                  }
                  className="border rounded px-2 py-1"
                />
              </div>
              <div className="flex flex-col gap-1 flex-1">
                <label htmlFor="wd-available-until" className="text-sm">
                  Until
                </label>
                <input
                  type="date"
                  id="wd-available-until"
                  value={assignment.availableUntil}
                  onChange={(e) =>
                    setAssignment({ ...assignment, availableUntil: e.target.value })
                  }
                  className="border rounded px-2 py-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={backToList}
          id="wd-cancel"
          className="border rounded px-4 py-2 text-sm"
        >
          Cancel
        </button>
        {isFaculty(currentUser) && (
          <button
            type="button"
            onClick={save}
            id="wd-save"
            className="bg-red-700 text-white rounded px-4 py-2 text-sm"
          >
            Save
          </button>
        )}
      </div>
    </div>
  );
}
