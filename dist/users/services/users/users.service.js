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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
const user_entity_1 = require("../../entities/user.entity");
const login_logs_entity_1 = require("../../entities/login-logs.entity");
let UsersService = class UsersService {
    constructor(userRepository, loginRepository) {
        this.userRepository = userRepository;
        this.loginRepository = loginRepository;
    }
    async findAll() {
        return this.userRepository.find();
    }
    async findById(id) {
        return this.userRepository.findOne({
            where: { id },
        });
    }
    async findOne(email) {
        return this.userRepository.findOneBy({ email: email });
    }
    async saveLoginLogs(data, userId) {
        const user = await this.userRepository.findOneBy({ id: userId });
        const log = await this.loginRepository.create(data);
        log.user = user;
        return this.loginRepository.save(log);
    }
    async createUser(name, email, phone, password) {
        const hash = await bcrypt.hash(password, 12);
        var x = new user_entity_1.User();
        x.name = name;
        x.email = email;
        x.phone = phone;
        x.password = hash;
        x.role = 'user';
        x.enabled = true;
        const user = await this.userRepository.create(x);
        const created_user = await this.userRepository.save(user);
        return created_user;
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(login_logs_entity_1.LoginLog)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map