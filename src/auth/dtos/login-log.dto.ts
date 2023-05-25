import { ApiProperty } from '@nestjs/swagger';

export class LoginLogDto {
  ipAddress: string;
  browser: string;
  engine: string;
  os: string;
  cpu: string;
  userAgent: string;
}
