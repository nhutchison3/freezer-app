import { PartialType } from '@nestjs/mapped-types';
import { CreateFreezerItemCategoryDto } from './create-freezer-item-category.dto';

export class UpdateFreezerItemCategoryDto extends PartialType(
  CreateFreezerItemCategoryDto,
) {}
