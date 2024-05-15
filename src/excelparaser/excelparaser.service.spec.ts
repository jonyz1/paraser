import { Test, TestingModule } from '@nestjs/testing';
import { ExcelparaserService } from './excelparaser.service';

describe('ExcelparaserService', () => {
  let service: ExcelparaserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExcelparaserService],
    }).compile();

    service = module.get<ExcelparaserService>(ExcelparaserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
