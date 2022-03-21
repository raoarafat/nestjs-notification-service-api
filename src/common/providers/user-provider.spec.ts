import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from '../services/user.service';
import { UserProvider } from './user-provider';

describe('UserProvider', () => {
  let provider: UserProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, UserProvider],
    }).compile();

    provider = module.get<UserProvider>(UserProvider);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });

  it('user equal to', () => {
    expect(
      provider.getUserById('cca6e106-2dc7-45f0-b650-08d7cee94394').id,
    ).toBe('cca6e106-2dc7-45f0-b650-08d7cee94394');
  });
});
