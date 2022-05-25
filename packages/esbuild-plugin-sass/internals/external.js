"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isExternal = exports.compilePatterns = void 0;
function compilePatterns(paths) {
    const result = new Array(paths.length);
    for (let i = 0; i < paths.length; i += 1) {
        const path = paths[i];
        const wildcardIndex = path.indexOf("*");
        result[i] = {
            prefix: wildcardIndex !== -1 ? path.substring(0, wildcardIndex) : path,
            suffix: wildcardIndex !== -1 ? path.substring(wildcardIndex + 1) : "",
        };
    }
    return result;
}
exports.compilePatterns = compilePatterns;
function isExternal(path, patterns) {
    for (let i = 0; i < patterns.length; i += 1) {
        const pattern = patterns[i];
        if (path.length >= pattern.prefix.length + pattern.prefix.length) {
            if (path.startsWith(pattern.prefix) && path.endsWith(pattern.suffix)) {
                return true;
            }
        }
    }
    return false;
}
exports.isExternal = isExternal;
