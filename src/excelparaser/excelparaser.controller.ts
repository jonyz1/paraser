import { Body, Controller, Get, Post } from '@nestjs/common';
import { ExcelparaserService } from './excelparaser.service';
import { createjson } from 'src/dto/json.dto';

@Controller('excelparaser')
export class ExcelparaserController {
    constructor(private service:ExcelparaserService){}
    @Get()
    async paraseexcel(){
         await this.service.parseExcel()

    }
}
