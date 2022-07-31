import { Test, TestingModule } from '@nestjs/testing';
import { FreezerItemService } from './freezer-item.service';

describe('FreezerItemService', () => {
  let service: FreezerItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FreezerItemService],
    }).compile();

    service = module.get<FreezerItemService>(FreezerItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
