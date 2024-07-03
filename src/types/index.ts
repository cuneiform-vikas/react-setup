// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.

export type IAuthState = {
  loadingState: boolean;
  token: string | null;
  userList: any;
};

export interface loginData {
  email: string;
  password: string;
}

export type Pokemon = any

export type uid = any;