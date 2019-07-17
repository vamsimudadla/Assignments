import React, { Component } from "react";
import "./styles.css";
class TodoTextBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoText: props.todoText
    };
  }

  handleChange = e => {
    this.setState({
      todoText: e.target.value
    });
  };

  saveTodo = event => {
    let text = this.state.todoText.trim();
    if (event.key === "Enter") {
      if (this.state.todoText != "" && text.length > 0) {
        this.props.onSaveTodo(this.state.todoText);
        this.setState({
          todoText: ""
        });
      }
    }
  };

  render() {
    return (
      <div className="todo-block">
        <input
          className={this.props.todo_text_box}
          type="text"
          value={this.state.todoText}
          onKeyDown={this.saveTodo}
          onChange={this.handleChange}
          placeholder="What needs to be done"
        />
      </div>
    );
  }
}

export default TodoTextBox;
