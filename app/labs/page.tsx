import Link from "next/link";

export default function Labs() {
  return (
    <div id="wd-labs">
      <h1>Labs</h1>
      <ul>
        <li>
          <Link href="/labs/lab1">Lab 1: HTML Examples</Link>
        </li>
        <li>
          <Link href="/labs/lab2">Lab 2: CSS Basics</Link>
        </li>
        <li>
          <Link href="/labs/lab3">Lab 3: JavaScript Fundamentals</Link>
        </li>
        <li>
          <Link href="/labs/lab4">Lab 4: Managing State</Link>
        </li>
        <li>
          <Link href="/labs/lab5">Lab 5: HTTP Web APIs</Link>
        </li>
      </ul>
      <p>
        <a
          id="wd-github"
          href="https://github.com/rileypk8/webdev-client"
          target="_blank"
          rel="noreferrer"
        >
          GitHub Repository
        </a>
      </p>
      <p>
        <a
          id="wd-github-server"
          href="https://github.com/rileypk8/webdev-server"
          target="_blank"
          rel="noreferrer"
        >
          Node Server GitHub Repository
        </a>
      </p>
      <p>
        <a
          id="wd-server-url"
          href="https://webdev-server-3lvs.onrender.com"
          target="_blank"
          rel="noreferrer"
        >
          Node Server on Render
        </a>
      </p>
      <p>Cait Riley Jackson</p>
    </div>
  );
}
