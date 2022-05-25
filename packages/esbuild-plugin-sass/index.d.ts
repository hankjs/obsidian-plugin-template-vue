import { Plugin } from "esbuild";
import sass = require("sass");
declare type SassOptions = Omit<sass.Options<"sync">, "file">;
interface Options {
    rootDir?: string;
    customSassOptions?: SassOptions;
    outName?: string;
}
declare const _default: (options?: Options) => Plugin;
export = _default;
//# sourceMappingURL=index.d.ts.map