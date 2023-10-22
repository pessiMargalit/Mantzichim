"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlainModule = void 0;
const common_1 = require("@nestjs/common");
const slain_service_1 = require("./slain.service");
const mongoose_1 = require("@nestjs/mongoose");
const slain_schema_1 = require("../schemas/slain.schema");
const slain_controller_1 = require("./slain.controller");
let SlainModule = class SlainModule {
};
exports.SlainModule = SlainModule;
exports.SlainModule = SlainModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Slain', schema: slain_schema_1.SlainSchema }])
        ],
        providers: [slain_service_1.SlainService],
        controllers: [slain_controller_1.SlainController]
    })
], SlainModule);
//# sourceMappingURL=slain.module.js.map