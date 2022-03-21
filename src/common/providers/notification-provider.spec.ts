import { Test, TestingModule } from '@nestjs/testing';
import { WebModel } from '../model/web-model';
import { NotificationParameterPayload } from '../payload/notification-parameter-payload';
import { CompanyService } from '../services/company.service';
import { EmailNotificationService } from '../services/email-notification.service';
import { NotificationContentService } from '../services/notification-content.service';
import { UserService } from '../services/user.service';
import { WebNotificationService } from '../services/web-notification.service';
import { CompanyProvider } from './company-provider';
import { NotificationProvider } from './notification-provider';
import { UserProvider } from './user-provider';

describe('NotificationProvider', () => {
  let provider: NotificationProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        NotificationProvider,
        NotificationContentService,
        UserProvider,
        CompanyProvider,
        WebNotificationService,
        EmailNotificationService,
        UserService,
        CompanyService,
      ],
    }).compile();

    provider = module.get<NotificationProvider>(NotificationProvider);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });

  it('getNotificationContent', () => {
    expect(
      provider.getNotificationContent('leave-balance-reminder').title,
    ).toBe('Leave Reminder');
  });

  it('send notification', () => {
    const notificationParameterPayload = new NotificationParameterPayload();
    notificationParameterPayload.companyId =
      'g3a6e106-2dc7-45f0-b650-08d7cee9439e';
    notificationParameterPayload.userId =
      'bba6e106-2dc7-45f0-b650-08d7cee943rr';
    notificationParameterPayload.notificationType = 'happy-birthday';
    notificationParameterPayload.notificationChannel = 'Web';

    expect(provider.sendNotification(notificationParameterPayload)).toBe(true);
  });

  it('getWebNotificationCount', () => {
    // create web model object
    const webModel: WebModel = new WebModel();
    webModel.userId = 'bba6e106-2dc7-45f0-b650-08d7cee943rr';
    webModel.title = 'Happy Birthday!!';
    webModel.content = 'Happy Birthday {0}';

    provider.webNotificationList.push(webModel);

    expect(
      provider.getWebNotificationByUserId(
        'bba6e106-2dc7-45f0-b650-08d7cee943rr',
      ).length,
    ).toBe(provider.webNotificationList.length);
  });
});
