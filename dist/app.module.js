"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const users_module_1 = require("./users/users.module");
const auth_module_1 = require("./auth/auth.module");
const user_entity_1 = require("./users/entities/user.entity");
const login_logs_entity_1 = require("./users/entities/login-logs.entity");
const nurses_module_1 = require("./nurses/nurses.module");
const categories_module_1 = require("./categories/categories.module");
const category_entity_1 = require("./categories/entities/category.entity");
const nurse_entity_1 = require("./nurses/entities/nurse.entity");
const services_module_1 = require("./services/services.module");
const service_entity_1 = require("./services/entities/service.entity");
const appointment_module_1 = require("./appointment/appointment.module");
const appointment_entity_1 = require("./appointment/entities/appointment.entity");
const payments_module_1 = require("./payments/payments.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            auth_module_1.AuthModule,
            appointment_module_1.AppointmentModule,
            nurses_module_1.NursesModule,
            categories_module_1.CategoriesModule,
            services_module_1.ServicesModule,
            users_module_1.UsersModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: '',
                database: 'app',
                entities: [user_entity_1.User, login_logs_entity_1.LoginLog, category_entity_1.Category, nurse_entity_1.Nurse, service_entity_1.Service, appointment_entity_1.Appointment],
                synchronize: true,
            }),
            payments_module_1.PaymentsModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map