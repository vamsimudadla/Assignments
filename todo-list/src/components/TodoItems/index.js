import React, { Component } from "react";
import TodoItem from "./TodoItem";
class TodoItems extends Component {
  constructor(props) {
    super(props);
  }

  onUpdateTodo = (todoText, id) => {
    this.props.onUpdateTodo(todoText, id);
  };

  deleteTodo = id => {
    this.props.deleteTodo(id);
  };
  displayTodos = () => {
    let todo_boxes = [];
    this.props.todos.forEach(element => {
      todo_boxes.push(
        <TodoItem
          value={element.id}
          onChecked={this.props.onChecked}
          onUpdateTodo={this.onUpdateTodo}
          completed={element.completed}
          text={element.text}
          id={element.id}
          deleteTodo={this.props.deleteTodo}
        />
      );
    });
    return todo_boxes;
  };
  render() {
    return <div>{this.displayTodos()}</div>;
  }
}

export default TodoItems;
