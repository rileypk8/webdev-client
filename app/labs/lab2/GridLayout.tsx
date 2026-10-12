export default function GridLayout() {
  return (
    <div id="wd-css-grid-layout">
      <h2>Grid layout</h2>
      <h3>Two column layout</h3>
      <div className="wd-grid-row">
        <div className="wd-grid-col-half-page wd-border-fat wd-border-red wd-border-solid wd-bg-color-yellow">
          half page
        </div>
        <div className="wd-grid-col-half-page wd-border-fat wd-border-blue wd-border-solid wd-bg-color-yellow">
          half page
        </div>
      </div>
      <h3>Three column layout</h3>
      <div className="wd-grid-row">
        <div className="wd-grid-col-third-page wd-border-fat wd-border-red wd-border-solid wd-bg-color-yellow">
          third page
        </div>
        <div className="wd-grid-col-third-page wd-border-fat wd-border-blue wd-border-solid wd-bg-color-yellow">
          third page
        </div>
        <div className="wd-grid-col-third-page wd-border-fat wd-border-yellow wd-border-solid wd-bg-color-blue wd-fg-color-white">
          third page
        </div>
      </div>
      <h3>Sidebar layout</h3>
      <div className="wd-grid-row">
        <div className="wd-grid-col-sidebar wd-border-fat wd-border-red wd-border-solid wd-bg-color-yellow">
          sidebar 20%
        </div>
        <div className="wd-grid-col-sidebar-main wd-border-fat wd-border-blue wd-border-solid wd-bg-color-yellow">
          main 60%
        </div>
        <div className="wd-grid-col-sidebar wd-border-fat wd-border-yellow wd-border-solid wd-bg-color-blue wd-fg-color-white">
          sidebar 20%
        </div>
      </div>
    </div>
  );
}
