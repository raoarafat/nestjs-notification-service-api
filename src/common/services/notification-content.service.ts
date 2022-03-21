import { Injectable } from '@nestjs/common';
import notificationContentData from '../contents/notification-content-data.json';
import { NotificationContentModel } from '../model/notification-content-model';

@Injectable()
export class NotificationContentService {
  // methods
  getNotificationContents(): NotificationContentModel[] {
    return notificationContentData as NotificationContentModel[];
  }
}
