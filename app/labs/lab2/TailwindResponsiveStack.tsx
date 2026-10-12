export default function TailwindResponsiveStack() {
  return (
    <div id="wd-tw-responsive-stack">
      <h3>2.3.4.3 Stack, then side by side</h3>
      <div className="flex flex-col md:flex-row gap-2">
        <div className="bg-red-300 p-4">one</div>
        <div className="bg-blue-300 p-4">two</div>
        <div className="bg-green-300 p-4">three</div>
      </div>
    </div>
  );
}
