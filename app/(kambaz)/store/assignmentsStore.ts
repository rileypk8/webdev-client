"use client";

import { create } from "zustand";
import assignmentsJson from "../database/assignments.json";

export type Assignment = (typeof assignmentsJson)[number] & {
  availableUntil: string;
};

export const emptyAssignment: Assignment = {
  _id: "new",
  title: "New Assignment",
  course: "",
  description: "New Description",
  points: 100,
  due: "2026-12-15",
  available: "2026-12-01",
  availableUntil: "2026-12-20",
};

type AssignmentsStore = {
  assignments: Assignment[];
  addAssignment: (assignment: Assignment) => void;
  deleteAssignment: (assignmentId: string) => void;
  updateAssignment: (assignment: Assignment) => void;
  findAssignment: (assignmentId: string) => Assignment | undefined;
};

export const useAssignmentsStore = create<AssignmentsStore>((set, get) => ({
  assignments: assignmentsJson.map((a) => ({
    ...a,
    availableUntil: "2026-05-20",
  })),
  addAssignment: (assignment) =>
    set((state) => ({
      assignments: [
        ...state.assignments,
        { ...assignment, _id: crypto.randomUUID() },
      ],
    })),
  deleteAssignment: (assignmentId) =>
    set((state) => ({
      assignments: state.assignments.filter((a) => a._id !== assignmentId),
    })),
  updateAssignment: (assignment) =>
    set((state) => ({
      assignments: state.assignments.map((a) =>
        a._id === assignment._id ? assignment : a,
      ),
    })),
  findAssignment: (assignmentId) =>
    get().assignments.find((a) => a._id === assignmentId),
}));
