import { Test, TestingModule } from '@nestjs/testing';
import { EmailModel } from '../model/email-model';
import { EmailNotificationService } from './email-notification.service';

describe('EmailNotificationService', () => {
  let provider: EmailNotificationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmailNotificationService],
    }).compile();

    provider = module.get<EmailNotificationService>(EmailNotificationService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });

  it('send email', () => {
    // create email model object
    const emailModel: EmailModel = new EmailModel();
    emailModel.to = 'Honda@yopmail.com';
    emailModel.subject = 'Monthly Payslip';
    emailModel.body = 'Attached is your ${month} payslip';

    expect(provider.sendNotification(emailModel)).toBe(true);
  });
});
