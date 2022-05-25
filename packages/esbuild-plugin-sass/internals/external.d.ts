/**
 * This module mimics original semantics for external paths from esbuild implementation
 *
 * @see https://github.com/evanw/esbuild/blob/f66b586923e2e4569155e758b57bae9d473c7d8f/pkg/api/api_impl.go#L362
 */
export interface WildcardPattern {
    prefix: string;
    suffix: string;
}
export declare function compilePatterns(paths: string[]): WildcardPattern[];
export declare function isExternal(path: string, patterns: WildcardPattern[]): boolean;
//# sourceMappingURL=external.d.ts.map