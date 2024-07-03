import Login from "@/modules/auth/pages/Login";
import Register from "@/modules/auth/pages/Register";


export const AuthRoutes: RouteConfig[] = [
  {
    path: "/login",
    ele: Login,
  },
  {
    path: "/register",
    component: Register,
  },
];
