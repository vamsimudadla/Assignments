import React, { Component } from "react";

class FilterButtons extends Component {
  displaAll = () => {
    this.props.displaAll();
  };

  activeTodos = () => {
    this.props.activeTodos();
  };

  completedTodos = () => {
    this.props.completedTodos();
  };

  deleteCompleted = () => {
    this.props.deleteCompleted();
  };

  render() {
    return (
      <div>
        <button type="button" onClick={this.displaAll}>
          All
        </button>
        <button type="button" onClick={this.activeTodos}>
          Active
        </button>
        <button type="button" onClick={this.completedTodos}>
          completed
        </button>
        <button type="button" onClick={this.deleteCompleted}>
          clear completed
        </button>
      </div>
    );
  }
}

export default FilterButtons;
