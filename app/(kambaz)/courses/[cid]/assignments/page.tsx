"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import AssignmentItem from "./AssignmentItem";
import DeleteAssignmentDialog from "./DeleteAssignmentDialog";
import { isFaculty, useAccountContext } from "../../../account/AccountContext";
import {
  useAssignmentsStore,
  type Assignment,
} from "../../../store/assignmentsStore";
import * as client from "../../client";

export default function Assignments() {
  const { cid } = useParams();
  const courseId = String(cid);
  const { currentUser } = useAccountContext();
  const assignments = useAssignmentsStore((state) => state.assignments);
  const setAssignments = useAssignmentsStore((state) => state.setAssignments);
  const deleteAssignment = useAssignmentsStore(
    (state) => state.deleteAssignment,
  );
  const [toDelete, setToDelete] = useState<Assignment | null>(null);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const load = async () => {
      // drop the previous course's assignments before the fetch returns
      setAssignments([]);
      try {
        setAssignments(await client.findAssignmentsForCourse(courseId));
        setError(null);
      } catch (e) {
        console.error("Unable to load assignments", e);
        setError("Unable to load assignments.");
      }
    };
    load();
  }, [courseId, setAssignments]);
  const onDeleteAssignment = async (assignmentId: string) => {
    try {
      await client.deleteAssignment(assignmentId);
      deleteAssignment(assignmentId);
      setError(null);
    } catch (e) {
      console.error("Unable to delete assignment", e);
      setError("Unable to delete the assignment.");
    }
  };

  return (
    <div id="wd-assignments">
      <div className="flex gap-2 mb-3">
        <input
          id="wd-search-assignment"
          placeholder="Search for Assignments"
          className="border rounded px-2 py-1 flex-1"
        />
        <button
          id="wd-add-assignment-group"
          className="border rounded px-3 py-1 text-sm"
        >
          + Group
        </button>
        {isFaculty(currentUser) && (
          <Link
            id="wd-add-assignment"
            href={`/courses/${courseId}/assignments/new`}
            className="bg-red-700 text-white rounded px-3 py-1 text-sm"
          >
            + Assignment
          </Link>
        )}
      </div>
      {error && (
        <p id="wd-assignments-error" className="mb-3 rounded bg-red-100 px-3 py-2 text-sm text-red-800">
          {error}
        </p>
      )}
      <h3
        id="wd-assignments-title"
        className="bg-gray-200 font-bold p-2 flex justify-between items-center"
      >
        ASSIGNMENTS 40% of Total{" "}
        <button type="button" className="border rounded px-2">
          +
        </button>
      </h3>
      <ul id="wd-assignment-list" className="m-0 list-none p-0">
        {assignments.map((assignment) => (
          <AssignmentItem
            key={assignment._id}
            cid={courseId}
            aid={assignment._id}
            title={assignment.title}
            details={`Multiple Modules | Not available until ${assignment.available} | Due ${assignment.due} | ${assignment.points} pts`}
            onDelete={
              isFaculty(currentUser) ? () => setToDelete(assignment) : undefined
            }
          />
        ))}
      </ul>
      {toDelete && (
        <DeleteAssignmentDialog
          title={toDelete.title}
          onYes={async () => {
            await onDeleteAssignment(toDelete._id);
            setToDelete(null);
          }}
          onNo={() => setToDelete(null)}
        />
      )}
    </div>
  );
}
