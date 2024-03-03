import { ImageItem } from "./ImageItem";

export class User {
  constructor(
    public email: string,
    public favorites: ImageItem[],
    public userId?: string
  ) {}
}
