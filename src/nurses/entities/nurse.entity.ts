import { Appointment } from 'src/appointment/entities/appointment.entity';
import { Category } from 'src/categories/entities/category.entity';
import { Service } from 'src/services/entities/service.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Nurse {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column()
  title: string;

  @Column({ nullable: false })
  phone: string;

  @Column({ nullable: false })
  email: string;

  @Column({ type: 'float' })
  longitude: number;

  @Column({ type: 'float' })
  latitude: number;

  @Column({type: 'text'})
  bio: string;

  @Column()
  location: string;

  @Column({ nullable: false })
  nurse_id: string;

  @ManyToOne(() => Category, (category) => category.nurses)
  category: Category;

  @ManyToOne(() => Service, (service) => service.nurses)
  service: Service;

  @Column()
  gender: string;

  @Column()
  experience: number;

  @Column()
  certifications: string;

  @Column()
  license_number: string;

  @Column()
  date_of_birth: Date;

  @Column()
  town: string;

  @Column()
  county: string;

  @Column()
  picture: string;

  @Column({ type: 'decimal', precision: 8, scale: 2 })
  price: number;

  @Column({ default: false })
  verified: boolean;

  @Column({ default: false })
  active: boolean;

  @Column({ default: false })
  available: boolean;

  @OneToOne(() => User, (user) => user.nurse)
  user: User;

  @OneToMany(() => Appointment, (appointment) => appointment.nurse)
  appointments: Appointment[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true })
  rating: number;

}
