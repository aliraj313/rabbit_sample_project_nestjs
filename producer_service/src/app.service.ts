import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @Inject('RABBITMQ_SERVICE') private readonly client: ClientProxy,
  ) {}
  sendMessage() {
    this.client.emit('send_message_event', {
      text: 'Hello from Producer!',
    });
    return { message: 'message sended successfully' };
  }
}
