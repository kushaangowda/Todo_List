import React from "react";

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <div className="todo alert alert-info" key={todo.id} role="alert">
          <div
            onClick={() => {
              deleteTodo(todo.id);
            }}
          >
            {todo.content}
          </div>
        </div>
      );
    })
  ) : (
    <p className="alert alert-success" role="alert">
      No todo's left
    </p>
  );

  return (
    <div className="todos">
      <h2>Todos List</h2>
      <br />
      {todoList}
    </div>
  );
};

export default Todos;
