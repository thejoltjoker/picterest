import { User } from "../models/User";
import { read, write } from "./database";

export const get = async (userId: string): Promise<User | undefined> => {
  const database = await read();
  return database.users.find((user) => user.userId === userId);
};

export const create = async (user: User): Promise<User> => {
  const database = await read();
  const existingUser = database.users.find((u) => u.email === user.email);
  if (existingUser) {
    return existingUser;
  }
  database.users.push(user);
  await write(database);
  return user;
};

export const update = async (user: User): Promise<User | undefined> => {
  if (!user.userId) return;
  const database = await read();
  database.users = database.users.map((u) =>
    u.userId === user.userId ? user : u
  );
  await write(database);
  return user;
};

export const remove = async (userId: string) => {
  const data = await read();
  data.users = data.users.filter((user) => user.userId != userId);
  await write(data);
};
