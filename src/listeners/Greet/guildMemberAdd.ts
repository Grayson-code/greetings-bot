// Copyright (c) 2022 Northern Star
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Listener } from '@sapphire/framework';
import { ButtonInteraction, GuildMember, Message } from 'discord.js';
import { Buttons } from '../../Buttons';

export class ReadyListener extends Listener {
  public constructor(context: Listener.Context, options: Listener.Options) {
    super(context, {
      ...options,
    });


  }
  public async run(member: GuildMember) {
    const message = await member.send({ content: 'Hello , welcome to this server, select your roles right now!', components: [Buttons.firstRow] }).catch((e) => this.container.logger.error(e));

  }
}