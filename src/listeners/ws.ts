import { ApplyOptions } from '@sapphire/decorators';
import { Listener, ListenerOptions } from '@sapphire/framework';
import express from 'express'
import http from 'http'
import { Server } from 'socket.io'
import chalk from 'chalk'
import os from 'os'
@ApplyOptions<ListenerOptions>({
  event: 'ready',
})
export class UserEvent extends Listener {
  public run() {
    const app = express()
    const server = http.createServer(app)
    const io = new Server(server, {
      cors: { origin: "*" }
    })
    server.listen(8080, () => {
      console.log(chalk.green('[WS] Listening on port 8080'));
    })
    this.container.logger.info('Socket.io is running')
    io.on('connection', (socket) => {
      setInterval(() => {
        socket.emit('memUsage', {
          usage: process.memoryUsage().rss,
          total: os.totalmem()
        })
      })
      console.log(`A user Connected`);
      
    })

  }
}
