"use client";

import { useState } from "react";

const SYMBOLS: Record<string, string> = {
  add: "+",
  subtract: "-",
  multiply: "×",
  divide: "÷",
};

export default function Calculator() {
  const [a, setA] = useState("5");
  const [b, setB] = useState("3");
  const [operation, setOperation] = useState("add");
  const [result, setResult] = useState("");
  const [error, setError] = useState<string | null>(null);

  const calculate = async (op: string = operation) => {
    const response = await fetch(
      `/api/lab5/calculator?a=${encodeURIComponent(a)}&b=${encodeURIComponent(b)}&operation=${encodeURIComponent(op)}`
    );
    const data = await response.json();
    if (!response.ok) {
      setResult("");
      setError(data.error);
      return;
    }
    setError(null);
    setResult(`${data.a} ${SYMBOLS[data.operation]} ${data.b} = ${data.result}`);
  };

  const input = "rounded border border-neutral-300 px-3 py-1.5";
  return (
    <div id="wd-calculator">
      <h3>Calculator (Next.js Web API)</h3>
      <div className="mb-2 flex flex-wrap items-center gap-2">
        <label htmlFor="wd-calculator-a">A:</label>
        <input
          id="wd-calculator-a"
          type="number"
          className={`${input} w-24`}
          value={a}
          onChange={(e) => setA(e.target.value)}
        />
        <label htmlFor="wd-calculator-b">B:</label>
        <input
          id="wd-calculator-b"
          type="number"
          className={`${input} w-24`}
          value={b}
          onChange={(e) => setB(e.target.value)}
        />
        <label htmlFor="wd-calculator-operation">Operation:</label>
        <select
          id="wd-calculator-operation"
          className={input}
          value={operation}
          onChange={(e) => {
            setOperation(e.target.value);
            calculate(e.target.value);
          }}
        >
          <option value="add">+</option>
          <option value="subtract">-</option>
          <option value="multiply">×</option>
          <option value="divide">÷</option>
        </select>
        <button
          id="wd-calculator-calculate"
          type="button"
          className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
          onClick={() => calculate()}
        >
          Calculate
        </button>
      </div>
      <input
        id="wd-calculator-result"
        className={`${input} w-full max-w-sm`}
        readOnly
        value={result}
      />
      {error && (
        <p
          id="wd-calculator-error"
          className="mt-2 max-w-sm rounded bg-red-100 px-3 py-2 text-red-800"
        >
          {error}
        </p>
      )}
      <hr />
    </div>
  );
}
