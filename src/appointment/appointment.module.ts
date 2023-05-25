import { Module } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { AppointmentController } from './appointment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Appointment } from './entities/appointment.entity';
import { UsersModule } from 'src/users/users.module';
import { NursesModule } from 'src/nurses/nurses.module';

@Module({
  controllers: [AppointmentController],
  providers: [AppointmentService],
  imports: [TypeOrmModule.forFeature([Appointment]), UsersModule, NursesModule], 
})
export class AppointmentModule {}
