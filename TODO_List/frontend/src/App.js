import React from "react";
import "./App.css";
import UserList from "./components/Users";
import MenuList from "./components/Menu";
import Footer from "./components/Footer";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      menu: [],
      textFooter: "Footer text about something.",
    };
  }
  componentDidMount() {
    axios
      .get("http://127.0.0.1:8000/api/users/")
      .then((response) => {
        const users = response.data;
        this.setState({
          users: users,
        });
      })
      .catch((error) => console.log(console.error()));

    const menu = [
      { id: 1, title: "Home", isActive: true },
      { id: 2, title: "Users", isActive: false },
      { id: 3, title: "About", isActive: false },
      { id: 4, title: "Contacts", isActive: false },
    ];
    this.setState({ menu: menu });
  }

  render() {
    return (
      <div className="container text-center">
        <div className="navbar">
          <MenuList menu={this.state.menu} />
        </div>
        <div className="my-3">
          <UserList users={this.state.users} />
        </div>

        <div className="navbar">
          <Footer textFooter={this.state.textFooter} />
        </div>
      </div>
    );
  }
}
export default App;
