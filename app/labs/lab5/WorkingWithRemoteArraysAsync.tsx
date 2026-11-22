"use client";

import { useEffect, useState } from "react";
import { FaPlusCircle, FaTrash } from "react-icons/fa";
import * as client from "./client";

export default function WorkingWithRemoteArraysAsync() {
  const [todos, setTodos] = useState<client.Todo[]>([]);
  const removeTodo = async (todo: client.Todo) => {
    setTodos(await client.removeTodo(todo));
  };
  const createNewTodo = async () => {
    setTodos(await client.createNewTodo());
  };
  useEffect(() => {
    const fetchTodos = async () => {
      setTodos(await client.fetchTodos());
    };
    fetchTodos();
  }, []);
  return (
    <div id="wd-asynchronous-arrays">
      <h3>Working with Arrays Asynchronously</h3>
      <h4>
        Todos
        <FaPlusCircle
          onClick={createNewTodo}
          id="wd-async-create-todo"
          className="ml-2 inline cursor-pointer text-green-600"
        />
      </h4>
      <ul className="max-w-md">
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center gap-2 py-1">
            <input type="checkbox" defaultChecked={todo.completed} />
            <span className={todo.completed ? "line-through" : ""}>
              {todo.title}
            </span>
            <FaTrash
              onClick={() => removeTodo(todo)}
              id="wd-async-remove-todo"
              className="cursor-pointer text-red-600"
            />
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}
