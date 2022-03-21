import { Test, TestingModule } from '@nestjs/testing';
import { CompanyService } from '../services/company.service';
import { CompanyProvider } from './company-provider';

describe('CompanyProvider', () => {
  let provider: CompanyProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompanyService, CompanyProvider],
    }).compile();

    provider = module.get<CompanyProvider>(CompanyProvider);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });

  it('user equal to', () => {
    expect(
      provider.getCompanyById('g3a6e106-2dc7-45f0-b650-08d7cee9439e').id,
    ).toBe('g3a6e106-2dc7-45f0-b650-08d7cee9439e');
  });
});
