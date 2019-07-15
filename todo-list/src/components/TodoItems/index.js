import React, { Component } from "react";
import TodoItem from "./TodoItem";
import FilterButtons from "./FilterButtons";
import { exportDefaultSpecifier } from "@babel/types";
class TodoItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active_buttons: "All"
    };
  }

  onUpdateTodo = (todoText, id) => {
    this.props.onUpdateTodo(todoText, id);
  };

  deleteTodo = id => {
    this.props.deleteTodo(id);
  };

  displayAll = value => {
    this.setState({
      active_buttons: value
    });
  };

  activeTodos = value => {
    this.setState({
      active_buttons: value
    });
  };

  completedTodos = value => {
    this.setState({
      active_buttons: value
    });
  };

  completedTodoItems = todo_item => {
    if (todo_item.completed === true) return todo_item;
  };

  filterTodos = () => {
    if (this.state.active_buttons === "All") {
      var todo_items = this.props.todos;
      return todo_items;
    } else if (this.state.active_buttons === "Active") {
      var todo_items = this.props.todos;
      for (let i = 0; i < todo_items.length; i++) {
        if (todo_items[i].completed == true) todo_items.splice(i, 1);
      }
      return todo_items;
    } else if (this.state.active_buttons === "completed") {
      var todo_items = this.props.todos;
      for (let i = 0; i < todo_items.length; i++) {
        if (todo_items[i].completed == false) todo_items.splice(i, 1);
      }
      return todo_items;
    }
  };

  displayTodos = todo_items => {
    let todo_boxes = [];
    todo_items.forEach(element => {
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
    return (
      <div>
        <div>{this.displayTodos(this.filterTodos())}</div>
        <FilterButtons
          displayAll={this.displayAll}
          activeTodos={this.activeTodos}
          completedTodos={this.completedTodos}
          deleteCompleted={this.deleteCompleted}
        />
      </div>
    );
  }
}

export default TodoItems;
