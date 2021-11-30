import React from "react";

class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      link: "https://",
      usersWorked: [],
    };
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleUsersWorkedChange(event) {
    if (!event.target.selectedOptions) {
      this.setState({ usersWorked: [] });
    } else {
      let usersWorked = [];
      for (let i = 0; i < event.target.selectedOptions.length; i++) {
        usersWorked.push(event.target.selectedOptions.item(i).value);
      }
      this.setState({ usersWorked: usersWorked });
    }
  }
  handleSubmit(event) {
    this.props.createProject(
      this.state.title,
      this.state.link,
      this.state.usersWorked
    );
    event.preventDefault();
  }
  render() {
    return (
      <div className="card">
        <h1>Create project</h1>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <div className="form-group py-2 col-6 offset-3">
            <label htmlFor="title" className="mx-2">
              title:
            </label>
            <input
              type="text"
              name="title"
              className="form-control"
              value={this.state.title}
              onChange={(event) => this.handleChange(event)}
            />
          </div>
          <div className="form-group py-2 col-6 offset-3">
            <label htmlFor="link" className="mx-2">
              link:
            </label>
            <input
              type="text"
              name="link"
              className="form-control"
              value={this.state.link}
              onChange={(event) => this.handleChange(event)}
            />
          </div>
          <div className="form-group pa-2 col-6 offset-3">
            <label htmlFor="usersWorked" className="mx-2">
              Users Worked:
            </label>
            <select
              multiple
              className="form-control"
              name="usersWorked"
              onChange={(event) => this.handleUsersWorkedChange(event)}
            >
              {this.props.users.map((user) => (
                <option key={user.id.toString()} value={user.id}>
                  {user.username}
                </option>
              ))}
            </select>
          </div>
          <div className="py-2">
            <input type="submit" className="btn btn-primary" value="Save" />
          </div>
        </form>
      </div>
    );
  }
}

export default ProjectForm;
