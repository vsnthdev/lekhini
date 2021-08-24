"use strict";
/*
 *  Newline-delimiter formatter function for pino.
 *  Created On 20 August 2021
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const deepmerge_1 = __importDefault(require("deepmerge"));
const fmt_1 = require("./fmt");
const render_1 = __importDefault(require("./render"));
const defaults = {
    emojis: true,
    colorize: true,
    messageKey: 'msg',
    ignore: 'hostname, pid',
    translateTime: 'yyyy-mm-dd HH:mm:ss',
};
exports.default = (config) => {
    // merge with our default values so, we are sure
    // there are all config properties
    config = deepmerge_1.default(defaults, config);
    return (ctx) => {
        // filter the ignored keys from context
        ctx = fmt_1.filterIgnore(ctx, config);
        // transform the message type property
        ctx.type = ctx.type ? ctx.type.toLowerCase() : 'string';
        return render_1.default(ctx, config);
    };
};
