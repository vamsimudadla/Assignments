import React, { Component } from "react";
import TodoTextBox from "../TodoTextBox";

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  createTodoObject = todoText => {
    const todo = {
      id: 1,
      text: todoText,
      completed: false
    };

    console.log(todo);
  };

  render() {
    return (
      <div>
        <TodoTextBox onSaveTodo={this.createTodoObject} />
      </div>
    );
  }
}

export default TodoList;
