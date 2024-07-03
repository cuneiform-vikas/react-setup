import React from "react";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <div>
      <div>Userrr</div>
      <Link to="/add-user">Add User</Link>
      <br/>
      <Link to="/edit-user">Edit User</Link>
    </div>
  );
};

export default User;
