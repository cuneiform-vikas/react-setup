// import { useGetPokemonByNameQuery } from "@/modules/auth/redux/api";
import { Link } from "react-router-dom";
import { useGetPokemonByNameQuery } from "../../auth/redux/apiSlice";
const Dashboard = () => {
  const { data, isLoading, isError } = useGetPokemonByNameQuery("bulbasaur");
  console.log("data: ", data);
  return (
    <div>
      <div>Dashboard</div>
      <Link to="/user">User</Link>
    </div>
  );
};

export default Dashboard;
