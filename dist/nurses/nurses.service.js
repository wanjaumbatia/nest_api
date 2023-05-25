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
exports.NursesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nurse_entity_1 = require("./entities/nurse.entity");
const typeorm_2 = require("typeorm");
const services_service_1 = require("../services/services.service");
const categories_service_1 = require("../categories/categories.service");
let NursesService = class NursesService {
    constructor(nurseRepository, servicesService, categoriesService) {
        this.nurseRepository = nurseRepository;
        this.servicesService = servicesService;
        this.categoriesService = categoriesService;
    }
    async create(data, category_id, service_id) {
        const category = await this.categoriesService.findOne(category_id);
        const service = await this.servicesService.findOne(service_id);
        const nurse = await this.nurseRepository.create(Object.assign({}, data));
        nurse.category = category;
        nurse.service = service;
        return await this.nurseRepository.save(nurse);
    }
    async findByLocation(longitude, latitude) {
        const earthRadiusInKm = 6371;
        const closestNurses = await this.nurseRepository
            .createQueryBuilder('nurse')
            .select('*')
            .addSelect(`
          (${earthRadiusInKm} * acos(
            cos(radians(${latitude})) *
            cos(radians(nurse.latitude)) *
            cos(radians(nurse.longitude) - radians(${longitude})) +
            sin(radians(${latitude})) *
            sin(radians(nurse.latitude)))
          ) as distance
        `)
            .orderBy('distance', 'ASC')
            .limit(10)
            .getRawMany();
        return closestNurses;
    }
    findAll() {
        return this.nurseRepository.find({ relations: ['category', 'service'] });
    }
    async findOne(id) {
        const nurse = await this.nurseRepository.findOne({
            where: { id },
            relations: ['category', 'service'],
        });
        return nurse;
    }
    update(id, updateNurseDto) {
        return `This action updates a #${id} nurse`;
    }
    remove(id) {
        return this.nurseRepository.softDelete(id);
    }
};
NursesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(nurse_entity_1.Nurse)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        services_service_1.ServicesService,
        categories_service_1.CategoriesService])
], NursesService);
exports.NursesService = NursesService;
//# sourceMappingURL=nurses.service.js.map