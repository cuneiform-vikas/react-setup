import Dashboard from "modules/dashboard/pages/Dashboard";
import AddUser from "modules/user/pages/AddUser";
import EditUser from "modules/user/pages/EditUser";
import User from "modules/user/pages/User";

interface RouteConfig {
  path: string;
  component: any;
  position: "head" | "parent" | "child";
  privilegeTag?: any;
}

export const MainRoutes: RouteConfig[] = [
  {
    path: "/",
    component: Dashboard,
    position: "head",
  },
  {
    path: "/user",
    component: User,
    position: "parent",
    privilegeTag: "user_management",
  },
  {
    path: "/add-user",
    component: AddUser,
    position: "child",
    privilegeTag: "user_management",
  },
  {
    path: "/edit-user",
    component: EditUser,
    position: "child",
    privilegeTag: "user_management",
  },
];
