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
const date_and_time_1 = __importDefault(require("date-and-time"));
const fmt_1 = __importDefault(require("../fmt"));
exports.default = (ctx, config) => {
    // if no time is found, we simply return
    if (!ctx.time)
        return [];
    // construct the required variables
    const date = new Date(ctx.time);
    const str = date_and_time_1.default.format(date, config.translateTime);
    // return the segments
    return [fmt_1.default(str, chalk_1.default.gray, config), fmt_1.default('•', chalk_1.default.gray.dim, config)];
};
