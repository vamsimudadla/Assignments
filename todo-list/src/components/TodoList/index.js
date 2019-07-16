import React, { Component } from "react";
import TodoTextBox from "../TodoTextBox";
import TodoBody from "../TodoItems";
import TodoItems from "../TodoItems";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo_items: []
    };
  }

  createTodoObject = todoText => {
    const todo = {
      id: Math.random(),
      text: todoText,
      completed: false
    };
    this.setState({
      todo_items: this.state.todo_items.concat(todo)
    });
  };

  handleCheck = todo_id => {
    var new_todo_items = this.state.todo_items;
    for (let i = 0; i < new_todo_items.length; i++) {
      if (new_todo_items[i].id == todo_id) {
        new_todo_items[i].completed = true;
        break;
      }
    }
    this.setState({
      todo_items: new_todo_items
    });
  };

  onUpdateTodo = (todoText, id) => {
    var new_todo_items = this.state.todo_items;
    for (let i = 0; i < new_todo_items.length; i++) {
      if (new_todo_items[i].id == id) {
        new_todo_items[i].text = todoText;
        break;
      }
    }
    this.setState({
      todo_items: new_todo_items
    });
  };

  deleteTodo = id => {
    let con = window.confirm("Are You sure");
    if (con) {
      var new_todo_items = this.state.todo_items;
      for (let i = 0; i < new_todo_items.length; i++) {
        if (new_todo_items[i].id == id) {
          new_todo_items.splice(i, 1);
          break;
        }
      }
      this.setState({
        todo_items: new_todo_items
      });
    }
  };

  deleteCompleted = () => {
    let todos = this.state.todo_items;
    let todo_boxes = [];
    todos.forEach(element => {
      if (element.completed === false) todo_boxes.push(element);
    });
    this.setState({
      todo_items: todo_boxes
    });
  };

  completedList = todo_item => {
    return todo_item.completed;
  };

  clearCompletedButton = () => {
    let clear_button = this.state.todo_items.filter(this.completedList);
    if (clear_button.length > 0) return true;
    return false;
  };

  remainingItems = () => {
    let remaining_items = this.state.todo_items.filter(todo_item => {
      return !todo_item.completed;
    });
    return remaining_items.length;
  };

  render() {
    let clear_button = this.clearCompletedButton();
    let remaining_items = this.remainingItems();
    return (
      <div>
        <TodoTextBox onSaveTodo={this.createTodoObject} todoText="" />
        <TodoItems
          todos={this.state.todo_items}
          onChecked={this.handleCheck}
          onUpdateTodo={this.onUpdateTodo}
          deleteTodo={this.deleteTodo}
          deleteCompleted={this.deleteCompleted}
          clear_button={clear_button}
          remaining_items={remaining_items}
        />
      </div>
    );
  }
}

export default TodoList;
