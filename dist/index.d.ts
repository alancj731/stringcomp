declare abstract class Extension extends String {
    static name: string;
    static handler(...args: any[]): boolean;
}

declare class GreaterThanExtension extends Extension {
    static name: "greaterThan";
    static handler(...args: any[]): boolean;
}

declare class LessThanExtension extends Extension {
    static name: "lessThan";
    static handler(...args: any[]): boolean;
}

declare class EqualExtension extends Extension {
    static name: "equal";
    static handler(...args: any[]): boolean;
}

declare const extensions: {
    greaterThan: typeof GreaterThanExtension.handler;
    lessThan: typeof LessThanExtension.handler;
    equal: typeof EqualExtension.handler;
};

declare namespace Internal {
    type ToInstanceMethod<T> = {
        [K in keyof T]: T[K] extends (head: any, ...tail: infer P) => infer R ? (this: string, ...args: P) => R : never;
    };
    type ExtensionsType = typeof extensions;
}
declare global {
    interface String extends Internal.ToInstanceMethod<Internal.ExtensionsType> {
    }
}
export {};
