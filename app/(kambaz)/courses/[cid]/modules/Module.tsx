import type { ReactNode } from "react";

export default function Module({
  title,
  controls,
  children,
}: {
  title: string;
  controls?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <li className="wd-module border rounded mb-3">
      <div className="wd-title bg-gray-200 font-bold p-3 flex items-center justify-between">
        {title}
        {controls}
      </div>
      <ul className="wd-lessons">{children}</ul>
    </li>
  );
}
