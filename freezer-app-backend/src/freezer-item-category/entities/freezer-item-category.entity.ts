import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { FreezerItem } from '../../freezer-item/entities/freezer-item.entity';

@Entity()
export class FreezerItemCategory {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column()
  name: string;

  @OneToMany(() => FreezerItem, (freezerItem) => freezerItem.itemCategory, {
    nullable: true,
  })
  items: FreezerItem[];
}
