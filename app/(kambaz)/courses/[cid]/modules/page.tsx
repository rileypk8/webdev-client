"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import Module from "./Module";
import ModulesControls from "./ModulesControls";
import { useModulesStore } from "../../../store/modulesStore";
import * as client from "../../client";

export default function Modules() {
  const { cid } = useParams();
  const modules = useModulesStore((state) => state.modules);
  const setModules = useModulesStore((state) => state.setModules);
  const error = useModulesStore((state) => state.error);
  const setError = useModulesStore((state) => state.setError);
  useEffect(() => {
    const load = async () => {
      // drop the previous course's modules before the fetch returns
      setModules([]);
      setError(null);
      try {
        setModules(await client.findModulesForCourse(String(cid)));
      } catch (e) {
        console.error("Unable to load modules", e);
        setError("Unable to load modules.");
      }
    };
    load();
  }, [cid, setModules, setError]);
  return (
    <div>
      <ModulesControls />
      {error && (
        <p id="wd-modules-error" className="mb-3 rounded bg-red-100 px-3 py-2 text-sm text-red-800">
          {error}
        </p>
      )}
      <ul id="wd-modules">
        {modules.map((module) => (
          <Module key={module._id} module={module} />
        ))}
      </ul>
    </div>
  );
}
