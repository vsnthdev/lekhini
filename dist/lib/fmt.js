"use strict";
/*
 *  Formats text accordingly by reading the context and config.
 *  Created On 23 August 2021
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterIgnore = void 0;
// removes the filtered keys from the context
// so they don't get rendered
const filterIgnore = (ctx, config) => {
    const ignored = (config.ignore || '')
        .split(',')
        .filter(key => Boolean(key))
        .map(key => key.trim());
    Object.keys(ctx)
        .filter(key => ignored.includes(key))
        .forEach(key => delete ctx[key]);
    return ctx;
};
exports.filterIgnore = filterIgnore;
// this function does the following things:
// 1. not render the string if it's empty or undefined
// 2. render the string in colors
exports.default = (value, fmt, config) => {
    if ([undefined, ''].includes(value))
        return '';
    // dummy format function if colorize is false
    if (!config.colorize)
        fmt = (str) => str;
    return fmt(value);
};
