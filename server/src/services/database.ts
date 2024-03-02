import { promises as fs } from "fs";
import path from "path";
import { Database } from "../models/Database";

export const read = async (): Promise<Database> => {
  const dbPath = path.resolve(process.env.DATABASE_PATH ?? "./db.json");
  let data = { users: [] };
  try {
    const rawData = await fs.readFile(dbPath, "utf-8");
    data = JSON.parse(rawData);
  } catch (error) {
    console.log(error);
    await write(data);
  }

  return data;
};

export const write = async (data: Database) => {
  await fs.writeFile(
    path.resolve(process.env.DATABASE_PATH ?? "./db.json"),
    JSON.stringify(data, null, 2)
  );
};
