export default function Zindex() {
  return (
    <div id="wd-css-zindex">
      <h2>Z-index</h2>
      <div className="wd-pos-relative-container">
        <div className="wd-pos-absolute-10-10 wd-zindex-bring-to-front wd-border-fat wd-border-red wd-border-solid wd-bg-color-yellow">
          z-index 10, earlier in source but brought to front
        </div>
        <div className="wd-pos-absolute-50-50 wd-border-fat wd-border-blue wd-border-solid wd-bg-color-yellow">
          default stacking, later in source
        </div>
      </div>
    </div>
  );
}
