import Register from "../../modules/auth/pages/Register";
import Login from "../../modules/auth/pages/Login";

interface RouteConfig {
  path: string;
  component: any;
}

export const AuthRoutes: RouteConfig[] = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
];
