"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEvent = void 0;
const decorators_1 = require("@sapphire/decorators");
const framework_1 = require("@sapphire/framework");
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
const chalk_1 = __importDefault(require("chalk"));
const os_1 = __importDefault(require("os"));
let UserEvent = class UserEvent extends framework_1.Listener {
    run() {
        const app = (0, express_1.default)();
        const server = http_1.default.createServer(app);
        const io = new socket_io_1.Server(server);
        server.listen(3000, () => {
            console.log(chalk_1.default.green('[WS] Listening on port 3000'));
        });
        this.container.logger.info('Socket.io is running');
        io.on('connection', (socket) => {
            setInterval(() => {
                socket.emit('memUsage', {
                    usage: process.memoryUsage().rss,
                    total: os_1.default.totalmem()
                });
            });
            console.log(`A user Connected`);
        });
    }
};
UserEvent = __decorate([
    (0, decorators_1.ApplyOptions)({
        event: 'ready',
    })
], UserEvent);
exports.UserEvent = UserEvent;
