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
  useEffect(() => {
    const load = async () => {
      setModules(await client.findModulesForCourse(String(cid)));
    };
    load().catch((e) => console.error("Unable to load modules", e));
  }, [cid, setModules]);
  return (
    <div>
      <ModulesControls />
      <ul id="wd-modules">
        {modules.map((module) => (
          <Module key={module._id} module={module} />
        ))}
      </ul>
    </div>
  );
}
