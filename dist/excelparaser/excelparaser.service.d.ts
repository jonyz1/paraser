import { supplier } from 'src/entity/supplier.entity';
import { goodsservice } from 'src/entity/goodsservice.entity';
import { createdto } from 'src/dto/create.dto';
import { Repository } from 'typeorm';
export declare class ExcelparaserService {
    private readonly supplierRepository;
    private readonly goodsRepository;
    constructor(supplierRepository: Repository<supplier>, goodsRepository: Repository<goodsservice>);
    parseExcel(): Promise<void>;
    saver(good: goodsservice, supliers: createdto, check: any, businessArea: any[], name: string): Promise<void>;
    checker(holder: string[]): number;
}
