export default function Dimensions() {
  return (
    <div id="wd-css-dimensions">
      <h2>Dimensions</h2>
      <div className="wd-dimension-portrait wd-border-fat wd-border-red wd-border-solid wd-bg-color-yellow">
        Portrait 75x100
      </div>
      <div className="wd-dimension-landscape wd-border-fat wd-border-blue wd-border-solid wd-bg-color-yellow">
        Landscape 100x75
      </div>
      <div className="wd-dimension-square wd-border-fat wd-border-yellow wd-border-solid wd-bg-color-blue wd-fg-color-white">
        Square 75x75
      </div>
    </div>
  );
}
