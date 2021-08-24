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
const cli_highlight_1 = __importDefault(require("cli-highlight"));
const deepmerge_1 = __importDefault(require("deepmerge"));
const js_yaml_1 = __importDefault(require("js-yaml"));
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
    const str = cli_highlight_1.default(js_yaml_1.default.dump(data, {
        indent: 4,
    }), {
        language: 'yaml',
    });
    // return the segments
    return [`\n${str}`];
};
