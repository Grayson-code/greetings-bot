"use strict";
// Copyright (c) 2022 Northern Star
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadyListener = void 0;
const framework_1 = require("@sapphire/framework");
const Buttons_1 = require("../../Buttons");
class ReadyListener extends framework_1.Listener {
    constructor(context, options) {
        super(context, {
            ...options,
        });
    }
    async run(member) {
        const message = await member.send({ content: 'Hello , welcome to this server, select your roles right now!', components: [Buttons_1.Buttons.firstRow] }).catch((e) => this.container.logger.error(e));
    }
}
exports.ReadyListener = ReadyListener;
