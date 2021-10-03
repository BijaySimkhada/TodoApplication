import "./App.css";
import React, { useState, useEffect } from "react";
import { Header } from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { AddItems } from "./MyComponents/AddItems";

function App() {
  let initTodo;

  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodo); //todo list

  const deleteTask = (todo) => {
    console.log("deleting item", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addItems = (title, desc) => {
    let id;
    if (todos.length === 0) {
      id = 1;
    } else {
      id = todos[todos.length - 1] + 1;
    }
    const mytodo = {
      id: id,
      title: title,
      desc: desc,
    };
    setTodos([...todos, mytodo]);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Header />
      <AddItems addItems={addItems} />
      <Todos todos={todos} deleteTask={deleteTask} />
    </>
  );
}

export default App;
