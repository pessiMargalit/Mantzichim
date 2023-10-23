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
exports.SlainController = void 0;
const common_1 = require("@nestjs/common");
const slain_service_1 = require("./slain.service");
const slain_dto_1 = require("../DTO/slain.dto");
let SlainController = class SlainController {
    constructor(slainService) {
        this.slainService = slainService;
    }
    async getSlainsByQuery(conditions) {
        if (Object.keys(conditions).length === 0) {
            return this.findAll();
        }
        const slains = await this.slainService.filterSlainsByQuery(conditions);
        return slains;
    }
    async findAll() {
        return this.slainService.findAll();
    }
    async create(slainData) {
        return this.slainService.create(slainData);
    }
    async add_masechtot(masechtot_arr) {
        return this.slainService.update_masechtot_for_slain(masechtot_arr);
    }
    async get_slain_name(data) {
        return this.slainService.get_slain_name(data);
    }
};
exports.SlainController = SlainController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SlainController.prototype, "getSlainsByQuery", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SlainController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [slain_dto_1.SlainDTO]),
    __metadata("design:returntype", Promise)
], SlainController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], SlainController.prototype, "add_masechtot", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SlainController.prototype, "get_slain_name", null);
exports.SlainController = SlainController = __decorate([
    (0, common_1.Controller)('slain'),
    __metadata("design:paramtypes", [slain_service_1.SlainService])
], SlainController);
//# sourceMappingURL=slain.controller.js.map