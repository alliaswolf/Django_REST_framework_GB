import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      text: "",
      isActive: true,
      author: 0,
      project: 0,
      selectedIdAuthor: 0,
      selectedIdProject: 0,
    };
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleAuthorChange(event) {
    this.setState({
      selectedIdAuthor: event.target.value,
      author: event.target.value,
    });
  }
  handleProjectChange(event) {
    this.setState({
      selectedIdProject: event.target.value,
      project: event.target.value,
    });
  }
  handleSubmit(event) {
    this.props.createTodo(
      this.state.title,
      this.state.text,
      this.state.isActive,
      this.state.author,
      this.state.project
    );
    event.preventDefault();
  }

  toggleChange = () => {
    this.setState({
      isActive: !this.state.isActive,
    });
  };
  render() {
    return (
      <div className="card">
        <h1>Create Todo</h1>
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
            <label htmlFor="text" className="mx-2">
              text:
            </label>
            <textarea
              type="text"
              name="text"
              className="form-control"
              value={this.state.text}
              onChange={(event) => this.handleChange(event)}
            />
          </div>
          <div className="form-group py-2 col-6 offset-3">
            <label htmlFor="isActive" className="mx-2">
              isActive Todo?:
            </label>
            <input
              type="checkbox"
              defaultChecked={this.state.isActive}
              onChange={(event) => this.toggleChange(event)}
            />
          </div>
          <div className="form-group pa-2 col-6 offset-3">
            <label htmlFor="author" className="mx-2">
              author:
            </label>
            <select
              className="form-control"
              name="author"
              onChange={(event) => this.handleAuthorChange(event)}
              value={this.state.selectedIdAuthor}
            >
              <option value="0">---</option>
              {this.props.users.map((user) => (
                <option key={user.id.toString()} value={user.id}>
                  {user.username}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group pa-2 col-6 offset-3">
            <label htmlFor="project" className="mx-2">
              project:
            </label>
            <select
              className="form-control"
              name="project"
              value={this.state.selectedIdProject}
              onChange={(event) => this.handleProjectChange(event)}
            >
              <option value="0">---</option>
              {this.props.projects.map((project) => (
                <option key={project.id} value={project.id}>
                  {project.title}
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

export default TodoForm;
