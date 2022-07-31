import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { FreezerItemCategory } from '../../freezer-item-category/entities/freezer-item-category.entity';

@Entity()
export class FreezerItem {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'int' })
  quantity: number;

  @Column({ type: 'date' })
  date: Date;

  @ManyToOne(
    () => FreezerItemCategory,
    (freezerItemCategory) => freezerItemCategory.items,
  )
  itemCategory: FreezerItemCategory;
}
