import React from "react";

const InfoItem = ({ model }) => {
  return (
    <tr>
      <td>{model.name}</td>
      <td>{model.model.length}</td>
    </tr>
  );
};

const InfoList = ({ users, todos, projects }) => {
  let models = [
    { name: "users", model: users },
    { name: "todos", model: todos },
    { name: "projects", model: projects },
  ];
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Model Name</th>
          <th>Count</th>
        </tr>
      </thead>
      <tbody>
        {models.map((item) => (
          <InfoItem model={item} key={item.name} />
        ))}
      </tbody>
    </table>
  );
};

export default InfoList;
