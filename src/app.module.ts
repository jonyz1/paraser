import { Module } from '@nestjs/common';

import { ExcelparaserModule } from './excelparaser/excelparaser.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { supplier } from './entity/supplier.entity';
import { goodsservice } from './entity/goodsservice.entity';

@Module({
  imports: [ExcelparaserModule,TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'yohannes',
    database: 'paraser',
    entities: [supplier,goodsservice],
    synchronize:true,
  }), ]
    ,
  controllers: [],
  providers: [],
})
export class AppModule {}
