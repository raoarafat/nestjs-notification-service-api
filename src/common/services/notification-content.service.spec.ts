import { Test, TestingModule } from '@nestjs/testing';
import { NotificationContentService } from './notification-content.service';

describe('NotificationContentService', () => {
  let provider: NotificationContentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotificationContentService],
    }).compile();

    provider = module.get<NotificationContentService>(
      NotificationContentService,
    );
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });

  it('user equal to', () => {
    expect(provider.getNotificationContents().length).toBe(3);
  });
});
