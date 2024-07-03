import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUserList } from "../../auth/redux/authApi";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

const User = () => {
  const [users, setUsers] = useState([]);

  const { userList } = useSelector((state: any) => state.auth, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(getUserList());
    })();
  }, [dispatch]);

  useEffect(() => {
    if (userList) {
      setUsers(userList);
    }
  }, [userList]);

  
  return (
    <div>
      <div>Userrr</div>
      <Link to="/add-user">Add User</Link>
      <br />
      <Link to="/edit-user">Edit User</Link>
      <br />
      <div className="userTable">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {" "}
            {users.length > 0 &&
              users.map((ele: any) => (
                <tr key={ele.id}>
                  <td>{ele.username}</td>
                  <td>{ele.email}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
