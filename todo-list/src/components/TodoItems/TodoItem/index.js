import React, { Component } from "react";
import EditableTodo from "./EditableTodo";
import "./styles.css";
class TodoItem extends Component {
  constructor(props) {
    super(props);
  }

  setTodoCompleted = e => {
    this.props.onChecked(this.props.id);
  };

  onUpdateTodo = (todoText, id) => {
    this.props.onUpdateTodo(todoText, id);
  };

  deleteTodo = () => {
    this.props.deleteTodo(this.props.id);
  };

  render() {
    const new_todo = (
      <div className="todo-item" onDoubleClick={this.handleDoubleClick}>
        <div className="todo-styles todo-block">
          {this.props.check ? (
            <img
              className="checkbox"
              src="/assets/checked.png"
              onClick={this.setTodoCompleted}
            />
          ) : (
            <img
              className="checkbox"
              src="/assets/unchecked-icon.png"
              value={this.props.value}
              onClick={this.setTodoCompleted}
            />
          )}
          <EditableTodo
            className="editable-style"
            completed={this.props.completed}
            text={this.props.text}
            id={this.props.id}
            onUpdateTodo={this.onUpdateTodo}
          />
          <img
            className="cross-image"
            src="/assets/cross-mark.png"
            className="cross-image"
            alt="none"
            onClick={this.deleteTodo}
          />
        </div>
      </div>
    );
    return <div>{new_todo}</div>;
  }
}

export default TodoItem;
