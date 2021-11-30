import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const TodoItem = ({ todo, deleteTodo }) => {
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
      <td>
        <button type="button" onClick={() => deleteTodo(todo.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <div>
      <Link to="/create/todo">Create Todo</Link>
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
            <th></th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <TodoItem
              todo={todo}
              deleteTodo={deleteTodo}
              key={todo.id.toString()}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
const TodoListFilterId = ({ todos, deleteTodo }) => {
  let { id } = useParams();
  let filtered_items = todos.filter((item) => item.id.toString() === id);
  return <TodoList todos={filtered_items} deleteTodo={deleteTodo} />;
};
export { TodoList, TodoListFilterId };
