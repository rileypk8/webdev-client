export default function Flex() {
  return (
    <div id="wd-css-flex">
      <h2>Flex</h2>
      <h3>Flex row with growing columns</h3>
      <div className="wd-flex-row-container">
        <div className="wd-flex-grow wd-border-fat wd-border-red wd-border-solid wd-bg-color-yellow">
          grows
        </div>
        <div className="wd-flex-grow wd-border-fat wd-border-blue wd-border-solid wd-bg-color-yellow">
          grows
        </div>
      </div>
      <h3>Flex row with a fixed-width column</h3>
      <div className="wd-flex-row-container">
        <div className="wd-width-110px wd-border-fat wd-border-yellow wd-border-solid wd-bg-color-blue wd-fg-color-white">
          fixed 110px
        </div>
        <div className="wd-flex-grow wd-border-fat wd-border-red wd-border-solid wd-bg-color-yellow">
          grows to fill remaining space
        </div>
      </div>
    </div>
  );
}
