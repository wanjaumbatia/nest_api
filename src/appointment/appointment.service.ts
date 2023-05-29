import { Injectable } from '@nestjs/common';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { UsersService } from 'src/users/services/users/users.service';
import { NursesService } from 'src/nurses/nurses.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Appointment } from './entities/appointment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppointmentService {
  constructor(
    private userService: UsersService,
    private nurseService: NursesService,
    @InjectRepository(Appointment)
    private appointmentRepository: Repository<Appointment>,
  ) {}


  async create(createAppointmentDto: CreateAppointmentDto, loggedInUser: any) {
    const user = await this.userService.findById(loggedInUser.userId);
    const nurse = await this.nurseService.findOne(createAppointmentDto.nurseId);

    const appointment = await this.appointmentRepository.create({
      startTime: createAppointmentDto.start,
      endTime: createAppointmentDto.stop,
    });

    appointment.customer = user;
    appointment.nurse = nurse;
    appointment.service = nurse.service.name;
    appointment.area = createAppointmentDto.area;
    appointment.landmark = createAppointmentDto.landmark;
    appointment.town = createAppointmentDto.town;
    appointment.latitude = createAppointmentDto.latitude;
    appointment.longitude = createAppointmentDto.longitude;
    appointment.category = nurse.category.name;
    return await this.appointmentRepository.save(appointment);
  }

  findAll() {
    return `This action returns all appointment`;
  }

  myAppointments(user: any) {
    console.log(user);
    return this.userService.getAppointments(+user.id);
  }

  findOne(id: number) {
    return `This action returns a #${id} appointment`;
  }

  update(id: number, updateAppointmentDto: UpdateAppointmentDto) {
    return `This action updates a #${id} appointment`;
  }

  remove(id: number) {
    return `This action removes a #${id} appointment`;
  }
}
