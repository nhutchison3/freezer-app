import { Injectable } from '@nestjs/common';
import { CreateFreezerItemCategoryDto } from './dto/create-freezer-item-category.dto';
import { UpdateFreezerItemCategoryDto } from './dto/update-freezer-item-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FreezerItemCategory } from './entities/freezer-item-category.entity';
import { Repository } from 'typeorm';
import { FreezerItem } from '../freezer-item/entities/freezer-item.entity';

@Injectable()
export class FreezerItemCategoryService {
  constructor(
    @InjectRepository(FreezerItemCategory)
    private freezerItemCategoryRepository: Repository<FreezerItemCategory>,
    @InjectRepository(FreezerItem)
    private freezerItemRepository: Repository<FreezerItem>,
  ) {}

  async create(createFreezerItemCategoryDto: CreateFreezerItemCategoryDto) {
    await this.freezerItemCategoryRepository.save(createFreezerItemCategoryDto);
  }

  findAll() {
    return this.freezerItemCategoryRepository.find({
      relations: ['items'],
    });
  }

  findOne(id: number): Promise<FreezerItemCategory> {
    return this.freezerItemCategoryRepository.findOneBy({ id });
  }

  async getItems(categoryName: string) {
    const categories = await this.freezerItemCategoryRepository.find({
      where: {
        name: categoryName,
      },
      relations: ['items'],
    });
    const items = categories.flatMap((cat) => cat.items);
    // console.log(items);
    return items;
  }

  async update(
    id: number,
    updateFreezerItemCategoryDto: UpdateFreezerItemCategoryDto,
  ) {
    await this.freezerItemCategoryRepository.update(
      { id },
      updateFreezerItemCategoryDto,
    );
  }

  async remove(id: number): Promise<void> {
    const itemCategory = await this.findOne(id);
    const items = await this.getItems(itemCategory.name);
    for (const item of items) {
      item.itemCategory = null;
      await this.freezerItemRepository.update(item.id, item);
    }
    await this.freezerItemCategoryRepository.delete({ id });
  }
}
