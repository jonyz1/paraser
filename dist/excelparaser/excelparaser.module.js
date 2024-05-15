"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExcelparaserModule = void 0;
const common_1 = require("@nestjs/common");
const excelparaser_service_1 = require("./excelparaser.service");
const excelparaser_controller_1 = require("./excelparaser.controller");
const typeorm_1 = require("@nestjs/typeorm");
const supplier_entity_1 = require("../entity/supplier.entity");
const goodsservice_entity_1 = require("../entity/goodsservice.entity");
let ExcelparaserModule = class ExcelparaserModule {
};
exports.ExcelparaserModule = ExcelparaserModule;
exports.ExcelparaserModule = ExcelparaserModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([supplier_entity_1.supplier, goodsservice_entity_1.goodsservice])],
        providers: [excelparaser_service_1.ExcelparaserService],
        controllers: [excelparaser_controller_1.ExcelparaserController]
    })
], ExcelparaserModule);
//# sourceMappingURL=excelparaser.module.js.map