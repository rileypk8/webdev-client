import { Suspense } from "react";
import PathnameDemo from "./PathnameDemo";
import SearchParamsDemo from "./SearchParamsDemo";

export default function ClientApis() {
  return (
    <div id="wd-client-apis">
      <h2>Client-Only APIs</h2>
      <PathnameDemo />
      <Suspense fallback={<p>Loading query string...</p>}>
        <SearchParamsDemo />
      </Suspense>
    </div>
  );
}
