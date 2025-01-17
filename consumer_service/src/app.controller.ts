import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('send_message_event')
  async handleMessage(data: any) {
    return this.appService.handleMessage(data);
  }
}
