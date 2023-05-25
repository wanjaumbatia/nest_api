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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
const category_entity_1 = require("../../categories/entities/category.entity");
const nurse_entity_1 = require("../../nurses/entities/nurse.entity");
const typeorm_1 = require("typeorm");
let Service = class Service {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint' }),
    __metadata("design:type", Number)
], Service.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Service.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 8, scale: 2 }),
    __metadata("design:type", Number)
], Service.prototype, "min_price", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => category_entity_1.Category, (category) => category.services),
    __metadata("design:type", category_entity_1.Category)
], Service.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => nurse_entity_1.Nurse, (nurse) => nurse.service),
    __metadata("design:type", Array)
], Service.prototype, "nurses", void 0);
Service = __decorate([
    (0, typeorm_1.Entity)()
], Service);
exports.Service = Service;
//# sourceMappingURL=service.entity.js.map