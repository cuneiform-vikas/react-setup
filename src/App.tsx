import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import "./styles/index.scss";

const App = () => <RouterProvider router={router} />;

export default App;
