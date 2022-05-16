// Copyright (c) 2022 Northern Star
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Listener } from "@sapphire/framework";
import type { Client } from "discord.js";

export class ReadyListener extends Listener {
    public constructor(context: Listener.Context, options: Listener.Options) {
        super(context, {
            ...options,
            name: 'ready',
            once: true
        });
    }

    public async run(client: Client) {
        this.container.logger.info(`Logged in as ${client.user!.tag}`);
     }
}