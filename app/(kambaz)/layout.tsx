import { ReactNode } from "react";
import KambazNavigation from "./Navigation";
import { AccountProvider } from "./account/AccountContext";
import Session from "./account/Session";

export default function KambazLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <AccountProvider>
      <Session>
        <div className="flex">
          <KambazNavigation />
          <div className="flex-1 p-4">{children}</div>
        </div>
      </Session>
    </AccountProvider>
  );
}
