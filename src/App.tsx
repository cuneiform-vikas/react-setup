import Router from "./routes";
import "./styles/index.scss";

const App = () => {
  console.log(process.env.REACT_APP_MODE);
  return <Router />;
};

export default App;
