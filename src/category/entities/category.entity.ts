import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('shop_categories')
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column()
  icon: string;

  @Column()
  color: string;
}
