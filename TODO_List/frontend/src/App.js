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
    axios({
      url: "http://127.0.0.1:8000/graphql/",
      method: "POST",
      headers: headers,
      data: {
        query: `{
          allTodos {
            id
            title
            text
            isActive
            dateCreated
            dateModified
            author {
              id
              username
              email
            }
            project {
              id
              title
            }
          }
          allUsers {
            id
            username
            firstName
            lastName
            email
            birthday
          }
          allProjects {
            id
            title
            link
            usersWorked {
              username
            }
          }
        }`,
      },
    })
      .then((response) => {
        this.setState({
          users: response.data.data.allUsers,
          todos: response.data.data.allTodos,
          projects: response.data.data.allProjects,
        });
      })
      .catch((error) => {
        this.setState({ users: [], todos: [], projects: [] });
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
