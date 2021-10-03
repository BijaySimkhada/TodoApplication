import React from "react";

export const TodoItems = ({ todo, deleteTask }) => {
  return (
    <div className="container">
      <h6>{todo.title}</h6>
      <p>{todo.desc}</p>
      <button className="btn btn-danger" onClick={() => deleteTask(todo)}>
        Delete
      </button>
      <hr />
    </div>
  );
};
