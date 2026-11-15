import ModuleEditor from "./ModuleEditor";

export default function ModulesControls() {
  return (
    <div id="wd-modules-controls" className="flex gap-2 mb-3">
      <button className="border rounded px-3 py-1 text-sm">Collapse All</button>
      <button className="border rounded px-3 py-1 text-sm">
        View Progress
      </button>
      <select
        defaultValue="publish-all"
        className="border rounded px-2 py-1 text-sm"
      >
        <option value="publish-all">Publish All</option>
      </select>
      <ModuleEditor />
    </div>
  );
}
