import { Injectable } from '@nestjs/common';
import { WebModel } from '../model/web-model';

@Injectable()
export class WebNotificationService {
  // methods
  sendNotification(webModel: WebModel): boolean {
    console.log(
      'Web Notification Payload Received: ' + JSON.stringify(webModel),
    );
    console.log('Web Notification Sent');

    return true;
  }
}
