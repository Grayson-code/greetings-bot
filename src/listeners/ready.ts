// Copyright (c) 2022 Northern Star
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Listener } from "@sapphire/framework";
import type { Client } from "discord.js";
import chalk from "chalk";
export class ReadyListener extends Listener {
    public constructor(context: Listener.Context, options: Listener.Options) {
        super(context, {
            ...options,
            name: 'ready',
            once: true
        });
    }

    public async run(client: Client) {
    
        this.container.logger.info(`[${chalk.gray(new Date().toLocaleTimeString())}] [${__filename.split(/(\\|\/)/g).pop()}/${chalk.greenBright(`INFO`)}]: Logged in as ${client.user?.username}`);
    }
}