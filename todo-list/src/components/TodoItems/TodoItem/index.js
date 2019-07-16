import React, { Component } from "react";
import EditableTodo from "./EditableTodo";
import "./styles.css";
class TodoItem extends Component {
  constructor(props) {
    super(props);
  }

  setTodoCompleted = e => {
    this.props.onChecked(e.target.value);
    this.setState({
      check: true
    });
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
        <div className="todo-styles">
          <input
            type="checkbox"
            value={this.props.value}
            onChange={this.setTodoCompleted}
            checked={this.props.check}
          />
          <EditableTodo
            completed={this.props.completed}
            text={this.props.text}
            id={this.props.id}
            onUpdateTodo={this.onUpdateTodo}
          />
          <img
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
