import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { Service } from './entities/service.entity';
import { Repository } from 'typeorm';
import { CategoriesService } from 'src/categories/categories.service';
export declare class ServicesService {
    private serviceRepository;
    private categoriesService;
    constructor(serviceRepository: Repository<Service>, categoriesService: CategoriesService);
    create(createServiceDto: CreateServiceDto): Promise<Service>;
    findAll(): Promise<Service[]>;
    findOne(id: number): Promise<Service>;
    update(id: number, updateServiceDto: UpdateServiceDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): string;
}
