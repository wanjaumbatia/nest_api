import { Injectable } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Service } from './entities/service.entity';
import { Repository } from 'typeorm';
import { CategoriesService } from 'src/categories/categories.service';

@Injectable()
export class ServicesService {
  constructor(
    @InjectRepository(Service) private serviceRepository: Repository<Service>,
    private categoriesService: CategoriesService,
  ) {}

  async create(createServiceDto: CreateServiceDto) {
    const category = await this.categoriesService.findOne(
      createServiceDto.category_id,
    );
    const service = this.serviceRepository.create({
      name: createServiceDto.name,
    });
    service.category = category;    
    return await this.serviceRepository.save(service);
  }

  findAll() {
    return this.serviceRepository.find();
  }

  findOne(id: number) {
    return this.serviceRepository.findOne({ where: { id } });
  }

  async update(id: number, updateServiceDto: UpdateServiceDto) {
    const category = await this.categoriesService.findOne(
      updateServiceDto.category_id,
    );
    const service = await this.findOne(id);
    service.name = updateServiceDto.name;
    service.category = category;
    return this.serviceRepository.update(id, { ...service });
  }

  remove(id: number) {
    return `This action removes a #${id} service`;
  }
}
