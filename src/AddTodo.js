import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    content: null,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      content: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label for="content">Add new Todo:</label>
            <input
              type="text"
              class="form-control"
              id="content"
              aria-describedby="emailHelp"
              onChange={this.handleChange}
              value={this.state.content}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default AddTodo;
