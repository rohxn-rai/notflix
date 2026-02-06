export interface User {
  username: string;
  password: string;
}

export const USERS_DB: User[] = [
  {
    username: "admin",
    password: "password123",
  },
  {
    username: "rohan",
    password: "dev",
  },
];

export const addUserToDB = (user: User) => {
  USERS_DB.push(user);
};
