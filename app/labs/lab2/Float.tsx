export default function Float() {
  return (
    <div id="wd-css-float">
      <h2>Float</h2>
      <h3>Floating an image in text</h3>
      <div>
        <img
          className="wd-float-left"
          src="https://picsum.photos/200"
          alt="sample"
        />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur.
        <div className="wd-float-done" />
      </div>
      <h3>Floating boxes side by side</h3>
      <div>
        <div className="wd-float-left wd-border-fat wd-border-red wd-border-solid wd-bg-color-yellow wd-dimension-square">
          left
        </div>
        <div className="wd-float-left wd-border-fat wd-border-blue wd-border-solid wd-bg-color-yellow wd-dimension-square">
          also left
        </div>
        <div className="wd-float-right wd-border-fat wd-border-yellow wd-border-solid wd-bg-color-blue wd-fg-color-white wd-dimension-square">
          right
        </div>
        <div className="wd-float-done" />
      </div>
    </div>
  );
}
