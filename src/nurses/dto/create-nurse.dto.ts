import { ApiProperty } from '@nestjs/swagger';

export class CreateNurseDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  bio: string;

  @ApiProperty()
  category_id: number;

  @ApiProperty()
  service_id: number;

  @ApiProperty()
  license_number: string;

  @ApiProperty()
  experience: number;

  @ApiProperty()
  date_of_birth: Date;

  @ApiProperty()
  gender: string;

  @ApiProperty()
  location: string;
}
