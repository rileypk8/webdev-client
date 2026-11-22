"use client";

import { useEffect, useState } from "react";
import * as client from "./client";

export default function WorkingWithRemoteArraysAsync() {
  const [todos, setTodos] = useState<client.Todo[]>([]);
  useEffect(() => {
    const fetchTodos = async () => {
      setTodos(await client.fetchTodos());
    };
    fetchTodos();
  }, []);
  return (
    <div id="wd-asynchronous-arrays">
      <h3>Working with Arrays Asynchronously</h3>
      <h4>Todos</h4>
      <ul className="max-w-md">
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center gap-2 py-1">
            <input type="checkbox" defaultChecked={todo.completed} />
            <span className={todo.completed ? "line-through" : ""}>
              {todo.title}
            </span>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}
