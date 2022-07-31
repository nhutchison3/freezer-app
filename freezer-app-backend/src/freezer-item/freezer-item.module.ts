import { Module } from '@nestjs/common';
import { FreezerItemService } from './freezer-item.service';
import { FreezerItemController } from './freezer-item.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FreezerItem } from './entities/freezer-item.entity';
import { FreezerItemCategoryService } from '../freezer-item-category/freezer-item-category.service';
import { FreezerItemCategory } from '../freezer-item-category/entities/freezer-item-category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FreezerItem, FreezerItemCategory])],
  controllers: [FreezerItemController],
  providers: [FreezerItemService],
})
export class FreezerItemModule {}
