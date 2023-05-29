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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../../users/services/users/users.service");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const parser = require("ua-parser-js");
const sms_utils_1 = require("../../utils/notifications/sms.utils");
let AuthService = class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async forgotPassword(email) {
        const user = await this.usersService.findOne(email);
        if (!user)
            throw new common_1.NotFoundException();
        const userData = await this.usersService.generateOtpToken(user);
        (0, sms_utils_1.sendOtp)(userData);
        return userData;
    }
    getLoggedInUser(id) {
        return this.usersService.findById(id);
    }
    async validateUser(email, password) {
        const user = await this.usersService.findOne(email);
        if (!user)
            throw new common_1.UnauthorizedException();
        if (!(await bcrypt.compare(password, user.password))) {
            throw new common_1.UnauthorizedException();
        }
        return user;
    }
    async login(user) {
        const payload = { name: user.name, sub: user.id };
        user.password = '';
        const data = {
            id: user.id,
            name: user.name,
            role: user.role,
        };
        return {
            access_token: this.jwtService.sign(payload),
            user: data,
        };
    }
    async saveLoginLog(req, id) {
        const ua = parser(req.headers['user-agent']);
        const data = {
            ipAddress: 'string',
            browser: ua.browser.name,
            engine: ua.engine.name,
            os: ua.os.name + ' ' + ua.os.version,
            cpu: ua.cpu.architecture,
            userAgent: req.headers['user-agent'],
        };
        this.usersService.saveLoginLogs(data, id);
    }
    async createUser(data) {
        const userCheck = await this.usersService.findOne(data.email);
        if (!userCheck) {
            return this.usersService.createUser(data.name, data.email, data.phone, data.password);
        }
        else {
            throw new common_1.BadRequestException({
                message: 'Email address already registered',
            });
        }
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map