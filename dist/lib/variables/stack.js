"use strict";
/*
 *  Renders the error stack when an error is passed as a message.
 *  Created On 24 August 2021
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const fmt_1 = __importDefault(require("../fmt"));
exports.default = (ctx, config) => {
    // conditional execution
    if (ctx.type != 'error')
        return [];
    // construct base variables
    let stack = ctx.stack.split('\n');
    stack.shift();
    stack = stack.map(line => `${line.trim()}`);
    // return the segments
    return [fmt_1.default(`\n${stack.join('\n')}\n`, chalk_1.default.gray, config)];
};
