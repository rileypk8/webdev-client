export default function Display() {
  return (
    <div id="wd-css-display">
      <h2>Display</h2>
      <p>
        <span className="wd-display-inline wd-border-fat wd-border-red wd-border-solid wd-bg-color-yellow">
          inline span, ignores width/height
        </span>
        <span className="wd-display-inline wd-border-fat wd-border-blue wd-border-solid wd-bg-color-yellow">
          another inline span, still ignores sizing
        </span>
      </p>
      <p>
        <span className="wd-display-inline-block wd-border-fat wd-border-red wd-border-solid wd-bg-color-yellow">
          inline-block span, honors width/height
        </span>
        <span className="wd-display-inline-block wd-border-fat wd-border-blue wd-border-solid wd-bg-color-yellow">
          another inline-block span
        </span>
      </p>
      <span className="wd-display-block wd-border-fat wd-border-yellow wd-border-solid wd-bg-color-blue wd-fg-color-white">
        block span, starts on a new line and honors width/height
      </span>
    </div>
  );
}
