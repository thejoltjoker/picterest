export class ImageItem {
  constructor(
    public imageId: string,
    public title: string,
    public snippet: string,
    public contextLink: string,
    public link: string,
    public thumbnailLink: string,
    public thumbnailWidth: number,
    public thumbnailHeight: number
  ) {}
}
