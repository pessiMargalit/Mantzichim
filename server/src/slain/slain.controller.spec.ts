import { Test, TestingModule } from '@nestjs/testing';
import { SlainController } from './slain.controller';

describe('SlainController', () => {
  let controller: SlainController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SlainController],
    }).compile();

    controller = module.get<SlainController>(SlainController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
