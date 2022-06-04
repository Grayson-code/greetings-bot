"use strict";
// Copyright (c) 2022 Northern Star
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandleInteraction = void 0;
const framework_1 = require("@sapphire/framework");
class HandleInteraction extends framework_1.Listener {
    constructor(context, options) {
        super(context, {
            ...options,
        });
    }
    async run(interaction) {
        // if (!interaction.isButton()) return;
        // if (interaction.customId === 'primary') await interaction.update({content: `Consectetur nisi ipsum minim officia fugiat tempor cillum Lorem`, components: [Buttons.DfirstRow]});
        // console.info('Event Fired!')
        // const filter = (i: any) => i.member?.user.id === interaction.member?.user.id;
        // const i = await (await interaction.channel!.send({ content: `Lets Start!`, components: [Buttons.firstRow]})).fetch(true)
        // const collector = i.createMessageComponentCollector({ filter, time: 15000 })
        // collector.on('collect',async (i) => {
        //     process.stdout.write(`Test STDOUT`)
        //     await i.deferReply()
        //     if (i.customId === 'p2') {
        //         await i.editReply({ content: 'A button was clicked!', components: [] });
        //     }
        //     if (i.customId === 'secondary') {
        //         await i.editReply({ content: 'Another button was clicked!', components: [] });
        //     }
        // });
        // collector.on('end', () => {
        //     console.log(`Collector Ended!`);
        // })
        if (interaction.isSelectMenu()) {
        }
    }
}
exports.HandleInteraction = HandleInteraction;
