"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Module from "./Module";
import Lesson from "./Lesson";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import * as db from "../../../database";

type CourseModule = {
  _id: string;
  name: string;
  description: string;
  course: string;
  lessons?: { _id: string; name: string; description: string; module: string }[];
  editing?: boolean;
};

export default function Modules() {
  const { cid } = useParams();
  const [modules, setModules] = useState<CourseModule[]>(db.modules);
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
  const deleteModule = (moduleId: string) => {
    setModules(modules.filter((m) => m._id !== moduleId));
  };
  const editModule = (moduleId: string) => {
    setModules(
      modules.map((m) => (m._id === moduleId ? { ...m, editing: true } : m)),
    );
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
            <Module
              key={module._id}
              title={module.name}
              controls={
                <ModuleControlButtons
                  moduleId={module._id}
                  deleteModule={deleteModule}
                  editModule={editModule}
                />
              }
            >
              {module.lessons?.map((lesson) => (
                <Lesson key={lesson._id} title={lesson.name} />
              ))}
            </Module>
          ))}
      </ul>
    </div>
  );
}
