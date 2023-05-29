import { ApiProperty } from '@nestjs/swagger';
import {IsString, IsEmail, IsPhoneNumber} from 'class-validator'
export class RegisterDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsPhoneNumber()
  phone: string;

  @ApiProperty()
  @IsString()
  password: string;
}
