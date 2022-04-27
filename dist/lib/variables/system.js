"use strict";
/*
 *  Renders hostname and process ID variables if not ignored.
 *  Created On 22 August 2021
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const fmt_1 = __importDefault(require("../fmt"));
exports.default = (ctx, config) => {
    // console.log(ctx)
    // construct the required variables
    const { pid, hostname } = ctx;
    const sep = pid && hostname ? '⑀' : undefined;
    const end = pid || hostname ? '•' : undefined;
    // return the segments
    return [
        fmt_1.default(pid, chalk_1.default.magenta, config),
        fmt_1.default(sep, chalk_1.default.gray.dim, config),
        fmt_1.default(hostname, chalk_1.default.blue, config),
        fmt_1.default(end, chalk_1.default.gray.dim, config),
    ].join(' ');
};
