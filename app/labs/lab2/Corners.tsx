export default function Corners() {
  return (
    <div id="wd-css-corners">
      <h2>Corners</h2>
      <div className="wd-corner-top wd-border-fat wd-border-red wd-border-solid wd-bg-color-yellow">
        Rounded top corners
      </div>
      <div className="wd-corner-bottom wd-border-fat wd-border-blue wd-border-solid wd-bg-color-yellow">
        Rounded bottom corners
      </div>
      <div className="wd-corner-all wd-border-fat wd-border-yellow wd-border-solid wd-bg-color-blue wd-fg-color-white">
        Rounded all corners evenly
      </div>
      <div className="wd-corner-mixed wd-border-fat wd-border-red wd-border-solid wd-bg-color-gray">
        Rounded corners, different amount per corner
      </div>
    </div>
  );
}
