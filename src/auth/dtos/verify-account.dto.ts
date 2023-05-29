import { ApiProperty } from '@nestjs/swagger';

export class VerifyAccountDto {
  @ApiProperty()
  email: string;
  @ApiProperty()
  code: string;
}
