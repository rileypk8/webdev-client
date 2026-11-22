"use client";

import { useState } from "react";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function QueryParameters() {
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");
  const input = "mb-2 block w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5";
  const link = "inline-block rounded bg-blue-600 px-3 py-1.5 text-sm text-white";
  const API = `${HTTP_SERVER}/lab5/calculator`;
  return (
    <div id="wd-query-parameters">
      <h3>Query Parameters</h3>
      <input
        id="wd-query-parameter-a"
        type="number"
        className={input}
        value={a}
        onChange={(e) => setA(e.target.value)}
      />
      <input
        id="wd-query-parameter-b"
        type="number"
        className={input}
        value={b}
        onChange={(e) => setB(e.target.value)}
      />
      <ul className="space-y-1">
        <li>
          <a id="wd-query-parameter-add" className={link} href={`${API}?operation=add&a=${a}&b=${b}`}>
            Add {a} + {b}
          </a>
        </li>
        <li>
          <a id="wd-query-parameter-subtract" className={link} href={`${API}?operation=subtract&a=${a}&b=${b}`}>
            Subtract {a} - {b}
          </a>
        </li>
        <li>
          <a id="wd-query-parameter-multiply" className={link} href={`${API}?operation=multiply&a=${a}&b=${b}`}>
            Multiply {a} × {b}
          </a>
        </li>
        <li>
          <a id="wd-query-parameter-divide" className={link} href={`${API}?operation=divide&a=${a}&b=${b}`}>
            Divide {a} ÷ {b}
          </a>
        </li>
      </ul>
      <hr />
    </div>
  );
}
