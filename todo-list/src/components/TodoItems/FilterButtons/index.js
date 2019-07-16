import React, { Component } from "react";

class FilterButtons extends Component {
  displayAll = e => {
    this.props.displayAll(e.target.value);
  };

  activeTodos = e => {
    this.props.activeTodos(e.target.value);
  };

  completedTodos = e => {
    this.props.completedTodos(e.target.value);
  };

  deleteCompleted = e => {
    this.props.deleteCompleted(e.target.value);
  };

  render() {
    return (
      <div>
        <span>{this.props.remaining_items} items left</span>
        <button type="button" value="All" onClick={this.displayAll}>
          All
        </button>
        <button type="button" value="Active" onClick={this.activeTodos}>
          Active
        </button>
        <button type="button" value="completed" onClick={this.completedTodos}>
          completed
        </button>
        {this.props.clear_button ? (
          <button
            type="button"
            value="clear completed"
            onClick={this.deleteCompleted}
          >
            clear completed
          </button>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default FilterButtons;
