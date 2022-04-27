"use strict";
/*
 *  Creates a string and formats it accordingly.
 *  Created On 21 August 2021
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import data from './variables/data'
// import emoji from './variables/emoji'
// import module from './variables/module'
// import msg from './variables/msg'
// import stack from './variables/stack'
const system_1 = __importDefault(require("./variables/system"));
const time_1 = __importDefault(require("./variables/time"));
const render = (options) => {
    const rendered = options.segments
        // join the array into a string
        .join(' ')
        // collapse multiple consecutive spaces into one
        .replace(/  +/g, ' ')
        // add a newline at the end
        .concat('\n');
    return rendered;
};
exports.default = (ctx, config) => {
    const rendered = render({
        segments: [
            time_1.default(ctx, config),
            system_1.default(ctx, config),
            // module(ctx, config),
            // emoji(ctx, config),
            // type(ctx, config),
            // msg(ctx, config),
            // data(ctx, config),
            // stack(ctx, config),
        ],
    });
    return rendered;
};
