import { Extension } from "./interface";

export class LessThanExtension extends Extension {
  static name = "lessThan" as const;

  static handler(...args: any[]): boolean {
    if (args.length !== 1) {
      throw new Error("Less Than Extension requires one argument.");
    }
    const toCompare = args[0];
    if (typeof toCompare !== "string") {
      throw new Error("Less Than Extension requires a string argument.");
    }

    if(!isNaN(Number(this)) && !isNaN(Number(toCompare))) {
        return Number(this) < Number(toCompare);
    }

    if (!isNaN(Date.parse(this.valueOf() as string)) && !isNaN(Date.parse(toCompare))) {
        return (new Date(this.valueOf() as string)).getTime() < new Date(toCompare).getTime();
    }
    return this.valueOf() < toCompare;
  }
}