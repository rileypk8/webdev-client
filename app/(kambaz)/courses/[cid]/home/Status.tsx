export default function CourseStatus() {
  return (
    <div id="wd-course-status" className="flex flex-col gap-2">
      <h2 className="text-lg font-bold">Course Status</h2>
      <div className="flex gap-2">
        <button className="bg-red-700 text-white rounded px-3 py-1 text-sm flex-1">
          Unpublish
        </button>
        <button className="bg-green-700 text-white rounded px-3 py-1 text-sm flex-1">
          Publish
        </button>
      </div>
      <button className="border rounded px-3 py-1 text-sm text-left">
        Import Existing Content
      </button>
      <button className="border rounded px-3 py-1 text-sm text-left">
        Import from Commons
      </button>
      <button className="border rounded px-3 py-1 text-sm text-left">
        Choose Home Page
      </button>
      <button className="border rounded px-3 py-1 text-sm text-left">
        View Course Stream
      </button>
      <button className="border rounded px-3 py-1 text-sm text-left">
        New Announcement
      </button>
      <button className="border rounded px-3 py-1 text-sm text-left">
        New Analytics
      </button>
      <button className="border rounded px-3 py-1 text-sm text-left">
        View Course Notifications
      </button>
    </div>
  );
}
