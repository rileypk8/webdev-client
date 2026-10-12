import Link from "next/link";

export default function Signin() {
  return (
    <div id="wd-signin-screen" className="flex flex-col gap-2 max-w-xs">
      <h3 className="text-lg font-bold">Sign in</h3>
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
      <Link
        href="/dashboard"
        id="wd-signin-btn"
        className="bg-red-700 text-white rounded px-3 py-2 text-center text-sm"
      >
        Sign in
      </Link>
      <Link
        href="/account/signup"
        id="wd-signup-link"
        className="text-blue-700 text-sm text-center hover:underline"
      >
        Sign up
      </Link>
    </div>
  );
}
