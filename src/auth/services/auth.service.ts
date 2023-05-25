import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import * as parser from 'ua-parser-js';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoginLogDto } from '../dtos/login-log.dto';
import { RegisterDto } from '../dtos/register.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  getLoggedInUser(id: number) {
    return this.usersService.findById(id);
  }
  async validateUser(email: string, password: string): Promise<any> {    
    const user = await this.usersService.findOne(email);
    if (!user) throw new UnauthorizedException();

    if (!(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException();
    }
    return user;
  }

  async login(user: any) {
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

  async saveLoginLog(req: Request, id: number) {
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

  async createUser(data: RegisterDto) {
    const userCheck = await this.usersService.findOne(data.email);
    if (!userCheck) {
      return this.usersService.createUser(
        data.name,
        data.email,
        data.phone,
        data.password,
      );
    } else {
      throw new BadRequestException({
        message: 'Email address already registered',
      });
    }
  }
}
