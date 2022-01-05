import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('category_items')
export class CategoryItems {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  item_id: number;

  @Column()
  category_id: number;
}
