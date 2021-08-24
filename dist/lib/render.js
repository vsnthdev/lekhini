"use strict";
/*
 *  Creates a string and formats it accordingly.
 *  Created On 21 August 2021
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = __importDefault(require("./variables/data"));
const emoji_1 = __importDefault(require("./variables/emoji"));
const module_1 = __importDefault(require("./variables/module"));
const msg_1 = __importDefault(require("./variables/msg"));
const stack_1 = __importDefault(require("./variables/stack"));
const system_1 = __importDefault(require("./variables/system"));
const time_1 = __importDefault(require("./variables/time"));
const type_1 = __importDefault(require("./variables/type"));
const render = (segments) => segments
    // join the array into a string
    .join(' ')
    // collapse multiple consecutive spaces into one
    .replace(/  +/g, ' ');
exports.default = (ctx, config) => render([
    time_1.default(ctx, config),
    system_1.default(ctx, config),
    module_1.default(ctx, config),
    emoji_1.default(ctx, config),
    type_1.default(ctx, config),
    msg_1.default(ctx, config),
    data_1.default(ctx, config),
    stack_1.default(ctx, config),
].map(segments => render(segments))).concat('\n');
