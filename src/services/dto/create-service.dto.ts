import { ApiProperty } from '@nestjs/swagger';

export class CreateServiceDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  category_id: number;
}
