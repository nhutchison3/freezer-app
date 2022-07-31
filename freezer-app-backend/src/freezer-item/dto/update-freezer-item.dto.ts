import { PartialType } from '@nestjs/mapped-types';
import { CreateFreezerItemDto } from './create-freezer-item.dto';

export class UpdateFreezerItemDto extends PartialType(CreateFreezerItemDto) {}
