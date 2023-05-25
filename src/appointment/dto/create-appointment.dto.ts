import { ApiProperty } from '@nestjs/swagger';

export class CreateAppointmentDto {
    
  @ApiProperty()
  nurse_id: number;

  @ApiProperty()
  start: Date;

  @ApiProperty()
  stop: Date;

  @ApiProperty()
  longitude: number;

  @ApiProperty()
  latitude: number;

  @ApiProperty()
  landmark: string;

  @ApiProperty()
  area: string;

  @ApiProperty()
  town: string;
}
