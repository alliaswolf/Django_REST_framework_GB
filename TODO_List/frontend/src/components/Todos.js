import React from "react";
import { Link } from "react-router-dom";

const TodoItem = ({ todo }) => {
  return (
    <tr>
      <td>{todo.id}</td>
      <td>{todo.title}</td>
      <td>{todo.text}</td>
      <td>
        <Link
          style={{ textDecoration: "none" }}
          to={`project/${todo.project.id}`}
        >
          {todo.project.title}
        </Link>
      </td>
      <td>
        <Link style={{ textDecoration: "none" }} to={`user/${todo.author.id}`}>
          {todo.author.username}
        </Link>
      </td>
      <td>{todo.author.email}</td>
      <td>{todo.isActive.toString()}</td>
      <td>{new Date(todo.dateCreated).toLocaleString()}</td>
      <td>{new Date(todo.dateModified).toLocaleString()}</td>
    </tr>
  );
};

const TodoList = ({ todos }) => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Text</th>
          <th>Project</th>
          <th>Author</th>
          <th>Email</th>
          <th>Is Active?</th>
          <th>Date Created</th>
          <th>Date Modified</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id.toString()} />
        ))}
      </tbody>
    </table>
  );
};
export default TodoList;
