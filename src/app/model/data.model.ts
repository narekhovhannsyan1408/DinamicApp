export class CommentsModel {
  constructor(
    public description: string
  ) {}
}

export class DataModel {
  constructor(
    public text: string,
    public point: number,
    public comments: Array<CommentsModel>,
  ) {}
}
