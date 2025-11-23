declare abstract class Extension extends String {
    static name: string;
    static handler(...args: any[]): Promise<boolean | undefined>;
}

declare class GreaterThanExtension extends Extension {
    static name: "greaterThan";
    static handler(...args: any[]): Promise<boolean | undefined>;
}

declare class LessThanExtension extends Extension {
    static name: "lessThan";
    static handler(...args: any[]): Promise<boolean | undefined>;
}

declare class EqualExtension extends Extension {
    static name: "equal";
    static handler(...args: any[]): Promise<boolean | undefined>;
}

declare const extensions: {
    greaterThan: typeof GreaterThanExtension.handler;
    lessThan: typeof LessThanExtension.handler;
    equal: typeof EqualExtension.handler;
};

type ExtensionsType = typeof extensions;
declare global {
    interface String extends ExtensionsType {
    }
}
