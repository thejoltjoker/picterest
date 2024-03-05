import { ImageItem } from "./ImageItem";

export class User {
  constructor(public userId: string, public favorites: ImageItem[]) {}
}
