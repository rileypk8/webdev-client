import { ReactNode } from "react";
import KambazNavigation from "./Navigation";

export default function KambazLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div className="flex">
      <KambazNavigation />
      <div className="flex-1 p-4">{children}</div>
    </div>
  );
}
