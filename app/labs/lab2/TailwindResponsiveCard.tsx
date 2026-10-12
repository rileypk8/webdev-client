export default function TailwindResponsiveCard() {
  return (
    <div id="wd-tw-responsive-card">
      <h3>2.3.4.6 A responsive card</h3>
      <div className="flex flex-col md:flex-row border rounded-lg overflow-hidden max-w-md md:max-w-2xl bg-white shadow">
        <div className="bg-blue-300 md:w-1/3 p-4">image area</div>
        <div className="p-4 md:p-6">
          <h4 className="text-lg md:text-xl font-bold">Card title</h4>
          <p className="text-sm md:text-base">
            Stacked on small screens, side by side from md up.
          </p>
        </div>
      </div>
    </div>
  );
}
