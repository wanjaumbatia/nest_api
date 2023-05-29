import {
  Controller,
  Post,
  UseGuards,
  Request,
  Get,
  Body,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { LoginDto } from 'src/auth/dtos/login.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { AuthService } from 'src/auth/services/auth.service';
import { RegisterDto } from '../dtos/register.dto';
import { ForgotPasswordDto } from '../dtos/forgot-password.dto';
import { VerifyAccountDto } from '../dtos/verify-account.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private service: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req, @Body() body: LoginDto) {
    const user = await this.service.login(req.user);
    await this.service.saveLoginLog(req, user.user.id);
    return user;
  }

  @Post('register')
  async registerByEmail(@Body() body: RegisterDto) {
    const user = await this.service.createUser(body);
    return this.service.login(user);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('user')
  async User(@Request() req): Promise<any> {
    return this.service.getLoggedInUser(req.user.id);
  }

  @Post('forgot-password')
  forgotPassword(@Body() data: ForgotPasswordDto) {
    return this.service.forgotPassword(data.email);
  }

  @Post('verify-account')
  verifyAccount(@Body() data: VerifyAccountDto) {
    console.log(data);
  }
}
