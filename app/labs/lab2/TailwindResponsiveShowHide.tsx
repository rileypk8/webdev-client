export default function TailwindResponsiveShowHide() {
  return (
    <div id="wd-tw-responsive-show-hide">
      <h3>2.3.4.2 Show and hide by width</h3>
      <div className="sm:hidden bg-yellow-300 p-4">
        visible only below sm
      </div>
      <div className="hidden sm:block bg-green-300 p-4">
        visible only at sm and up
      </div>
    </div>
  );
}
