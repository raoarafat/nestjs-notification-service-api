import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { NotificationChannelsEnum } from '../enums/notification-channels-enum';
import { EmailModel } from '../model/email-model';
import { NotificationContentModel } from '../model/notification-content-model';
import { WebModel } from '../model/web-model';
import { NotificationParameterPayload } from '../payload/notification-parameter-payload';
import { EmailNotificationService } from '../services/email-notification.service';
import { NotificationContentService } from '../services/notification-content.service';
import { WebNotificationService } from '../services/web-notification.service';
import { CompanyProvider } from './company-provider';
import { UserProvider } from './user-provider';

@Injectable()
export class NotificationProvider {
  constructor(
    private notificationContentService: NotificationContentService,
    private userProvider: UserProvider,
    private companyProvider: CompanyProvider,
    private webNotificationService: WebNotificationService,
    private emailNotificationService: EmailNotificationService,
  ) {}

  public webNotificationList: WebModel[] = [];

  // methods
  public getWebNotificationByUserId(userId: string): WebModel[] {
    return this.webNotificationList.filter((web) => web.userId == userId);
  }

  public sendNotification(
    notificationParameterPayload: NotificationParameterPayload,
  ): boolean {
    console.log(
      'Notification Parameter Payload recieve: ' +
        JSON.stringify(notificationParameterPayload),
    );

    // get user & company details
    const user = this.userProvider.getUserById(
      notificationParameterPayload.userId,
    );
    const company = this.companyProvider.getCompanyById(
      notificationParameterPayload.companyId,
    );

    if (!user || !company) throw new NotFoundException('User Not Found');

    // get notification content
    const contents = this.getNotificationContent(
      notificationParameterPayload.notificationType,
    );

    if (!contents) throw new NotFoundException('Contents Not Found');

    switch (notificationParameterPayload.notificationChannel) {
      case NotificationChannelsEnum.Web:
        console.log('It is web notification:');
        // check if user or company is Subscribed to recieve notifications
        if (!user.notificationSettings.web || !company.notificationSettings.web)
          throw new BadRequestException(
            'Not Subscribe to send web notification',
          );

        // create web model object
        const webModel: WebModel = new WebModel();
        webModel.userId = user.id;
        webModel.title = contents.title;
        webModel.content = contents.content;

        // save to list
        this.webNotificationList.push(webModel);

        // send web notification
        this.webNotificationService.sendNotification(webModel);
        break;

      case NotificationChannelsEnum.Email:
        console.log('It is email notification:');
        // check if user or company is Subscribed to recieve notifications
        if (
          !user.notificationSettings.email ||
          !company.notificationSettings.email
        )
          throw new BadRequestException(
            'Not Subscribe to send email notification',
          );

        // create email model object
        const emailModel: EmailModel = new EmailModel();
        emailModel.to = user.email;
        emailModel.subject = contents.title;
        emailModel.body = contents.content;

        // send web notification
        this.emailNotificationService.sendNotification(emailModel);
        break;

      case NotificationChannelsEnum.Whatsapp:
        // coming soon
        console.log('It is Whatsapp notification: ');
        break;

      default:
        break;
    }

    return true;
  }

  public getNotificationContent(type: string): NotificationContentModel {
    return this.notificationContentService
      .getNotificationContents()
      .find((c) => c.type == type);
  }
}
