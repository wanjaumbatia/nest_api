import { LoginLog } from './login-logs.entity';
import { Nurse } from 'src/nurses/entities/nurse.entity';
import { Appointment } from 'src/appointment/entities/appointment.entity';
export declare class User {
    id: number;
    name: string;
    email: string;
    phone: string;
    role: string;
    emailVerified: boolean;
    phoneVerified: boolean;
    active: boolean;
    locked: boolean;
    password: string;
    enabled: boolean;
    avatarUr: string;
    otp: string;
    lastIp: string;
    lastLoginDate: Date;
    provider: string;
    provider_id: string;
    appointments: Appointment[];
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    login_logs: LoginLog[];
    nurse: Nurse;
}
