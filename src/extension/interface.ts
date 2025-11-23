export abstract class Extension extends String {
  static name: string = "" as const;
  static handler(...args: any[]): boolean {
    throw new Error("Method not implemented.");
  }
}