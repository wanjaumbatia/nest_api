import { Nurse } from 'src/nurses/entities/nurse.entity';
import { Service } from 'src/services/entities/service.entity';
export declare class Category {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    nurses: Nurse[];
    services: Service[];
}
