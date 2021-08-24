"use strict";
/*
 *  Render the time variable
 *  Created On 21 August 2021
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const luxon_1 = require("luxon");
const fmt_1 = __importDefault(require("../fmt"));
exports.default = (ctx, config) => {
    // if no time is found, we simple return
    if (!ctx.time)
        return [];
    // construct the required variables
    const time = luxon_1.DateTime.fromMillis(ctx.time).toFormat(config.translateTime);
    // return the segments
    return [fmt_1.default(time, chalk_1.default.gray, config), fmt_1.default('•', chalk_1.default.gray.dim, config)];
};
