export default function TailwindGrid() {
  return (
    <div id="wd-tailwind-grid">
      <h2>Tailwind grid layout</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-red-300 p-4">1</div>
        <div className="bg-blue-300 p-4">2</div>
        <div className="bg-green-300 p-4">3</div>
        <div className="bg-yellow-300 p-4">4</div>
        <div className="bg-purple-300 p-4">5</div>
        <div className="bg-pink-300 p-4">6</div>
      </div>
      <div className="grid grid-cols-4 gap-2 mt-4">
        <div className="col-span-2 bg-gray-300 p-4">col-span-2</div>
        <div className="bg-gray-400 p-4">1</div>
        <div className="bg-gray-500 p-4 text-white">1</div>
      </div>
    </div>
  );
}
