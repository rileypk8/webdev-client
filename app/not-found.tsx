import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div
      id="wd-not-found"
      className="mx-auto flex max-w-md flex-col items-center gap-4 p-8 text-center"
    >
      <Image
        src="/images/chef.jpg"
        width={400}
        height={400}
        alt="The Swedish Chef"
        className="w-64 rounded-lg"
        preload
      />
      <h2 className="text-2xl font-bold">Page Not Found</h2>
      <p>
        Sorry, this page is bork bork borked.
      </p>
      <Link
        href="/dashboard"
        id="wd-not-found-dashboard-link"
        className="rounded bg-green-700 px-4 py-2 text-sm text-white"
      >
        Back to Dashboard
      </Link>
    </div>
  );
}
