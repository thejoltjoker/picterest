import { User } from "../models/User";
import { read, write } from "./database";

export const get = async (userId: string): Promise<User | undefined> => {
  const database = await read();
  return database?.users.find((user) => user.userId === userId);
};

export const create = async (user: User): Promise<User | undefined> => {
  const database = await read();
  const existingUser = database?.users.find((u) => u.userId === user.userId);
  if (existingUser) {
    return existingUser;
  }
  database?.users.push(user);
  if (database) {
    await write(database);
    return user;
  }
};

export const update = async (
  userId: string,
  user: User
): Promise<User | undefined> => {
  const database = await read();
  if (database) {
    if (await get(userId)) {
      database.users = database.users.map((dbUser) =>
        dbUser.userId === userId ? user : dbUser
      );
    } else database.users.push(user);

    await write(database);
    return user;
  }
};

export const remove = async (userId: string) => {
  const database = await read();
  if (database) {
    database.users = database.users.filter((user) => user.userId != userId);
    await write(database);
  }
};
