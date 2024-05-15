import { Test, TestingModule } from '@nestjs/testing';
import { ExcelparaserController } from './excelparaser.controller';

describe('ExcelparaserController', () => {
  let controller: ExcelparaserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExcelparaserController],
    }).compile();

    controller = module.get<ExcelparaserController>(ExcelparaserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
