import { AppointmentService } from './appointment.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
export declare class AppointmentController {
    private readonly appointmentService;
    constructor(appointmentService: AppointmentService);
    create(createAppointmentDto: CreateAppointmentDto, req: any): Promise<import("./entities/appointment.entity").Appointment>;
    myAppointments(req: any): Promise<import("../users/entities/user.entity").User>;
    findOne(id: string): string;
    update(id: string, updateAppointmentDto: UpdateAppointmentDto): string;
    remove(id: string): string;
}
