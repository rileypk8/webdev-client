import ServerTimeDemo from "./ServerTimeDemo";
import OsDemo from "./OsDemo";
import EnvDemo from "./EnvDemo";

export default function ServerApis() {
  return (
    <div id="wd-server-apis">
      <h2>Server-Only APIs</h2>
      <ServerTimeDemo />
      <OsDemo />
      <EnvDemo />
    </div>
  );
}
