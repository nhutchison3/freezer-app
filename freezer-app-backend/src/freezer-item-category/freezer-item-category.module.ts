import { Module } from '@nestjs/common';
import { FreezerItemCategoryService } from './freezer-item-category.service';
import { FreezerItemCategoryController } from './freezer-item-category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FreezerItemCategory } from './entities/freezer-item-category.entity';
import { FreezerItem } from '../freezer-item/entities/freezer-item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FreezerItemCategory, FreezerItem])],
  controllers: [FreezerItemCategoryController],
  providers: [FreezerItemCategoryService],
  exports: [FreezerItemCategoryService],
})
export class FreezerItemCategoryModule {}
