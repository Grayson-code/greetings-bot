// Copyright (c) 2022 Northern Star
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Listener } from '@sapphire/framework';
import { GuildMember, MessageActionRow, MessageButton } from 'discord.js';

export class ReadyListener extends Listener {
  public constructor(context: Listener.Context, options: Listener.Options) {
    super(context, {
      ...options,
    });


  }
  public async run(member: GuildMember) {
    const firstRow = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId('primary')
          .setLabel('Lorem Ipsum')
          .setStyle('PRIMARY')
      )
    await member.send({ content: 'Consectetur nisi ipsum minim officia fugiat tempor cillum Lorem.', components: [firstRow] }).catch((e) => this.container.logger.error(e))
  }
}