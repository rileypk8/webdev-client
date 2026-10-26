import AssignmentItem from "./AssignmentItem";
import * as db from "../../../database";

export default async function Assignments({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  const assignments = db.assignments.filter(
    (assignment) => assignment.course === cid,
  );

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
        <button
          id="wd-add-assignment"
          className="bg-red-700 text-white rounded px-3 py-1 text-sm"
        >
          + Assignment
        </button>
      </div>
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
            cid={cid}
            aid={assignment._id}
            title={assignment.title}
            details={`Multiple Modules | Not available until ${assignment.available} | Due ${assignment.due} | ${assignment.points} pts`}
          />
        ))}
      </ul>
    </div>
  );
}
