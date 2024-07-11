// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.

// -------->> authentication <<----------
export type IAuthState = {
  loadingState: boolean;
  token: string | null;
  userList: any;
};

export interface loginData {
  email: string;
  password: string;
}

// -------->> helper <<----------
export type uid = any;

//------->> Routes <<-----------
export interface AuthState {
  maintenance: boolean;
  // privileges: { [key: string]: string[] };
  privileges: any;
  // token: string | null;
  token: any;
  role: number;
  is_2fa: boolean;
  is_verify: boolean;
}

export interface RouteConfig {
  path: string;
  component: React.ComponentType<any>;
  position: "head" | "parent" | "child";
  privilegeTag?: any;
}