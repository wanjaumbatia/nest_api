import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { NursesService } from './nurses.service';
import { CreateNurseDto } from './dto/create-nurse.dto';
import { UpdateNurseDto } from './dto/update-nurse.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('Nurses')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('nurses')
export class NursesController {
  constructor(private readonly nursesService: NursesService) {}

  @Post()
  create(@Body() createNurseDto: CreateNurseDto) {
    return this.nursesService.create(
      createNurseDto,
      createNurseDto.category_id,
      createNurseDto.service_id,
    );
  }

  @Get('location')
  async findByLocation(
    @Query('longitude') longitude: number,
    @Query('latitude') latitude: number,
  ) {
    return this.nursesService.findByLocation(longitude, latitude);
  }

  @Get()
  findAll() {
    return this.nursesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nursesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNurseDto: UpdateNurseDto) {
    return this.nursesService.update(+id, updateNurseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nursesService.remove(+id);
  }
}
