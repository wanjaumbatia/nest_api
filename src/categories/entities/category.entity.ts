import { Nurse } from 'src/nurses/entities/nurse.entity';
import { Service } from 'src/services/entities/service.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  name: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @OneToMany(() => Nurse, (nurse) => nurse.category)
  nurses: Nurse[];

  @OneToMany(() => Service, (service) => service.category)
  services: Service[];
}
