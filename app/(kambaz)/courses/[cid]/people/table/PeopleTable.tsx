"use client";

import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import {
  emptyUser,
  isFaculty,
  useAccountContext,
  type User,
} from "../../../../account/AccountContext";
import * as accountClient from "../../../../account/client";
import * as coursesClient from "../../../client";

export default function PeopleTable({ cid }: { cid: string }) {
  const { currentUser, setCurrentUser } = useAccountContext();
  // the course's enrolled users, read from the server
  const [enrolled, setEnrolled] = useState<User[]>([]);
  const [user, setUser] = useState<User>(emptyUser);
  const [error, setError] = useState<string | null>(null);
  const canEdit = isFaculty(currentUser);
  useEffect(() => {
    const load = async () => {
      setEnrolled(await accountClient.findUsersForCourse(cid));
    };
    load().catch((e) => console.error("Unable to load people", e));
  }, [cid]);
  const run = async (label: string, action: () => Promise<void>) => {
    try {
      await action();
      setUser(emptyUser);
      setError(null);
    } catch (e) {
      console.error(`Unable to ${label}`, e);
      setError(`Unable to ${label}.`);
    }
  };
  const addUser = () =>
    run("add the user", async () => {
      // the server assigns the _id
      const { _id, ...draft } = user;
      void _id;
      const newUser: User = await accountClient.createUser(draft);
      await coursesClient.enrollIntoCourse(newUser._id, cid);
      setEnrolled([...enrolled, newUser]);
    });
  const saveUser = () =>
    run("update the user", async () => {
      const saved: User = await accountClient.updateUser(user);
      setEnrolled(enrolled.map((u) => (u._id === saved._id ? saved : u)));
      if (currentUser?._id === saved._id) setCurrentUser(saved);
    });
  const removeUser = (userId: string) =>
    run("delete the user", async () => {
      await accountClient.deleteUser(userId);
      setEnrolled(enrolled.filter((u) => u._id !== userId));
      if (currentUser?._id === userId) setCurrentUser(null);
    });
  return (
    <div id="wd-people-table" className="overflow-x-auto">
      {canEdit && (
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <input
            value={user.firstName}
            id="wd-user-first-name"
            placeholder="First name"
            className="rounded border border-neutral-300 px-3 py-1.5"
            onChange={(e) => setUser({ ...user, firstName: e.target.value })}
          />
          <input
            value={user.lastName}
            id="wd-user-last-name"
            placeholder="Last name"
            className="rounded border border-neutral-300 px-3 py-1.5"
            onChange={(e) => setUser({ ...user, lastName: e.target.value })}
          />
          <button
            id="wd-add-user-click"
            type="button"
            className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
            onClick={addUser}
          >
            Add
          </button>
          <button
            id="wd-update-user-click"
            type="button"
            // nothing to update until Edit fills the form
            disabled={user._id === emptyUser._id}
            className="rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium disabled:opacity-50"
            onClick={saveUser}
          >
            Update
          </button>
        </div>
      )}
      {error && (
        <p
          id="wd-people-error"
          className="mb-3 rounded bg-red-100 px-3 py-2 text-sm text-red-800"
        >
          {error}
        </p>
      )}
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-neutral-300">
            <th className="p-2">Name</th>
            <th className="p-2">Login ID</th>
            <th className="p-2">Section</th>
            <th className="p-2">Role</th>
            <th className="p-2">Last Activity</th>
            <th className="p-2">Total Activity</th>
            {canEdit && <th className="p-2"></th>}
          </tr>
        </thead>
        <tbody>
          {enrolled.map((usr) => (
            <tr key={usr._id} className="odd:bg-neutral-50">
              <td className="wd-full-name p-2 text-nowrap">
                <FaUserCircle className="me-2 inline align-middle text-3xl text-neutral-500" />
                <span className="wd-first-name">{usr.firstName}</span>{" "}
                <span className="wd-last-name">{usr.lastName}</span>
              </td>
              <td className="wd-login-id p-2">{usr.loginId}</td>
              <td className="wd-section p-2">{usr.section}</td>
              <td className="wd-role p-2">{usr.role}</td>
              <td className="wd-last-activity p-2">{usr.lastActivity}</td>
              <td className="wd-total-activity p-2">{usr.totalActivity}</td>
              {canEdit && (
                <td className="p-2 text-nowrap">
                  <button
                    type="button"
                    className="wd-edit-user rounded bg-yellow-400 px-2 py-1 text-xs font-medium"
                    onClick={() => setUser(usr)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="wd-delete-user ms-2 rounded bg-red-600 px-2 py-1 text-xs font-medium text-white"
                    onClick={() => removeUser(usr._id)}
                  >
                    Delete
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
