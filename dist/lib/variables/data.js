"use strict";
/*
 *  Renders any additional data with YAML and applies
 * syntax highlighting.
 *  Created On 23 August 2021
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const deepmerge_1 = __importDefault(require("deepmerge"));
const prettyoutput_1 = __importDefault(require("prettyoutput"));
exports.default = (ctx, config) => {
    // construct base variables
    const data = typeof ctx[config.messageKey] == 'object'
        ? deepmerge_1.default(ctx.data || {}, ctx[config.messageKey])
        : ctx.data;
    // conditional execution
    if (!data)
        return [];
    if (ctx.type != 'string')
        return [];
    const str = prettyoutput_1.default(data);
    // return the segments
    return [`\n${str}`];
};
