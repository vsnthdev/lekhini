"use strict";
/*
 *  Renders the message text as a segment.
 *  Created On 23 August 2021
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const fmt_1 = __importDefault(require("../fmt"));
exports.default = (ctx, config) => {
    // construct base variables
    const msg = ctx[config.messageKey];
    // return the segments
    return [fmt_1.default(msg, chalk_1.default, config)];
};
