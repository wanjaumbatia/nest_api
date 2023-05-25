import { Category } from 'src/categories/entities/category.entity';
import { Nurse } from 'src/nurses/entities/nurse.entity';
export declare class Service {
    id: number;
    name: string;
    min_price: number;
    category: Category;
    nurses: Nurse[];
}
