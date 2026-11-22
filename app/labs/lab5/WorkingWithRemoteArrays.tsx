const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function WorkingWithRemoteArrays() {
  const API = `${HTTP_SERVER}/lab5/todos`;
  const link = "inline-block rounded bg-blue-600 px-3 py-1.5 text-sm text-white";
  return (
    <div id="wd-working-with-arrays">
      <h3>Working with Arrays</h3>
      <h4>Retrieving Arrays</h4>
      <a id="wd-retrieve-todos" className={link} href={API}>
        Get Todos
      </a>
      <hr />
    </div>
  );
}
