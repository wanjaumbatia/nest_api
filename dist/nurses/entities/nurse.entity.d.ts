import { Appointment } from 'src/appointment/entities/appointment.entity';
import { Category } from 'src/categories/entities/category.entity';
import { Service } from 'src/services/entities/service.entity';
import { User } from 'src/users/entities/user.entity';
export declare class Nurse {
    id: number;
    name: string;
    title: string;
    phone: string;
    email: string;
    longitude: number;
    latitude: number;
    bio: string;
    location: string;
    nurse_id: string;
    category: Category;
    service: Service;
    gender: string;
    experience: number;
    certifications: string;
    license_number: string;
    date_of_birth: Date;
    town: string;
    county: string;
    picture: string;
    price: number;
    verified: boolean;
    active: boolean;
    available: boolean;
    user: User;
    appointments: Appointment[];
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    rating: number;
}
