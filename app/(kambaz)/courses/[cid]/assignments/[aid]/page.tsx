import Link from "next/link";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-assignments-editor" className="flex flex-col gap-4 max-w-2xl">
      <div className="flex flex-col gap-1">
        <label htmlFor="wd-name" className="font-semibold text-sm">
          Assignment Name
        </label>
        <input
          id="wd-name"
          defaultValue="A1 - ENV + HTML"
          className="border rounded px-2 py-1"
        />
      </div>
      <textarea
        id="wd-description"
        className="border rounded px-2 py-1 h-32"
        defaultValue="The assignment is available online Submit a link to the landing page of"
      />
      <div className="border rounded p-4 flex flex-col gap-4">
        <div className="grid grid-cols-[150px_1fr] items-center gap-2">
          <label htmlFor="wd-points" className="text-right font-semibold text-sm">
            Points
          </label>
          <input
            id="wd-points"
            defaultValue={100}
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
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            <option value="QUIZZES">QUIZZES</option>
            <option value="EXAMS">EXAMS</option>
            <option value="PROJECT">PROJECT</option>
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
              defaultValue="2024-05-13"
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
                  defaultValue="2024-05-06"
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
                  defaultValue="2024-05-20"
                  className="border rounded px-2 py-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex justify-end gap-2">
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-cancel"
          className="border rounded px-4 py-2 text-sm"
        >
          Cancel
        </Link>
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-save"
          className="bg-red-700 text-white rounded px-4 py-2 text-sm"
        >
          Save
        </Link>
      </div>
    </div>
  );
}
