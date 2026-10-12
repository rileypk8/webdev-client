import type { ReactNode } from "react";

export default function Module({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) {
  return (
    <li className="wd-module border rounded mb-3">
      <div className="wd-title bg-gray-200 font-bold p-3">{title}</div>
      <ul className="wd-lessons">{children}</ul>
    </li>
  );
}
