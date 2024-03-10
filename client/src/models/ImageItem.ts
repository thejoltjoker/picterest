export class ImageItem {
  constructor(
    public imageId: string,
    public title: string,
    public snippet: string,
    public link: string,
    public contextLink: string,
    public thumbnailLink: string,
    public width: number,
    public height: number,
  ) {}
}
