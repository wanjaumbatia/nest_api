import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { User } from './users/entities/user.entity';
import { LoginLog } from './users/entities/login-logs.entity';
import { NursesModule } from './nurses/nurses.module';
import { CategoriesModule } from './categories/categories.module';
import { Category } from './categories/entities/category.entity';
import { Nurse } from './nurses/entities/nurse.entity';
import { ServicesModule } from './services/services.module';
import { Service } from './services/entities/service.entity';
import { AppointmentModule } from './appointment/appointment.module';
import { Appointment } from './appointment/entities/appointment.entity';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [
    AuthModule,
    AppointmentModule,
    NursesModule,
    CategoriesModule,
    ServicesModule,
    UsersModule,
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'ls-82e8acd89b2b7ee7a1d83094c0e99a7fb17ac2ce.coxvb9fwz3ty.ap-south-1.rds.amazonaws.com',
    //   port: 3306,
    //   username: 'root',
    //   password: 'afyaplug',
    //   database: 'afyaplug',
    //   entities: [User, LoginLog, Category, Nurse, Service, Appointment],
    //   synchronize: true,
    // }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'app',
      entities: [User, LoginLog, Category, Nurse, Service, Appointment],
      synchronize: true,
    }),
    PaymentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
