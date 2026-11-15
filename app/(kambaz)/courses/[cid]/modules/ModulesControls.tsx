import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import ModuleEditor from "./ModuleEditor";

export default function ModulesControls({
  moduleName,
  setModuleName,
  addModule,
}: {
  moduleName: string;
  setModuleName: (title: string) => void;
  addModule: () => void;
}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
      <button
        type="button"
        className="bg-red-700 text-white rounded px-3 py-1 text-sm ml-auto inline-flex items-center gap-1"
        id="wd-add-module-btn"
        onClick={handleShow}
      >
        <FaPlus /> Module
      </button>
      <ModuleEditor
        show={show}
        handleClose={handleClose}
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={addModule}
      />
    </div>
  );
}
