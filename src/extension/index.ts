export * from "./interface";
import { GreaterThanExtension } from "./greaterthan";
import { LessThanExtension } from "./lessthan";
import { EqualExtension } from "./equal";

export const extensions = {
    [GreaterThanExtension.name]: GreaterThanExtension.handler,
    [LessThanExtension.name]: LessThanExtension.handler,
    [EqualExtension.name]: EqualExtension.handler,
};