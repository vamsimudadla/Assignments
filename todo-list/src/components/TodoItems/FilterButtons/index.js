import React, { Component } from "react";
import "./styles.css";
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
      <div className="button-block">
        <span className="remaining-todos-count">
          {this.props.remaining_items} items left
        </span>
        <button
          type="button"
          value="All"
          onClick={this.displayAll}
          className="all-button"
        >
          All
        </button>
        <button
          type="button"
          value="Active"
          onClick={this.activeTodos}
          className="active-button"
        >
          Active
        </button>
        <button
          type="button"
          value="completed"
          onClick={this.completedTodos}
          className="completed-button"
        >
          completed
        </button>
        {this.props.clear_button ? (
          <button
            type="button"
            value="clear completed"
            onClick={this.deleteCompleted}
            className="clear-completed-button"
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
