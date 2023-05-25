import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from 'src/users/entities/user.entity';
import { LoginLog } from 'src/users/entities/login-logs.entity';
import { LoginLogDto } from 'src/users/dtos/login-log.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(LoginLog) private loginRepository: Repository<LoginLog>,
  ) {}

  async findAll() {
    return this.userRepository.find();
  }

  async findById(id: number) {
    return this.userRepository.findOne({
      where: { id },
    });
  }

  async findOne(email: string): Promise<User> {
    return this.userRepository.findOneBy({ email: email });
  }

  async saveLoginLogs(data: LoginLogDto, userId: number) {
    const user = await this.userRepository.findOneBy({ id: userId });
    const log = await this.loginRepository.create(data);
    log.user = user;
    return this.loginRepository.save(log);
  }

  async createUser(
    name: string,
    email: string,
    phone: string,
    password: string,
  ) {
    const hash = await bcrypt.hash(password, 12);    
    var x = new User();
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
}
