import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CompanyProvider } from './common/providers/company-provider';
import { NotificationProvider } from './common/providers/notification-provider';
import { UserProvider } from './common/providers/user-provider';
import { CompanyService } from './common/services/company.service';
import { EmailNotificationService } from './common/services/email-notification.service';
import { NotificationContentService } from './common/services/notification-content.service';
import { UserService } from './common/services/user.service';
import { WebNotificationService } from './common/services/web-notification.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    NotificationContentService,
    WebNotificationService,
    EmailNotificationService,
    CompanyService,
    UserService,
    NotificationProvider,
    UserProvider,
    CompanyProvider,
  ],
})
export class AppModule {}
