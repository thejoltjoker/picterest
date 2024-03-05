import { promises as fs } from "fs";
import path from "path";
import { Database } from "../models/Database";
export const dbPath = path.resolve(process.env.DATABASE_PATH ?? "./db.json");

export const initDb = async (): Promise<Database> => {
  let data = { users: [] };
  try {
    await fs.readFile(dbPath, "utf-8");
  } catch (error) {
    await write(data);
  }
  return data;
};

export const read = async (): Promise<Database | undefined> => {
  try {
    const rawData = await fs.readFile(dbPath, "utf-8");
    const data = JSON.parse(rawData);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const write = async (data: Database) => {
  try {
    await fs.writeFile(dbPath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error(error);
  }
};
