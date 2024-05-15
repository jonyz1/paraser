import { ExcelparaserService } from './excelparaser.service';
export declare class ExcelparaserController {
    private service;
    constructor(service: ExcelparaserService);
    paraseexcel(): Promise<void>;
}
