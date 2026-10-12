import AssignmentItem from "./AssignmentItem";

export default async function Assignments({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
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
      <ul id="wd-assignment-list">
        <AssignmentItem
          cid={cid}
          aid="A1"
          title="A1 ENV + HTML"
          details="Multiple Modules | Not available until May 6 at 12:00am | Due May 13 at 11:59pm | 100 pts"
        />
        <AssignmentItem
          cid={cid}
          aid="A2"
          title="A2 CSS + TAILWIND"
          details="Multiple Modules | Not available until May 13 at 12:00am | Due May 20 at 11:59pm | 100 pts"
        />
        <AssignmentItem
          cid={cid}
          aid="A3"
          title="A3 JS + REACT"
          details="Multiple Modules | Not available until May 20 at 12:00am | Due May 27 at 11:59pm | 100 pts"
        />
      </ul>
    </div>
  );
}
