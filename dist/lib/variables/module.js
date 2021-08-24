"use strict";
/*
 *  Renders the module key as a separate segment.
 *  Useful to create sub-loggers with different names.
 *  Created On 23 August 2021
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const fmt_1 = __importDefault(require("../fmt"));
exports.default = (ctx, config) => {
    // construct the required variable
    const { module } = ctx;
    // return the segments
    return [fmt_1.default(module, chalk_1.default, config)];
};
