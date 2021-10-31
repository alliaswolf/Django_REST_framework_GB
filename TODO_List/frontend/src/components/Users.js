import React from "react";

const UserItem = ({ user }) => {
  return (
    <tr>
      <td>{user.username}</td>
      <td>{user.first_name}</td>
      <td>{user.last_name}</td>
      <td>{user.email}</td>
      <td>{user.birthday}</td>
    </tr>
  );
};
const UserList = ({ users }) => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Username</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Birthday Year</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <UserItem user={user} key={user.id.toString()} />
        ))}
      </tbody>
    </table>
  );
};
export default UserList;
