import React from "react";
import "./App.css";
import { UserList, UserListFilterId } from "./components/Users";
import { ProjectList, ProjectListFilterId } from "./components/Projects";
import { TodoList, TodoListFilterId } from "./components/Todos";
import ProjectForm from "./components/ProjectForm";
import TodoForm from "./components/TodoForm";
import InfoList from "./components/Home";
import MenuList from "./components/Menu";
import Footer from "./components/Footer";
import LoginForm from "./components/Auth";
import axios from "axios";
import Cookies from "universal-cookie";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

const NotFound404 = ({ location }) => {
  return (
    <div>
      <h1>Страница по адресу '{location.pathname}' не найдена</h1>
    </div>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Guest",
      token: "",
      users: [],
      todos: [],
      projects: [],
      menu: [
        { id: 1, link: "/", title: "Home" },
        { id: 2, link: "/user", title: "Users" },
        { id: 3, link: "/todo", title: "Todos" },
        { id: 4, link: "/project", title: "Projects" },
      ],
      textFooter: "Footer text about something.",
    };
  }

  set_token_and_username(token, username) {
    const cookies = new Cookies();
    cookies.set("token", token);
    cookies.set("username", username);
    this.setState({ token: token, username: username }, () => this.load_data());
  }

  is_authenticated() {
    return !!this.state.token;
  }

  logout() {
    let token = "";
    let username = "Guest";
    this.set_token_and_username(token, username);
  }

  get_token_and_username_from_storage() {
    const cookies = new Cookies();
    const token = cookies.get("token");
    const username = cookies.get("username");
    this.setState({ token: token, username: username }, () => this.load_data());
  }

  get_token(username, password) {
    axios
      .post("http://127.0.0.1:8000/api-token-auth/", {
        username: username,
        password: password,
      })
      .then((response) => {
        this.set_token_and_username(
          response.data.token,
          response.data.username
        );
      })
      .catch((error) =>
        alert(
          `Code status is ${error.response.status} - Invalid username or password`
        )
      );
  }

  get_headers() {
    let headers = {
      "Content-Type": "application/json",
    };
    if (this.is_authenticated()) {
      headers["Authorization"] = "Token " + this.state.token;
    }
    return headers;
  }

  load_data() {
    const headers = this.get_headers();
    axios
      .get("http://127.0.0.1:8000/api/users/", { headers })
      .then((response) => {
        const users = response.data.results;
        this.setState({
          users: users,
        });
      })
      .catch((error) => {
        this.setState({ users: [] });
      });
    axios
      .get("http://127.0.0.1:8000/api/projects/todo/", { headers })
      .then((response) => {
        const todos = response.data.results;
        this.setState({
          todos: todos,
        });
      })
      .catch((error) => console.log(console.error()));
    axios
      .get("http://127.0.0.1:8000/api/projects/project/", { headers })
      .then((response) => {
        const projects = response.data.results;
        this.setState({
          projects: projects,
        });
      })
      .catch((error) => console.log(console.error()));
  }
  createProject(title, link, usersWorked) {
    const headers = this.get_headers();
    const data = { title: title, link: link, usersWorked: usersWorked };
    axios
      .post("http://127.0.0.1:8000/api/projects/project/", data, { headers })
      .then((response) => {
        alert(`The project "${response.data.title}" created.`);
        this.load_data();
      })
      .catch((error) => {
        alert(`Code status is ${error.response.status} - Error create.`);
      });
  }
  createTodo(title, text, isActive, author, project) {
    const headers = this.get_headers();
    const data = {
      title: title,
      text: text,
      isActive: isActive,
      author: author,
      project: project,
    };
    axios
      .post("http://127.0.0.1:8000/api/projects/todo/", data, { headers })
      .then((response) => {
        alert(`The todo "${response.data.title}" created.`);
        this.load_data();
      })
      .catch((error) => {
        alert(`Code status is ${error.response.status} - Error create.`);
      });
  }
  deleteProject(id) {
    const headers = this.get_headers();
    axios
      .delete(`http://127.0.0.1:8000/api/projects/project/${id}`, { headers })
      .then((response) => {
        this.load_data();
      })
      .catch((error) => {
        console.log(error);
        this.setState({ projects: [] });
      });
  }
  deleteTodo(id) {
    const headers = this.get_headers();
    axios
      .delete(`http://127.0.0.1:8000/api/projects/todo/${id}`, { headers })
      .then((response) => {
        this.load_data();
      })
      .catch((error) => {
        console.log(error);
        this.setState({ todos: [] });
      });
  }

  componentDidMount() {
    this.get_token_and_username_from_storage();
  }

  render() {
    return (
      <div className="container text-center">
        <BrowserRouter>
          <div className="row pt-3 justify-content-end">
            <div className="col-3  align-self-end">
              <ul className="list-group list-group-horizontal">
                <li className="list-group-item">
                  Welcome <strong>{this.state.username}</strong>!
                </li>
                <li className="list-group-item">
                  {this.is_authenticated() ? (
                    <button onClick={() => this.logout()}>Logout</button>
                  ) : (
                    <Link to="/login">
                      <button>Login</button>
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </div>
          <MenuList menu={this.state.menu} />
          <Switch>
            <Route
              exact
              path="/"
              component={() => (
                <InfoList
                  users={this.state.users}
                  projects={this.state.projects}
                  todos={this.state.todos}
                />
              )}
            />
            <Route
              exact
              path="/login"
              component={() => (
                <LoginForm
                  get_token={(username, password) =>
                    this.get_token(username, password)
                  }
                />
              )}
            />
            <Route
              exact
              path="/user"
              component={() => <UserList users={this.state.users} />}
            />
            <Route
              exact
              path="/project"
              component={() => (
                <ProjectList
                  projects={this.state.projects}
                  deleteProject={(id) => this.deleteProject(id)}
                />
              )}
            />
            <Route
              exact
              path="/todo"
              component={() => (
                <TodoList
                  todos={this.state.todos}
                  deleteTodo={(id) => this.deleteTodo(id)}
                />
              )}
            />
            <Route path="/project/:id">
              <ProjectListFilterId
                projects={this.state.projects}
                deleteProject={(id) => this.deleteProject(id)}
              />
            </Route>
            <Route
              exact
              path="/create/project"
              component={() => (
                <ProjectForm
                  users={this.state.users}
                  createProject={(title, link, usersWorked) =>
                    this.createProject(title, link, usersWorked)
                  }
                />
              )}
            />
            <Route
              exact
              path="/create/todo"
              component={() => (
                <TodoForm
                  users={this.state.users}
                  projects={this.state.projects}
                  createTodo={(title, text, isActive, author, project) =>
                    this.createTodo(title, text, isActive, author, project)
                  }
                />
              )}
            />
            <Route path="/todo/:id">
              <TodoListFilterId
                todos={this.state.todos}
                deleteTodo={(id) => this.deleteTodo(id)}
              />
            </Route>
            <Route path="/user/:id">
              <UserListFilterId users={this.state.users} />
            </Route>
            <Route component={NotFound404} />
          </Switch>
        </BrowserRouter>
        <div className="navbar">
          <Footer textFooter={this.state.textFooter} />
        </div>
      </div>
    );
  }
}
export default App;
