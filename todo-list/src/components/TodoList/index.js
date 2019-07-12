import React, { Component } from "react";
import TodoTextBox from "../TodoTextBox";
import TodoBody from "../TodoBody";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo_items: [],
      counter: 1
    };
  }

  createTodoObject = todoText => {
    const todo = {
      id: this.state.counter,
      text: todoText,
      completed: false
    };
    this.setState({
      todo_items: this.state.todo_items.concat(todo),
      counter: this.state.counter + 1
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

  render() {
    return (
      <div>
        <TodoTextBox onSaveTodo={this.createTodoObject} />
        <TodoBody todos={this.state.todo_items} onChecked={this.handleCheck} />
      </div>
    );
  }
}

export default TodoList;
