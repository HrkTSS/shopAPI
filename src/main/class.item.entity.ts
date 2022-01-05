import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('class_items')
export class ClassItems {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  item_id: number;

  @Column()
  class_id: number;
}
