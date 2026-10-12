export default function TailwindFilters() {
  return (
    <div id="wd-tailwind-filters">
      <h2>Tailwind filters</h2>
      <div className="flex gap-4">
        <div className="bg-blue-400 w-24 h-24 opacity-50" />
        <div className="bg-blue-400 w-24 h-24 blur-sm" />
        <div className="bg-blue-400 w-24 h-24 brightness-150" />
        <div className="bg-blue-400 w-24 h-24 grayscale" />
      </div>
    </div>
  );
}
