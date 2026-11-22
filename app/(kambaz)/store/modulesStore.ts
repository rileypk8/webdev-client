"use client";

import { create } from "zustand";

export type Lesson = {
  _id: string;
  name: string;
  description: string;
  module: string;
};

export type CourseModule = {
  _id: string;
  name: string;
  description: string;
  course: string;
  lessons?: Lesson[];
  editing?: boolean;
};

type ModulesStore = {
  modules: CourseModule[];
  setModules: (modules: CourseModule[]) => void;
  addModule: (module: CourseModule) => void;
  deleteModule: (moduleId: string) => void;
  updateModule: (module: CourseModule) => void;
  editModule: (moduleId: string) => void;
};

export const useModulesStore = create<ModulesStore>((set) => ({
  // a client cache of the current course's modules, filled from the server
  modules: [],
  setModules: (modules) => set({ modules }),
  // the server assigns the _id; append the module it returned
  addModule: (module) =>
    set((state) => ({
      modules: [...state.modules, module],
    })),
  deleteModule: (moduleId) =>
    set((state) => ({
      modules: state.modules.filter((m) => m._id !== moduleId),
    })),
  updateModule: (module) =>
    set((state) => ({
      modules: state.modules.map((m) => (m._id === module._id ? module : m)),
    })),
  editModule: (moduleId) =>
    set((state) => ({
      modules: state.modules.map((m) =>
        m._id === moduleId ? { ...m, editing: true } : m,
      ),
    })),
}));
