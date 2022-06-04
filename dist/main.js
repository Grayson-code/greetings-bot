"use strict";
// Copyright (c) 2022 Northern Star
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
// Copyright (c) 2022 Northern Star
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
const framework_1 = require("@sapphire/framework");
require("dotenv/config");
class Client extends framework_1.SapphireClient {
    constructor() {
        super({
            intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_MEMBERS', 'DIRECT_MESSAGES', 'GUILD_MESSAGE_REACTIONS'],
            partials: ["CHANNEL", "MESSAGE", "GUILD_MEMBER"],
            defaultPrefix: "!",
            presence: {
                status: "idle",
                activities: [{
                        name: 'Made With Sapphire',
                        type: 'COMPETING',
                    }]
            },
        });
    }
    login(token) {
        return super.login(token);
    }
    ;
}
exports.client = new Client();
exports.client.login(process.env.token);
