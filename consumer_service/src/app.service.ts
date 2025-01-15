import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  handleMessage(data: any) {
    console.log('Received message:', data);
  }
 
}
