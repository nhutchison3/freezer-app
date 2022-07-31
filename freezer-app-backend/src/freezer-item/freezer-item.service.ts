import { Injectable } from '@nestjs/common';
import { CreateFreezerItemDto } from './dto/create-freezer-item.dto';
import { UpdateFreezerItemDto } from './dto/update-freezer-item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FreezerItem } from './entities/freezer-item.entity';
import { Repository } from 'typeorm';
import { FreezerItemCategory } from '../freezer-item-category/entities/freezer-item-category.entity';

@Injectable()
export class FreezerItemService {
  constructor(
    @InjectRepository(FreezerItem)
    private freezerItemRepository: Repository<FreezerItem>,
    @InjectRepository(FreezerItemCategory)
    private freezerItemCategoryRepository: Repository<FreezerItemCategory>,
  ) {}

  async create(createFreezerItemDto: CreateFreezerItemDto) {
    await this.freezerItemRepository.save(createFreezerItemDto);
  }

  findAll(): Promise<FreezerItem[]> {
    return this.freezerItemRepository.find({
      relations: ['itemCategory'],
    });
  }

  findOne(id: number): Promise<FreezerItem> {
    return this.freezerItemRepository.findOneBy({ id });
  }

  async update(id: number, updateFreezerItemDto: UpdateFreezerItemDto) {
    if (updateFreezerItemDto.categoryName) {
      const category = await this.freezerItemCategoryRepository.findOneBy({
        name: updateFreezerItemDto.categoryName,
      });
      updateFreezerItemDto.itemCategory = category;
    } else {
      updateFreezerItemDto.itemCategory = null;
    }
    delete updateFreezerItemDto.categoryName;
    await this.freezerItemRepository.update({ id }, updateFreezerItemDto);
  }

  async remove(id: number): Promise<void> {
    await this.freezerItemRepository.delete({ id });
  }

  // async getByCategory(categoryName: string) {
  //   return await this.freezerItemRepository.find({
  //     relations: {
  //       itemCategory: {
  //         name: true,
  //       },
  //     },
  //     where: {
  //       itemCategory.name: 'no',
  //     },
  //   });
  // }
}
