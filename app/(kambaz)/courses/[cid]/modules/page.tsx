"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Module from "./Module";
import Lesson from "./Lesson";
import ModulesControls from "./ModulesControls";
import * as db from "../../../database";

export default function Modules() {
  const { cid } = useParams();
  const [modules, setModules] = useState(db.modules);
  const [moduleName, setModuleName] = useState("");
  const addModule = () => {
    setModules([
      ...modules,
      {
        _id: crypto.randomUUID(),
        name: moduleName,
        description: "",
        course: String(cid),
        lessons: [],
      },
    ]);
    setModuleName("");
  };
  return (
    <div>
      <ModulesControls
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={addModule}
      />
      <ul id="wd-modules">
        {modules
          .filter((module) => module.course === cid)
          .map((module) => (
            <Module key={module._id} title={module.name}>
              {module.lessons?.map((lesson) => (
                <Lesson key={lesson._id} title={lesson.name} />
              ))}
            </Module>
          ))}
      </ul>
    </div>
  );
}
