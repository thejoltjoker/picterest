import { Item } from "./SearchResult";

export interface ImageItem extends Item {
  id: string;
}

// TODO implement custom image item
// class ImageItemClass {
//   constructor(
//     public imageId: string,
//     public title: string,
//     public snippet: string,
//     public link: string,
//     public contextLink: string,
//     public thumbnailLink: string,
//     public width: number,
//     public height: number,
//   ) {}
// }
