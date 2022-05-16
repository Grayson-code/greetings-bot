"use strict";
// Copyright (c) 2022 Northern Star
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadyListener = void 0;
const framework_1 = require("@sapphire/framework");
class ReadyListener extends framework_1.Listener {
    constructor(context, options) {
        super(context, {
            ...options,
            name: 'ready',
            once: true
        });
    }
    async run(client) {
        this.container.logger.info(`Logged in as ${client.user.tag}`);
    }
}
exports.ReadyListener = ReadyListener;
