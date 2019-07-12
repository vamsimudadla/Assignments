import React, { Component } from "react";
import "./styles.css";
class TodoBody extends Component {
  constructor(props) {
    super(props);
  }

  setTodoCompleted = e => {
    this.props.onChecked(e.target.value);
  };

  displayTodos = () => {
    let todo_boxes = [];
    this.props.todos.forEach(element => {
      const new_todo = (
        <div className="todo-item">
          <input
            type="checkbox"
            value={element.id}
            onChange={this.setTodoCompleted}
          />
          <span
            className={
              element.completed === true ? "strike-text" : "dont-strike"
            }
          >
            {element.text}
          </span>
          <img src="/assets/cross-mark.png" className="cross-image" />
        </div>
      );
      todo_boxes.push(new_todo);
    });
    return todo_boxes;
  };
  render() {
    return <div>{this.displayTodos()}</div>;
  }
}

export default TodoBody;
