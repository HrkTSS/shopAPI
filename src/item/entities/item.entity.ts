import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('shop_items')
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  iframe: string;
}
