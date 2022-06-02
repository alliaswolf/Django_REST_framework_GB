import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { login: "", password: "" };
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit(event) {
    this.props.get_token(this.state.login, this.state.password);
    event.preventDefault();
  }
  render() {
    return (
      <form
        className="form-inline"
        onSubmit={(event) => this.handleSubmit(event)}
      >
        <input
          type="text"
          name="login"
          placeholder="email"
          className="mx-2"
          value={this.state.login}
          onChange={(event) => this.handleChange(event)}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          className="mx-2  "
          value={this.state.password}
          onChange={(event) => this.handleChange(event)}
        />
        <input className="btn btn-primary mx-2" type="submit" value="Login" />
      </form>
    );
  }
}
export default LoginForm;
