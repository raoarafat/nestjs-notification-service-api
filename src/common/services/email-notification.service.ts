import { Injectable } from '@nestjs/common';
import { EmailModel } from '../model/email-model';

@Injectable()
export class EmailNotificationService {
  // methods
  sendNotification(emailModel: EmailModel): boolean {
    console.log(
      'Email Notification Payload Received: ' + JSON.stringify(emailModel),
    );
    console.log('Email Notification Sent');

    return true;
  }
}
