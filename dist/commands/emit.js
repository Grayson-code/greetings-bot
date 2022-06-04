"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCommand = void 0;
const decorators_1 = require("@sapphire/decorators");
const plugin_subcommands_1 = require("@sapphire/plugin-subcommands");
let UserCommand = class UserCommand extends plugin_subcommands_1.SubCommandPluginCommand {
    async messageRun(message) {
        if (message.content.includes(message.client.user?.username))
            message.client.emit('guildMemberAdd', message.member);
    }
};
UserCommand = __decorate([
    (0, decorators_1.ApplyOptions)({
        description: 'A basic command'
    })
], UserCommand);
exports.UserCommand = UserCommand;
