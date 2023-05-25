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
exports.NursesController = void 0;
const common_1 = require("@nestjs/common");
const nurses_service_1 = require("./nurses.service");
const create_nurse_dto_1 = require("./dto/create-nurse.dto");
const update_nurse_dto_1 = require("./dto/update-nurse.dto");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let NursesController = class NursesController {
    constructor(nursesService) {
        this.nursesService = nursesService;
    }
    create(createNurseDto) {
        return this.nursesService.create(createNurseDto, createNurseDto.category_id, createNurseDto.service_id);
    }
    async findByLocation(longitude, latitude) {
        return this.nursesService.findByLocation(longitude, latitude);
    }
    findAll() {
        return this.nursesService.findAll();
    }
    findOne(id) {
        return this.nursesService.findOne(+id);
    }
    update(id, updateNurseDto) {
        return this.nursesService.update(+id, updateNurseDto);
    }
    remove(id) {
        return this.nursesService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_nurse_dto_1.CreateNurseDto]),
    __metadata("design:returntype", void 0)
], NursesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('location'),
    __param(0, (0, common_1.Query)('longitude')),
    __param(1, (0, common_1.Query)('latitude')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], NursesController.prototype, "findByLocation", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NursesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NursesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_nurse_dto_1.UpdateNurseDto]),
    __metadata("design:returntype", void 0)
], NursesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NursesController.prototype, "remove", null);
NursesController = __decorate([
    (0, swagger_1.ApiTags)('Nurses'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('nurses'),
    __metadata("design:paramtypes", [nurses_service_1.NursesService])
], NursesController);
exports.NursesController = NursesController;
//# sourceMappingURL=nurses.controller.js.map