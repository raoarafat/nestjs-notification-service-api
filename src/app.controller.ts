import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { NotificationParameterPayload } from './common/payload/notification-parameter-payload';
import { NotificationProvider } from './common/providers/notification-provider';

@Controller('notification')
@Controller()
export class AppController {
  constructor(private readonly notificationProvider: NotificationProvider) {}

  @Post()
  sendNotification(
    @Body() notificationParameterPayload: NotificationParameterPayload,
  ) {
    console.log(
      'Notification Parameter Payload recieve in controller: ' +
        JSON.stringify(notificationParameterPayload),
    );
    this.notificationProvider.sendNotification(notificationParameterPayload);
    return 'Success';
  }

  @Get('web/userId/:userId')
  getWebNotificationByUserId(@Param('userId') userId: string) {
    return this.notificationProvider.getWebNotificationByUserId(userId);
  }
}

// Web Payload
// {
//   "companyId": "g3a6e106-2dc7-45f0-b650-08d7cee9439e",
//   "userId": "bba6e106-2dc7-45f0-b650-08d7cee943rr",
//   "notificationType": "happy-birthday",
//   "notificationChannel": "Web"
// }

// Email Payload
// {
//     "companyId": "xxa6e106-2dc7-45f0-b650-08d7cee943dd",
//     "userId": "cca6e106-2dc7-45f0-b650-08d7cee94394",
//     "notificationType": "monthly-payslip",
//     "notificationChannel": "Email"
// }
