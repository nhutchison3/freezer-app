import { FreezerItemCategory } from '../../freezer-item-category/entities/freezer-item-category.entity';

export class Category {
  name: string;
}

export class CreateFreezerItemDto {
  name: string;
  date: Date;
  quantity: number;
  categoryName: string;
  itemCategory?: FreezerItemCategory;
}
