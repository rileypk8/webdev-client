import Link from "next/link";

export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation" className="flex flex-col w-32 gap-1">
      <Link
        href="/account/signin"
        className="py-2 px-2 text-sm text-gray-600 border-b hover:text-red-700"
      >
        Signin
      </Link>
      <Link
        href="/account/signup"
        className="py-2 px-2 text-sm text-gray-600 border-b hover:text-red-700"
      >
        Signup
      </Link>
      <Link
        href="/account/profile"
        className="py-2 px-2 text-sm text-gray-600 border-b hover:text-red-700"
      >
        Profile
      </Link>
    </div>
  );
}
