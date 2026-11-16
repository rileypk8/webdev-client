"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import usersJson from "../database/users.json";

export type User = (typeof usersJson)[number];

export const emptyUser: User = {
  _id: "0",
  username: "",
  password: "",
  firstName: "",
  lastName: "",
  email: "",
  role: "STUDENT",
  loginId: "",
  section: "",
  lastActivity: "",
  totalActivity: "",
};

export const isAdmin = (user: User | null) => user?.role === "ADMIN";

// FACULTY and ADMIN can create, edit, and delete course content
export const isFaculty = (user: User | null) =>
  user?.role === "FACULTY" || user?.role === "ADMIN";

type AccountContextValue = {
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
  users: User[];
  createUser: (user: User) => User;
  updateUser: (user: User) => void;
  deleteUser: (userId: string) => void;
};

const AccountContext = createContext<AccountContextValue | null>(null);

export function AccountProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>(usersJson);
  const createUser = (user: User) => {
    const newUser = { ...user, _id: crypto.randomUUID() };
    setUsers([...users, newUser]);
    return newUser;
  };
  const updateUser = (user: User) => {
    setUsers(users.map((u) => (u._id === user._id ? user : u)));
    if (currentUser?._id === user._id) setCurrentUser(user);
  };
  const deleteUser = (userId: string) => {
    setUsers(users.filter((u) => u._id !== userId));
    if (currentUser?._id === userId) setCurrentUser(null);
  };
  return (
    <AccountContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        users,
        createUser,
        updateUser,
        deleteUser,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
}

export function useAccountContext() {
  const value = useContext(AccountContext);
  if (!value) {
    throw new Error("useAccountContext must be used inside AccountProvider");
  }
  return value;
}
