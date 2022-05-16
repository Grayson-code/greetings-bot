"use strict";
// Copyright (c) 2022 Northern Star
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadyListener = void 0;
const framework_1 = require("@sapphire/framework");
const discord_js_1 = require("discord.js");
class ReadyListener extends framework_1.Listener {
    constructor(context, options) {
        super(context, {
            ...options,
        });
    }
    async run(member) {
        const firstRow = new discord_js_1.MessageActionRow()
            .addComponents(new discord_js_1.MessageButton()
            .setCustomId('primary')
            .setLabel('Lorem Ipsum')
            .setStyle('PRIMARY'));
        await member.send({ content: 'Consectetur nisi ipsum minim officia fugiat tempor cillum Lorem.', components: [firstRow] }).catch((e) => this.container.logger.error(e));
    }
}
exports.ReadyListener = ReadyListener;
