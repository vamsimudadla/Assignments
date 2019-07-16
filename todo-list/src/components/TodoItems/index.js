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

  deleteCompleted = value => {
    this.props.deleteCompleted();
  };

  filterTodos = () => {
    if (this.state.active_buttons === "All") {
      var todo_items = this.props.todos;
      return todo_items;
    } else if (this.state.active_buttons === "Active") {
      let todo_boxes = [];
      this.props.todos.forEach(element => {
        if (element.completed === false) todo_boxes.push(element);
      });
      return todo_boxes;
    } else if (this.state.active_buttons === "completed") {
      let todo_boxes = [];
      this.props.todos.forEach(element => {
        if (element.completed === true) todo_boxes.push(element);
      });
      return todo_boxes;
    }
  };

  displayTodos = todo_items => {
    let todo_boxes = [];
    todo_items.forEach(element => {
      todo_boxes.push(
        <TodoItem
          key={element.id}
          value={element.id}
          onChecked={this.props.onChecked}
          onUpdateTodo={this.onUpdateTodo}
          completed={element.completed}
          text={element.text}
          id={element.id}
          deleteTodo={this.props.deleteTodo}
          check={element.completed === true ? true : false}
        />
      );
    });
    return todo_boxes;
  };

  render() {
    return (
      <div>
        <div>{this.displayTodos(this.filterTodos())}</div>
        {this.props.todos.length > 0 ? (
          <FilterButtons
            displayAll={this.displayAll}
            activeTodos={this.activeTodos}
            completedTodos={this.completedTodos}
            deleteCompleted={this.deleteCompleted}
            clear_button={this.props.clear_button}
            remaining_items={this.props.remaining_items}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default TodoItems;
