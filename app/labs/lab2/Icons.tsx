import {
  FaHome,
  FaUser,
  FaCamera,
  FaBell,
  FaHeart,
} from "react-icons/fa";

export default function Icons() {
  return (
    <div id="wd-react-icons">
      <h2>React Icons</h2>
      <p>
        Icons from react-icons are React components, so they can be dropped
        into JSX anywhere a regular element could go, and styled like any
        other element.
      </p>
      <FaHome />
      <FaUser />
      <FaCamera />
      <FaBell className="wd-icon-large wd-fg-color-red" />
      <FaHeart className="wd-icon-large wd-fg-color-blue" />
    </div>
  );
}
