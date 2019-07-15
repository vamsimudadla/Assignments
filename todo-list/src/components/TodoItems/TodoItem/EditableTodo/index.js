import React, { Component } from "react";
import TodoTextBox from "../../../TodoTextBox";
import "./styles.css";
class EditableTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false
    };
  }
  handleDoubleClick = () => {
    this.setState({
      edit: true
    });
  };

  updateTodo = todoText => {
    this.props.onUpdateTodo(todoText, this.props.id);
    this.setState({
      edit: false
    });
  };

  displayEditableTodo = () => {
    let completed = this.props.completed;
    if (this.state.edit && !completed) {
      return (
        <TodoTextBox onSaveTodo={this.updateTodo} todoText={this.props.text} />
      );
    } else {
      const normal_todo = (
        <span
          className={completed === true ? "strike-text" : "dont-strike"}
          onDoubleClick={this.handleDoubleClick}
        >
          {this.props.text}
        </span>
      );
      return normal_todo;
    }
  };

  render() {
    return <div>{this.displayEditableTodo()} </div>;
  }
}
export default EditableTodo;
