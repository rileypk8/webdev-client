export default function TailwindSpacing() {
  return (
    <div id="wd-tailwind-spacing">
      <h2>Tailwind spacing</h2>
      <div className="p-4 bg-yellow-200">p-4 padding</div>
      <div className="m-8 bg-yellow-300">m-8 margin</div>
      <div className="flex gap-2">
        <div className="bg-blue-200 p-2">gap-2</div>
        <div className="bg-blue-300 p-2">between flex</div>
        <div className="bg-blue-400 p-2">children</div>
      </div>
    </div>
  );
}
