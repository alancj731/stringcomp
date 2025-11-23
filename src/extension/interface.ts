export abstract class Extension extends String {
  static name: string = "" as const;
  static async handler(...args: any[]): Promise<boolean | undefined> {
    throw new Error("Method not implemented.");
  }
}