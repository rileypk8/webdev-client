import "./MediaQueriesDemo.css";

export default function MediaQueriesDemo() {
  return (
    <div id="wd-css-media-queries" className="wd-mq-demo">
      <h2>Media queries</h2>
      <p>
        Resize the browser window to see the background color change at each
        breakpoint.
      </p>
      <div className="wd-mq-rule-default">under 750px: green</div>
      <div className="wd-mq-rule-750">750px - 1000px: yellow</div>
      <div className="wd-mq-rule-1000">1000px - 1250px: blue</div>
      <div className="wd-mq-rule-1250">1250px and up: red</div>
    </div>
  );
}
