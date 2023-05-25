import { UpdateNurseDto } from './dto/update-nurse.dto';
import { Nurse } from './entities/nurse.entity';
import { Repository } from 'typeorm';
import { ServicesService } from 'src/services/services.service';
import { CategoriesService } from 'src/categories/categories.service';
import { CreateNurseTypeParams } from './dto/types/nurse.type';
export declare class NursesService {
    private nurseRepository;
    private servicesService;
    private categoriesService;
    constructor(nurseRepository: Repository<Nurse>, servicesService: ServicesService, categoriesService: CategoriesService);
    create(data: CreateNurseTypeParams, category_id: number, service_id: number): Promise<Nurse>;
    findByLocation(longitude: number, latitude: number): Promise<any[]>;
    findAll(): Promise<Nurse[]>;
    findOne(id: number): Promise<Nurse>;
    update(id: number, updateNurseDto: UpdateNurseDto): string;
    remove(id: number): Promise<import("typeorm").UpdateResult>;
}
