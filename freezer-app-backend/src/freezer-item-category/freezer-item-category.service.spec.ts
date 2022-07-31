import { Test, TestingModule } from '@nestjs/testing';
import { FreezerItemCategoryService } from './freezer-item-category.service';

describe('FreezerItemCategoryService', () => {
  let service: FreezerItemCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FreezerItemCategoryService],
    }).compile();

    service = module.get<FreezerItemCategoryService>(FreezerItemCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
