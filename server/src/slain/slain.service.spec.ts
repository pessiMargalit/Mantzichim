import { Test, TestingModule } from '@nestjs/testing';
import { SlainService } from './slain.service';

describe('SlainService', () => {
  let service: SlainService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SlainService],
    }).compile();

    service = module.get<SlainService>(SlainService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
