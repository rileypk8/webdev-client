import { ReactNode } from "react";
import AccountNavigation from "./Navigation";

export default function AccountLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div id="wd-kambaz-account" className="flex gap-4">
      <AccountNavigation />
      <div className="flex-1">{children}</div>
    </div>
  );
}
