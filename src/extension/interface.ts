export abstract class Extension extends String {
  static name: string = "" as const;
  static handler(...args: any[]): boolean | undefined {
    throw new Error("Method not implemented.");
  }
}