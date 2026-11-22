"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAccountContext, type User } from "../AccountContext";
import * as client from "../client";

export default function Profile() {
  const [profile, setProfile] = useState<User | null>(null);
  const { currentUser, setCurrentUser } = useAccountContext();
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) {
      router.push("/account/signin");
      return;
    }
    const frame = requestAnimationFrame(() => setProfile(currentUser));
    return () => cancelAnimationFrame(frame);
  }, [currentUser, router]);

  const updateProfile = async () => {
    if (!profile) return;
    const user = await client.updateUser(profile);
    setCurrentUser(user);
  };

  const signout = async () => {
    await client.signout();
    setCurrentUser(null);
    router.push("/account/signin");
  };

  if (!profile) return null;
  return (
    <div id="wd-profile-screen" className="flex flex-col gap-2 max-w-xs">
      <h3 className="text-lg font-bold">Profile</h3>
      <input
        value={profile.username}
        onChange={(e) => setProfile({ ...profile, username: e.target.value })}
        placeholder="username"
        id="wd-username"
        className="wd-username border rounded px-2 py-1"
      />
      <input
        value={profile.password}
        onChange={(e) => setProfile({ ...profile, password: e.target.value })}
        placeholder="password"
        type="password"
        id="wd-password"
        className="wd-password border rounded px-2 py-1"
      />
      <input
        value={profile.firstName}
        onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
        placeholder="First Name"
        id="wd-firstname"
        className="border rounded px-2 py-1"
      />
      <input
        value={profile.lastName}
        onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
        placeholder="Last Name"
        id="wd-lastname"
        className="border rounded px-2 py-1"
      />
      <input
        defaultValue="2000-01-01"
        type="date"
        id="wd-dob"
        className="border rounded px-2 py-1"
      />
      <input
        value={profile.email}
        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
        type="email"
        id="wd-email"
        className="border rounded px-2 py-1"
      />
      <select
        value={profile.role}
        onChange={(e) => setProfile({ ...profile, role: e.target.value })}
        id="wd-role"
        className="border rounded px-2 py-1"
      >
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>
      <button
        type="button"
        onClick={updateProfile}
        id="wd-update-profile-btn"
        className="bg-blue-600 text-white rounded px-3 py-2 text-center text-sm"
      >
        Update
      </button>
      <button
        type="button"
        onClick={signout}
        id="wd-signout-btn"
        className="bg-red-700 text-white rounded px-3 py-2 text-center text-sm"
      >
        Sign out
      </button>
    </div>
  );
}
