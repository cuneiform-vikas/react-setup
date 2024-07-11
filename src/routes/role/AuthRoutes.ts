import Login from "modules/auth/pages/Login";
import Register from "modules/auth/pages/Register";

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
