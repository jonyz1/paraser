import { Module } from '@nestjs/common';
import { ExcelparaserService } from './excelparaser.service';
import { ExcelparaserController } from './excelparaser.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { supplier } from 'src/entity/supplier.entity';
import { goodsservice } from 'src/entity/goodsservice.entity';

@Module({
  imports:[TypeOrmModule.forFeature([supplier,goodsservice])],
  providers: [ExcelparaserService],
  controllers: [ExcelparaserController]
})
export class ExcelparaserModule {}
