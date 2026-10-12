import type { ReactNode } from "react";

export default function Lesson({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) {
  return (
    <li className="wd-lesson border-b p-2">
      <span className="wd-title font-semibold text-sm text-gray-600">
        {title}
      </span>
      <ul className="wd-content pl-4 text-sm">{children}</ul>
    </li>
  );
}
