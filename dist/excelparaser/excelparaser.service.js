"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExcelparaserService = void 0;
const common_1 = require("@nestjs/common");
const samplejson_1 = require("./samplejson");
const supplier_entity_1 = require("../entity/supplier.entity");
const goodsservice_entity_1 = require("../entity/goodsservice.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let ExcelparaserService = class ExcelparaserService {
    constructor(supplierRepository, goodsRepository) {
        this.supplierRepository = supplierRepository;
        this.goodsRepository = goodsRepository;
    }
    async parseExcel() {
        const suppliers = [];
        const businessArea = [];
        for (let i = 0; i < samplejson_1.allfile.length; i++) {
            let supliers;
            let good = new goodsservice_entity_1.goodsservice();
            let service = new goodsservice_entity_1.goodsservice();
            supliers = samplejson_1.allfile[i];
            console.log("created entitydata");
            suppliers.push(supliers);
            let holder = samplejson_1.allfile[i].goods_category.split(" ");
            await this.saver(good, supliers, this.checker(holder), businessArea, "goods_category");
            let holderserv = samplejson_1.allfile[i].services_category.split(" ");
            await this.saver(service, supliers, this.checker(holderserv), businessArea, "services_category");
        }
        await this.supplierRepository.save(suppliers);
        await this.goodsRepository.save(businessArea);
    }
    async saver(good, supliers, check, businessArea, name) {
        if (check) {
            good.from = check == null ? null : 1;
            good.to = check;
            good.category = name;
            good.suplier = supliers;
            businessArea.push(good);
            console.log(name);
        }
    }
    checker(holder) {
        if (holder[0] !== "None") {
            let hol;
            let match = holder[2].match(/MK(\d+)/);
            let num = parseInt(match[1].toString(), 10);
            match[0];
            if (holder[3]) {
                if (holder[3] == "Million") {
                    return num * 1000000;
                }
                else if (holder[3] == "Billion") {
                    return num * 1000000000;
                }
            }
        }
        else {
            return null;
        }
    }
};
exports.ExcelparaserService = ExcelparaserService;
exports.ExcelparaserService = ExcelparaserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(supplier_entity_1.supplier)),
    __param(1, (0, typeorm_1.InjectRepository)(goodsservice_entity_1.goodsservice)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ExcelparaserService);
//# sourceMappingURL=excelparaser.service.js.map