import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { UsersService } from 'src/users/services/users/users.service';
import { NursesService } from 'src/nurses/nurses.service';
import { Appointment } from './entities/appointment.entity';
import { Repository } from 'typeorm';
export declare class AppointmentService {
    private userService;
    private nurseService;
    private appointmentRepository;
    constructor(userService: UsersService, nurseService: NursesService, appointmentRepository: Repository<Appointment>);
    create(createAppointmentDto: CreateAppointmentDto, loggedInUser: any): Promise<Appointment>;
    findAll(): string;
    myAppointments(user: any): Promise<import("../users/entities/user.entity").User>;
    findOne(id: number): string;
    update(id: number, updateAppointmentDto: UpdateAppointmentDto): string;
    remove(id: number): string;
}
