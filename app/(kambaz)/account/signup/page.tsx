import Link from "next/link";

export default function Signup() {
  return (
    <div id="wd-signup-screen" className="flex flex-col gap-2 max-w-xs">
      <h3 className="text-lg font-bold">Sign up</h3>
      <input
        placeholder="username"
        className="wd-username border rounded px-2 py-1"
        defaultValue="ada"
      />
      <input
        placeholder="password"
        type="password"
        className="wd-password border rounded px-2 py-1"
        defaultValue="123"
      />
      <input
        placeholder="verify password"
        type="password"
        className="wd-password-verify border rounded px-2 py-1"
      />
      <Link
        href="/account/profile"
        className="bg-red-700 text-white rounded px-3 py-2 text-center text-sm"
      >
        Sign up
      </Link>
      <Link
        href="/account/signin"
        className="text-blue-700 text-sm text-center hover:underline"
      >
        Sign in
      </Link>
    </div>
  );
}
