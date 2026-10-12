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
    </div>
  );
}
