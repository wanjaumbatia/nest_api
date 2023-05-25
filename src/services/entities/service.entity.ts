import { Category } from 'src/categories/entities/category.entity';
import { Nurse } from 'src/nurses/entities/nurse.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Service {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  name: string;

  @Column({ type: 'decimal', precision: 8, scale: 2 })
  min_price: number;

  @ManyToOne(() => Category, (category) => category.services)
  category: Category;

  @OneToMany(() => Nurse, (nurse) => nurse.service)
  nurses: Nurse[];
}
