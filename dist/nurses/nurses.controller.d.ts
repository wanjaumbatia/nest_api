import { NursesService } from './nurses.service';
import { CreateNurseDto } from './dto/create-nurse.dto';
import { UpdateNurseDto } from './dto/update-nurse.dto';
export declare class NursesController {
    private readonly nursesService;
    constructor(nursesService: NursesService);
    create(createNurseDto: CreateNurseDto): Promise<import("./entities/nurse.entity").Nurse>;
    findByLocation(longitude: number, latitude: number): Promise<any[]>;
    findAll(): Promise<import("./entities/nurse.entity").Nurse[]>;
    findOne(id: string): Promise<import("./entities/nurse.entity").Nurse>;
    update(id: string, updateNurseDto: UpdateNurseDto): string;
    remove(id: string): Promise<import("typeorm").UpdateResult>;
}
