import React, { Component } from "react";
import Todos from "./Todos";
import AddTodo from "./AddTodo";

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "Buy some Coffee" },
      { id: 2, content: "Play Games" },
    ],
  };

  deleteTodo = (id) => {
    // console.log(id);
    let todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos: todos,
    });
  };

  addTodo = (todo) => {
    todo.id = Number(this.state.todos[this.state.todos.length - 1].id) + 1;
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos,
    });
  };

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
