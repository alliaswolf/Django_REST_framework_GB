import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ProjectItem = ({ project, deleteProject }) => {
  return (
    <tr>
      <td>{project.id}</td>
      <td>{project.title}</td>
      <td>{project.link}</td>
      <td>{project.usersWorked.join(", ")}</td>
      <td>
        <button type="button" onClick={() => deleteProject(project.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

const ProjectList = ({ projects, deleteProject }) => {
  const [input, setInput] = useState("");
  let { id } = useParams();
  let filtered_items = projects;
  if (!id) {
    filtered_items = projects.filter(
      (item) => (item.title === "") | item.title.toLowerCase().includes(input)
    );
  }
  return (
    <div>
      {!id && (
        <div className="row pt-3 px-3 justify-content-end">
          <label
            htmlFor="search_title"
            className="col-2 justify-content-end  align-self-end"
          >
            Search title project:
          </label>
          <input
            type="text"
            name="search_title"
            className="col-3 justify-content-end  align-self-end"
            placeholder="Search"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
      )}
      <Link to="/create/project">Create Project</Link>
      <table className="table table-bordered my-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Link</th>
            <th>UsersWorked</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filtered_items.map((project) => (
            <ProjectItem
              project={project}
              deleteProject={deleteProject}
              key={project.id.toString()}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const ProjectListFilterId = ({ projects, deleteProject }) => {
  let { id } = useParams();
  let filtered_items = projects.filter((item) => item.id.toString() === id);
  return (
    <ProjectList projects={filtered_items} deleteProject={deleteProject} />
  );
};

export { ProjectList, ProjectListFilterId };
