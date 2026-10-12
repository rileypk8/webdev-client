export default function Positions() {
  return (
    <div id="wd-css-positions">
      <h2>Positions</h2>
      <h3>Relative positioning</h3>
      <div>
        before
        <span className="wd-pos-relative-nudge-up-right wd-border-fat wd-border-red wd-border-solid wd-bg-color-yellow">
          nudged up and right
        </span>
        after, original space is preserved
      </div>
      <div>
        before
        <span className="wd-pos-relative-nudge-down-right wd-border-fat wd-border-blue wd-border-solid wd-bg-color-yellow">
          nudged down and right
        </span>
        after, original space is preserved
      </div>
      <h3>Absolute positioning</h3>
      <div className="wd-pos-relative-container">
        <div className="wd-pos-absolute-10-10 wd-border-fat wd-border-red wd-border-solid wd-bg-color-yellow">
          10, 10
        </div>
        <div className="wd-pos-absolute-50-50 wd-border-fat wd-border-blue wd-border-solid wd-bg-color-yellow">
          50, 50
        </div>
        <div className="wd-pos-absolute-120-20 wd-border-fat wd-border-yellow wd-border-solid wd-bg-color-blue wd-fg-color-white">
          120, 20
        </div>
      </div>
      <h3>Fixed positioning</h3>
      <div className="wd-pos-fixed wd-border-fat wd-border-red wd-border-solid wd-bg-color-yellow">
        fixed to viewport
      </div>
    </div>
  );
}
