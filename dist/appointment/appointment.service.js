"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/services/users/users.service");
const nurses_service_1 = require("../nurses/nurses.service");
const typeorm_1 = require("@nestjs/typeorm");
const appointment_entity_1 = require("./entities/appointment.entity");
const typeorm_2 = require("typeorm");
let AppointmentService = class AppointmentService {
    constructor(userService, nurseService, appointmentRepository) {
        this.userService = userService;
        this.nurseService = nurseService;
        this.appointmentRepository = appointmentRepository;
    }
    async create(createAppointmentDto, loggedInUser) {
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
    myAppointments(user) {
        const id = Number(user.userId);
        return this.appointmentRepository.find({
            where: {
                customer: {
                    id: id,
                },
            },
            relations: ['customer', 'nurse'],
        });
    }
    findOne(id) {
        return `This action returns a #${id} appointment`;
    }
    update(id, updateAppointmentDto) {
        return `This action updates a #${id} appointment`;
    }
    remove(id) {
        return `This action removes a #${id} appointment`;
    }
};
AppointmentService = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, typeorm_1.InjectRepository)(appointment_entity_1.Appointment)),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        nurses_service_1.NursesService,
        typeorm_2.Repository])
], AppointmentService);
exports.AppointmentService = AppointmentService;
//# sourceMappingURL=appointment.service.js.map