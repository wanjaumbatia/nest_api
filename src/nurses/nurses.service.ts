import { Injectable } from '@nestjs/common';
import { CreateNurseDto } from './dto/create-nurse.dto';
import { UpdateNurseDto } from './dto/update-nurse.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Nurse } from './entities/nurse.entity';
import { Repository } from 'typeorm';
import { ServicesService } from 'src/services/services.service';
import { CategoriesService } from 'src/categories/categories.service';
import { CreateNurseTypeParams } from './dto/types/nurse.type';

@Injectable()
export class NursesService {
  constructor(
    @InjectRepository(Nurse) private nurseRepository: Repository<Nurse>,
    private servicesService: ServicesService,
    private categoriesService: CategoriesService,
  ) {}

  
  async create(
    data: CreateNurseTypeParams,
    category_id: number,
    service_id: number,
  ) {
    const category = await this.categoriesService.findOne(category_id);
    const service = await this.servicesService.findOne(service_id);
    const nurse = await this.nurseRepository.create({ ...data });
    nurse.category = category;
    nurse.service = service;
    return await this.nurseRepository.save(nurse);
  }

  async findByLocation(longitude: number, latitude: number) {
    const earthRadiusInKm = 6371; // Approximate Earth radius in kilometers

    // Perform the database query to find the closest nurses using the Haversine formula
    const closestNurses = await this.nurseRepository
      .createQueryBuilder('nurse')
      .select('*')
      .addSelect(
        `
          (${earthRadiusInKm} * acos(
            cos(radians(${latitude})) *
            cos(radians(nurse.latitude)) *
            cos(radians(nurse.longitude) - radians(${longitude})) +
            sin(radians(${latitude})) *
            sin(radians(nurse.latitude)))
          ) as distance
        `,
      )
      .orderBy('distance', 'ASC')
      .limit(10) // Limit the results to 15 nurses
      .getRawMany();

    return closestNurses;
  }

  findAll() {
    return this.nurseRepository.find({ relations: ['category', 'service'] });
  }

  async findOne(id: number) {
    const nurse = await this.nurseRepository.findOne({
      where: { id },
      relations: ['category', 'service'],
    });
    return nurse;
  }

  update(id: number, updateNurseDto: UpdateNurseDto) {
    return `This action updates a #${id} nurse`;
  }

  remove(id: number) {
    return this.nurseRepository.softDelete(id);
  }
}
