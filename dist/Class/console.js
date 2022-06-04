"use strict";
// Copyright (c) 2022 Northern Star
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.info = void 0;
const chalk_1 = __importDefault(require("chalk"));
function info(message) {
    console.log(`[${chalk_1.default.gray(new Date().toLocaleTimeString())}] [${__filename.split(/(\\|\/)/g).pop()}/${chalk_1.default.greenBright(`INFO`)}]: ${message}`);
}
exports.info = info;
