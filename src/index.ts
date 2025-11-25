import { extensions } from "./extension/index";

namespace Internal {
    export type ToInstanceMethod<T> = {
        [K in keyof T]: T[K] extends (head: any, ...tail: infer P) => infer R
            ? (this: string, ...args: P) => R // <-- Strips 'head', uses 'this: string'
            : never;
    };

    export type ExtensionsType = typeof extensions;
}

declare global {
    interface String extends Internal.ToInstanceMethod<Internal.ExtensionsType> {}
}

const StringPrototype = String.prototype as any;

for (const key of Object.keys(extensions)) {
    Object.defineProperty(StringPrototype, key, {
        value: function (...args: any[]) {
            return extensions[key as keyof typeof extensions](String(this), ...args);
        },
        writable: true,
        enumerable: false, // Prevents pollution in 'for...in' loops
        configurable: true
    });
}

export {};