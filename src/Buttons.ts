// Copyright (c) 2022 Northern Star
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { MessageActionRow, MessageButton } from "discord.js"
export namespace Buttons {
    export const DfirstRow = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setCustomId('p2')
                .setLabel('Lorem uh')
                .setStyle('PRIMARY')
                .setDisabled(true)
        );

    export const firstRow = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setCustomId('primary')
                .setLabel('Lorem Ipsum')
                .setStyle('PRIMARY')
        );
    
    export const secondRow = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setCustomId('secondary')
                .setLabel('Lorem EEE')
                .setStyle('PRIMARY')
        );
}
