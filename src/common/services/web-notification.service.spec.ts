import { Test, TestingModule } from '@nestjs/testing';
import { EmailModel } from '../model/email-model';
import { WebModel } from '../model/web-model';
import { WebNotificationService } from './web-notification.service';

describe('WebNotificationService', () => {
  let provider: WebNotificationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WebNotificationService],
    }).compile();

    provider = module.get<WebNotificationService>(WebNotificationService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });

  it('send web', () => {
    // create web model object
    const webModel: WebModel = new WebModel();
    webModel.userId = 'bba6e106-2dc7-45f0-b650-08d7cee943rr';
    webModel.title = 'Happy Birthday!!';
    webModel.content = 'Happy Birthday {0}';

    expect(provider.sendNotification(webModel)).toBe(true);
  });
});
