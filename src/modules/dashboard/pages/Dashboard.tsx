import { Link } from "react-router-dom";
import ToggleComponent from "../components/ToggleComponent";

const Dashboard = () => {
  return (
    <div className="container">
      <div>Dashboard</div>
      <Link to="/user">User</Link>
      <ToggleComponent />
    </div>
  );
};

export default Dashboard;
