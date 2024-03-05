import { ImageItem } from "./ImageItem";

export interface User {
  userId: string;
  email: string;
  favorites: ImageItem[];
}
