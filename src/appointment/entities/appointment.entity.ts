import { Nurse } from 'src/nurses/entities/nurse.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Appointment {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @ManyToOne(() => Nurse, (nurse) => nurse.appointments)
  nurse: Nurse;

  @ManyToOne(() => User, (user) => user.appointments)
  customer: User;

  @Column()
  service: string;

  @Column()
  category: string;

  @Column()
  landmark: string;
  
  @Column()
  area: string;
  
  @Column()
  town: string;
  
  @Column()
  county: string;

  @Column({
    default: 'pending',
  })
  status: string;

  @Column()
  startTime: Date;

  @Column()
  endTime: Date;

  @Column()
  atPremise: boolean;

  @Column({ type: 'float' })
  longitude: number;

  @Column({ type: 'float' })
  latitude: number;

  @Column({ type: 'decimal', precision: 8, scale: 2 })
  price: number;

  @Column({ type: 'decimal', precision: 8, scale: 2 })
  payout: number;

  @Column({ type: 'decimal', precision: 8, scale: 2 })
  commission: number;

  @Column()
  payed: boolean;

  @Column()
  paymentType: string;

  @Column()
  paymentReference: string;

  @Column({ default: false })
  settled: boolean;

  @Column()
  customerRating: number;

  @Column()
  nurseRating: number;

  @Column()
  customerRemarks: string;

  @Column()
  nurseRemarks: string;

  @Column()
  rescheduledFrom: string;

  @Column()
  rescheduledOn: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
