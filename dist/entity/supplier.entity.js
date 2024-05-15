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
Object.defineProperty(exports, "__esModule", { value: true });
exports.supplier = void 0;
const typeorm_1 = require("typeorm");
let supplier = class supplier {
};
exports.supplier = supplier;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], supplier.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', { precision: 15, scale: 2 }),
    __metadata("design:type", Number)
], supplier.prototype, "supplier_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], supplier.prototype, "supplier_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], supplier.prototype, "email_official", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], supplier.prototype, "website", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], supplier.prototype, "business_telephone", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], supplier.prototype, "mobile_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], supplier.prototype, "postal_address", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], supplier.prototype, "business_premise", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], supplier.prototype, "expire_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], supplier.prototype, "date_s", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], supplier.prototype, "signature", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', { precision: 15, scale: 2 }),
    __metadata("design:type", Number)
], supplier.prototype, "branch_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], supplier.prototype, "account_name", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', { precision: 15, scale: 2 }),
    __metadata("design:type", Number)
], supplier.prototype, "account_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], supplier.prototype, "trading_name", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', { precision: 15, scale: 2 }),
    __metadata("design:type", Number)
], supplier.prototype, "company_tin", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', { precision: 15, scale: 2 }),
    __metadata("design:type", Number)
], supplier.prototype, "number_employees_staff", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], supplier.prototype, "shareholder_first_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], supplier.prototype, "Shareholder_last_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], supplier.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], supplier.prototype, "contact_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], supplier.prototype, "business_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], supplier.prototype, "nationality", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], supplier.prototype, "business_location", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], supplier.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], supplier.prototype, "supplier_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], supplier.prototype, "application_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], supplier.prototype, "dg_approval", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], supplier.prototype, "bank_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], supplier.prototype, "account_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], supplier.prototype, "currency", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], supplier.prototype, "msme_type", void 0);
exports.supplier = supplier = __decorate([
    (0, typeorm_1.Entity)()
], supplier);
//# sourceMappingURL=supplier.entity.js.map