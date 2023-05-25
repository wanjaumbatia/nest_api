import { Module } from '@nestjs/common';
import { NursesService } from './nurses.service';
import { NursesController } from './nurses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Nurse } from './entities/nurse.entity';
import { CategoriesModule } from 'src/categories/categories.module';
import { ServicesModule } from 'src/services/services.module';

@Module({
  controllers: [NursesController],
  providers: [NursesService],
  imports: [TypeOrmModule.forFeature([Nurse]), CategoriesModule, ServicesModule],
  exports: [NursesService]
})
export class NursesModule {}
