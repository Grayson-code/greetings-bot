// Copyright (c) 2022 Northern Star
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Listener } from "@sapphire/framework";
import type { ButtonInteraction, Interaction } from "discord.js";
import { Buttons } from "../../Buttons";

export class HandleInteraction extends Listener {
    public constructor(context: Listener.Context, options: Listener.Options) {
        super(context, {
            ...options,
        });
    }

    public async run(interaction: Interaction) {
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
