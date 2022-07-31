import { Test, TestingModule } from '@nestjs/testing';
import { FreezerItemCategoryController } from './freezer-item-category.controller';
import { FreezerItemCategoryService } from './freezer-item-category.service';

describe('FreezerItemCategoryController', () => {
  let controller: FreezerItemCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FreezerItemCategoryController],
      providers: [FreezerItemCategoryService],
    }).compile();

    controller = module.get<FreezerItemCategoryController>(FreezerItemCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
