"use client";

import { useState } from "react";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

type TodoForm = {
  id: string;
};

export default function WorkingWithRemoteArrays() {
  const [todo, setTodo] = useState<TodoForm>({ id: "1" });
  const API = `${HTTP_SERVER}/lab5/todos`;
  const input = "mb-2 block w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5";
  const link = "inline-block rounded bg-blue-600 px-3 py-1.5 text-sm text-white";
  return (
    <div id="wd-working-with-arrays">
      <h3>Working with Arrays</h3>
      <h4>Retrieving Arrays</h4>
      <a id="wd-retrieve-todos" className={link} href={API}>
        Get Todos
      </a>
      <h4>Retrieving an Item from an Array by ID</h4>
      <input
        id="wd-todo-id"
        className={input}
        value={todo.id}
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <a id="wd-retrieve-todo-by-id" className={link} href={`${API}/${todo.id}`}>
        Get Todo by ID
      </a>
      <h4>Filtering Array Items</h4>
      <a id="wd-retrieve-completed-todos" className={link} href={`${API}?completed=true`}>
        Get Completed Todos
      </a>
      <h4>Creating new Items in an Array</h4>
      <a id="wd-create-todo" className={link} href={`${API}/create`}>
        Create Todo
      </a>
      <h4>Removing from an Array</h4>
      <a id="wd-remove-todo" className={link} href={`${API}/${todo.id}/delete`}>
        Remove Todo with ID = {todo.id}
      </a>
      <hr />
    </div>
  );
}
