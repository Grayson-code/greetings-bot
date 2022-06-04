"use strict";
// Copyright (c) 2022 Northern Star
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadyListener = void 0;
const framework_1 = require("@sapphire/framework");
const chalk_1 = __importDefault(require("chalk"));
class ReadyListener extends framework_1.Listener {
    constructor(context, options) {
        super(context, {
            ...options,
            name: 'ready',
            once: true
        });
    }
    async run(client) {
        this.container.logger.info(`[${chalk_1.default.gray(new Date().toLocaleTimeString())}] [${__filename.split(/(\\|\/)/g).pop()}/${chalk_1.default.greenBright(`INFO`)}]: Logged in as ${client.user?.username}`);
    }
}
exports.ReadyListener = ReadyListener;
