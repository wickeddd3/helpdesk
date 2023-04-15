export interface Auth {
  email?: string,
  password?: string,
}

export interface User {
  id?: number | string,
  role?: string,
  email?: string,
  password?: string,
}

export interface AuthState {
  users: User[],
  authUser: User,
}
