import Link from "next/link";

export default function Profile() {
  return (
    <div id="wd-profile-screen" className="flex flex-col gap-2 max-w-xs">
      <h3 className="text-lg font-bold">Profile</h3>
      <input
        defaultValue="alice"
        placeholder="username"
        className="wd-username border rounded px-2 py-1"
      />
      <input
        defaultValue="123"
        placeholder="password"
        type="password"
        className="wd-password border rounded px-2 py-1"
      />
      <input
        defaultValue="Alice"
        placeholder="First Name"
        id="wd-firstname"
        className="border rounded px-2 py-1"
      />
      <input
        defaultValue="Wonderland"
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
        defaultValue="alice@wonderland"
        type="email"
        id="wd-email"
        className="border rounded px-2 py-1"
      />
      <select
        defaultValue="FACULTY"
        id="wd-role"
        className="border rounded px-2 py-1"
      >
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>
      <Link
        href="/account/signin"
        className="bg-red-700 text-white rounded px-3 py-2 text-center text-sm"
      >
        Sign out
      </Link>
    </div>
  );
}
