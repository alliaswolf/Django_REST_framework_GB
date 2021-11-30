import React from "react";
import { useParams } from "react-router-dom";

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
  return (
    <table className="table table-bordered">
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
        {projects.map((project) => (
          <ProjectItem
            project={project}
            deleteProject={deleteProject}
            key={project.id.toString()}
          />
        ))}
      </tbody>
    </table>
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
