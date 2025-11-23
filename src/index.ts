import { extensions } from "./extension/index";

type ExtensionsType = typeof extensions;

declare global {
    interface String extends ExtensionsType { }
}

const StringPrototype = String.prototype as any;

for (const key of Object.keys(extensions)) {
    StringPrototype[key] = function (...args: any[]) {
        return extensions[key as keyof typeof extensions].apply(this, args);
    };
}
export {};
