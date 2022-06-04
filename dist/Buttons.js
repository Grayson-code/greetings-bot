"use strict";
// Copyright (c) 2022 Northern Star
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.Buttons = void 0;
const discord_js_1 = require("discord.js");
var Buttons;
(function (Buttons) {
    Buttons.DfirstRow = new discord_js_1.MessageActionRow()
        .addComponents(new discord_js_1.MessageButton()
        .setCustomId('p2')
        .setLabel('Lorem uh')
        .setStyle('PRIMARY')
        .setDisabled(true));
    Buttons.firstRow = new discord_js_1.MessageActionRow()
        .addComponents(new discord_js_1.MessageButton()
        .setCustomId('primary')
        .setLabel('Lorem Ipsum')
        .setStyle('PRIMARY'));
    Buttons.secondRow = new discord_js_1.MessageActionRow()
        .addComponents(new discord_js_1.MessageButton()
        .setCustomId('secondary')
        .setLabel('Lorem EEE')
        .setStyle('PRIMARY'));
})(Buttons = exports.Buttons || (exports.Buttons = {}));
