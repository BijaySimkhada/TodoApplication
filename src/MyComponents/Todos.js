import React from "react";
import { TodoItems } from "./TodoItems";

export const Todos = ({ todos, deleteTask }) => {
  return (
    <div className="container my-3">
      <h5>Tasks</h5>
      {todos.length === 0 ? (
        <h6>Empty</h6>
      ) : (
        todos.map((todo) => {
          return (
            <TodoItems todo={todo} key={todo.id} deleteTask={deleteTask} />
          );
        })
      )}
      <h6>Task Remaining: {todos.length} </h6>
    </div>
  );
};
