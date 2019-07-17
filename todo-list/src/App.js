import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/TodoList";
function App() {
  return (
    <div className="App">
      <div className="background-todo">todos</div>
      <div className="components">
        <TodoList />
      </div>
    </div>
  );
}

export default App;
