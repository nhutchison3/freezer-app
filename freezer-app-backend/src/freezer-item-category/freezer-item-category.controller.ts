import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { FreezerItemCategoryService } from './freezer-item-category.service';
import { CreateFreezerItemCategoryDto } from './dto/create-freezer-item-category.dto';
import { UpdateFreezerItemCategoryDto } from './dto/update-freezer-item-category.dto';

@Controller('freezer-item-category')
export class FreezerItemCategoryController {
  constructor(
    private readonly freezerItemCategoryService: FreezerItemCategoryService,
  ) {}

  @Post()
  create(@Body() createFreezerItemCategoryDto: CreateFreezerItemCategoryDto) {
    return this.freezerItemCategoryService.create(createFreezerItemCategoryDto);
  }

  @Get()
  findAll() {
    return this.freezerItemCategoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.freezerItemCategoryService.findOne(+id);
  }

  @Post('get-items')
  async getByCategory(@Body('categoryName') categoryName: string) {
    return await this.freezerItemCategoryService.getItems(categoryName);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateFreezerItemCategoryDto: UpdateFreezerItemCategoryDto,
  ) {
    return this.freezerItemCategoryService.update(
      +id,
      updateFreezerItemCategoryDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.freezerItemCategoryService.remove(+id);
  }
}
