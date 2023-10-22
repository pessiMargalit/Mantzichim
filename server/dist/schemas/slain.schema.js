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
exports.SlainSchema = exports.Slain = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let Slain = class Slain {
};
exports.Slain = Slain;
__decorate([
    (0, mongoose_1.Prop)({ type: String, trim: true }),
    __metadata("design:type", String)
], Slain.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], trim: true }),
    __metadata("design:type", Array)
], Slain.prototype, "masechtot_arr", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, trim: true }),
    __metadata("design:type", Boolean)
], Slain.prototype, "kadish", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, required: false }),
    __metadata("design:type", Object)
], Slain.prototype, "slain_id", void 0);
exports.Slain = Slain = __decorate([
    (0, mongoose_1.Schema)()
], Slain);
exports.SlainSchema = mongoose_1.SchemaFactory.createForClass(Slain);
//# sourceMappingURL=slain.schema.js.map