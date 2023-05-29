import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { LoginLog } from './login-logs.entity';
import { Nurse } from 'src/nurses/entities/nurse.entity';
import { Appointment } from 'src/appointment/entities/appointment.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  phone: string;

  @Column({ default: 'user' })
  role: string;

  @Column({ default: false })
  emailVerified: boolean;

  @Column({ default: false })
  phoneVerified: boolean;

  @Column({ default: true })
  active: boolean;

  @Column({ default: false })
  locked: boolean;

  @Column()
  password: string;

  @Column()
  enabled: boolean;

  @Column()
  avatarUr: string;

  @Column()
  otp: string;
  
  @Column()
  lastIp: string;

  @Column({ type: 'timestamp' })
  lastLoginDate: Date;

  @Column({ default: 'local' })
  provider: string;

  @Column()
  provider_id: string;

  @OneToMany(() => Appointment, (appointment) => appointment.customer)
  appointments: Appointment[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @OneToMany(() => LoginLog, (log) => log.user)
  login_logs: LoginLog[];

  @OneToOne(() => Nurse, (nurse) => nurse.user)
  nurse: Nurse;
}
