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
import { FreezerItemService } from './freezer-item.service';
import { CreateFreezerItemDto } from './dto/create-freezer-item.dto';
import { UpdateFreezerItemDto } from './dto/update-freezer-item.dto';

@Controller('freezer-item')
export class FreezerItemController {
  constructor(private readonly freezerItemService: FreezerItemService) {}

  @Post()
  create(@Body() createFreezerItemDto: CreateFreezerItemDto) {
    return this.freezerItemService.create(createFreezerItemDto);
  }

  @Get()
  findAll() {
    return this.freezerItemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.freezerItemService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateFreezerItemDto: UpdateFreezerItemDto,
  ) {
    return this.freezerItemService.update(+id, updateFreezerItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.freezerItemService.remove(+id);
  }

  @Post('delete')
  async removeMany(@Body('ids') ids: number[]) {
    Promise.all(
      ids.map((id) => {
        return this.freezerItemService.remove(id);
      }),
    ).catch((err) => {
      console.log(err);
    });
  }
}
