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
exports.ServicesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const service_entity_1 = require("./entities/service.entity");
const typeorm_2 = require("typeorm");
const categories_service_1 = require("../categories/categories.service");
let ServicesService = class ServicesService {
    constructor(serviceRepository, categoriesService) {
        this.serviceRepository = serviceRepository;
        this.categoriesService = categoriesService;
    }
    async create(createServiceDto) {
        const category = await this.categoriesService.findOne(createServiceDto.category_id);
        const service = this.serviceRepository.create({
            name: createServiceDto.name,
        });
        service.category = category;
        return await this.serviceRepository.save(service);
    }
    findAll() {
        return this.serviceRepository.find();
    }
    findOne(id) {
        return this.serviceRepository.findOne({ where: { id } });
    }
    async update(id, updateServiceDto) {
        const category = await this.categoriesService.findOne(updateServiceDto.category_id);
        const service = await this.findOne(id);
        service.name = updateServiceDto.name;
        service.category = category;
        return this.serviceRepository.update(id, Object.assign({}, service));
    }
    remove(id) {
        return `This action removes a #${id} service`;
    }
};
ServicesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(service_entity_1.Service)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        categories_service_1.CategoriesService])
], ServicesService);
exports.ServicesService = ServicesService;
//# sourceMappingURL=services.service.js.map