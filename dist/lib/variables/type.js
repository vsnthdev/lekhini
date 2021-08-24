"use strict";
/*
 *  Renders the message type as a segment.
 *  Created On 23 August 2021
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const fmt_1 = __importDefault(require("../fmt"));
const map = {
    10: {
        name: 'trace',
        color: chalk_1.default.magentaBright,
    },
    20: {
        name: 'debug',
        color: chalk_1.default.cyanBright,
    },
    30: {
        name: 'info',
        color: chalk_1.default.blueBright,
    },
    40: {
        name: 'warn',
        color: chalk_1.default.yellowBright,
    },
    50: {
        name: 'error',
        color: chalk_1.default.redBright,
    },
    60: {
        name: 'fatal',
        color: chalk_1.default.bgRedBright.whiteBright,
    },
};
exports.default = (ctx, config) => {
    // construct base variables
    const type = map[ctx.level];
    // return the segments
    return [fmt_1.default(type.name, type.color, config)];
};
