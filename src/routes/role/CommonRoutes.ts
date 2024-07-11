import Error from "common/Error";

interface RouteConfig {
  path: string;
  component: React.ComponentType<any>;
}

export const CommonRoutes: RouteConfig[] = [
  {
    path: "*",
    component: Error,
  },
];
