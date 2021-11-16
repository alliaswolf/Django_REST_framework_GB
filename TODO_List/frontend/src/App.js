import React from "react";
import "./App.css";
import { UserList, UserListFilterId } from "./components/Users";
import { ProjectList, ProjectListFilterId } from "./components/Projects";
import InfoList from "./components/Home";
import TodoList from "./components/Todos";
import MenuList from "./components/Menu";
import Footer from "./components/Footer";
import LoginForm from "./components/Auth";
import axios from "axios";
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
  load_data() {
    axios
      .get("http://127.0.0.1:8000/api/users/")
      .then((response) => {
        const users = response.data.results;
        this.setState({
          users: users,
        });
      })
      .catch((error) => console.log(console.error()));
    axios
      .get("http://127.0.0.1:8000/api/projects/todo/")
      .then((response) => {
        const todos = response.data.results;
        this.setState({
          todos: todos,
        });
      })
      .catch((error) => console.log(console.error()));
    axios
      .get("http://127.0.0.1:8000/api/projects/project/")
      .then((response) => {
        const projects = response.data.results;
        this.setState({
          projects: projects,
        });
      })
      .catch((error) => console.log(console.error()));
  }
  get_token(username, password) {
    axios
      .post("http://127.0.0.1:8000/api-token-auth/", {
        username: username,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => alert(error.response.status));
  }
  componentDidMount() {
    this.load_data();
  }

  render() {
    return (
      <div className="container text-center">
        <BrowserRouter>
          <div className="row pt-3 justify-content-end">
            <div className="col-3  align-self-end">
              <ul className="list-group list-group-horizontal">
                <li className="list-group-item">Username</li>
                <li className="list-group-item">
                  <Link to="/login">Login</Link>
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
              component={() => <ProjectList projects={this.state.projects} />}
            />
            <Route
              exact
              path="/todo"
              component={() => <TodoList todos={this.state.todos} />}
            />
            <Route path="/project/:id">
              <ProjectListFilterId projects={this.state.projects} />
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
