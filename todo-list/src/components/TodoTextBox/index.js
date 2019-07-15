import React, { Component } from "react";

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
    if (event.key === "Enter") {
      if (this.state.todoText != "") {
        this.props.onSaveTodo(this.state.todoText);
        this.setState({
          todoText: ""
        });
      }
    }
  };

  render() {
    return (
      <div>
        <input
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
