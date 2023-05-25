import { Nurse } from 'src/nurses/entities/nurse.entity';
import { User } from 'src/users/entities/user.entity';
export declare class Appointment {
    id: number;
    nurse: Nurse;
    customer: User;
    service: string;
    category: string;
    landmark: string;
    area: string;
    town: string;
    county: string;
    status: string;
    startTime: Date;
    endTime: Date;
    atPremise: boolean;
    longitude: number;
    latitude: number;
    price: number;
    payout: number;
    commission: number;
    payed: boolean;
    paymentType: string;
    paymentReference: string;
    settled: boolean;
    customerRating: number;
    nurseRating: number;
    customerRemarks: string;
    nurseRemarks: string;
    rescheduledFrom: string;
    rescheduledOn: Date;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
