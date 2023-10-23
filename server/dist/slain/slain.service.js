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
exports.SlainService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const slain_schema_1 = require("../schemas/slain.schema");
let SlainService = class SlainService {
    constructor(slainModel) {
        this.slainModel = slainModel;
    }
    async findAll() {
        return this.slainModel.find().exec();
    }
    async filterSlainsByQuery(query) {
        const conditions = Object.keys(query).filter((key) => query[key] !== "");
        return this.slainModel.find({
            "$and": conditions.map((condition) => ({ [condition]: query[condition] })),
        }).exec();
    }
    async create(slainData) {
        const newSlain = {
            name: slainData.name,
            masechtot_arr: slainData.masechtot_arr,
            kadish: slainData.kadish
        };
        const createdslain = new this.slainModel(newSlain);
        return createdslain.save();
    }
    async update_masechtot_for_slain(masechtot_arr) {
    }
    async get_slain_name(data) {
        let name_for_masechtot = "";
        let name_for_kadish = "";
        if (data.masechtot_arr.length != 0) {
            name_for_masechtot = "the name from the algorithem";
        }
        if (data.kadish == true) {
            name_for_kadish = "the name from the algorithem";
        }
        return {
            "name_for_masechtot": name_for_masechtot,
            "name_for_kadish": name_for_kadish
        };
    }
};
exports.SlainService = SlainService;
exports.SlainService = SlainService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(slain_schema_1.Slain.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], SlainService);
//# sourceMappingURL=slain.service.js.map