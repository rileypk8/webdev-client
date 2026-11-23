import Lesson from "./Lesson";
import ModuleControlButtons from "./ModuleControlButtons";
import { useModulesStore, type CourseModule } from "../../../store/modulesStore";
import * as client from "../../client";

export default function Module({ module }: { module: CourseModule }) {
  const updateModule = useModulesStore((state) => state.updateModule);
  const setError = useModulesStore((state) => state.setError);
  // editing is UI state; keep it out of what the server stores
  const onUpdateModule = async ({ editing, ...updates }: CourseModule) => {
    void editing;
    try {
      const saved = await client.updateModule(updates);
      updateModule({ ...saved, editing: false });
      setError(null);
    } catch (e) {
      console.error("Unable to update module", e);
      setError("Unable to save the module name.");
    }
  };
  return (
    <li className="wd-module border rounded mb-3">
      <div className="wd-title bg-gray-200 font-bold p-3 flex items-center justify-between">
        {module.editing ? (
          <input
            className="w-1/2 rounded border border-neutral-300 bg-white px-2 py-1 text-base font-normal"
            autoFocus
            defaultValue={module.name}
            onChange={(e) => updateModule({ ...module, name: e.target.value })}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onUpdateModule(module);
              }
            }}
          />
        ) : (
          module.name
        )}
        <ModuleControlButtons moduleId={module._id} />
      </div>
      <ul className="wd-lessons">
        {module.lessons?.map((lesson) => (
          <Lesson key={lesson._id} title={lesson.name} />
        ))}
      </ul>
    </li>
  );
}
