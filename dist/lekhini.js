#!/usr/bin/env node
"use strict";
/*
 *  Entryfile for for lekhini project.
 *  Created On 20 August 2021
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prettifier = void 0;
const index_1 = __importDefault(require("./lib/index"));
// check if this file has been imported
// or executed
const isCLI = require.main === module;
exports.prettifier = index_1.default;
