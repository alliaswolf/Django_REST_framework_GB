import React from "react";
import { useParams } from "react-router-dom";

const ProjectItem = ({ project }) => {
  let usersWorked = project.usersWorked.map((user) => user.username);
  return (
    <tr>
      <td>{project.id}</td>
      <td>{project.title}</td>
      <td>{project.link}</td>
      <td>{usersWorked.join(", ")}</td>
    </tr>
  );
};

const ProjectList = ({ projects }) => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Link</th>
          <th>UsersWorked</th>
        </tr>
      </thead>
      <tbody>
        {projects.map((project) => (
          <ProjectItem project={project} key={project.id.toString()} />
        ))}
      </tbody>
    </table>
  );
};

const ProjectListFilterId = ({ projects }) => {
  let { id } = useParams();
  let filtered_items = projects.filter((item) => item.id.toString() === id);
  return <ProjectList projects={filtered_items} />;
};
export { ProjectList, ProjectListFilterId };
