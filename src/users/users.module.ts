import { Module } from '@nestjs/common';
import { UsersService } from './services/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './controllers/users/users.controller';
import { User } from './entities/user.entity';
import { LoginLog } from './entities/login-logs.entity';

@Module({
  providers: [UsersService],
  exports: [UsersService],
  imports: [TypeOrmModule.forFeature([User, LoginLog])],
  controllers: [UsersController],
})
export class UsersModule {}
