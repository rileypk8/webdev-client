export default function TailwindResponsiveGridColumns() {
  return (
    <div id="wd-tw-responsive-grid-columns">
      <h3>2.3.4.4 Grid columns by breakpoint</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <div className="bg-red-300 p-4">1</div>
        <div className="bg-blue-300 p-4">2</div>
        <div className="bg-green-300 p-4">3</div>
        <div className="bg-yellow-300 p-4">4</div>
        <div className="bg-purple-300 p-4">5</div>
        <div className="bg-pink-300 p-4">6</div>
      </div>
    </div>
  );
}
