import { Test, TestingModule } from '@nestjs/testing';
import { FreezerItemController } from './freezer-item.controller';
import { FreezerItemService } from './freezer-item.service';

describe('FreezerItemController', () => {
  let controller: FreezerItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FreezerItemController],
      providers: [FreezerItemService],
    }).compile();

    controller = module.get<FreezerItemController>(FreezerItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
